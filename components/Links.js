const extensionLink =
  "https://c1-europe.altogic.com/_storage/638f4b6b895d8e153a0669f3/63906c6471a459a0fb3e0046/639089baf553c2d5386a73cf";
const githubLink = "https://github.com/gptmarker/gpt-marker";

export default function Links() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
      <a
        href={extensionLink}
        className="group p-6 text-left border w-full lg:w-96 rounded-xl hover:border-emerald-900 "
      >
        <span className="block text-xl font-bold text-white text-center group-hover:text-emerald-900 ">
          Download &rarr;
        </span>
        <span className="block mt-4 text-md text-white/80 text-center">
          Download the package and get started
        </span>
      </a>
      <a
        href={githubLink}
        className=" group p-6 text-left border w-full lg:w-96 rounded-xl hover:border-emerald-900 "
      >
        <span className="block text-xl font-bold text-white text-center group-hover:text-emerald-900 ">
          GitHub &rarr;
        </span>
        <span className="block mt-4 text-md text-white/80 text-center">
          Check out the source code on GitHub.
        </span>
      </a>
    </div>
  );
}
