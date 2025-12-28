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


Notes:
The above endpoints are simulated; actual data is stored locally in Redux
Can be replaced with real backend API in future versions

---

### ✅ How to use these
1. Copy `developer-guide.md` and `api.md` into `docs/` folder in VS Code  
2. Save the files  
3. Push to GitHub:

```bash
git add docs/developer-guide.md docs/api.md
git commit -m "Add developer guide and API documentation"
git push
