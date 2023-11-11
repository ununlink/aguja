import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
       
        <p className="fixed left-0 top-0 flex w-full justify-center pb-6 pt-8">
          🫠
        </p>
          <a
            className="flex w-full justify-center text-center"
            href="https://unun.bandcamp.com/album/un002-m-sica-electr-nica-i"
            target="_blank"
            rel="noopener noreferrer"
          >
            musica electronica I
          </a>
      
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center">
          <a
            className="flex place-items-center gap-2 p-8 "
            href="https://soundcloud.com/aguja6167756a61"
            target="_blank"
            rel="noopener noreferrer"
          >
            soundcloud
          </a>
          <a
            className="flex place-items-center gap-2 p-8 "
            href="https://www.instagram.com/aguja6167756a61/"
            target="_blank"
            rel="noopener noreferrer"
          >
            instagram
          </a>
          <a
            className="flex place-items-center gap-2 p-8 "
            href="https://unun.link"
            target="_blank"
            rel="noopener noreferrer"
          >
            unun.link
          </a>

          <a
            className="flex place-items-center gap-2 p-8 "
            href="https://unun.bandcamp.com/album/un002-m-sica-electr-nica-i"
            target="_blank"
            rel="noopener noreferrer"
          >
            bandcamp
          </a>
        </div>
      </div>
      
    </main>
  )
}
