import About from "./About.tsx"
import "./Pages.scss"

export default function Home() {
  return (
    <div className="main-heading">
      <div className="main-h1">Rabbit Hole とは・・・</div>
      <About />
    </div>
    )
}