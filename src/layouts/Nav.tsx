function Nav() {
  return (
    <nav className="app-nav" aria-label="Main navigation">
      <a className="nav-link" href="#">
        <span aria-hidden="true">🏠</span> Home
      </a>
      <a className="nav-link" href="#">
        <span aria-hidden="true">💼</span> Portfolio
      </a>
      <a className="nav-link active" href="#">
        <span aria-hidden="true">📷</span> Gallery
      </a>
      <a className="nav-link" href="#">
        <span aria-hidden="true">📩</span> Contact
      </a>
    </nav>
  );
}

export default Nav;
