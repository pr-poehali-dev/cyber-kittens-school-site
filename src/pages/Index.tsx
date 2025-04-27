
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import HeroSection from "@/components/HeroSection";
import CourseCard from "@/components/CourseCard";
import CatGallery from "@/components/CatGallery";
import NavigationBar from "@/components/NavigationBar";

const Index = () => {
  const courses = [
    {
      id: 1,
      title: "Программирование для начинающих",
      description: "Научитесь основам программирования вместе с игривыми котятами!",
      level: "Начинающий",
      imageUrl: "https://images.unsplash.com/photo-1583324113626-70df0f4deaab?auto=format&fit=crop&q=80&w=500",
    },
    {
      id: 2,
      title: "Кибербезопасность",
      description: "Защищайте данные так же ловко, как котята защищают свои игрушки!",
      level: "Средний",
      imageUrl: "https://images.unsplash.com/photo-1615796153287-98eacf0abb13?auto=format&fit=crop&q=80&w=500",
    },
    {
      id: 3,
      title: "Разработка игр",
      description: "Создавайте игры с такой же энергией, какая есть у котят!",
      level: "Продвинутый",
      imageUrl: "https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?auto=format&fit=crop&q=80&w=500",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <NavigationBar />
      
      <HeroSection />
      
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-12">Наши популярные курсы</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Просмотреть все курсы
          </Button>
        </div>
      </div>
      
      <div className="bg-purple-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Наши преподаватели-котята</h2>
          <CatGallery />
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Почему выбирают нашу Кибер-школу</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-3">Обучение с котятами</h3>
              <p className="text-gray-600">Каждый урок сопровождается милыми котятами, которые помогают усваивать материал легче и веселее!</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-3">Современные технологии</h3>
              <p className="text-gray-600">Обучение актуальным навыкам и технологиям, которые необходимы в современном цифровом мире.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-3">Интерактивные занятия</h3>
              <p className="text-gray-600">Увлекательные задания и проекты, которые помогают закрепить изученный материал на практике.</p>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Кибер-школа с котятами. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
