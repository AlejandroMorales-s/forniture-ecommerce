import Link from "next/link"
import Image from "next/image";
import landingPNG from '../assets/landingPNG.png'

export default function Home() {
  return (
    <>
      <div className="landing-container">
        <h1>Forniture</h1>
        <div className="landing-image-container">
          <Image
            src={landingPNG.src}
            alt='landing image'
            layout="fill"
          />
        </div>
      </div>
      <div className="landing-buttons-container">
        <Link href={'/signup'}>
          <button className="landing-button">Crear mi cuenta ahora</button>
        </Link>
        <Link href={'/login'}>
          <button className="landing-button">Iniciar sesión</button>
        </Link>
      </div>
    </>
  )
}
