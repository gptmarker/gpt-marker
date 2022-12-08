import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex items-center w-full justify-center h-12 bg-[#75A99C]">
      <div className="relative flex gap-2 w-full items-center justify-center">
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://twitter.com/gptmarker"
            className="flex items-center justify-center"
          >
            <Image
              src="/twitter.svg"
              alt="ChatGPT Twitter Logo"
              width={24}
              height={24}
            />
          </a>
          <a
            href="https://github.com/gptmarker"
            className="flex items-center justify-center"
          >
            <Image
              src="/github.svg"
              alt="ChatGPT GitHub Logo"
              width={24}
              height={24}
            />
          </a>
        </div>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-white/80">
          powered by{" "}
          <Link href="https://altogic.com/">
            <a className="text-xs text-white">Altogic</a>
          </Link>
        </div>
      </div>
    </footer>
  );
}
