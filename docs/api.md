# API Documentation (Mock)

This application uses mock data for products. Below is the simulated API structure for documentation purposes.

## GET /api/products
**Description:** Returns the list of products

**Response Example:**
```json
[
  {
    "id": 1,
    "title": "Wireless Headphones",
    "price": 99.99,
    "image": "https://example.com/images/headphones.jpg"
  },
  {
    "id": 2,
    "title": "Smart Watch",
    "price": 199.99,
    "image": "https://example.com/images/watch.jpg"
  }
]

POST /api/cart

Description: Adds a product to the cart

Request Example:

{
  "productId": 1,
  "quantity": 1
}


Response Example:

{
  "success": true,
  "cartItem": {
    "id": 1,
    "title": "Wireless Headphones",
    "quantity": 1,
    "price": 99.99
  }
}

DELETE /api/cart/:id

Description: Removes a product from the cart

Response Example:

{
  "success": true,
  "removedItemId": 1
}




