import ListItem from "./listitem";

const Content = () => {
  const data = "from API";
  return <div className="container">{data}</div>;
};

export default Content;

{
  //   const chores = ["item 1", "item 2", "item 3", "item 4"];
  /* <ul>
        {chores.map((chore) => (
          <ListItem chore={chore} chores={chores} />
        ))}
      </ul> */
}
