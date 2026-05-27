// Import Page Partials From layouts
import Header from "../layouts/Header";
import Nav from "../layouts/Nav";
import Sidebar from "../layouts/Sidebar";
import Footer from "../layouts/Footer";
// Import Components
import ProductCard from "../components/Product";

import Database from "../storage/database";

const { products } = Database;
function HomePage() {
  return (
    <div className="app-shell">
      <Header />
      <Nav />

      <main className="app-main">
        <section className="app-content">
          <div className="wrapper" data-content="products">
            <div className="container">
              <header className="headers">
                <h1 className="section-title">
                  <span className="title-plain">Products</span>
                  <span className="title-sep">/</span>
                  <span className="category">Beauty</span>
                </h1>
              </header>

              <div className="row" data-block="row" data-category="beauty">
                {products.map((product) => (
                  <div key={product.id} className="col" data-category="beauty">
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Sidebar />
      </main>

      <Footer />
    </div>
  );
}

export default HomePage;
