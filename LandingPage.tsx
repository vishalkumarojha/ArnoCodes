import React from "react"
import { Button } from "./src/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./src/components/ui/accordion"

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-background sticky top-0 z-10 border-b">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">CodeMasters</div>
          <ul className="flex space-x-4">
            <li>
              <a href="#about" className="hover:text-primary">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-primary">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-primary">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary-foreground text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Take Your Coding Skills to the Next Level</h1>
            <p className="text-xl mb-8">Learn to code from industry experts and build real-world projects</p>
            <Button size="lg">Sign Up for Free</Button>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Expert Instructors</h3>
                <p>Learn from experienced developers who work in top tech companies</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Hands-on Projects</h3>
                <p>Build real-world applications to add to your portfolio</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Job Support</h3>
                <p>Get career guidance and job placement assistance</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Students Say</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <blockquote className="bg-background p-6 rounded-lg shadow">
                <p className="mb-4">
                  "CodeMasters helped me land my dream job as a frontend developer. The instructors were amazing and the
                  projects were challenging and fun!"
                </p>
                <footer className="font-semibold">- Sarah J., Software Engineer</footer>
              </blockquote>
              <blockquote className="bg-background p-6 rounded-lg shadow">
                <p className="mb-4">
                  "I started with zero coding knowledge, and now I'm building full-stack applications. CodeMasters
                  changed my life!"
                </p>
                <footer className="font-semibold">- Mike T., Full-Stack Developer</footer>
              </blockquote>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
              <AccordionItem value="item-1">
                <AccordionTrigger>Do I need prior coding experience?</AccordionTrigger>
                <AccordionContent>
                  No, our courses are designed for beginners and experienced coders alike. We have tracks for all skill
                  levels.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How long does it take to complete a course?</AccordionTrigger>
                <AccordionContent>
                  Course duration varies, but most of our programs can be completed in 12-16 weeks if you dedicate 15-20
                  hours per week.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is there a money-back guarantee?</AccordionTrigger>
                <AccordionContent>
                  Yes, we offer a 30-day money-back guarantee if you're not satisfied with our program.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </main>

      <footer className="bg-muted py-8 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 CodeMasters. All rights reserved.</p>
          <p className="mt-2">Contact us: info@codemasters.com</p>
        </div>
      </footer>
    </div>
  )
}

