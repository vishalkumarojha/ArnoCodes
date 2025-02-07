import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { ClipboardList } from "lucide-react"

export function ContactSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-arno-dark-800 text-center">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-6">
          <div className="flex -space-x-4">
          <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-02%20015745-wrHlRT6CEoKhZnKzxr5q8AX3VHLYmj.png"
              alt="Team member 1"
              className="w-16 h-16 rounded-full border-2 border-arno-dark-800"
            />
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-02%20015745-wrHlRT6CEoKhZnKzxr5q8AX3VHLYmj.png"
              alt="Team member 2"
              className="w-16 h-16 rounded-full border-2 border-arno-dark-800"
            />
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-02%20015745-wrHlRT6CEoKhZnKzxr5q8AX3VHLYmj.png"
              alt="Team member 3"
              className="w-16 h-16 rounded-full border-2 border-arno-dark-800"
            />
          </div>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Still have questions?</h2>
        <p className="text-gray-400 mb-8 text-sm sm:text-base">
        Can't find the answer you're looking for? Please chat to our friendly team.
        </p>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-arno-blue-400 hover:bg-arno-blue-500 text-white text-sm sm:text-base">
              Get in Touch
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-arno-dark-800 border-arno-dark-600 sm:max-w-[425px]">
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-arno-blue-400/10 flex items-center justify-center mb-6">
                <ClipboardList className="w-8 h-8 sm:w-10 sm:h-10 text-arno-blue-400" />
              </div>
              <div className="space-y-4">
                <p className="text-lg sm:text-xl">
                  Drop your question/query at{" "}
                  <a href="mailto:info@arnocodes.com" className="text-arno-blue-400 hover:underline">
                    info.arnocodes@gmail.com
                  </a>
                </p>
                <p className="text-gray-400 text-sm sm:text-base">We will get back to you soon.</p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}

