import { Home, Mail, Phone } from "lucide-react";

function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-emerald-500 text-white px-4 py-1">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <Home className="h-6 w-6" />
          <span className="text-xl font-bold">ReactImóveis</span>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="flex items-center space-x-2 hover:underline">
            <Mail className="h-4 w-4" />
            <span><a href="#">contato@reactimoveis.com</a></span>
          </a>
          <a href="#" className="flex items-center space-x-2 hover:underline">
            <Phone className="h-4 w-4" />
            <span><a href="tel:(11) 98247-0496">+55 (11) 98247-0496</a></span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;