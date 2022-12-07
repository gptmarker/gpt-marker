import Image from "next/image";

export default function Header() {
  return (
    <header className="flex flex-col items-center justify-center w-full flex-1 text-center">
      <Image
        src="/chatgpt.png"
        alt="ChatGPT Bookmarker Logo"
        height={96}
        width={96}
      />
      <div>
        <h1 className="text-4xl font-bold text-white w-full">
          CHATGPT <br />
          <span className="font-light">BOOKMARKER</span>
        </h1>
        <h2 className="text-3xl py-3 font-thin text-center tracking-wide text-white">
          Save your ChatGPT conversation history
        </h2>
      </div>
    </header>
  );
}
