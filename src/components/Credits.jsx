const CREDITS = [
  {
    role: "Concepto y performance",
    name: "Orkgotik",
    link: "https://www.instagram.com/orkgotik",
  },
  {
    role: "Dirección y edición",
    name: "Alex Spagnolo",
    link: "https://www.instagram.com/alex.spagnolo",
  },
  {
    role: "Dirección de fotografía",
    name: "Sergio Soto",
    link: "https://www.instagram.com/rostrodemono",
  },
  {
    role: "Producción",
    name: "Yoto",
    link: "https://www.instagram.com/todoyoto",
  },
  {
    role: "Lasers",
    name: "Laser Lights",
    link: "https://www.instagram.com/laser.lights",
  },
  {
    role: "Música",
    name: "Aguja",
    link: "https://www.instagram.com/aguja6171612127841628746128746",
  },
];

export default function Credits({ closeCredits }) {
  return (
    <div className="pointer-events-none fixed left-0 z-[100] mb-4 mr-4 flex h-screen w-full flex-col items-center justify-center bg-[#00f]/70 text-center text-4xl">
      <div className="mb-4">PROPULSOR</div>
      <ul className="flex flex-col items-center justify-center">
        {CREDITS.map((credit) => (
          <li
            key={credit.name + "_" + credit.role}
            className="pointer-events-auto"
          >
            <a
              href={credit.link}
              target="_blank"
              className="sm:hover:bg-[#f00]"
            >
              <span>{credit.role}: </span>
              <span>{credit.name}</span>
            </a>
          </li>
        ))}
        <li className="pointer-events-auto mt-12 text-base">
          Web:{" "}
          <a
            className="underline sm:hover:bg-[#f00]"
            href="https://amms-studio.github.io"
            target="_blank"
          >
            INSTRUMENTO
          </a>
        </li>
        <li className="pointer-events-auto mb-12 text-base">
          Tipografía &apos;Anthony&apos; por Sun Young Oh. Distribuida por{" "}
          <a
            href="https://velvetyne.fr"
            target="_blank"
            className="underline sm:hover:bg-[#f00]"
          >
            velvetyne.fr
          </a>
        </li>
      </ul>
      <button
        onClick={closeCredits}
        className="pointer-events-auto sm:hover:bg-[#f00]"
      >
        (X)
      </button>
    </div>
  );
}
