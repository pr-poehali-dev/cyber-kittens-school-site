
import { useState } from "react";
import NavigationBar from "@/components/NavigationBar";
import CourseCard from "@/components/CourseCard";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [levelFilter, setLevelFilter] = useState("all");

  const courses = [
    {
      id: 1,
      title: "Программирование для начинающих",
      description: "Научитесь основам программирования вместе с игривыми котятами!",
      level: "Начинающий",
      imageUrl: "https://images.unsplash.com/photo-1583324113626-70df0f4deaab?auto=format&fit=crop&q=80&w=500",
      category: "programming"
    },
    {
      id: 2,
      title: "Кибербезопасность",
      description: "Защищайте данные так же ловко, как котята защищают свои игрушки!",
      level: "Средний",
      imageUrl: "https://images.unsplash.com/photo-1615796153287-98eacf0abb13?auto=format&fit=crop&q=80&w=500",
      category: "security"
    },
    {
      id: 3,
      title: "Разработка игр",
      description: "Создавайте игры с такой же энергией, какая есть у котят!",
      level: "Продвинутый",
      imageUrl: "https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?auto=format&fit=crop&q=80&w=500",
      category: "development"
    },
    {
      id: 4,
      title: "Веб-разработка",
      description: "Постройте современные сайты с котятами-экспертами по CSS!",
      level: "Средний",
      imageUrl: "https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?auto=format&fit=crop&q=80&w=500",
      category: "development"
    },
    {
      id: 5,
      title: "Алгоритмы и структуры данных",
      description: "Изучите алгоритмы так же быстро, как котята учатся ловить мышей!",
      level: "Продвинутый",
      imageUrl: "https://images.unsplash.com/photo-1580784355694-0d5295dcc007?auto=format&fit=crop&q=80&w=500",
      category: "programming"
    },
    {
      id: 6,
      title: "Основы сетевых технологий",
      description: "Разберитесь в сетях так же хорошо, как котята знают свою территорию!",
      level: "Начинающий",
      imageUrl: "https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?auto=format&fit=crop&q=80&w=500",
      category: "security"
    },
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          course.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLevel = levelFilter === "all" || course.level === levelFilter;
    return matchesSearch && matchesLevel;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <NavigationBar />
      
      <div className="bg-purple-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Наши Курсы</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Выбирайте из нашей коллекции курсов, разработанных специально для юных любителей технологий.
            Каждый курс включает интерактивные задания с котятами!
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="col-span-2">
              <Input
                placeholder="Поиск курсов..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full"
              />
            </div>
            <div>
              <Select value={levelFilter} onValueChange={setLevelFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Выберите уровень" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все уровни</SelectItem>
                  <SelectItem value="Начинающий">Начинающий</SelectItem>
                  <SelectItem value="Средний">Средний</SelectItem>
                  <SelectItem value="Продвинутый">Продвинутый</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <Tabs defaultValue="all">
          <TabsList className="mb-8">
            <TabsTrigger value="all">Все курсы</TabsTrigger>
            <TabsTrigger value="programming">Программирование</TabsTrigger>
            <TabsTrigger value="development">Разработка</TabsTrigger>
            <TabsTrigger value="security">Безопасность</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </TabsContent>
          
          {["programming", "development", "security"].map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCourses
                  .filter(course => course.category === category)
                  .map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        {filteredCourses.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-gray-600">Курсы не найдены. Попробуйте изменить параметры поиска.</p>
          </div>
        )}
      </div>
      
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Кибер-школа с котятами. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Courses;
