import { githubUrl } from "@/config/app-config"
import { Github, Globe, Zap } from "lucide-react"
import Link from "next/link"

const Footer = () => {
  return (
      <footer className="w-full rounded bg-opacity-75 p-6 px-4 py-12 shadow-lg backdrop-blur-md sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Zap className="h-8 w-8" />
              <span className="text-xl font-bold">Next.js Starter</span>
            </div>
            <div className="flex space-x-6">
              <Link href={githubUrl} className="hover:text-gray-300">
                <span className="sr-only">GitHub</span>
                <Github className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:text-gray-300">
                <span className="sr-only">Website</span>
                <Globe className="h-6 w-6" />
              </Link>
            </div>
          </div>
          <div className="mt-8 text-center text-muted-foreground">
            © {new Date().getFullYear()} Next.js Starter. All rights reserved.
          </div>
        </div>
      </footer>
  )
}
export default Footer