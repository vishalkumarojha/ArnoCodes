import { Button } from "@/components/ui/button"
import { WhatWeDo } from "@/components/wedo"
import { WhyChooseUs } from "@/components/why-choose-us"
import { FAQSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { WelcomeModal } from "@/components/WelcomeModal"
import { PreLoader } from "@/components/PreLoader"
import { LoadingProvider } from "@/components/LoadingContext"
import { Link } from "react-router-dom"

export default function HomePage() {
  return (
    <LoadingProvider>
      <main className="text-white">
        <PreLoader />
        <WelcomeModal />
        {/* Hero Section */}
        <section className="min-h-[80vh] flex flex-col items-center justify-center py-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-arno-blue-400/10 to-transparent" />
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 tracking-tight">
              <span className="text-arno-blue-400">&lt;</span>ArnoCodes<span className="text-arno-blue-400">&gt;</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-gray-300">
              Empowering developers to master Data Structures, Algorithms, and advance their coding careers through
              expert-led learning and practice
            </p>
            <div className="flex justify-center">
              <Link to="/courses">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-arno-dark-800 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 h-auto"
                >
                  Start Learning
                </Button>
              </Link>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-arno-dark-900 to-transparent" />
        </section>

        {/* What We Do Section */}
        <WhatWeDo />

        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* FAQ Section */}
        <FAQSection />

        {/* Still Have Questions Section */}
        <ContactSection />
      </main>
    </LoadingProvider>
  )
}

