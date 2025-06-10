import { useState } from "react";

export default function YouTubeLiveChat() {
  const videoId = "flh0wGaj4jM";
  const domain = "aguja.re";
  const [isChatVisible, setIsChatVisible] = useState(false);

  return (
    <div
      className={`fixed bottom-0 right-0 z-50 flex flex-col items-end transition-all duration-500 ease-in-out ${isChatVisible ? "translate-y-0" : "translate-y-[500px]"}`}
    >
      <button
        className="pointer-events-auto m-4 flex cursor-pointer select-none items-center justify-center rounded-full border px-2 pb-1 text-xl text-white hover:bg-[#f00]"
        onClick={() => {
          setIsChatVisible(!isChatVisible);
        }}
      >
        {isChatVisible ? "(X)" : "(%$!)"}
      </button>
      <div>
        <div className="h-[500px] w-full">
          <iframe
            title="YouTube Live Chat"
            src={`https://www.youtube.com/live_chat?v=${videoId}&embed_domain=${domain}`}
            width="100%"
            height="100%"
            style={{ border: "none" }}
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
