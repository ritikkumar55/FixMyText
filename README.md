# FixMyText - AI-Powered Grammar Correction App

## 📌 Project Overview
FixMyText is an AI-powered grammar correction web application that helps users improve their writing by detecting and fixing grammatical errors. This project utilizes the **LanguageTool API**, a free alternative to OpenAI, to analyze and suggest corrections for text input. Built with **Node.js, Express.js, and EJS**, FixMyText provides a simple and interactive interface for real-time grammar correction.

## 🚀 Features
- 📝 **Real-time Grammar Correction**: Detects and fixes grammatical errors instantly.
- 🔥 **Free & Fast API**: Uses **LanguageTool API** for grammar checking.
- 🎨 **User-friendly Interface**: Built with **EJS** for dynamic rendering.
- 📡 **Backend with Express.js**: Lightweight and fast Node.js server.

## 🏗️ Tech Stack
- **Frontend**: HTML, CSS, EJS (for templating)
- **Backend**: Node.js, Express.js
- **API**: LanguageTool API
- **Environment Management**: dotenv

## 📂 Project Structure
```
FixMyText/
│── views/                  # EJS templates
│   ├── index.ejs           # Main UI page
│── public/                 # Static files (CSS, JS, images)
│── app.js                  # Main server file
│── package.json            # Project dependencies
│── .env                    # API keys and environment variables
│── README.md               # Project documentation
```

## 🛠️ Setup & Installation
### 1️⃣ Clone the repository
```sh
 git clone https://github.com/ritikkumar55/FixMyText.git
 cd FixMyText
```
### 2️⃣ Install dependencies
```sh
npm install
```
### 3️⃣ Set up environment variables
Create a `.env` file in the project root and add:
```sh
LANGUAGETOOL_API=https://api.languagetool.org/v2/check
```

### 4️⃣ Run the application
```sh
node app.js
```
Then, open **http://localhost:5000/** in your browser.

## 🖥️ Usage
1. Enter text in the input field.
2. Click the **"Correct My Text"** button.
3. View the corrected text and suggestions.

## 📌 API Reference
The app uses the **LanguageTool API** for grammar checking.
- **Endpoint**: `https://api.languagetool.org/v2/check`
- **Method**: POST
- **Parameters**: `text`, `language`

## 📜 License
This project is open-source and available under the **MIT License**.

---
### ✨ Contributing
Feel free to **fork** this project, open issues, and submit pull requests to improve FixMyText!

## 📬 Contact
For any questions or collaborations, reach out to:
📧 **hrithik21sgh@gmail.com**  
🔗 **[Your GitHub Profile](https://github.com/ritikkumar55)**


