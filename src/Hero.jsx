import ContactForm from "./ContactForm.jsx";

export default function Hero({ onToggleApps, isShowing }) {
  return (
    <section className="mx-auto grid max-w-6xl items-start gap-8 px-4 py-10 md:grid-cols-3 md:gap-10 md:px-6">
      <div className="self-start md:order-2 md:col-span-1">
        <img
          src="/me.jpg"
          width="800"
          height="1068"
          className="h-auto w-full max-w-sm rounded-2xl border border-slate-700 object-cover shadow-xl shadow-slate-950/40"
          alt="Alan Colburn portrait"
        />
      </div>

      <div className="space-y-6 md:order-1 md:col-span-2">
        <h1 className="font-display text-5xl leading-tight md:text-6xl">
          <span className="text-blue-700">Good day, </span>
          <span className="text-pink-400">again!</span>
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-slate-200 md:text-xl">
          I've <span className="text-pink-400">unleashed the nerd </span>
          and started learning front end development skills. This site documents
          my journey--learning, experimenting, and discovering.
        </p>
        <ContactForm />
        <button className="btn-secondary mt-2" onClick={onToggleApps}>
          {isShowing ? "No! Hide The Projects Now!" : "Wanna See My Projects?"}
        </button>
      </div>
    </section>
  );
}
