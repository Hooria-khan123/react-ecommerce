import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Check,
  Heart,
  Menu,
  Moon,
  Plus,
  Search,
  ShoppingBag,
  Sun,
  X,
} from "lucide-react";
import { useShop } from "../context/ShopContext";
import { img } from "../utils/images";

export function Header() {
  const { count } = useShop();
  const [searchOpen, setSearchOpen] = useState(false),
    [menu, setMenu] = useState(false),
    [value, setValue] = useState(""),
    [theme, setTheme] = useState(
      () => localStorage.getItem("northstar-theme") || "light",
    );
  const nav = useNavigate();
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("northstar-theme", theme);
  }, [theme]);
  const submit = (e) => {
    e.preventDefault();
    nav(`/shop?q=${encodeURIComponent(value)}`);
    setSearchOpen(false);
    setMenu(false);
  };
  return (
    <>
      <div className="announcement">
        A little something extra: free shipping on orders over $100{" "}
        <ArrowRight size={13} />
      </div>
      <header className="header">
        <button
          className="icon mobile-menu"
          onClick={() => setMenu(!menu)}
          aria-label="Open menu"
        >
          {menu ? <X /> : <Menu />}
        </button>
        <Link to="/" className="brand">
          northstar<span>®</span>
        </Link>
        <nav className={menu ? "nav nav-open" : "nav"}>
          <NavLink to="/shop">Shop all</NavLink>
          <a href="/#story">Our story</a>
          <a href="/#journal">Journal</a>
        </nav>
        <div className="header-actions">
          <button
            className="icon theme-toggle"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            className="icon"
            onClick={() => setSearchOpen(!searchOpen)}
            aria-label="Search"
          >
            <Search size={19} />
          </button>
          <Link className="bag-link" to="/cart">
            <ShoppingBag size={19} />
            <span>Bag ({count})</span>
          </Link>
        </div>
      </header>
      {searchOpen && (
        <form className="search-bar" onSubmit={submit}>
          <Search size={18} />
          <input
            autoFocus
            placeholder="What are you looking for?"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button className="text-button">Search</button>
          <button
            type="button"
            className="icon"
            onClick={() => setSearchOpen(false)}
          >
            <X size={18} />
          </button>
        </form>
      )}
    </>
  );
}
export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div>
          <Link to="/" className="brand">
            northstar<span>®</span>
          </Link>
          <p>
            Thoughtful essentials for
            <br />a life well lived.
          </p>
        </div>
        <div className="footer-col">
          <b>Explore</b>
          <Link to="/shop">Shop all</Link>
          <a href="/#story">Our story</a>
          <a href="/#journal">Journal</a>
        </div>
        <div className="footer-col">
          <b>Need a hand?</b>
          <a href="mailto:hello@northstar.shop">Get in touch</a>
          <a href="/shipping">Shipping & returns</a>
          <a href="/faq">FAQs</a>
        </div>
        <div className="newsletter">
          <b>A good thing in your inbox.</b>
          <p>New things, good stories, and 10% off your first order.</p>
          <Newsletter />
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2025 Northstar Goods Co.</span>
        <span>Made with intention, wherever you are.</span>
        <span>Instagram&nbsp;&nbsp; Pinterest</span>
      </div>
    </footer>
  );
}
function Newsletter() {
  const [email, setEmail] = useState(""),
    [done, setDone] = useState(false);
  return done ? (
    <p className="success-line">
      <Check size={16} /> You’re on the list. Welcome.
    </p>
  ) : (
    <form
      className="newsletter-form"
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
    >
      <input
        type="email"
        required
        placeholder="Your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button aria-label="Subscribe">
        <ArrowRight size={17} />
      </button>
    </form>
  );
}
export function ProductCard({ product, index = 0 }) {
  const { add, saved, toggle } = useShop();
  const navigate = useNavigate();
  const [added, setAdded] = useState(false);
  return (
    <article
      className="product-card"
      style={{ "--delay": `${index * 0.06}s` }}
      onClick={(event) => {
        if (!event.target.closest("button, a")) navigate(`/product/${product.id}`);
      }}
      onKeyDown={(event) => {
        if (event.target === event.currentTarget && (event.key === "Enter" || event.key === " ")) {
          event.preventDefault();
          navigate(`/product/${product.id}`);
        }
      }}
      tabIndex={0}
      aria-label={`View ${product.name} details`}
    >
      <div className="product-image-wrap">
        <Link to={`/product/${product.id}`} className="product-image">
          <img src={img(product.image)} alt={product.name} />
        </Link>
        {product.tag && <span className="product-tag">{product.tag}</span>}
        <button
          className={saved.includes(product.id) ? "wish active" : "wish"}
          aria-label="Save to wishlist"
          onClick={(event) => { event.stopPropagation(); toggle(product.id); }}
        >
          <Heart
            size={17}
            fill={saved.includes(product.id) ? "currentColor" : "none"}
          />
        </button>
        <button
          className="quick-add"
          onClick={(event) => {
            event.stopPropagation();
            add(product);
            setAdded(true);
            setTimeout(() => setAdded(false), 1400);
          }}
        >
          {added ? (
            <>
              <Check size={15} /> Added to bag
            </>
          ) : (
            <>
              Quick add <Plus size={15} />
            </>
          )}
        </button>
      </div>
      <div className="product-meta">
        <div>
          <Link to={`/product/${product.id}`} className="product-name">
            {product.name}
          </Link>
          <span className="product-color">{product.color}</span>
        </div>
        <span className="price">${product.price}</span>
      </div>
      <div className="rating">
        <span>★★★★★</span> {product.rating} <i>({product.reviews})</i>
      </div>
    </article>
  );
}
