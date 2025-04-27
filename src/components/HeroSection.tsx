
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-purple-600 to-blue-500 text-white py-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-0 h-full w-1/2 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?auto=format&fit=crop&q=80&w=800" 
            alt="Котенок фон" 
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Кибер-школа с котятами
          </h1>
          <p className="text-xl mb-8">
            Изучайте программирование, кибербезопасность и цифровые технологии в компании милых котят. Наша уникальная методика сделает обучение увлекательным и эффективным!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              Начать обучение
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
              Узнать больше
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
