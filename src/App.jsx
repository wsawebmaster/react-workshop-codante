import Navbar from "./components/navbar";
import Hero from "./components/hero";
import FeaturedProperties from "./components/featured-properties";
import ContactForm from "./components/contact-form";
import Footer from "./components/footer";

const properties = [
  {
    id: 1,
    name: "Apartamento Moderno",
    description: "Um belo apartamento moderno no centro da cidade",
    location: "Centro",
    price: 250000,
    image: "/assets/properties/1.png",
    featured: true,
  },
  {
    id: 2,
    name: "Vila na Praia",
    description: "Vila luxuosa com vista deslumbrante para o oceano",
    location: "Área Costeira",
    price: 750000,
    image: "/assets/properties/2.png",
    featured: true,
  },
  {
    id: 3,
    name: "Casa de Campo",
    description: "Espaçosa casa familiar com um grande quintal",
    location: "Interior",
    price: 450000,
    image: "/assets/properties/3.png",
    featured: false,
  },
];

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeaturedProperties properties={properties} />
      <ContactForm />
      <Footer />
    </div>
  );
}