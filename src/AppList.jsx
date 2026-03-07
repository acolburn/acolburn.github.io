const getImageUrl = (path) => {
  // This creates a valid URL for assets inside the src folder
  return new URL(`${path}`, import.meta.url).href;
};

export default function AppList(props) {
  const appEntry = props.data.map((item) => {
    return (
      <div className="app-entry" key={item.key}>
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <a href={item.url} target="_blank">
          {item.name} URL
        </a>
        <img src={getImageUrl(item.screenshot)} alt={item.name} />
      </div>
    );
  });

  return (
    <>
      <div className="app-grid">{appEntry}</div>
    </>
  );
}
