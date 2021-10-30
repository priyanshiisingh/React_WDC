const ListItem = ({ chore }) => {
  //we destructured it here
  //   console.log(props);
  return (
    <li>
      <div>{chore}</div>
      <button style={{ background: "crimson", color: "white" }}>Delete</button>
    </li>
  );
};

export default ListItem;
