import { useState } from "react";
import { Play, CheckCircle, Circle, Clock, Users, Star, BookOpen, Download, Share2, ChevronRight, Brain, Target, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/Navigation";

const Course = () => {
  const [selectedLesson, setSelectedLesson] = useState(0);
  const [completedLessons, setCompletedLessons] = useState(new Set([0, 1, 2]));

  const course = {
    id: 1,
    title: "Machine Learning Fundamentals",
    description: "Master the basics of ML algorithms, neural networks, and practical applications in real-world scenarios.",
    instructor: "Dr. Sarah Chen",
    rating: 4.8,
    students: 1240,
    duration: "12 weeks",
    level: "Beginner",
    progress: 45,
    thumbnail: "🤖",
    price: "$129",
    tags: ["Python", "TensorFlow", "Algorithms", "Neural Networks"],
    overview: "This comprehensive course introduces you to the fascinating world of machine learning. You'll learn fundamental concepts, algorithms, and practical implementations using Python and popular ML libraries.",
    objectives: [
      "Understand core machine learning concepts and terminology",
      "Implement supervised and unsupervised learning algorithms",
      "Work with real datasets and preprocessing techniques", 
      "Build and evaluate machine learning models",
      "Deploy models using cloud platforms"
    ]
  };

  const chapters = [
    {
      id: 1,
      title: "Introduction to Machine Learning",
      lessons: [
        { id: 1, title: "What is Machine Learning?", duration: "12 min", type: "video" },
        { id: 2, title: "Types of ML Algorithms", duration: "15 min", type: "video" },
        { id: 3, title: "Setting Up Your Environment", duration: "20 min", type: "hands-on" },
        { id: 4, title: "First ML Project", duration: "8 min", type: "quiz" }
      ]
    },
    {
      id: 2,
      title: "Supervised Learning",
      lessons: [
        { id: 5, title: "Linear Regression", duration: "18 min", type: "video" },
        { id: 6, title: "Classification Algorithms", duration: "22 min", type: "video" },
        { id: 7, title: "Model Evaluation", duration: "16 min", type: "hands-on" },
        { id: 8, title: "Practice Quiz", duration: "10 min", type: "quiz" }
      ]
    },
    {
      id: 3,
      title: "Unsupervised Learning",
      lessons: [
        { id: 9, title: "Clustering Algorithms", duration: "20 min", type: "video" },
        { id: 10, title: "Dimensionality Reduction", duration: "18 min", type: "video" },
        { id: 11, title: "Real-world Applications", duration: "25 min", type: "hands-on" }
      ]
    },
    {
      id: 4,
      title: "Neural Networks",
      lessons: [
        { id: 12, title: "Introduction to Neural Networks", duration: "24 min", type: "video" },
        { id: 13, title: "Deep Learning Basics", duration: "28 min", type: "video" },
        { id: 14, title: "Building Your First Neural Network", duration: "35 min", type: "hands-on" },
        { id: 15, title: "Final Assessment", duration: "15 min", type: "quiz" }
      ]
    }
  ];

  const aiInsights = [
    {
      icon: Brain,
      title: "Learning Pace",
      value: "Optimal",
      description: "You're progressing at an ideal speed for retention"
    },
    {
      icon: Target,
      title: "Weak Areas",
      value: "Model Evaluation",
      description: "Focus more on this topic for better understanding"
    },
    {
      icon: Trophy,
      title: "Streak",
      value: "7 days",
      description: "Great consistency! Keep it up"
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "video": return Play;
      case "hands-on": return BookOpen;
      case "quiz": return Target;
      default: return Circle;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "video": return "text-primary";
      case "hands-on": return "text-accent";
      case "quiz": return "text-warning";
      default: return "text-muted-foreground";
    }
  };

  const toggleLessonComplete = (lessonId: number) => {
    const newCompleted = new Set(completedLessons);
    if (newCompleted.has(lessonId)) {
      newCompleted.delete(lessonId);
    } else {
      newCompleted.add(lessonId);
    }
    setCompletedLessons(newCompleted);
  };

  const totalLessons = chapters.reduce((acc, chapter) => acc + chapter.lessons.length, 0);
  const completedCount = completedLessons.size;
  const progressPercent = (completedCount / totalLessons) * 100;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20">
        <div className="container mx-auto px-4">
          {/* Course Header */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="text-4xl">{course.thumbnail}</div>
                <div>
                  <Badge className="bg-success text-success-foreground mb-2">
                    {course.level}
                  </Badge>
                  <h1 className="text-3xl md:text-4xl font-bold">{course.title}</h1>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground mb-6">{course.description}</p>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  {course.students.toLocaleString()} students
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {course.duration}
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-warning fill-current" />
                  {course.rating} rating
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {course.tags.map((tag, index) => (
                  <Badge key={index} variant="outline">{tag}</Badge>
                ))}
              </div>

              <p className="text-sm text-muted-foreground">
                Instructor: <span className="font-medium text-foreground">{course.instructor}</span>
              </p>
            </div>

            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold text-primary mb-2">{course.price}</div>
                    <Progress value={progressPercent} className="mb-2" />
                    <p className="text-sm text-muted-foreground">
                      {completedCount} of {totalLessons} lessons completed
                    </p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="hero" size="lg" className="w-full">
                    <Play className="h-4 w-4 mr-2" />
                    Continue Learning
                  </Button>
                  <Button variant="outline" size="lg" className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Download Materials
                  </Button>
                  <Button variant="ghost" size="lg" className="w-full">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share Course
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Course Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="curriculum" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="instructor">Instructor</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>

                <TabsContent value="curriculum" className="space-y-6">
                  {chapters.map((chapter) => (
                    <Card key={chapter.id}>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <span>Chapter {chapter.id}:</span>
                          <span>{chapter.title}</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        {chapter.lessons.map((lesson) => {
                          const Icon = getTypeIcon(lesson.type);
                          const isCompleted = completedLessons.has(lesson.id);
                          
                          return (
                            <div
                              key={lesson.id}
                              className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
                                selectedLesson === lesson.id 
                                  ? 'bg-primary/10 border border-primary/20' 
                                  : 'hover:bg-muted/50'
                              }`}
                              onClick={() => setSelectedLesson(lesson.id)}
                            >
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleLessonComplete(lesson.id);
                                }}
                                className="text-success"
                              >
                                {isCompleted ? (
                                  <CheckCircle className="h-5 w-5 fill-current" />
                                ) : (
                                  <Circle className="h-5 w-5" />
                                )}
                              </button>
                              
                              <Icon className={`h-4 w-4 ${getTypeColor(lesson.type)}`} />
                              
                              <div className="flex-1 text-left">
                                <div className="font-medium">{lesson.title}</div>
                                <div className="text-sm text-muted-foreground">{lesson.duration}</div>
                              </div>
                              
                              <ChevronRight className="h-4 w-4 text-muted-foreground" />
                            </div>
                          );
                        })}
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>

                <TabsContent value="overview" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Course Overview</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-6">{course.overview}</p>
                      
                      <h3 className="font-semibold mb-3">Learning Objectives</h3>
                      <ul className="space-y-2">
                        {course.objectives.map((objective, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                            <span>{objective}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="instructor">
                  <Card>
                    <CardHeader>
                      <CardTitle>Meet Your Instructor</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center text-2xl text-primary-foreground">
                          SC
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold">{course.instructor}</h3>
                          <p className="text-muted-foreground">PhD in Computer Science, ML Research</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground">
                        Dr. Sarah Chen is a renowned machine learning researcher with over 10 years of experience 
                        in both academia and industry. She has published numerous papers on neural networks and 
                        has worked with leading tech companies on AI projects.
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="reviews">
                  <Card>
                    <CardHeader>
                      <CardTitle>Student Reviews</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center py-8 text-muted-foreground">
                        Reviews will be displayed here
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* AI Insights Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="h-5 w-5 text-primary" />
                    AI Learning Insights
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {aiInsights.map((insight, index) => {
                    const Icon = insight.icon;
                    return (
                      <div key={index} className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <Icon className="h-4 w-4 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">{insight.title}</span>
                            <span className="text-sm font-semibold text-primary">{insight.value}</span>
                          </div>
                          <p className="text-xs text-muted-foreground">{insight.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Next Recommended</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 border border-border rounded-lg">
                      <div className="font-medium text-sm">Deep Learning with PyTorch</div>
                      <div className="text-xs text-muted-foreground">Advanced • 14 weeks</div>
                    </div>
                    <div className="p-3 border border-border rounded-lg">
                      <div className="font-medium text-sm">Data Science Fundamentals</div>
                      <div className="text-xs text-muted-foreground">Intermediate • 10 weeks</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;