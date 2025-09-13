import { Brain, Trophy, Target, Clock, TrendingUp, BookOpen, Award, Zap, Calendar, BarChart3 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/Navigation";

const ProgressPage = () => {
  const userStats = {
    totalHours: 47.5,
    coursesCompleted: 3,
    coursesInProgress: 2,
    streak: 12,
    averageScore: 86,
    rank: "Advanced Learner",
    xp: 2840,
    nextLevelXp: 3000
  };

  const currentCourses = [
    {
      id: 1,
      title: "Machine Learning Fundamentals",
      progress: 68,
      nextLesson: "Neural Networks Introduction",
      timeSpent: "12.5 hours",
      averageScore: 84,
      thumbnail: "🤖"
    },
    {
      id: 2,
      title: "Advanced React Development",
      progress: 34,
      nextLesson: "State Management with Redux",
      timeSpent: "8.2 hours", 
      averageScore: 91,
      thumbnail: "⚛️"
    }
  ];

  const completedCourses = [
    {
      title: "JavaScript Fundamentals",
      completedDate: "2024-01-15",
      finalScore: 92,
      certificate: true,
      thumbnail: "📜"
    },
    {
      title: "Python for Beginners",
      completedDate: "2024-02-28",
      finalScore: 88,
      certificate: true,
      thumbnail: "🐍"
    },
    {
      title: "Data Structures & Algorithms",
      completedDate: "2024-03-20",
      finalScore: 85,
      certificate: true,
      thumbnail: "🔧"
    }
  ];

  const weeklyActivity = [
    { day: "Mon", hours: 2.5, completed: true },
    { day: "Tue", hours: 1.8, completed: true },
    { day: "Wed", hours: 3.2, completed: true },
    { day: "Thu", hours: 2.1, completed: true },
    { day: "Fri", hours: 1.5, completed: true },
    { day: "Sat", hours: 2.8, completed: true },
    { day: "Sun", hours: 1.2, completed: false }
  ];

  const achievements = [
    {
      icon: Trophy,
      title: "Course Completion Master",
      description: "Completed 3 courses with 85%+ score",
      earned: true,
      date: "2024-03-20"
    },
    {
      icon: Zap,
      title: "Speed Learner",
      description: "Completed a course in under 2 weeks",
      earned: true,
      date: "2024-02-15"
    },
    {
      icon: Target,
      title: "Perfect Score",
      description: "Achieved 100% on 5 quizzes",
      earned: false,
      progress: 80
    },
    {
      icon: Calendar,
      title: "Consistency Champion",
      description: "Study for 30 days straight",
      earned: false,
      progress: 40
    }
  ];

  const learningPath = [
    {
      title: "JavaScript Fundamentals",
      status: "completed",
      score: 92
    },
    {
      title: "Advanced JavaScript",
      status: "completed",
      score: 88
    },
    {
      title: "React Fundamentals",
      status: "current",
      progress: 34
    },
    {
      title: "Advanced React Patterns",
      status: "locked"
    },
    {
      title: "Full-Stack Development",
      status: "locked"
    }
  ];

  const aiInsights = [
    {
      type: "strength",
      title: "Strong in Problem Solving",
      description: "You excel at algorithmic thinking and complex problem breakdown",
      confidence: 92
    },
    {
      type: "improvement",
      title: "Focus on State Management",
      description: "Consider spending more time on React state patterns",
      confidence: 78
    },
    {
      type: "recommendation",
      title: "Ready for Advanced Topics",
      description: "Your current pace suggests you're ready for more challenging content",
      confidence: 85
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "text-success";
      case "current": return "text-primary";
      case "locked": return "text-muted-foreground";
      default: return "text-muted-foreground";
    }
  };

  const getInsightIcon = (type: string) => {
    switch (type) {
      case "strength": return Trophy;
      case "improvement": return Target;
      case "recommendation": return TrendingUp;
      default: return Brain;
    }
  };

  const getInsightColor = (type: string) => {
    switch (type) {
      case "strength": return "from-success to-success-glow";
      case "improvement": return "from-warning to-warning";
      case "recommendation": return "from-primary to-primary-glow";
      default: return "from-accent to-accent-glow";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20 pb-8">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Your Learning <span className="text-gradient-primary">Progress</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Track your journey and celebrate your achievements
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
            <Card className="course-card text-center">
              <CardContent className="p-4">
                <div className="text-2xl md:text-3xl font-bold text-primary">{userStats.totalHours}</div>
                <div className="text-sm text-muted-foreground">Hours Learned</div>
              </CardContent>
            </Card>
            <Card className="course-card text-center">
              <CardContent className="p-4">
                <div className="text-2xl md:text-3xl font-bold text-success">{userStats.coursesCompleted}</div>
                <div className="text-sm text-muted-foreground">Courses Done</div>
              </CardContent>
            </Card>
            <Card className="course-card text-center">
              <CardContent className="p-4">
                <div className="text-2xl md:text-3xl font-bold text-accent">{userStats.streak}</div>
                <div className="text-sm text-muted-foreground">Day Streak</div>
              </CardContent>
            </Card>
            <Card className="course-card text-center">
              <CardContent className="p-4">
                <div className="text-2xl md:text-3xl font-bold text-warning">{userStats.averageScore}%</div>
                <div className="text-sm text-muted-foreground">Avg Score</div>
              </CardContent>
            </Card>
          </div>

          {/* XP Progress */}
          <Card className="mb-8 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold">Experience Points</h3>
                  <Badge variant="outline" className="bg-primary/10 border-primary/30">
                    {userStats.rank}
                  </Badge>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">{userStats.xp} XP</div>
                  <div className="text-sm text-muted-foreground">
                    {userStats.nextLevelXp - userStats.xp} XP to next level
                  </div>
                </div>
              </div>
              <Progress value={(userStats.xp / userStats.nextLevelXp) * 100} className="h-3" />
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <Tabs defaultValue="courses" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="courses">Courses</TabsTrigger>
                  <TabsTrigger value="activity">Activity</TabsTrigger>
                  <TabsTrigger value="achievements">Achievements</TabsTrigger>
                  <TabsTrigger value="path">Learning Path</TabsTrigger>
                </TabsList>

                <TabsContent value="courses" className="space-y-6">
                  {/* Current Courses */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Courses in Progress</h3>
                    <div className="space-y-4">
                      {currentCourses.map((course) => (
                        <Card key={course.id} className="course-card">
                          <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                              <div className="text-3xl">{course.thumbnail}</div>
                              <div className="flex-1">
                                <h4 className="font-semibold text-lg mb-2">{course.title}</h4>
                                <div className="space-y-2 mb-4">
                                  <div className="flex justify-between text-sm">
                                    <span>Progress</span>
                                    <span>{course.progress}%</span>
                                  </div>
                                  <Progress value={course.progress} />
                                </div>
                                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                                  <div className="flex items-center gap-1">
                                    <Clock className="h-4 w-4" />
                                    {course.timeSpent}
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <BarChart3 className="h-4 w-4" />
                                    {course.averageScore}% avg
                                  </div>
                                </div>
                                <p className="text-sm mt-2">
                                  <strong>Next:</strong> {course.nextLesson}
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Completed Courses */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Completed Courses</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {completedCourses.map((course, index) => (
                        <Card key={index} className="course-card">
                          <CardContent className="p-4">
                            <div className="flex items-center gap-3 mb-3">
                              <div className="text-2xl">{course.thumbnail}</div>
                              <div className="flex-1">
                                <h4 className="font-medium">{course.title}</h4>
                                <p className="text-xs text-muted-foreground">
                                  Completed {new Date(course.completedDate).toLocaleDateString()}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <Badge variant="outline" className="bg-success/10 border-success/30 text-success">
                                {course.finalScore}% Final Score
                              </Badge>
                              {course.certificate && (
                                <Award className="h-4 w-4 text-warning" />
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="activity">
                  <Card>
                    <CardHeader>
                      <CardTitle>Weekly Activity</CardTitle>
                      <CardDescription>Your learning activity this week</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-7 gap-2">
                        {weeklyActivity.map((day, index) => (
                          <div key={index} className="text-center">
                            <div className="text-xs text-muted-foreground mb-2">{day.day}</div>
                            <div 
                              className={`h-20 rounded-lg border-2 flex items-end justify-center pb-2 ${
                                day.completed 
                                  ? 'bg-success/20 border-success/40' 
                                  : 'bg-muted/20 border-muted-foreground/20'
                              }`}
                            >
                              <div 
                                className={`w-4 rounded-t ${
                                  day.completed ? 'bg-success' : 'bg-muted-foreground'
                                }`}
                                style={{ height: `${(day.hours / 4) * 100}%` }}
                              />
                            </div>
                            <div className="text-xs mt-1">{day.hours}h</div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="achievements">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {achievements.map((achievement, index) => {
                      const Icon = achievement.icon;
                      return (
                        <Card key={index} className={`course-card ${achievement.earned ? 'border-success/40' : ''}`}>
                          <CardContent className="p-4">
                            <div className="flex items-start gap-3">
                              <div className={`p-3 rounded-full ${
                                achievement.earned 
                                  ? 'bg-success text-success-foreground' 
                                  : 'bg-muted text-muted-foreground'
                              }`}>
                                <Icon className="h-5 w-5" />
                              </div>
                              <div className="flex-1">
                                <h4 className="font-semibold">{achievement.title}</h4>
                                <p className="text-sm text-muted-foreground mb-2">
                                  {achievement.description}
                                </p>
                                {achievement.earned ? (
                                  <Badge variant="outline" className="bg-success/10 border-success/30 text-success">
                                    Earned {new Date(achievement.date!).toLocaleDateString()}
                                  </Badge>
                                ) : (
                                  <div>
                                    <div className="flex justify-between text-xs mb-1">
                                      <span>Progress</span>
                                      <span>{achievement.progress}%</span>
                                    </div>
                                    <Progress value={achievement.progress} className="h-2" />
                                  </div>
                                )}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </TabsContent>

                <TabsContent value="path">
                  <Card>
                    <CardHeader>
                      <CardTitle>Recommended Learning Path</CardTitle>
                      <CardDescription>AI-curated progression based on your goals</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {learningPath.map((step, index) => (
                          <div key={index} className="flex items-center gap-4">
                            <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-medium ${
                              step.status === 'completed' 
                                ? 'bg-success border-success text-success-foreground'
                                : step.status === 'current'
                                ? 'bg-primary border-primary text-primary-foreground'
                                : 'bg-muted border-muted-foreground text-muted-foreground'
                            }`}>
                              {index + 1}
                            </div>
                            <div className="flex-1">
                              <h4 className={`font-medium ${getStatusColor(step.status)}`}>
                                {step.title}
                              </h4>
                              {step.status === 'completed' && (
                                <p className="text-sm text-muted-foreground">Score: {step.score}%</p>
                              )}
                              {step.status === 'current' && (
                                <Progress value={step.progress} className="mt-2 h-2" />
                              )}
                              {step.status === 'locked' && (
                                <p className="text-sm text-muted-foreground">Complete previous course to unlock</p>
                              )}
                            </div>
                          </div>
                        ))}
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
                    const Icon = getInsightIcon(insight.type);
                    const colorClass = getInsightColor(insight.type);
                    
                    return (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className={`p-2 rounded-lg bg-gradient-to-r ${colorClass}`}>
                            <Icon className="h-4 w-4 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium text-sm">{insight.title}</h4>
                            <p className="text-xs text-muted-foreground">{insight.description}</p>
                          </div>
                        </div>
                        <div className="ml-10">
                          <div className="flex justify-between text-xs mb-1">
                            <span>Confidence</span>
                            <span>{insight.confidence}%</span>
                          </div>
                          <Progress value={insight.confidence} className="h-1" />
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <button className="w-full p-3 text-left rounded-lg border border-border hover:bg-muted/50 transition-colors">
                    <BookOpen className="h-4 w-4 inline mr-2" />
                    Resume Machine Learning
                  </button>
                  <button className="w-full p-3 text-left rounded-lg border border-border hover:bg-muted/50 transition-colors">
                    <Target className="h-4 w-4 inline mr-2" />
                    Take Practice Quiz
                  </button>
                  <button className="w-full p-3 text-left rounded-lg border border-border hover:bg-muted/50 transition-colors">
                    <Award className="h-4 w-4 inline mr-2" />
                    View Certificates
                  </button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressPage;