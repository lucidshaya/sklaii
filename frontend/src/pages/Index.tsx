import { useState } from "react";
import { BookOpen, Brain, Play, ArrowRight, Zap, Users, Award, TrendingUp, Sparkles, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import heroImage from "@/assets/hero-bg.jpg";

const Index = () => {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Learning",
      description: "Personalized curriculum that adapts to your learning style and pace",
      color: "from-primary to-primary-glow"
    },
    {
      icon: Target,
      title: "Adaptive Assessments",
      description: "Smart quizzes that adjust difficulty based on your performance",
      color: "from-accent to-accent-glow"
    },
    {
      icon: TrendingUp,
      title: "Progress Tracking",
      description: "Detailed analytics and insights into your learning journey",
      color: "from-success to-success-glow"
    },
    {
      icon: Users,
      title: "Expert Instructors",
      description: "Learn from industry professionals and thought leaders",
      color: "from-warning to-warning"
    }
  ];

  const stats = [
    { label: "Active Learners", value: "100+", icon: Users },
    { label: "Courses Available", value: "20+", icon: BookOpen },
    { label: "Completion Rate", value: "94%", icon: Award },
    { label: "AI Accuracy", value: "98%", icon: Brain }
  ];

  const popularCourses = [
    {
      title: "Machine Learning Fundamentals",
      students: "1.2K",
      rating: 4.8,
      thumbnail: "🤖",
      level: "Beginner"
    },
    {
      title: "Advanced React Development",
      students: "856",
      rating: 4.9,
      thumbnail: "⚛️",
      level: "Advanced"
    },
    {
      title: "Data Science with Python",
      students: "2.1K",
      rating: 4.7,
      thumbnail: "📊",
      level: "Intermediate"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 md:pb-24">
        {/* Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background/50 to-accent/20" />
        
        <div className="container relative mx-auto px-4 text-center">
          <div className="mx-auto max-w-4xl">
            <Badge variant="outline" className="mb-6 bg-primary/10 border-primary/30 text-primary">
              <Sparkles className="h-4 w-4 mr-2" />
              AI-Powered Learning Platform
            </Badge>
            
            <h1 className="mb-6 text-5xl md:text-7xl font-bold leading-tight">
              Learn Smarter with
              <span className="block text-gradient-primary">Artificial Intelligence</span>
            </h1>
            
            <p className="mb-8 text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Experience personalized education that adapts to your learning style. 
              AI-generated content, adaptive assessments, and intelligent progress tracking.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a href="/auth">
                <Button variant="hero" size="xl" className="text-lg">
                  <Play className="h-5 w-5 mr-2" />
                  Start Learning
                </Button>
              </a>
              <a href="/courses">
                <Button variant="glass" size="xl" className="text-lg">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Browse Courses
                </Button>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="mx-auto mb-2 p-3 w-fit rounded-full bg-primary/10 border border-primary/20">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="text-gradient-primary">LearnAI</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Revolutionary learning technology that understands how you learn best
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className={`course-card text-center transition-all duration-300 ${
                    hoveredFeature === index ? 'scale-105' : ''
                  }`}
                  onMouseEnter={() => setHoveredFeature(index)}
                  onMouseLeave={() => setHoveredFeature(null)}
                >
                  <CardHeader>
                    <div className={`mx-auto mb-4 p-4 rounded-full bg-gradient-to-r ${feature.color} w-fit`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Courses</h2>
              <p className="text-xl text-muted-foreground">
                Most loved by our learning community
              </p>
            </div>
            <Button variant="outline">
              View All
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularCourses.map((course, index) => (
              <Card key={index} className="course-card">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{course.thumbnail}</div>
                    <Badge variant="outline">{course.level}</Badge>
                  </div>
                  <CardTitle className="text-lg">{course.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <span>{course.students} students</span>
                    <span>⭐ {course.rating}</span>
                  </div>
                  <Button variant="hero" className="w-full">
                    Enroll Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Learning?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of learners who are already experiencing the future of education
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/auth">
                <Button variant="hero" size="lg">
                  <Zap className="h-5 w-5 mr-2" />
                  Get Started Free
                </Button>
              </a>
              <Button variant="outline" size="lg">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
