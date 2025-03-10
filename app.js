import "dotenv/config";
import express from "express";
import fetch from "node-fetch";

const app = express();
const port = process.env.PORT || 5000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

// Homepage route
app.get("/", (req, res) => {
  res.render("index", {
    corrected: "",
    originalText: "",
  });
});

// Grammar correction using LanguageTool API
app.post("/correct", async (req, res) => {
  const text = req.body.text?.trim();
  if (!text) {
    return res.render("index", {
      corrected: "Please enter some text to correct",
      originalText: text,
    });
  }

  try {
    const response = await fetch("https://api.languagetool.org/v2/check", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        text: text,
        language: "en-US"
      }).toString(),
    });

    if (!response.ok) {
      throw new Error("Error fetching data from LanguageTool API");
    }

    const data = await response.json();
    let correctedText = text;

    // Apply suggested corrections
    data.matches.forEach(match => {
      correctedText = correctedText.replace(match.context.text.substr(match.offset, match.length), match.replacements[0]?.value || match.context.text.substr(match.offset, match.length));
    });

    return res.render("index", {
      corrected: correctedText,
      originalText: text,
    });
  } catch (error) {
    console.error("Error:", error);
    return res.render("index", {
      corrected: "Error. Please try again.",
      originalText: text,
    });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
