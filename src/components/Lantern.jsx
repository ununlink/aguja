export default function Lantern({ mouseX, mouseY }) {
  return (
    <div className="relative opacity-95 mix-blend-color-burn">
      <div className="absolute bottom-0 left-0 right-0 top-0 h-screen w-full bg-black/70"></div>
      <div
        className="absolute bottom-0 left-0 right-0 top-0 h-screen w-full bg-[#fff]"
        style={{
          maskImage: `radial-gradient(ellipse 600px 600px at ${mouseX}% ${mouseY}%, red 10%, transparent 90%)`,
        }}
      ></div>
    </div>
  );
}
