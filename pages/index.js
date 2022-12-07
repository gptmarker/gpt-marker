import Footer from "../components/Footer";
import Header from "../components/Header";
import Links from "../components/Links";

export default function Home() {
  return (
    <div className="bg-[#75A99C]">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center min-h-screen">
        <Header />
        <Links />
        <section className="py-4 flex flex-col items-center justify-center w-full flex-1 px-4 text-center bg-[#75A99C]">
          <div className="flex items-center flex-col">
            <div className="flex items-center justify-center pt-2">
              <p className="text-xs text-gray-700">
                Give us a <span className="font-bold">star</span> on GitHub
              </p>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}
