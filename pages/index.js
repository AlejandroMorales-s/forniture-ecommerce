import Link from "next/link"
import { useEffect, useContext } from "react"
import { authContext } from "../context/AuthContext"
import { useRouter } from "next/router"

export default function Home() {
  const router = useRouter()
  const {user} = useContext(authContext) 
  useEffect(() => {
    !user.logout && router.push('/home')
  }, [])
  return (
    <div>
      <Link href={'/home'}>
        <button>Home</button>
      </Link>
    </div>
  )
}
