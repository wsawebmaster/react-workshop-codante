import { Home } from "lucide-react";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-emerald-500 text-white p-4 z-10 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Home className="h-6 w-6" />
          <span className="text-xl font-bold"><a href="#hero">ReactImóveis</a></span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;