const Content = () => {
  const chores = ["item 1", "item 2", "item 3", "item 4"];

  return (
    <ul>
      {chores.map((chore) => (
        <li>{chore}</li>
      ))}
    </ul>
  );
};

export default Content;
