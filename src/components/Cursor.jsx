export default function Cursor({ mouseX, mouseY }) {
  return (
    <>
      <div
        style={{ left: `${mouseX}%`, top: 0 }}
        className="pointer-events-none fixed z-50 h-screen w-[1px] cursor-crosshair bg-white/20"
      />
      <div
        style={{ left: 0, top: `${mouseY}%` }}
        className="pointer-events-none fixed z-50 h-[1px] w-full cursor-crosshair bg-white/20"
      />
    </>
  );
}
