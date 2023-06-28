import Link from "next/link"
export default function Home() {
  return (
    <main >
      <h1>Home Page</h1>
      <p> 
        <div className="flex justify-center m-2">
          
          <Link href="/users" className="bg-blue-700 hover:bg-blue-300 rounded transition px-4 py-4">
          Users
        </Link>

        <button className="rounded bg-blue-400 m-2 px-4 py-5"> 
          Click me
        </button>

        </div>
        
      </p>
    </main>
  )
}
