import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex items-center w-full justify-center h-24 bg-[#75A99C]">
      <div className="flex gap-3 flex-col items-center justify-center">
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
        <div className="text-[14px] text-gray-700">
          powered by{" "}
          <Link href="https://altogic.com/">
            <a className="font-bold font-medium text-white">Altogic</a>
          </Link>
        </div>
      </div>
    </footer>
  );
}
