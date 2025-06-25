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
    link: "https://www.instagram.com/aguja6167756a61",
  },
];

export default function Credits({ closeCredits }) {
  return (
    <div className="fixed left-0 z-[200] flex h-screen w-full flex-col items-center justify-center bg-black/85 backdrop-grayscale">
      <div className="flex flex-col items-center uppercase">
        <h1 className="mb-4 self-start text-[1.96rem] leading-none drop-shadow-[0_0_2px_white]">
          PROPULSOR
        </h1>
        <ul className="flex flex-col justify-center font-sans">
          {CREDITS.map((credit) => (
            <li
              key={credit.name + "_" + credit.role}
              className="pointer-events-auto grid grid-cols-2 gap-2"
            >
              <span className="justify-self-end text-xs">{credit.role} </span>
              <a
                href={credit.link}
                target="_blank"
                className="justify-self-start sm:hover:bg-white sm:hover:text-black"
              >
                {credit.name}
              </a>
            </li>
          ))}
          <li className="pointer-events-auto mt-24 flex flex-col items-end">
            <span className="justify-self-end text-[0.6rem]">Web</span>
            <a
              className="justify-self-start text-xs sm:hover:bg-white sm:hover:text-black"
              href="https://i10-studio.github.io"
              target="_blank"
            >
              INSTRUMENTO
            </a>
          </li>
          <li className="pointer-events-auto mt-2 flex flex-col items-end">
            <span className="justify-self-end text-[0.6rem]">
              Tipografía &apos;Anthony&apos; por Sun Young Oh. Distribuida por
            </span>
            <a
              href="https://velvetyne.fr"
              target="_blank"
              className="justify-self-start text-xs sm:hover:bg-white sm:hover:text-black"
            >
              velvetyne.fr
            </a>
          </li>
        </ul>

        <button
          onClick={closeCredits}
          className="pointer-events-auto mt-12 pb-1 leading-none sm:hover:bg-white sm:hover:text-black"
        >
          (X)
        </button>
      </div>
    </div>
  );
}
