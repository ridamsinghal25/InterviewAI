import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Brain,
  Clock,
  Code,
  FileText,
  Lightbulb,
  MessageSquare,
  Mic,
  Zap,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Brain className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Brainy AI</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#features"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              How It Works
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/dashboard">
              <Button variant="outline">Sign In</Button>
            </Link>
            <Link href="/dashboard">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-28">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge className="inline-block mb-2" variant="outline">
                    AI-Powered Interview Practice
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Ace Your Next Job Interview with AI
                  </h1>
                  <p className="text-muted-foreground md:text-xl">
                    Practice with realistic interview questions tailored to your
                    job role, experience level, and tech stack.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/dashboard">
                    <Button size="lg" className="group">
                      Start Practicing Now
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                  <Link href="#how-it-works">
                    <Button size="lg" variant="outline">
                      How It Works
                    </Button>
                  </Link>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Zap className="h-4 w-4" />
                    <span>AI-Generated Questions</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FileText className="h-4 w-4" />
                    <span>Detailed Answers</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>Practice Anytime</span>
                  </div>
                </div>
              </div>
              <div className="relative lg:ml-auto">
                <div className="relative overflow-hidden rounded-xl border bg-background p-2">
                  <div className="rounded-lg bg-secondary p-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Brain className="h-5 w-5 text-primary" />
                          <h3 className="font-semibold">
                            AI Interview Session
                          </h3>
                        </div>
                        <div className="rounded-lg border bg-card p-3">
                          <p className="font-medium">
                            Tell me about your experience with React hooks.
                          </p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Mic className="h-5 w-5 text-green-500" />
                          <h3 className="font-semibold">Your Answer</h3>
                        </div>
                        <div className="rounded-lg border bg-card p-3">
                          <p className="text-muted-foreground">
                            I've been working with React hooks for 3 years,
                            primarily using useState, useEffect, and
                            useContext...
                          </p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Lightbulb className="h-5 w-5 text-amber-500" />
                          <h3 className="font-semibold">AI Feedback</h3>
                        </div>
                        <div className="rounded-lg border bg-card p-3">
                          <p className="text-muted-foreground">
                            Good answer! Consider also mentioning custom hooks
                            you've created and how they improved code
                            reusability.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 bg-secondary/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="mb-2" variant="outline">
                  Features
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Why Choose Brainy AI?
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our AI-powered platform helps you prepare for technical
                  interviews with personalized questions and feedback.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              <Card className="transition-all hover:shadow-md">
                <CardHeader>
                  <div className="p-2 rounded-lg bg-primary/10 w-fit">
                    <Brain className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="mt-4">AI-Generated Questions</CardTitle>
                  <CardDescription>
                    Get realistic interview questions tailored to your job role
                    and experience level.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="transition-all hover:shadow-md">
                <CardHeader>
                  <div className="p-2 rounded-lg bg-primary/10 w-fit">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Tech Stack Specific</CardTitle>
                  <CardDescription>
                    Practice with questions relevant to your specific
                    technologies and frameworks.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="transition-all hover:shadow-md">
                <CardHeader>
                  <div className="p-2 rounded-lg bg-primary/10 w-fit">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Detailed Answers</CardTitle>
                  <CardDescription>
                    Access comprehensive answers to help you understand key
                    concepts.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="transition-all hover:shadow-md">
                <CardHeader>
                  <div className="p-2 rounded-lg bg-primary/10 w-fit">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Practice Anytime</CardTitle>
                  <CardDescription>
                    Prepare for interviews on your schedule, 24/7, from
                    anywhere.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="transition-all hover:shadow-md">
                <CardHeader>
                  <div className="p-2 rounded-lg bg-primary/10 w-fit">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Track Progress</CardTitle>
                  <CardDescription>
                    Review your past interview sessions and track your
                    improvement over time.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="transition-all hover:shadow-md">
                <CardHeader>
                  <div className="p-2 rounded-lg bg-primary/10 w-fit">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Instant Feedback</CardTitle>
                  <CardDescription>
                    Get immediate feedback on your answers to improve your
                    interview skills.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="mb-2" variant="outline">
                  Process
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  How It Works
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get started with Brainy AI in just a few simple steps.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-bold">Enter Job Details</h3>
                <p className="text-muted-foreground">
                  Provide your job role, tech stack, and years of experience to
                  get tailored questions.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-bold">Practice with AI</h3>
                <p className="text-muted-foreground">
                  Go through AI-generated interview questions specific to your
                  profile.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-bold">Review & Improve</h3>
                <p className="text-muted-foreground">
                  Study the detailed answers and practice regularly to improve
                  your skills.
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-12">
              <Link href="/dashboard">
                <Button size="lg">
                  Start Your First Interview
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Ace Your Next Interview?
                </h2>
                <p className="max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Start practicing with Brainy AI today and land your dream job.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <Link href="/dashboard">
                  <Button size="lg" variant="secondary" className="group">
                    Get Started for Free
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-primary" />
            <p className="text-sm text-muted-foreground">
              © 2025 Brainy AI. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Terms
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
