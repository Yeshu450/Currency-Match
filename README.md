
# 💱 Currency Match

**Currency Match** is a simple, real-time currency converter web application built with **React**. It allows users to convert any amount between two selected currencies using the latest exchange rates from the **Currency API**.

🌐 Live Demo: [Currency-Match](https://currency-match.vercel.app)

---

## ✨ Features

- 🔄 Live exchange rate conversion
- 🌍 Supports global currencies
- 🎯 User-friendly dropdowns for currency selection
- 💡 Auto disables input for the converted field
- 📱 Responsive and clean UI
- 🚀 Hosted on Vercel

---

## 🛠️ Technologies Used

- React (Hooks)
- JavaScript (ES6)
- HTML5 & CSS3
- Fawaz Ahmed Currency API
- Vercel (Deployment)

---

## 📁 Folder Structure

```
currency-match/
├── public/
│   └── index.html
├── src/
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── .gitignore
├── package.json
└── README.md
```

---

## 🚀 How to Run Locally

1. **Clone the repository**:
```bash
git clone https://github.com/your-username/currency-match.git
cd currency-match
```

2. **Install dependencies**:
```bash
npm install
```

3. **Run the development server**:
```bash
npm run dev
```

4. Visit in browser:
```
http://localhost:5173/
```

---

## 🔗 API Used

**[Fawaz Ahmed Currency API](https://github.com/fawazahmed0/currency-api)**

- Latest currency rates are fetched in JSON format.
- Example API call for conversion:
  ```
  https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/inr.json
  ```

---

## 📸 UI Overview

- Two input fields for amount and currency (`FROM`, `TO`)
- Select dropdowns dynamically populated from API
- `Calculate` button triggers conversion logic
- Footer with copyright

---

## 📄 License

This project is open-source and available under the **MIT License**.

---

## 👤 Author

**Yeswanth Kumar Rallapilla**  
GitHub: [yeshu450](https://github.com/yeshu450)


---

**Currency Match** — Simple, Fast & Reliable 💸
