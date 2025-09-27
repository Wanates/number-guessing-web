# 🎯 Number Guessing Game

A simple **number guessing game** built with **React Native** and **Expo**, designed to run on **web** using `pnpm`.  
The player tries to guess a randomly generated number between 0 and 100.

---

## 🚀 Features

- Random number generation (0–100)
- Input validation (only numbers, within valid range)
- Feedback messages:
  - Correct guess 🎉
  - Try higher / lower
- Attempt counter
- Reset game functionality
- Clean UI with React Native components

---

## 🛠️ Tech Stack

- [Expo](https://expo.dev/)  
- [React Native](https://reactnative.dev/)  
- [React Native Web](https://necolas.github.io/react-native-web/)  
- [pnpm](https://pnpm.io/)  

---

## 📂 Project Structure

number-guessing-web/
├── App.tsx # Main game logic
├── app/ # Expo Router entry (index.tsx → App.tsx)
├── app.json # Expo configuration
├── package.json # Dependencies
└── ...

yaml
Copy code

---

## ▶️ Run Locally

1. Clone the repo:

   ```bash
   git clone https://github.com/<your-username>/number-guessing-web.git
   cd number-guessing-web

Install dependencies:

bash
Copy code
pnpm install
Start the app:

bash
Copy code
pnpm run web
