import { useState, useEffect } from "react";
import { ChevronLeft, Clock, Brain, CheckCircle, X, ArrowRight, RotateCcw, Trophy, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Navigation from "@/components/Navigation";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes
  const [isCompleted, setIsCompleted] = useState(false);
  const [showResults, setShowResults] = useState(false);

  // Mock quiz data
  const quiz = {
    title: "Machine Learning Fundamentals - Chapter 2 Quiz",
    description: "Test your understanding of supervised learning algorithms",
    totalQuestions: 5,
    timeLimit: 300,
    difficulty: "Adaptive", // AI adjusts based on performance
    chapter: "Supervised Learning"
  };

  const questions = [
    {
      id: 1,
      question: "What is the primary goal of supervised learning?",
      type: "multiple-choice",
      difficulty: "Easy",
      options: [
        "To find hidden patterns in unlabeled data",
        "To learn from input-output pairs to make predictions",
        "To optimize system performance through trial and error",
        "To reduce the dimensionality of the dataset"
      ],
      correct: 1,
      explanation: "Supervised learning uses labeled training data (input-output pairs) to learn a mapping function that can make predictions on new, unseen data.",
      aiHint: "Think about the key difference between supervised and unsupervised learning."
    },
    {
      id: 2,
      question: "Which algorithm is best suited for linear relationships between features and target variables?",
      type: "multiple-choice", 
      difficulty: "Easy",
      options: [
        "Decision Trees",
        "K-Means Clustering",
        "Linear Regression",
        "Neural Networks"
      ],
      correct: 2,
      explanation: "Linear regression is specifically designed to model linear relationships between input features and continuous target variables.",
      aiHint: "The name of this algorithm gives away its primary use case."
    },
    {
      id: 3,
      question: "What does overfitting mean in machine learning?",
      type: "multiple-choice",
      difficulty: "Medium",
      options: [
        "The model performs well on training data but poorly on new data",
        "The model performs poorly on both training and test data",
        "The model takes too long to train",
        "The model uses too many features"
      ],
      correct: 0,
      explanation: "Overfitting occurs when a model learns the training data too well, including noise and random fluctuations, making it perform poorly on new, unseen data.",
      aiHint: "Consider what happens when a model memorizes rather than generalizes."
    },
    {
      id: 4,
      question: "Which metric is most appropriate for evaluating a binary classification model with imbalanced classes?",
      type: "multiple-choice",
      difficulty: "Medium",
      options: [
        "Accuracy",
        "F1-Score",
        "Mean Squared Error",
        "R-squared"
      ],
      correct: 1,
      explanation: "F1-Score is the harmonic mean of precision and recall, making it more suitable for imbalanced datasets than simple accuracy.",
      aiHint: "Think about what happens to accuracy when 95% of your data belongs to one class."
    },
    {
      id: 5,
      question: "What is cross-validation used for?",
      type: "multiple-choice",
      difficulty: "Hard",
      options: [
        "To increase the size of the training dataset",
        "To estimate how well a model will generalize to new data",
        "To reduce the number of features in the dataset",
        "To speed up the training process"
      ],
      correct: 1,
      explanation: "Cross-validation helps estimate model performance on unseen data by systematically training and testing on different subsets of the available data.",
      aiHint: "This technique helps you understand if your model will work well in the real world."
    }
  ];

  // Timer effect
  useEffect(() => {
    if (timeLeft > 0 && !isCompleted) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      handleSubmit();
    }
  }, [timeLeft, isCompleted]);

  const handleAnswerSelect = (questionIndex: number, answerIndex: number) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionIndex]: answerIndex
    }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    setIsCompleted(true);
    setShowResults(true);
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correct) {
        correct++;
      }
    });
    return {
      correct,
      total: questions.length,
      percentage: Math.round((correct / questions.length) * 100)
    };
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "bg-success text-success-foreground";
      case "Medium": return "bg-warning text-warning-foreground";
      case "Hard": return "bg-destructive text-destructive-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  if (showResults) {
    const score = calculateScore();
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-20 pb-8">
          <div className="container mx-auto px-4 max-w-4xl">
            <Card className="course-card">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-4 rounded-full bg-gradient-to-r from-success to-success-glow w-fit">
                  <Trophy className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Quiz Completed!</CardTitle>
                <div className="text-4xl font-bold text-primary mt-4">
                  {score.percentage}%
                </div>
                <p className="text-muted-foreground">
                  You scored {score.correct} out of {score.total} questions correctly
                </p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Performance Breakdown */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-success/10 rounded-lg border border-success/20">
                    <div className="text-2xl font-bold text-success">{score.correct}</div>
                    <div className="text-sm text-muted-foreground">Correct</div>
                  </div>
                  <div className="text-center p-4 bg-destructive/10 rounded-lg border border-destructive/20">
                    <div className="text-2xl font-bold text-destructive">{score.total - score.correct}</div>
                    <div className="text-sm text-muted-foreground">Incorrect</div>
                  </div>
                  <div className="text-center p-4 bg-primary/10 rounded-lg border border-primary/20">
                    <div className="text-2xl font-bold text-primary">{formatTime(300 - timeLeft)}</div>
                    <div className="text-sm text-muted-foreground">Time Taken</div>
                  </div>
                </div>

                {/* AI Feedback */}
                <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Brain className="h-5 w-5 text-primary" />
                      AI Feedback
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {score.percentage >= 80 
                        ? "Excellent work! You have a solid understanding of supervised learning concepts. Ready for the next chapter!"
                        : score.percentage >= 60
                        ? "Good effort! You understand the basics but could benefit from reviewing overfitting and evaluation metrics."
                        : "Consider reviewing the chapter materials, especially focusing on the fundamental concepts of supervised learning."
                      }
                    </p>
                  </CardContent>
                </Card>

                {/* Question Review */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Review Your Answers</h3>
                  {questions.map((question, index) => {
                    const userAnswer = selectedAnswers[index];
                    const isCorrect = userAnswer === question.correct;
                    
                    return (
                      <Card key={question.id} className={`border-l-4 ${isCorrect ? 'border-l-success' : 'border-l-destructive'}`}>
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <CardTitle className="text-base">{question.question}</CardTitle>
                            {isCorrect ? (
                              <CheckCircle className="h-5 w-5 text-success" />
                            ) : (
                              <X className="h-5 w-5 text-destructive" />
                            )}
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            {question.options.map((option, optionIndex) => {
                              const isUserChoice = userAnswer === optionIndex;
                              const isCorrectChoice = question.correct === optionIndex;
                              
                              return (
                                <div
                                  key={optionIndex}
                                  className={`p-2 rounded border ${
                                    isCorrectChoice
                                      ? 'bg-success/10 border-success text-success-foreground'
                                      : isUserChoice && !isCorrectChoice
                                      ? 'bg-destructive/10 border-destructive text-destructive-foreground'
                                      : 'bg-muted/30'
                                  }`}
                                >
                                  {option}
                                  {isUserChoice && <span className="ml-2">(Your answer)</span>}
                                  {isCorrectChoice && <span className="ml-2">(Correct)</span>}
                                </div>
                              );
                            })}
                          </div>
                          <div className="mt-3 p-3 bg-accent/10 rounded border border-accent/20">
                            <p className="text-sm"><strong>Explanation:</strong> {question.explanation}</p>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 justify-center">
                  <Button variant="outline" onClick={() => window.location.reload()}>
                    <RotateCcw className="h-4 w-4 mr-2" />
                    Retake Quiz
                  </Button>
                  <Button variant="hero">
                    Continue to Next Chapter
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20 pb-8">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Quiz Header */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <Button variant="ghost" size="icon">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <div className="flex-1">
                <h1 className="text-2xl font-bold">{quiz.title}</h1>
                <p className="text-muted-foreground">{quiz.description}</p>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {formatTime(timeLeft)}
                </div>
                <Badge className={getDifficultyColor(currentQ.difficulty)}>
                  {currentQ.difficulty}
                </Badge>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Question {currentQuestion + 1} of {questions.length}</span>
                <span>{Math.round(progress)}% Complete</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
          </div>

          {/* Question Card */}
          <Card className="course-card mb-6">
            <CardHeader>
              <div className="flex items-start justify-between">
                <CardTitle className="text-xl leading-relaxed">
                  {currentQ.question}
                </CardTitle>
                <Badge variant="outline" className="ml-4">
                  <Brain className="h-3 w-3 mr-1" />
                  AI-Generated
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              {/* Answer Options */}
              <div className="space-y-3">
                {currentQ.options.map((option, index) => {
                  const isSelected = selectedAnswers[currentQuestion] === index;
                  
                  return (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(currentQuestion, index)}
                      className={`w-full p-4 text-left rounded-lg border-2 transition-all quiz-option ${
                        isSelected 
                          ? 'border-primary bg-primary/10 text-primary' 
                          : 'border-border hover:border-primary/50 hover:bg-muted/50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                          isSelected ? 'border-primary bg-primary text-primary-foreground' : 'border-muted-foreground'
                        }`}>
                          {String.fromCharCode(65 + index)}
                        </div>
                        <span className={isSelected ? 'font-medium' : ''}>{option}</span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* AI Hint */}
              {selectedAnswers[currentQuestion] !== undefined && (
                <Card className="bg-accent/5 border-accent/20">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-2">
                      <Target className="h-4 w-4 text-accent mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-accent">AI Hint</p>
                        <p className="text-sm text-muted-foreground">{currentQ.aiHint}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between">
            <Button 
              variant="outline" 
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
            >
              <ChevronLeft className="h-4 w-4 mr-2" />
              Previous
            </Button>
            
            <div className="flex gap-2">
              {currentQuestion === questions.length - 1 ? (
                <Button 
                  variant="hero" 
                  onClick={handleSubmit}
                  disabled={selectedAnswers[currentQuestion] === undefined}
                >
                  Submit Quiz
                </Button>
              ) : (
                <Button 
                  variant="default" 
                  onClick={handleNext}
                  disabled={selectedAnswers[currentQuestion] === undefined}
                >
                  Next
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;