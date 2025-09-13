import { useState } from "react";
import { 
  User, 
  Bell, 
  Shield, 
  Palette, 
  Globe, 
  CreditCard, 
  Download,
  Trash2,
  Brain,
  Volume2,
  Moon,
  Sun,
  Smartphone,
  Mail,
  MessageSquare,
  Zap,
  Crown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Navigation from "@/components/Navigation";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [isDarkMode, setIsDarkMode] = useState(true);

  const settingsSections = [
    { id: "profile", label: "Profile", icon: User },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "learning", label: "Learning", icon: Brain },
    { id: "appearance", label: "Appearance", icon: Palette },
    { id: "privacy", label: "Privacy & Security", icon: Shield },
    { id: "billing", label: "Billing", icon: CreditCard },
    { id: "data", label: "Data & Storage", icon: Download },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Settings</h1>
            <p className="text-muted-foreground text-lg">
              Customize your learning experience and account preferences
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Settings Navigation */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardContent className="p-4">
                  <nav className="space-y-2">
                    {settingsSections.map((section) => {
                      const Icon = section.icon;
                      return (
                        <Button
                          key={section.id}
                          variant={activeTab === section.id ? "secondary" : "ghost"}
                          className="w-full justify-start"
                          onClick={() => setActiveTab(section.id)}
                        >
                          <Icon className="h-4 w-4 mr-3" />
                          {section.label}
                        </Button>
                      );
                    })}
                  </nav>
                </CardContent>
              </Card>
            </div>

            {/* Settings Content */}
            <div className="lg:col-span-3 space-y-6">
              {/* Profile Settings */}
              {activeTab === "profile" && (
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Profile Information</CardTitle>
                      <CardDescription>
                        Update your personal information and profile details
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="flex items-center gap-6">
                        <Avatar className="h-20 w-20">
                          <AvatarImage src="/placeholder-avatar.jpg" />
                          <AvatarFallback className="text-lg">JD</AvatarFallback>
                        </Avatar>
                        <div className="space-y-2">
                          <Button variant="outline">Change Photo</Button>
                          <Button variant="ghost" size="sm" className="text-destructive">
                            Remove Photo
                          </Button>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input id="firstName" defaultValue="John" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input id="lastName" defaultValue="Doe" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" defaultValue="john.doe@example.com" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="bio">Bio</Label>
                        <Textarea 
                          id="bio" 
                          placeholder="Tell us about yourself..."
                          className="min-h-20"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="location">Location</Label>
                        <Input id="location" placeholder="City, Country" />
                      </div>

                      <Button variant="hero">Save Changes</Button>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Notifications Settings */}
              {activeTab === "notifications" && (
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Notification Preferences</CardTitle>
                      <CardDescription>
                        Choose how you want to be notified about your learning progress
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <Mail className="h-4 w-4 text-primary" />
                              <span className="font-medium">Email Notifications</span>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              Receive updates about courses and progress via email
                            </p>
                          </div>
                          <Switch defaultChecked />
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <Smartphone className="h-4 w-4 text-primary" />
                              <span className="font-medium">Push Notifications</span>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              Get real-time notifications on your device
                            </p>
                          </div>
                          <Switch defaultChecked />
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <MessageSquare className="h-4 w-4 text-primary" />
                              <span className="font-medium">Course Updates</span>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              New lessons, assignments, and course announcements
                            </p>
                          </div>
                          <Switch defaultChecked />
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <Zap className="h-4 w-4 text-primary" />
                              <span className="font-medium">Learning Reminders</span>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              Daily study reminders and streak notifications
                            </p>
                          </div>
                          <Switch />
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <Volume2 className="h-4 w-4 text-primary" />
                              <span className="font-medium">Sound Effects</span>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              Audio feedback for achievements and progress
                            </p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Learning Settings */}
              {activeTab === "learning" && (
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>AI Learning Preferences</CardTitle>
                      <CardDescription>
                        Customize how AI adapts to your learning style
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label>Learning Pace</Label>
                          <Select defaultValue="moderate">
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="slow">Slow & Steady</SelectItem>
                              <SelectItem value="moderate">Moderate</SelectItem>
                              <SelectItem value="fast">Fast Track</SelectItem>
                              <SelectItem value="adaptive">AI Adaptive</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label>Difficulty Preference</Label>
                          <Select defaultValue="adaptive">
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="beginner">Beginner Friendly</SelectItem>
                              <SelectItem value="intermediate">Intermediate</SelectItem>
                              <SelectItem value="advanced">Advanced</SelectItem>
                              <SelectItem value="adaptive">AI Adaptive</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label>Study Session Length</Label>
                          <Select defaultValue="30">
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="15">15 minutes</SelectItem>
                              <SelectItem value="30">30 minutes</SelectItem>
                              <SelectItem value="45">45 minutes</SelectItem>
                              <SelectItem value="60">1 hour</SelectItem>
                              <SelectItem value="custom">Custom</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <span className="font-medium">Smart Suggestions</span>
                            <p className="text-sm text-muted-foreground">
                              Let AI suggest courses based on your interests
                            </p>
                          </div>
                          <Switch defaultChecked />
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <span className="font-medium">Adaptive Quizzes</span>
                            <p className="text-sm text-muted-foreground">
                              Automatically adjust quiz difficulty based on performance
                            </p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Appearance Settings */}
              {activeTab === "appearance" && (
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Appearance & Display</CardTitle>
                      <CardDescription>
                        Customize the look and feel of your learning environment
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label>Theme</Label>
                          <div className="grid grid-cols-3 gap-3">
                            <Button 
                              variant={isDarkMode ? "secondary" : "outline"}
                              className="flex items-center gap-2 h-auto p-4"
                              onClick={() => setIsDarkMode(true)}
                            >
                              <Moon className="h-4 w-4" />
                              <div className="text-left">
                                <div className="font-medium">Dark</div>
                                <div className="text-xs text-muted-foreground">Easy on eyes</div>
                              </div>
                            </Button>
                            <Button 
                              variant={!isDarkMode ? "secondary" : "outline"}
                              className="flex items-center gap-2 h-auto p-4"
                              onClick={() => setIsDarkMode(false)}
                            >
                              <Sun className="h-4 w-4" />
                              <div className="text-left">
                                <div className="font-medium">Light</div>
                                <div className="text-xs text-muted-foreground">Bright & clean</div>
                              </div>
                            </Button>
                            <Button 
                              variant="outline"
                              className="flex items-center gap-2 h-auto p-4"
                            >
                              <Palette className="h-4 w-4" />
                              <div className="text-left">
                                <div className="font-medium">Auto</div>
                                <div className="text-xs text-muted-foreground">System</div>
                              </div>
                            </Button>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label>Language</Label>
                          <Select defaultValue="en">
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="en">English</SelectItem>
                              <SelectItem value="es">Español</SelectItem>
                              <SelectItem value="fr">Français</SelectItem>
                              <SelectItem value="de">Deutsch</SelectItem>
                              <SelectItem value="zh">中文</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label>Font Size</Label>
                          <Select defaultValue="medium">
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="small">Small</SelectItem>
                              <SelectItem value="medium">Medium</SelectItem>
                              <SelectItem value="large">Large</SelectItem>
                              <SelectItem value="xl">Extra Large</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <span className="font-medium">Animations</span>
                            <p className="text-sm text-muted-foreground">
                              Enable smooth transitions and effects
                            </p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Privacy & Security */}
              {activeTab === "privacy" && (
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Privacy & Security</CardTitle>
                      <CardDescription>
                        Manage your privacy settings and account security
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label>Change Password</Label>
                          <div className="space-y-3">
                            <Input type="password" placeholder="Current password" />
                            <Input type="password" placeholder="New password" />
                            <Input type="password" placeholder="Confirm new password" />
                            <Button variant="outline" size="sm">Update Password</Button>
                          </div>
                        </div>

                        <Separator />

                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <span className="font-medium">Two-Factor Authentication</span>
                            <p className="text-sm text-muted-foreground">
                              Add an extra layer of security to your account
                            </p>
                          </div>
                          <Button variant="outline" size="sm">Enable</Button>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <span className="font-medium">Profile Visibility</span>
                            <p className="text-sm text-muted-foreground">
                              Control who can see your learning progress
                            </p>
                          </div>
                          <Select defaultValue="private">
                            <SelectTrigger className="w-32">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="public">Public</SelectItem>
                              <SelectItem value="friends">Friends</SelectItem>
                              <SelectItem value="private">Private</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <span className="font-medium">Data Analytics</span>
                            <p className="text-sm text-muted-foreground">
                              Help improve our AI by sharing learning patterns
                            </p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Billing Settings */}
              {activeTab === "billing" && (
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Crown className="h-5 w-5 text-primary" />
                        Subscription Plan
                      </CardTitle>
                      <CardDescription>
                        Manage your subscription and billing information
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium">Pro Plan</span>
                          <Badge variant="secondary">Active</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">
                          Unlimited courses, AI-powered features, and priority support
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold">$19.99/month</span>
                          <Button variant="outline" size="sm">Change Plan</Button>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="font-medium">Next billing date</span>
                            <p className="text-sm text-muted-foreground">December 15, 2024</p>
                          </div>
                          <Button variant="ghost" size="sm">View Invoice</Button>
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <span className="font-medium">Payment method</span>
                            <p className="text-sm text-muted-foreground">•••• •••• •••• 1234</p>
                          </div>
                          <Button variant="ghost" size="sm">Update</Button>
                        </div>
                      </div>

                      <Separator />

                      <div className="space-y-3">
                        <Button variant="outline" className="w-full">
                          <Download className="h-4 w-4 mr-2" />
                          Download Receipt
                        </Button>
                        <Button variant="ghost" className="w-full text-destructive">
                          Cancel Subscription
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Data & Storage */}
              {activeTab === "data" && (
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Data & Storage</CardTitle>
                      <CardDescription>
                        Manage your data, storage, and account deletion
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <div className="p-4 rounded-lg bg-muted/50">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-medium">Storage Used</span>
                            <span className="text-sm text-muted-foreground">2.4 GB of 5 GB</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div className="bg-primary h-2 rounded-full" style={{ width: '48%' }}></div>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <Button variant="outline" className="w-full justify-start">
                            <Download className="h-4 w-4 mr-2" />
                            Export Learning Data
                          </Button>
                          <Button variant="outline" className="w-full justify-start">
                            <Download className="h-4 w-4 mr-2" />
                            Download Progress Report
                          </Button>
                          <Button variant="outline" className="w-full justify-start">
                            <Globe className="h-4 w-4 mr-2" />
                            Data Processing Settings
                          </Button>
                        </div>

                        <Separator />

                        <div className="space-y-3">
                          <h4 className="font-medium text-destructive">Danger Zone</h4>
                          <p className="text-sm text-muted-foreground">
                            These actions are permanent and cannot be undone.
                          </p>
                          <Button variant="destructive" className="w-full">
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete Account
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;