// Import Page Partials From layouts
import Header from "../layouts/Header";
import Nav from "../layouts/Nav";
import Sidebar from "../layouts/Sidebar";
import Footer from "../layouts/Footer";
// Import Components
import Welcome from "../components/Welcome";

function HomePage() {
  return (
    <div className="app-shell">
      <Header />
      <Nav />
      <main className="app-main">
        <Welcome
          title="Home Page"
          description="Content for Home page with a simple icon-based title block."
          icon="🏠"
        />
        <Sidebar />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
