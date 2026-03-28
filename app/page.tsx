import Link from 'next/link'

export default function Home() {
  return (
    <main style={{ padding: 40 }}>
      <h1>My Portfolio</h1>

      <div style={{ marginTop: 20 }}>
        <Link href="/blog">Go to Blog</Link>
      </div>
    </main>
  )
}
