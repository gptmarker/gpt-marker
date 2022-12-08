import { FaDiscord } from "react-icons/fa";

export default function Support() {
  return (
    <section className="bg-[#75A99C] ">
      <div className="container mx-auto px-4">
        <div className="text-white flex flex-col items-center justify-center min-h-screen py-2">
          <div className="flex flex-col items-center justify-center w-full flex-1 text-center">
            <h1 className="text-6xl font-bold">
              Support
            </h1>
            <p className="mt-3 text-2xl">
              To get support for GPT Marker, join our Discord server.
            </p>
            <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
              <a
                href="https://discord.gg/8qZ2Yj"
                className="p-6 mt-6 text-left text-center border w-full lg:w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
              >
                <div className="text-2xl justify-center gap-2 font-bold flex items-center">
                  <FaDiscord />
                  <span>Discord</span>
                </div>
                <p className="mt-4 text-xl">
                  Join our Discord server to get support
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}