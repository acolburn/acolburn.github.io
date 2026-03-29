export default function AppList(props) {
  const appEntry = props.data.map((item) => {
    return (
      <div
        className="border border-blue-500 rounded-md p-4 flex-col  bg-slate-800 shadow-blue-800/90 shadow-lg"
        key={item.key}
      >
        <h3 className="font-bold text-lg mb-2">{item.name}</h3>
        <p className="text-sm mb-3">{item.description}</p>
        <a
          href={item.url}
          target="_blank"
          className="text-blue-600 hover:underline text-sm mb-1"
        >
          {item.name} URL
        </a>
        <img
          src={item.screenshot}
          alt={item.name}
          className="w-full object-fit rounded mb-2"
        />
      </div>
    );
  });

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 p-4 ">
        {appEntry}
      </div>
    </>
  );
}
