import Link from "next/link"

export default function Home() {
  return (
    <div>
      <Link href={'/home'}>
        <button>Home</button>
      </Link>
    </div>
  )
}
