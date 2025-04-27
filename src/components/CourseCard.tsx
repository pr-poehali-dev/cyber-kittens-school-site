
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

type CourseProps = {
  course: {
    id: number;
    title: string;
    description: string;
    level: string;
    imageUrl: string;
  };
};

const CourseCard = ({ course }: CourseProps) => {
  const getLevelColor = (level: string) => {
    switch (level) {
      case "Начинающий":
        return "bg-green-500";
      case "Средний":
        return "bg-blue-500";
      case "Продвинутый":
        return "bg-purple-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="h-48 overflow-hidden">
        <img 
          src={course.imageUrl} 
          alt={course.title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader className="p-4 pb-0">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold">{course.title}</h3>
          <Badge className={getLevelColor(course.level)}>{course.level}</Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <p className="text-gray-600">{course.description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full">Подробнее</Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
