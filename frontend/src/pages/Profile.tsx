import { useState } from "react";
import { User, Mail, Phone, MapPin, Edit3, Camera, Settings, Bell, Shield, CreditCard, Download, Trophy, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import Navigation from "@/components/Navigation";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  const userProfile = {
    name: "Alex Johnson",
    email: "alex.johnson@email.com", 
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    joinDate: "March 2024",
    avatar: "AJ",
    bio: "Passionate learner exploring the intersection of AI and web development. Currently working as a software engineer while upskilling in machine learning.",
    title: "Advanced Learner",
    level: 8,
    xp: 2840,
    completedCourses: 3,
    hoursLearned: 47.5,
    streak: 12
  };

  const preferences = {
    emailNotifications: true,
    pushNotifications: false,
    weeklyDigest: true,
    courseReminders: true,
    achievementAlerts: true,
    darkMode: true,
    language: "English",
    timezone: "PST (UTC-8)"
  };

  const certificates = [
    {
      id: 1,
      course: "JavaScript Fundamentals",
      issueDate: "2024-01-15",
      credentialId: "JS-2024-001542",
      verified: true
    },
    {
      id: 2,
      course: "Python for Beginners", 
      issueDate: "2024-02-28",
      credentialId: "PY-2024-002891",
      verified: true
    },
    {
      id: 3,
      course: "Data Structures & Algorithms",
      issueDate: "2024-03-20", 
      credentialId: "DSA-2024-003456",
      verified: true
    }
  ];

  const learningGoals = [
    {
      id: 1,
      title: "Master Machine Learning",
      progress: 68,
      target: "Complete 5 ML courses",
      deadline: "2024-06-30"
    },
    {
      id: 2,
      title: "Full-Stack Development",
      progress: 34,
      target: "Build 3 full-stack projects",
      deadline: "2024-08-15"
    },
    {
      id: 3,
      title: "Data Science Specialization",
      progress: 12,
      target: "Complete data science track", 
      deadline: "2024-12-31"
    }
  ];

  const paymentMethods = [
    {
      id: 1,
      type: "credit",
      last4: "4242",
      brand: "Visa",
      expiry: "12/26",
      isDefault: true
    },
    {
      id: 2,
      type: "paypal",
      email: "alex.johnson@email.com",
      isDefault: false
    }
  ];

  const subscriptionPlan = {
    name: "Pro Plan",
    price: "$29.99/month",
    nextBilling: "2024-04-15",
    status: "Active",
    features: [
      "Unlimited course access",
      "AI-powered recommendations",
      "Priority support",
      "Downloadable content",
      "Advanced analytics"
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20 pb-8">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Profile Header */}
          <Card className="mb-8 course-card">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                {/* Avatar */}
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center text-3xl font-bold text-primary-foreground">
                    {userProfile.avatar}
                  </div>
                  <button className="absolute -bottom-2 -right-2 p-2 bg-background border border-border rounded-full shadow-lg hover:bg-muted">
                    <Camera className="h-4 w-4" />
                  </button>
                </div>

                {/* Profile Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-2xl md:text-3xl font-bold">{userProfile.name}</h1>
                    <Badge variant="outline" className="bg-primary/10 border-primary/30 text-primary">
                      {userProfile.title}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground mb-4">{userProfile.bio}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="text-center md:text-left">
                      <div className="text-2xl font-bold text-primary">{userProfile.completedCourses}</div>
                      <div className="text-sm text-muted-foreground">Courses</div>
                    </div>
                    <div className="text-center md:text-left">
                      <div className="text-2xl font-bold text-success">{userProfile.hoursLearned}</div>
                      <div className="text-sm text-muted-foreground">Hours</div>
                    </div>
                    <div className="text-center md:text-left">
                      <div className="text-2xl font-bold text-accent">{userProfile.streak}</div>
                      <div className="text-sm text-muted-foreground">Day Streak</div>
                    </div>
                    <div className="text-center md:text-left">
                      <div className="text-2xl font-bold text-warning">Lvl {userProfile.level}</div>
                      <div className="text-sm text-muted-foreground">{userProfile.xp} XP</div>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    onClick={() => setIsEditing(!isEditing)}
                    className="flex items-center gap-2"
                  >
                    <Edit3 className="h-4 w-4" />
                    Edit Profile
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Settings className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Profile Tabs */}
          <Tabs defaultValue="personal" className="w-full">
            <TabsList className="grid w-full grid-cols-6">
              <TabsTrigger value="personal">Personal</TabsTrigger>
              <TabsTrigger value="goals">Goals</TabsTrigger>
              <TabsTrigger value="certificates">Certificates</TabsTrigger>
              <TabsTrigger value="subscription">Subscription</TabsTrigger>
              <TabsTrigger value="preferences">Settings</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
            </TabsList>

            <TabsContent value="personal" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>Manage your account details and profile</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input
                        id="fullName"
                        defaultValue={userProfile.name}
                        disabled={!isEditing}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        defaultValue={userProfile.email}
                        disabled={!isEditing}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        defaultValue={userProfile.phone}
                        disabled={!isEditing}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Input
                        id="location"
                        defaultValue={userProfile.location}
                        disabled={!isEditing}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <textarea
                      id="bio"
                      className="w-full min-h-20 px-3 py-2 text-sm bg-background border border-input rounded-md disabled:cursor-not-allowed disabled:opacity-50"
                      defaultValue={userProfile.bio}
                      disabled={!isEditing}
                    />
                  </div>

                  {isEditing && (
                    <div className="flex gap-3">
                      <Button variant="hero">Save Changes</Button>
                      <Button variant="outline" onClick={() => setIsEditing(false)}>
                        Cancel
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="goals" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Learning Goals</CardTitle>
                  <CardDescription>Track your progress toward your learning objectives</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {learningGoals.map((goal) => (
                    <div key={goal.id} className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold">{goal.title}</h4>
                        <Badge variant="outline">{goal.progress}%</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Target: {goal.target} • Deadline: {new Date(goal.deadline).toLocaleDateString()}
                      </p>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="progress-bar h-2 rounded-full"
                          style={{ width: `${goal.progress}%` }}
                        />
                      </div>
                    </div>
                  ))}
                  
                  <Button variant="outline" className="w-full">
                    <Trophy className="h-4 w-4 mr-2" />
                    Add New Goal
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="certificates" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Earned Certificates</CardTitle>
                  <CardDescription>Your verified course completion certificates</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {certificates.map((cert) => (
                    <div key={cert.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-success/10 rounded-lg">
                          <Trophy className="h-6 w-6 text-success" />
                        </div>
                        <div>
                          <h4 className="font-semibold">{cert.course}</h4>
                          <p className="text-sm text-muted-foreground">
                            Issued {new Date(cert.issueDate).toLocaleDateString()} • ID: {cert.credentialId}
                          </p>
                          {cert.verified && (
                            <Badge variant="outline" className="bg-success/10 border-success/30 text-success mt-1">
                              Verified
                            </Badge>
                          )}
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="subscription" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Subscription Plan</CardTitle>
                  <CardDescription>Manage your subscription and billing</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between p-6 bg-primary/5 border border-primary/20 rounded-lg">
                    <div>
                      <h3 className="text-lg font-semibold">{subscriptionPlan.name}</h3>
                      <p className="text-2xl font-bold text-primary">{subscriptionPlan.price}</p>
                      <Badge className="bg-success text-success-foreground mt-2">
                        {subscriptionPlan.status}
                      </Badge>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Next billing</p>
                      <p className="font-semibold">{subscriptionPlan.nextBilling}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Plan Features</h4>
                    <ul className="space-y-2">
                      {subscriptionPlan.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm">
                          <div className="w-2 h-2 bg-success rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="font-semibold mb-3">Payment Methods</h4>
                    <div className="space-y-3">
                      {paymentMethods.map((method) => (
                        <div key={method.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                          <div className="flex items-center gap-3">
                            <CreditCard className="h-5 w-5 text-muted-foreground" />
                            <div>
                              {method.type === 'credit' ? (
                                <>
                                  <p className="font-medium">{method.brand} •••• {method.last4}</p>
                                  <p className="text-sm text-muted-foreground">Expires {method.expiry}</p>
                                </>
                              ) : (
                                <p className="font-medium">PayPal - {method.email}</p>
                              )}
                            </div>
                          </div>
                          {method.isDefault && (
                            <Badge variant="outline">Default</Badge>
                          )}
                        </div>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full mt-3">
                      Add Payment Method
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="preferences" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Notification Preferences</CardTitle>
                  <CardDescription>Choose how you'd like to be notified</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Email Notifications</p>
                      <p className="text-sm text-muted-foreground">Receive course updates via email</p>
                    </div>
                    <Switch defaultChecked={preferences.emailNotifications} />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Push Notifications</p>
                      <p className="text-sm text-muted-foreground">Get notified on your devices</p>
                    </div>
                    <Switch defaultChecked={preferences.pushNotifications} />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Weekly Digest</p>
                      <p className="text-sm text-muted-foreground">Summary of your weekly progress</p>
                    </div>
                    <Switch defaultChecked={preferences.weeklyDigest} />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Course Reminders</p>
                      <p className="text-sm text-muted-foreground">Reminders to continue learning</p>
                    </div>
                    <Switch defaultChecked={preferences.courseReminders} />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Achievement Alerts</p>
                      <p className="text-sm text-muted-foreground">Celebrate your accomplishments</p>
                    </div>
                    <Switch defaultChecked={preferences.achievementAlerts} />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>General Preferences</CardTitle>
                  <CardDescription>Customize your learning experience</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label>Language</Label>
                      <select className="w-full px-3 py-2 text-sm bg-background border border-input rounded-md">
                        <option>English</option>
                        <option>Spanish</option>
                        <option>French</option>
                        <option>German</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label>Timezone</Label>
                      <select className="w-full px-3 py-2 text-sm bg-background border border-input rounded-md">
                        <option>PST (UTC-8)</option>
                        <option>EST (UTC-5)</option>
                        <option>GMT (UTC+0)</option>
                        <option>CET (UTC+1)</option>
                      </select>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="security" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Security Settings</CardTitle>
                  <CardDescription>Keep your account safe and secure</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div>
                        <p className="font-medium">Change Password</p>
                        <p className="text-sm text-muted-foreground">Update your account password</p>
                      </div>
                      <Button variant="outline">Change</Button>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div>
                        <p className="font-medium">Two-Factor Authentication</p>
                        <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
                      </div>
                      <Button variant="outline">Enable</Button>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div>
                        <p className="font-medium">Login History</p>
                        <p className="text-sm text-muted-foreground">View recent login activity</p>
                      </div>
                      <Button variant="outline">View</Button>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div>
                        <p className="font-medium">Connected Devices</p>
                        <p className="text-sm text-muted-foreground">Manage devices with access to your account</p>
                      </div>
                      <Button variant="outline">Manage</Button>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h4 className="font-semibold text-destructive">Danger Zone</h4>
                    <div className="p-4 border border-destructive/30 rounded-lg">
                      <p className="font-medium text-destructive mb-2">Delete Account</p>
                      <p className="text-sm text-muted-foreground mb-4">
                        Permanently delete your account and all associated data. This action cannot be undone.
                      </p>
                      <Button variant="destructive">Delete Account</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Profile;