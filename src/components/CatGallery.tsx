
import { Card, CardContent } from "@/components/ui/card";

const CatGallery = () => {
  const cats = [
    {
      id: 1,
      name: "Профессор Мурзик",
      specialty: "Программирование на Python",
      imageUrl: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 2,
      name: "Доктор Пушистик",
      specialty: "Кибербезопасность",
      imageUrl: "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 3,
      name: "Мадам Лапка",
      specialty: "Web-разработка",
      imageUrl: "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?auto=format&fit=crop&q=80&w=400",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {cats.map((cat) => (
        <Card key={cat.id} className="overflow-hidden">
          <div className="relative h-64 overflow-hidden">
            <img 
              src={cat.imageUrl} 
              alt={cat.name} 
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <CardContent className="p-4 text-center">
            <h3 className="text-xl font-bold mb-1">{cat.name}</h3>
            <p className="text-purple-600">{cat.specialty}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CatGallery;
