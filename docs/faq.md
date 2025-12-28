# FAQ - Mini Mart

## Q1: The app does not start after running `npm start`
- **Solution:** Ensure Node.js (v16+) and npm are installed correctly.
- Check that port 3000 is free.
- If still failing, delete `node_modules` and run `npm install` again.

## Q2: Products are not displaying on homepage
- **Solution:** Make sure the `data/products.js` file exists.
- Verify that the `ProductCard` component is imported correctly.
- Check console for errors.

## Q3: Cart items reset on page refresh
- **Solution:** Cart state is currently stored in Redux in-memory state.
- Refreshing the page clears state because persistence (localStorage) is not implemented.

## Q4: Search does not return any results
- **Solution:** Confirm product names match search input.
- Check the `handleSearch` function in `Header.js`.

## Q5: Checkout page is blank or shows errors
- **Solution:** Ensure the cart items are being passed correctly to the checkout component.
- Verify that routing (`/checkout`) is set up properly in `App.js`.
