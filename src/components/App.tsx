import ReactSVG from '/react.svg'
import CountBtn from '@/components/CountBtn'
import { Badge } from '@/components/ui/badge'

function App() {
  return (
    <main
      className="flex h-screen flex-col items-center
       justify-center"
    >
      <div className="flex flex-col items-center gap-y-5">
        <div className="inline-flex items-center gap-x-5">
          <img src={ReactSVG} alt="React Logo" className="w-32" />
          <span className="text-6xl">+</span>
          <img src={'/vite.svg'} alt="Vite Logo" className="w-32" />
        </div>
        <a
          href="https://ui.shadcn.com"
          rel="noopener noreferrer nofollow"
          target="_blank"
        >
          <Badge variant="outline">shadcn/ui</Badge>
        </a>
        <CountBtn />
      </div>
    </main>
  )
}

export default App
