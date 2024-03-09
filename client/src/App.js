import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Commercial from "./pages/Commercial";
import Main from "./pages/Main";
import Product from "./pages/Product";
import Residential from "./pages/Residential";
import ReviewsPage from "./pages/ReviewsPage";
import Visualizer from "./pages/Visualizer";
import Contact from "./pages/Contact";
import GoogleMaps from "./pages/GoogleMaps";
import About from "./pages/About";
import Blog from "./pages/Blog";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/product" element={<Product />} />
        <Route path="/design-visualizer" element={<Visualizer />} />
        <Route path="/residential" element={<Residential />} />
        <Route path="/commercial" element={<Commercial />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/map" element={<GoogleMaps />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
