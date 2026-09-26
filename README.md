# Paradise Nursery 🌿

Paradise Nursery is a dynamic, front-end shopping cart web application built for an online plant shop. It lets customers browse a curated catalog of houseplants, view details like images, names, descriptions, and prices, add items to a shopping cart, and manage their cart in real time — adjusting quantities, removing items, and seeing the total cost update instantly.

This project was built as a final project to apply core front-end development skills: component-based UI design, interactive state management, dynamic rendering, and building a cohesive, user-friendly e-commerce experience from scratch.

## Live Demo

🔗 *Add your deployed app URL here (e.g. Netlify, Vercel, or GitHub Pages link)*

## Features

- **Landing Page** — An inviting introduction to Paradise Nursery with brand messaging and a call-to-action to start shopping.
- **Product Listing Page** — Plants organized into categories (e.g. Air Purifying, Aromatic & Fragrant, Pet-Friendly), each displayed with an image, name, description, and price.
- **Add to Cart** — Every product card includes an "Add to Cart" button that adds the item to the cart and updates the cart icon count in the navigation bar.
- **Shopping Cart Page** — A dedicated cart view listing all selected items with:
  - Quantity controls (increase/decrease per item)
  - Per-item subtotal calculation
  - Remove-item functionality
  - A running order summary with subtotal, shipping, and total cost
- **Dynamic Navigation Bar** — Displays the live count of items in the cart and provides quick navigation between the landing page, product listing, and cart.
- **Responsive Design** — The layout adapts cleanly across desktop, tablet, and mobile screen sizes.

## How It Works

1. Visitors land on the **Home** page and click through to **Shop**.
2. On the **Product Listing** page, they browse plants by category and click **Add to Cart** on any item they like. The button transforms into a quantity stepper so they can adjust how many they want directly from the listing.
3. The **cart icon** in the navigation bar updates immediately to reflect the total number of items added.
4. Clicking the cart icon opens the **Cart** page, where customers can review their selections, increase or decrease quantities, remove items, and see the order subtotal, shipping, and total recalculate automatically.
5. From the cart, customers can continue shopping or proceed to checkout.

## Tech Stack

- **HTML5** — Semantic page structure
- **CSS3** — Custom styling, responsive layout, and theming
- **JavaScript** — Dynamic rendering, state management, and interactivity (cart logic, quantity updates, total calculations)

> *If your implementation uses React, update this section to reflect that — e.g. "Built with React using functional components and Hooks (`useState`) to manage cart state across the Product Listing and Cart pages."*

## Project Structure

```
paradise-nursery/
├── index.html          # Main HTML entry point
├── style.css           # Application styling
├── script.js           # Cart logic and interactivity
├── assets/             # Plant images and icons
└── README.md           # Project documentation
```

> *Update this structure to match your actual repo layout (e.g. if using React, replace with `src/components/`, `src/App.js`, etc.).*

## Getting Started

### Prerequisites
- A modern web browser
- (If applicable) [Node.js](https://nodejs.org/) and npm installed

### Installation

```bash
# Clone the repository
git clone https://github.com/hilar47/-paradise-nursery.git

# Navigate into the project folder
cd -paradise-nursery

# If using a build tool like React/Vite/CRA:
npm install
npm start
```

If the project is plain HTML/CSS/JS, simply open `index.html` in your browser.

## Project Goals

This project was built to demonstrate the ability to:
- Structure a multi-page, interactive web application
- Manage and update application state dynamically (cart contents, quantities, totals)
- Build reusable UI components (product cards, cart items, navigation)
- Create a clean, intuitive user experience for a real-world e-commerce use case

## Author

**Hilar** — [github.com/hilar47](https://github.com/hilar47)
