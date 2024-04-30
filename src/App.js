import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import BannerHome from "./pages/BannerHome";
import Card from "./pages/Card";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full overflow-hidden">
    <Navbar />
    <Home />
    <Card />
    <BannerHome/>
    <Footer />
    </div>
  );
}

export default App;
