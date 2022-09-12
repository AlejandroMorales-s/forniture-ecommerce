import Link from "next/link"
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
        <div className="landing-filter">
          <h1 className="logo">Forniture.</h1>
          <h2 className="landing-text">Los muebles que necesitas a los mejores precios</h2>
          <div className="landing-buttons-container">
            <Link href={'/signup'}>
              <button className="landing-button">Crear mi cuenta ahora</button>
            </Link>
            <Link href={'/login'}>
              <button className="landing-button">Iniciar sesión</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
