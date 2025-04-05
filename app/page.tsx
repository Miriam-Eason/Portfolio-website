import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Mail, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Mail className="h-5 w-5 text-slate-700" />
            <span className="font-medium">Contact</span>
          </div>

          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
              {["Homes", "Facts", "Design", "Blog", "Color"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-slate-700 hover:text-slate-900 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <Button variant="outline" className="rounded-full px-6">
            Get in touch
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Decorative Spheres */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-300/60 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/4"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-blue-100 rounded-full blur-2xl translate-x-1/4 translate-y-1/4"></div>
        <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-slate-100 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-slate-200 rounded-full blur-xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-slate-800 mb-4">Hi, I'm Qin Qi</h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-10">Front-end Developer</p>
            <Button className="rounded-full px-8 py-6 bg-blue-500 hover:bg-blue-600 text-white">View my work</Button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-800">Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="bg-slate-50 border-none shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="p-0">
                  <div className="relative h-60 w-full overflow-hidden rounded-t-lg">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-sm hover:bg-slate-100 transition-colors cursor-pointer">
                      <ArrowUpRight className="h-4 w-4 text-slate-700" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="text-sm text-slate-500 mb-2">{project.category}</div>
                  <h3 className="text-xl font-semibold text-slate-800">{project.title}</h3>
                </CardContent>
                <CardFooter>
                  <p className="text-slate-600 text-sm">{project.description}</p>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="bg-white p-4 rounded-full shadow-sm mb-6">
              <Mail className="h-8 w-8 text-blue-500" />
            </div>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Get In Touch</h2>
            <p className="text-slate-600 mb-6 max-w-md">
              Have a project in mind or just want to chat? Feel free to reach out.
            </p>
            <Button className="rounded-full px-8 py-6 bg-blue-500 hover:bg-blue-600 text-white">Contact me</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Qin Qi. All rights reserved.</p>
            <div className="flex items-center gap-6 mt-4 md:mt-0">
              {["Twitter", "LinkedIn", "GitHub", "Dribbble"].map((social) => (
                <Link key={social} href="#" className="text-slate-500 hover:text-slate-800 text-sm transition-colors">
                  {social}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Sample project data
const projects = [
  {
    id: 1,
    title: "Projcew Puraner",
    category: "Projeects",
    description: "Hiam pjasm anat ovvtk ataim encicjcit arcit pootjsrits tuid vibt wriati mi rootleel.",
    image: "/portfolio/portfolio-1.png?height=400&width=400",
  },
  {
    id: 2,
    title: "Micancl Duinc",
    category: "Projeects",
    description: "Hiam pjcaweem oechesinigj enccioe tiioc olinicctteea tu vilt clasnut tir totl tioal.",
    image: "/portfolio/portfolio-2.png?height=400&width=400",
  },
  {
    id: 3,
    title: "Mion Quck",
    category: "Projeects",
    description: "Hiam peun dujnt wirit ciieoj aocicjo cinq oilih pouhlciclet ou vit oncaert oube cihet.",
    image: "/portfolio/portfolio-3.png?height=400&width=400",
  },
]

