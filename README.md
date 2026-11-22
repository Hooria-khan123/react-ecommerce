# 🛒 Northstar: React E-Commerce Storefront

A clean, modern, **frontend-only** e-commerce web app built with React. Browse products, search and filter, save favourites, manage a shopping bag, and go through a complete checkout flow, all without a backend.


---

## ✨ Features

**Shopping**
- Home page with hero section, featured products, brand story and promise sections
- Shop page with **category tabs** (All, Bags, Home, Wear, Objects)
- **Search** products by name, category or colour (header search bar and shop page search)
- **Sorting**: Featured, Top rated, Price low to high, Price high to low
- Product detail page with description, colour swatches, quantity selector, rating and "You may also love" suggestions
- **Wishlist**: save or unsave products with the heart icon

**Cart and Checkout**
- Add to bag from the product card (Quick add) or the product page
- Increase, decrease or remove items in the bag
- Live subtotal, shipping and total calculation
- **Free shipping over $100** with a progress message (otherwise a flat $8 shipping fee)
- Checkout form with **validation** (email format, required fields, card number and security code checks)
- Payment options: Credit card or PayPal (UI only, no real payment is processed)
- Order confirmation page with a generated order number

**Experience**
- 🌗 **Light / Dark theme** toggle (remembered between visits)
- 💾 Cart, wishlist and theme are **saved in the browser** (`localStorage`), so they survive a page refresh
- 📱 Responsive layout with a mobile menu
- Newsletter signup (UI only)
- Custom "page not found" screen

---

## 🛠️ Tech Stack

| Purpose | Technology |
|---|---|
| UI library | [React](https://react.dev/) |
| Routing | [React Router](https://reactrouter.com/) (`react-router-dom`) |
| Icons | [Lucide React](https://lucide.dev/) |
| State management | React Context API (`ShopContext`) |
| Styling | Plain CSS (`style.css`) |
| Build tool | Vite |
| Images | [Unsplash](https://unsplash.com/) (loaded via URL) |

---

## 📁 Project Structure

```
react-ecommerce/
├── index.html
├── package.json
├── package-lock.json
└── src/
    ├── main.jsx                 # App entry point
    ├── App.jsx                  # Routes and providers
    ├── style.css                # All styles
    ├── components/
    │   └── Storefront.jsx       # Header, Footer, Newsletter, ProductCard
    ├── context/
    │   └── ShopContext.jsx      # Cart, wishlist and totals (global state)
    ├── data/
    │   └── products.js          # Product catalogue
    ├── pages/
    │   ├── Home.jsx
    │   ├── Shop.jsx
    │   ├── ProductDetail.jsx
    │   ├── Cart.jsx
    │   ├── Checkout.jsx
    │   └── Confirmation.jsx
    └── utils/
        └── images.js            # Image URL helper
```

---

## 🧭 Pages and Routes

| Route | Page |
|---|---|
| `/` | Home |
| `/shop` | Shop all products (supports `?q=search` and `?category=Bags`) |
| `/product/:id` | Product details |
| `/cart` | Shopping bag |
| `/checkout` | Checkout |
| `/order-confirmation` | Order confirmation |
| `*` | Page not found |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Hooria-khan123/react-ecommerce
   ```

2. **Go into the project folder**
   ```bash
   cd react-ecommerce
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open the app** in your browser at the address shown in the terminal (usually `http://localhost:5173`).

> Note: product images load from Unsplash, so an internet connection is needed to see them.

### Build for production

```bash
npm run build
```

The optimized files are created in the `dist/` folder. To preview the production build locally:

```bash
npm run preview
```
---

## ⚠️ Notes

- This is a **demo project**. There is no backend or database, and **no real payments** are processed. Please do not enter real card details.
- Products are stored in `src/data/products.js`. To add or edit products, change that file.
- Cart, wishlist and theme preferences are stored in your browser's `localStorage`.

---

## 🔮 Future Improvements

- User accounts and login
- Backend API and database for products and orders
- Real payment gateway integration
- Product reviews and ratings from users
- Order history

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -m "Add my feature"`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Open a Pull Request

---

## 👤 Author

**HOoria khan**
- GitHub: [hooria-khan123](https://github.com/hooria-khan123)