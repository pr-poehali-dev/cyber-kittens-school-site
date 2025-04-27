
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-purple-600">КиберКотята</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-purple-600 transition-colors">Главная</a>
            <a href="/courses" className="text-gray-700 hover:text-purple-600 transition-colors">Курсы</a>
            <a href="/teachers" className="text-gray-700 hover:text-purple-600 transition-colors">Преподаватели</a>
            <a href="/about" className="text-gray-700 hover:text-purple-600 transition-colors">О нас</a>
            <Button className="bg-purple-600 hover:bg-purple-700">Записаться</Button>
          </div>
          
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-3 space-y-3">
            <a href="/" className="block text-gray-700 hover:text-purple-600 transition-colors py-2">Главная</a>
            <a href="/courses" className="block text-gray-700 hover:text-purple-600 transition-colors py-2">Курсы</a>
            <a href="/teachers" className="block text-gray-700 hover:text-purple-600 transition-colors py-2">Преподаватели</a>
            <a href="/about" className="block text-gray-700 hover:text-purple-600 transition-colors py-2">О нас</a>
            <Button className="w-full bg-purple-600 hover:bg-purple-700">Записаться</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavigationBar;
