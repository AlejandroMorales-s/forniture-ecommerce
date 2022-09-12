import Link from "next/link"
import Image from "next/image";
import landingPNG from '../assets/landingPNG.png'
import { useContext, useEffect } from "react";
import { authContext } from "../context/AuthContext";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter()
  const {user} = useContext(authContext)
  useEffect(() => {
    if(!user.logout) router.push('/home')
}, [user.logout])
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
