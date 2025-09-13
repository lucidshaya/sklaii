import { useState } from "react";
import { BookOpen, Clock, Star, Users, Zap, Search, Filter, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Courses", count: 24 },
    { id: "ai", name: "Artificial Intelligence", count: 8 },
    { id: "web", name: "Web Development", count: 6 },
    { id: "data", name: "Data Science", count: 5 },
    { id: "mobile", name: "Mobile Development", count: 3 },
    { id: "blockchain", name: "Blockchain", count: 2 }
  ];

  const courses = [
    {
      id: 1,
      title: "Machine Learning Fundamentals",
      description: "Master the basics of ML algorithms and neural networks",
      instructor: "Dr. Sarah Chen",
      duration: "12 weeks",
      level: "Beginner",
      rating: 4.8,
      students: 1240,
      category: "ai",
      progress: 0,
      price: "$129",
      thumbnail: "🤖",
      tags: ["Python", "TensorFlow", "Algorithms"]
    },
    {
      id: 2,
      title: "Advanced React Development",
      description: "Build scalable applications with modern React patterns",
      instructor: "Mark Thompson",
      duration: "8 weeks",
      level: "Advanced",
      rating: 4.9,
      students: 856,
      category: "web",
      progress: 35,
      price: "$99",
      thumbnail: "⚛️",
      tags: ["React", "TypeScript", "Next.js"]
    },
    {
      id: 3,
      title: "Data Visualization Mastery",
      description: "Create stunning visualizations and interactive dashboards",
      instructor: "Ana Rodriguez",
      duration: "6 weeks",
      level: "Intermediate",
      rating: 4.7,
      students: 623,
      category: "data",
      progress: 0,
      price: "$79",
      thumbnail: "📊",
      tags: ["D3.js", "Python", "Tableau"]
    },
    {
      id: 4,
      title: "Flutter Mobile Development",
      description: "Build beautiful cross-platform mobile applications",
      instructor: "Kai Nakamura",
      duration: "10 weeks",
      level: "Intermediate",
      rating: 4.6,
      students: 445,
      category: "mobile",
      progress: 0,
      price: "$109",
      thumbnail: "📱",
      tags: ["Flutter", "Dart", "Firebase"]
    },
    {
      id: 5,
      title: "Deep Learning with PyTorch",
      description: "Advanced neural networks and computer vision",
      instructor: "Prof. James Wilson",
      duration: "14 weeks",
      level: "Advanced",
      rating: 4.9,
      students: 789,
      category: "ai",
      progress: 0,
      price: "$149",
      thumbnail: "🧠",
      tags: ["PyTorch", "Computer Vision", "NLP"]
    },
    {
      id: 6,
      title: "Blockchain Development",
      description: "Smart contracts and decentralized applications",
      instructor: "Alex Johnson",
      duration: "12 weeks",
      level: "Advanced",
      rating: 4.5,
      students: 234,
      category: "blockchain",
      progress: 0,
      price: "$169",
      thumbnail: "⛓️",
      tags: ["Solidity", "Web3", "Ethereum"]
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner": return "bg-success text-success-foreground";
      case "Intermediate": return "bg-warning text-warning-foreground";
      case "Advanced": return "bg-destructive text-destructive-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20 pb-8">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Discover <span className="text-gradient-primary">AI-Powered</span> Courses
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Personalized learning paths powered by artificial intelligence. 
              Courses adapt to your pace and learning style.
            </p>
            
            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-card border-border"
                />
              </div>
              <Button variant="outline" className="md:w-auto">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className="rounded-full"
              >
                {category.name}
                <Badge variant="secondary" className="ml-2">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>

          {/* AI Recommendations */}
          <div className="mb-8 p-6 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-xl">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">AI Recommendations</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Based on your learning history and goals, we recommend these courses:
            </p>
            <div className="flex gap-2 flex-wrap">
              <Badge variant="outline" className="bg-primary/10 border-primary/30">
                Machine Learning Fundamentals
              </Badge>
              <Badge variant="outline" className="bg-accent/10 border-accent/30">
                Data Visualization Mastery
              </Badge>
              <Badge variant="outline" className="bg-success/10 border-success/30">
                Advanced React Development
              </Badge>
            </div>
          </div>

          {/* Course Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <Card key={course.id} className="course-card group cursor-pointer">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="text-4xl mb-2">{course.thumbnail}</div>
                    <Badge className={getLevelColor(course.level)}>
                      {course.level}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {course.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Progress Bar (if enrolled) */}
                  {course.progress > 0 && (
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{course.progress}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="progress-bar h-2 rounded-full" 
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  )}

                  {/* Course Info */}
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {course.students.toLocaleString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-warning fill-current" />
                      {course.rating}
                    </div>
                  </div>

                  {/* Instructor */}
                  <p className="text-sm text-muted-foreground">
                    by {course.instructor}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1">
                    {course.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-2xl font-bold text-primary">{course.price}</span>
                    {course.progress > 0 ? (
                      <Button variant="success" size="sm">
                        <BookOpen className="h-4 w-4 mr-2" />
                        Continue
                      </Button>
                    ) : (
                      <Button variant="hero" size="sm">
                        Enroll Now
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              <TrendingUp className="h-4 w-4 mr-2" />
              Load More Courses
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;