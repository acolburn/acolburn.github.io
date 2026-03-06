export default function AppList(props) {
  const appEntry = props.data.map((item) => {
    return (
      <div className="app-entry" key={item.key}>
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <a href={item.url} target="_blank">
          {item.name} URL
        </a>
      </div>
    );
  });

  return (
    <>
      <div className="app-grid">{appEntry}</div>
    </>
  );
}
