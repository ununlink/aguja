import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="flex w-full justify-center text-center">AGUJA</h1>

      <a
        // className="flex w-full justify-center text-center"
        href="https://unun.bandcamp.com/album/un002-m-sica-electr-nica-i"
        target="_blank"
        rel="noopener noreferrer"
      >
        bandcamp
      </a>

      <a
        // className="flex w-full justify-center text-center"
        href="https://soundcloud.com/aguja6167756a61"
        target="_blank"
        rel="noopener noreferrer"
      >
        soundcloud
      </a>

      <a
        href="https://www.ninaprotocol.com/releases/aguja-m-u-sica-electr-onica-i"
        target="_blank"
        rel="noopener noreferrer"
      >
        nina
      </a>

      <a
        href="https://www.instagram.com/aguja6167756a61/"
        target="_blank"
        rel="noopener noreferrer"
      >
        instagram
      </a>

      {/* <a
        href="https://unun.bandcamp.com/follow_me"
        target="_blank"
        rel="noopener noreferrer"
      >
        newsletter
      </a> */}
    </main>
  );
}
