import { Link } from "react-router";
import { CheckCircle, Code, Users, Zap, ChevronRight, Star, Calendar, Trophy, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

export default function CodingBootcampLanding() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge className="inline-flex mb-2">Enrollment Open</Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Launch Your Coding Career in Just 12 Weeks</h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">Join our immersive bootcamp and transform from beginner to job-ready developer with hands-on projects, expert mentorship, and career support.</p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="gap-1">
                    Apply Now <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    View Curriculum
                  </Button>
                </div>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex -space-x-2">
                    <img src="https://randomuser.me/api/portraits/women/17.jpg" width={40} height={40} alt="Graduate" className="rounded-full border-2 border-background object-cover" />
                    <img src="https://randomuser.me/api/portraits/men/4.jpg" width={40} height={40} alt="Graduate" className="rounded-full border-2 border-background object-cover" />
                    <img src="https://randomuser.me/api/portraits/women/3.jpg" width={40} height={40} alt="Graduate" className="rounded-full border-2 border-background object-cover" />
                  </div>
                  <div className="text-muted-foreground">
                    Join <span className="font-medium text-foreground">2,500+</span> graduates working at top tech companies
                  </div>
                </div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                width={550}
                height={550}
                alt="Students collaborating on code"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:aspect-square"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Why Choose Us</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Designed for Your Success</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">Our bootcamp is built to transform beginners into professional developers through practical learning and real-world projects.</p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="pb-2">
                  <Zap className="h-6 w-6 text-primary mb-2" />
                  <CardTitle>Accelerated Learning</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Learn in 12 weeks what would take years through traditional education with our focused curriculum.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <Users className="h-6 w-6 text-primary mb-2" />
                  <CardTitle>Expert Instructors</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Learn from industry professionals with years of experience at top tech companies.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <Code className="h-6 w-6 text-primary mb-2" />
                  <CardTitle>Project-Based</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Build a professional portfolio with real-world projects that employers are looking for.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <Calendar className="h-6 w-6 text-primary mb-2" />
                  <CardTitle>Flexible Schedule</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Choose between full-time, part-time, and weekend cohorts to fit your lifestyle.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <Trophy className="h-6 w-6 text-primary mb-2" />
                  <CardTitle>Career Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Get resume reviews, interview prep, and job placement assistance after graduation.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CheckCircle className="h-6 w-6 text-primary mb-2" />
                  <CardTitle>Job Guarantee</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">If you don't find a job within 6 months of graduating, we'll refund your tuition.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Curriculum Section */}
        <section id="curriculum" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Curriculum</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Comprehensive Learning Path</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">Our curriculum is designed by industry experts to cover everything you need to become a full-stack developer.</p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl py-12">
              <Tabs defaultValue="fullstack" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="fullstack">Full-Stack</TabsTrigger>
                  <TabsTrigger value="frontend">Front-End</TabsTrigger>
                  <TabsTrigger value="backend">Back-End</TabsTrigger>
                </TabsList>
                <TabsContent value="fullstack" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Full-Stack Web Development</CardTitle>
                      <CardDescription>12-week immersive program</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <h3 className="font-medium">Phase 1: Foundations (Weeks 1-4)</h3>
                        <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                          <li>HTML, CSS, and JavaScript fundamentals</li>
                          <li>Git version control and GitHub collaboration</li>
                          <li>Responsive design principles</li>
                          <li>Modern JavaScript (ES6+) and DOM manipulation</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-medium">Phase 2: Front-End (Weeks 5-8)</h3>
                        <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                          <li>React.js and component-based architecture</li>
                          <li>State management with Redux</li>
                          <li>API integration and asynchronous JavaScript</li>
                          <li>Testing with Jest and React Testing Library</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-medium">Phase 3: Back-End (Weeks 9-12)</h3>
                        <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                          <li>Node.js and Express.js</li>
                          <li>Database design with MongoDB and SQL</li>
                          <li>Authentication and authorization</li>
                          <li>Deployment and DevOps basics</li>
                        </ul>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Download Full Syllabus</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
                <TabsContent value="frontend" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Front-End Development</CardTitle>
                      <CardDescription>8-week specialized program</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <h3 className="font-medium">Phase 1: Foundations (Weeks 1-2)</h3>
                        <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                          <li>HTML5 semantic markup</li>
                          <li>CSS3, Flexbox, and Grid</li>
                          <li>JavaScript fundamentals and ES6+</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-medium">Phase 2: Modern Front-End (Weeks 3-5)</h3>
                        <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                          <li>React.js and hooks</li>
                          <li>State management (Context API, Redux)</li>
                          <li>Styling with Tailwind CSS and CSS-in-JS</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-medium">Phase 3: Advanced Topics (Weeks 6-8)</h3>
                        <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                          <li>Performance optimization</li>
                          <li>TypeScript integration</li>
                          <li>Next.js and server-side rendering</li>
                        </ul>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Download Full Syllabus</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
                <TabsContent value="backend" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Back-End Development</CardTitle>
                      <CardDescription>8-week specialized program</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <h3 className="font-medium">Phase 1: Server Fundamentals (Weeks 1-2)</h3>
                        <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                          <li>Node.js basics and npm ecosystem</li>
                          <li>Express.js framework</li>
                          <li>RESTful API design principles</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-medium">Phase 2: Data & Authentication (Weeks 3-5)</h3>
                        <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                          <li>MongoDB and Mongoose ODM</li>
                          <li>SQL databases with PostgreSQL</li>
                          <li>JWT authentication and authorization</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-medium">Phase 3: Advanced Topics (Weeks 6-8)</h3>
                        <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                          <li>GraphQL API development</li>
                          <li>Microservices architecture</li>
                          <li>Docker and deployment strategies</li>
                        </ul>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Download Full Syllabus</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Testimonials</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Success Stories from Our Graduates</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">Hear from our alumni who have transformed their careers through our bootcamp.</p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-muted/50">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <img src="https://randomuser.me/api/portraits/women/44.jpg" width={60} height={60} alt="Sarah Johnson" className="rounded-full object-cover" />
                    <div>
                      <CardTitle className="text-lg">Sarah Johnson</CardTitle>
                      <CardDescription>Software Engineer at Google</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    "Before the bootcamp, I was working in retail with no coding experience. Within 3 months of graduating, I landed a job at Google. The curriculum was challenging but the instructors were incredibly supportive."
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-muted/50">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <img src="https://randomuser.me/api/portraits/men/32.jpg" width={60} height={60} alt="Michael Chen" className="rounded-full object-cover" />
                    <div>
                      <CardTitle className="text-lg">Michael Chen</CardTitle>
                      <CardDescription>Frontend Developer at Spotify</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    "The project-based approach gave me a strong portfolio that impressed interviewers. The career services team helped me negotiate a salary that was $15K higher than the initial offer."
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-muted/50">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <img src="https://randomuser.me/api/portraits/women/68.jpg" width={60} height={60} alt="Jessica Patel" className="rounded-full object-cover" />
                    <div>
                      <CardTitle className="text-lg">Jessica Patel</CardTitle>
                      <CardDescription>Full-Stack Developer at Shopify</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground">"As a career changer from marketing, I was worried about the transition. The bootcamp provided a structured path and mentorship that made the journey manageable and even enjoyable."</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Pricing</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Invest in Your Future</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">Flexible payment options to make your career transition affordable.</p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle>Part-Time</CardTitle>
                  <div className="text-3xl font-bold">$8,500</div>
                  <CardDescription>24-week evening & weekend program</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {["10 hours/week in-class instruction", "24 weeks of learning", "Same curriculum as full-time", "Perfect for working professionals"].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
              <Card className="border-2 border-primary relative">
                <div className="absolute top-0 right-0 rounded-bl-lg rounded-tr-lg bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">Most Popular</div>
                <CardHeader>
                  <CardTitle>Full-Time</CardTitle>
                  <div className="text-3xl font-bold">$12,500</div>
                  <CardDescription>12-week immersive program</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {["40 hours/week in-class instruction", "12 weeks of learning", "1:1 career coaching", "Job guarantee or money back"].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Apply Now</Button>
                </CardFooter>
              </Card>
              <Card className="border-2">
                <CardHeader>
                  <CardTitle>Self-Paced</CardTitle>
                  <div className="text-3xl font-bold">$6,500</div>
                  <CardDescription>Learn at your own pace</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {["Access to all course materials", "Weekly mentor sessions", "Community access", "6 months of access"].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            </div>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-muted-foreground mb-4">All plans include access to our online learning platform, project reviews, and career services.</p>
              <div className="flex flex-col gap-2 sm:flex-row justify-center">
                <Button variant="outline">Payment Plans Available</Button>
                <Button variant="link">Learn about our scholarships</Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">FAQ</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Frequently Asked Questions</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">Find answers to common questions about our bootcamp.</p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl py-12">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Do I need prior coding experience?</AccordionTrigger>
                  <AccordionContent>
                    No prior coding experience is required for our bootcamp. We start with the fundamentals and gradually build up to more advanced concepts. However, we do recommend completing our free prep course before starting to ensure
                    you have a solid foundation.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>What is the job placement rate?</AccordionTrigger>
                  <AccordionContent>
                    Our job placement rate is 93% within 6 months of graduation. We have a dedicated career services team that works with you on resume building, interview preparation, and job search strategies. We also have partnerships
                    with over 250 companies that regularly hire our graduates.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>How does the application process work?</AccordionTrigger>
                  <AccordionContent>
                    The application process consists of three steps: an online application, a technical assessment (don't worry, it's designed for beginners), and an interview with our admissions team. The entire process typically takes 1-2
                    weeks, and we provide feedback regardless of the outcome.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Are there any financing options available?</AccordionTrigger>
                  <AccordionContent>
                    Yes, we offer several financing options including income share agreements (ISA), monthly payment plans, and loan partnerships with Climb Credit and Ascent. We also offer scholarships for underrepresented groups in tech
                    and veterans.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>What kind of support do students receive?</AccordionTrigger>
                  <AccordionContent>
                    Students receive comprehensive support including access to instructors during class hours, teaching assistants available for after-hours support, weekly one-on-one mentoring sessions, and lifetime access to our alumni
                    network and learning resources. We also provide mental health resources and regular check-ins to ensure you're progressing well.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger>Can I attend the bootcamp remotely?</AccordionTrigger>
                  <AccordionContent>
                    Yes, we offer both in-person and remote options for all our bootcamp programs. Our remote program provides the same curriculum, instructor support, and career services as our in-person program. We use a combination of
                    live video instruction, collaborative coding platforms, and virtual office hours to create an engaging remote learning experience.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Ready to Start Your Coding Journey?</h2>
                <p className="mx-auto max-w-[700px] md:text-xl">Applications for our next cohort are now open. Spots fill up quickly, so apply today to secure your place.</p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" variant="secondary" className="gap-1">
                  Apply Now <ChevronRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Schedule a Call
                </Button>
              </div>
              <p className="text-sm">Next cohort starts on {new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString()}. Limited seats available.</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background py-6 md:py-12">
        <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6 md:flex-row md:justify-between">
          <div className="flex flex-col items-center gap-4 md:items-start md:gap-2">
            <div className="flex gap-2 items-center text-xl font-bold">
              <Code className="h-6 w-6" />
              <span>CodeCraft Academy</span>
            </div>
            <p className="text-center text-sm text-muted-foreground md:text-left">&copy; {new Date().getFullYear()} CodeCraft Academy. All rights reserved.</p>
          </div>
          <div className="flex gap-4 sm:gap-6">
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-medium">Programs</h3>
              <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
                <Link to="#" className="hover:underline">
                  Full-Stack
                </Link>
                <Link to="#" className="hover:underline">
                  Front-End
                </Link>
                <Link to="#" className="hover:underline">
                  Back-End
                </Link>
              </nav>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-medium">Company</h3>
              <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
                <Link to="#" className="hover:underline">
                  About
                </Link>
                <Link to="#" className="hover:underline">
                  Blog
                </Link>
                <Link to="#" className="hover:underline">
                  Careers
                </Link>
              </nav>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-medium">Legal</h3>
              <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
                <Link to="#" className="hover:underline">
                  Privacy
                </Link>
                <Link to="#" className="hover:underline">
                  Terms
                </Link>
                <Link to="#" className="hover:underline">
                  Cookies
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
