import Navbar from "./components/navbar";
import Hero from "./components/hero";
import FeaturedProperties from "./components/featured-properties";
import ContactForm from "./components/contact-form";
import Footer from "./components/footer";
import { PropertiesProvider } from "./providers/property-provider";

export default function App() {
  return (
    <PropertiesProvider>
      <div>
        <Navbar />
        <Hero />
        <FeaturedProperties />
        <ContactForm />
        <Footer />
      </div>
    </PropertiesProvider>
  );
}