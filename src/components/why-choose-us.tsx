import { Card } from "@/components/ui/card"

const whyChooseUs = [
  {
    number: "01",
    title: "The Perfect Blend of Theory & Practice",
    description:
      "Most sheets either overload you with theory or drown you in endless problems. Arnocodes strikes the perfect balance between concise explanations and must-solve problems, so you understand the “why” behind every concept.",
  },
  {
    number: "02",
    title: "No More 'Where Do I Start?' Confusion",
    description:
      "Beginners often struggle with which problem to solve first or which topic to focus on. Our sheet provides a clear, progressive path, ensuring you build strong fundamentals before tackling advanced problems.",
  },
  {
    number: "03",
    title: "Beyond Just DSA – Real-World Application",
    description:
      "DSA is not just about solving problems but applying concepts in real-world scenarios. Our sheet integrates mini-projects, debugging techniques, and optimization tricks to help you ace both interviews and development.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-arno-dark-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">Why choose us?</h2>
        <p className="text-lg sm:text-xl text-gray-400 text-center mb-8 sm:mb-12">
          Unlock Your Potential with Our Comprehensive Learning Approach
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {whyChooseUs.map((item, index) => (
            <Card key={index} className="bg-arno-dark-700 border-arno-dark-600 p-6">
              <div className="text-3xl sm:text-4xl font-bold text-arno-blue-400 mb-4">{item.number}</div>
              <h3 className="text-xl font-bold text-red-500 mb-4">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

