function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">E-Commerce Store</h2>

      <ul className="nav-links">
        <li>Home</li>
        <li>Shop</li>
        <li>Categories</li>
        <li>Contact</li>
      </ul>

      <button className="login-btn">Login</button>
    </nav>
  );
}

export default Navbar;