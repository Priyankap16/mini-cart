# Developer Guide

## Project Overview
The Mini Mart is a React.js-based e-commerce web application. It demonstrates component-based architecture, state management using Redux Toolkit, routing with React Router, and frontend-only mock data for products.

## Project Structure
src/
├── components/
│   ├── Header.js         # App header with search and cart
│   ├── ProductCard.js    # Displays product info
│   └── CartItem.js       # Displays items in the cart
├── pages/
│   ├── Home.js           # Product listing page
│   ├── Cart.js           # Cart page
│   └── Checkout.js       # Checkout page
├── redux/
│   └── cartSlice.js      # Redux slice for cart state
├── data/
│   └── products.js       # Mock product data
├── App.js                # Main app component with routes
└── index.js              # Entry point



## State Management
- **Cart State**: Managed using Redux Toolkit
  - Actions: `addToCart`, `removeFromCart`
  - State persists while app is running
- **Product Data**: Stored locally in `data/products.js`

## Routing
- React Router handles navigation between:
  - `/` → Home
  - `/cart` → Cart Page
  - `/checkout` → Checkout Page

## Component Details
- **ProductCard**: Displays product image, name, price, and "Add to Cart" button
- **CartItem**: Displays cart item details with quantity and remove button
- **Header**: Includes search bar and cart icon

## Notes for Developers
- Ensure Redux store is wrapped in `<Provider>` in `index.js`
- Mock data can be replaced with backend API endpoints
- All styling is CSS-based; feel free to switch to Tailwind if preferred


