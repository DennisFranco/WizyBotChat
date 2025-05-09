# 🧠 Wizybot Chat Interface – Frontend Developer Technical Test

This project is a frontend implementation of a customer support chat interface using **React**, **TypeScript**, and **Tailwind CSS**. It simulates a conversation between a user and an AI assistant, and includes:

* A clean, responsive UI with a custom chat header
* Support for user and bot messages, with timestamps and typing animation
* A product recommendation carousel fetched from a public API
* A scrollable chat window that auto-scrolls to the latest message
* Component structure based on Atomic Design (atoms, molecules, organisms)

## 🚀 Tech Stack

* React 19
* TypeScript
* Tailwind CSS
* Lucide Icons
* Atomic Design methodology

## 📁 Folder Structure

src/
├── components/
│   ├── atoms/            # Basic UI elements (e.g., MessageBubble)
│   ├── molecules/        # Combined elements (e.g., ChatInput, ProductCard)
│   └── organisms/        # Complex UI blocks (e.g., ChatWindow, ProductCarousel)
├── services/             # API integrations
├── types/                # Shared TypeScript types
├── utils/                # Helper functions (e.g., random responses)
├── App.tsx               # Root component
└── index.tsx             # React DOM entry point

## 🛠️ How to Run the Project

Follow these steps in a terminal from the root directory of this repository.

1. Clone the repository:

```bash
git clone https://github.com/your-username/wizybot-chat-interface.git
cd wizybot-chat-interface
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

The app will be available at [http://localhost:3000](http://localhost:3000)

## 🧪 Testing the Features

* Send a message like `I want product recommendations` to trigger the product carousel.
* Watch the typing animation simulate a real response.
* Scrollbars appear and remain visible to improve UX.
* The chat auto-scrolls to the latest message every time.

## 📸 Screenshots

You may include screenshots or a demo video here if needed.

## 📦 Available Scripts

* `npm start`: Runs the app in development mode
* `npm run build`: Builds the app for production
* `npm test`: Runs tests (not implemented)

## 📌 Notes

* No CSS frameworks were used other than Tailwind CSS.
* Component names, props, and comments are written in English as required.
* This project follows clean coding standards and a modular structure.

## 👨‍💻 Author

**Dennis Ary Franco Molina**
Frontend Developer – Technical Assessment for Wizybot
GitHub: [https://github.com/your-username](https://github.com/your-username)

