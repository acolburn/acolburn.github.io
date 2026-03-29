export default function Hero({ onToggleApps, isShowing }) {
  return (
    <section className="max-w-6xl mx-auto grid md:grid-cols-3 items-center gap-4 p-4">
      <div className="md:col-span-1 md:order-2">
        <img
          src="/public/me.jpg"
          width="800"
          height="1068"
          className="rounded-2xl "
        />
      </div>

      <div className="space-y-5 md:col-span-2 md:order-1">
        <h1 className="text-6xl font-bold ">
          <span className="text-blue-700">Good day, </span>
          <span className="text-pink-400">again!</span>
        </h1>
        <p className="text-2xl/10 ">
          I've <span className="text-pink-400">unleashed the nerd </span>
          and started learning front end development skills. This site documents
          my journey--learning, experimenting, and discovering.
        </p>
        <button
          className="bg-blue-700 text-white hover:bg-blue-600 px-12 py-3 rounded-full mt-5"
          onClick={onToggleApps}
        >
          {isShowing ? "No! Hide The Projects Now!" : "Wanna See My Projects?"}
        </button>
      </div>
    </section>
  );
}
