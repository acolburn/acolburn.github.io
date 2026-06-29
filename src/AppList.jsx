export default function AppList(props) {
  const appEntry = props.data.map((item) => {
    return (
      <div
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-700 bg-slate-800/90 shadow-lg shadow-slate-950/40 transition duration-200 hover:-translate-y-1 hover:border-blue-500 hover:shadow-blue-900/40"
        key={item.key}
      >
        <a
          href={item.url}
          target="_blank"
          rel="noreferrer"
          className="overflow-hidden bg-slate-900 p-2"
        >
          <img
            src={item.screenshot}
            alt={item.name}
            className="h-52 w-full rounded-lg object-contain transition duration-300 group-hover:scale-[1.01]"
          />
        </a>

        <div className="flex flex-1 flex-col p-4">
          <h3 className="mb-2 text-lg font-bold text-slate-100">{item.name}</h3>
          <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-300">
            {item.description}
          </p>
          <a
            href={item.url}
            target="_blank"
            rel="noreferrer"
            className="btn-primary w-full text-sm"
          >
            View Live Project
          </a>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="mx-auto grid max-w-7xl grid-cols-1 auto-rows-fr gap-5 px-4 pb-10 sm:grid-cols-2 md:px-6 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {appEntry}
      </div>
    </>
  );
}
