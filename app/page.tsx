import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
       
        <p className="fixed left-0 top-0 flex w-full justify-center pb-6 pt-8">
          🎼 [UN002] M​ú​sica Electr​ó​nica I
        </p>
          <a
            className="flex w-full justify-center text-center"
            href="https://www.ninaprotocol.com/releases/aguja-m-u-sica-electr-onica-i"
            target="_blank"
            rel="noopener noreferrer"
          >
           buy on nina
          </a>

          <a
            className="flex w-full justify-center text-center"
            href="https://unun.bandcamp.com/album/un002-m-sica-electr-nica-i"
            target="_blank"
            rel="noopener noreferrer"
          >
           buy on bandcamp
          </a>

          <a
            className="flex w-full justify-center text-center"
            href="https://unun.link"
            target="_blank"
            rel="noopener noreferrer"
          >
           stream on unun.link
          </a>

          <a
            className="flex w-full justify-center text-center"
            href="https://soundcloud.com/aguja6167756a61"
            target="_blank"
            rel="noopener noreferrer"
          >
           stream on soundcloud
          </a>

          {/* <a
            className="flex w-full justify-center text-center pt-8"
            href="https://unun.bandcamp.com/follow_me"
            target="_blank"
            rel="noopener noreferrer"
          >
           newsletter
          </a> */}

          <span
          className="flex w-full justify-center text-center pt-10 text-2xl"
          >
            🪡
          </span>
          
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center">
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
            href="https://unun.bandcamp.com/follow_me"
            target="_blank"
            rel="noopener noreferrer"
          >
           newsletter
          </a>
          
        </div>
      </div>
      
    </main>
  )
}