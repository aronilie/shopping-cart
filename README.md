# Allfunds Shop

**Description:**  
This README provides essential information about the Shopping App designed for users to browse and purchase products. The app includes a product catalog, a shopping cart functionality, and product filtering options.

## Install and Run the App

To install and run the app, follow these steps:

1. Install all dependencies:

   ```bash
   npm install
   ```

2. Run the app:
   ```bash
   npm run dev
   ```

## Functionality

- **Products List Page**: Displays a list of products limited to 150.
- **Set as favourite**: Users can mark a product as their favourite.
- **Filters**: Users can filter the products with price and favorite options.
- **Cart**: Allows users to review, modify, and manage selected products before proceeding to checkout.

## Features & Performance

**Efficient Data Loading**: Data is loaded dynamically, triggered only when there is a change in the product database. This approach ensures optimal performance by minimizing unnecessary data transfers and loading times, resulting in a more responsive and resource-efficient application.

**Persistent User Data**: User data, including favorites and cart contents, is seamlessly saved between refreshes using local storage. This feature enhances user convenience, allowing them to resume their shopping experience seamlessly even after closing or refreshing the app.

**Custom Hooks**: Utilizes custom hooks to manage application data and state.

**Minimal Rerendering**: Prevents unnecessary component re-renders for improved performance.

**Responsive Design**: The application is designed to be fully responsive, ensuring a seamless experience on various screen sizes and devices.

## Tests

The application has been thoroughly tested with Jest and React Testing Library. To run the tests, use the following command:

```bash
  npm run test
```

## Third Party Libraries

To maintain simplicity and streamline the development process, the application minimally relies on third-party libraries:

- **React**: The core library for building the user interface, providing a declarative and efficient way to design interactive components.
- **Styled Components**: Used for styling, allowing for efficient and maintainable CSS-in-JS.
- **Jest and React Testing Library**: For testing purposes, the application utilizes Jest and React Testing Library.

## Important Note on Requests

Due to CORS (Cross-Origin Resource Sharing) constraints, the application faced limitations in utilizing PATCH requests. Consequently, to address this challenge, PUT requests were employed as an alternative.


