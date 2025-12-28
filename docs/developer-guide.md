# Developer Guide

## Project Overview
The Mini Mart is a React.js-based e-commerce web application. It demonstrates component-based architecture, state management using Redux Toolkit, routing with React Router, and frontend-only mock data for products.

## Project Structure
src/

├── components/ # Reusable UI components (ProductCard, CartItem, Header)

├── pages/ # Page-level components (Home, Cart, Checkout)

├── redux/ # Redux store & slices for cart management

├── data/ # Mock product data (JSON)

├── App.js # Main app component with routes

└── index.js # Entry point



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


