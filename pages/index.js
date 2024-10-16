import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hello World</title>
        <meta name="description" content="A simple Next.js app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Hello World!</h1>
      </main>
    </div>
  )
}