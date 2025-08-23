export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-[calc(100vh-4rem)] space-y-6 p-6 bg-blue-200">
      <h1 className="text-5xl font-bold">Hi, I’m <span className="text-blue-400">Yasaswini</span></h1>
      <p className="text-lg text-gray-300 max-w-xl">
        Welcome to my archive — a collection of my skills, projects, and coding adventures 🚀
      </p>
      <a
        href="#projects"
        className="mt-6 px-6 py-3 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition"
      >
        See My Work
      </a>
    </section>
  );
}