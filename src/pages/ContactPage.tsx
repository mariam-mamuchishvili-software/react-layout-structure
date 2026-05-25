// Import Page Partials From layouts
import Header from "../layouts/Header";
import Nav from "../layouts/Nav";
import Sidebar from "../layouts/Sidebar";
import Footer from "../layouts/Footer";
// Import Components
import Welcome from "../components/Welcome";

function ContactPage() {
  return (
    <div className="app-shell">
      <Header />
      <Nav />
      <main className="app-main">
        <Welcome
          title="Contact Page"
          description="Content for Contact page with an envelope symbol."
          icon="📩"
        />
        <Sidebar />
      </main>
      <Footer />
    </div>
  );
}
export default ContactPage;
