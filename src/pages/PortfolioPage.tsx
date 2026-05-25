// Import Page Partials From layouts
import Header from "../layouts/Header";
import Nav from "../layouts/Nav";
import Sidebar from "../layouts/Sidebar";
import Footer from "../layouts/Footer";
// Import Components
import Welcome from "../components/Welcome";

function PortfolioPage() {
  return (
    <div className="app-shell">
      <Header />
      <Nav />
      <main className="app-main">
        <Welcome
          title="Portfolio Page"
          description="Content for Portfolio page with an icon-based heading."
          icon="💼"
        />
        <Sidebar />
      </main>
      <Footer />
    </div>
  );
}

export default PortfolioPage();
