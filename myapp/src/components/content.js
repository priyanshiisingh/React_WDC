import ListItem from "./listitem";

const Content = () => {
  const chores = ["item 1", "item 2", "item 3", "item 4"];

  return (
    <div className="container">
      <ul>
        {chores.map((chore) => (
          <ListItem chore={chore} chores={chores} />
        ))}
      </ul>
    </div>
  );
};

export default Content;
