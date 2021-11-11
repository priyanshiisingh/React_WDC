import { useDispatch, useSelector } from "react-redux";

const List = () => {
  const items = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    console.log(id);
    const action = {
      type: "DELETE_ITEM",
      payload: id,
    };
    dispatch(action);
  };

  return (
    <div>
      <ul>
        {items.map((item) => {
          return (
            <li>
              {item.text}
              <button
                onClick={() => {
                  handleDelete(item.id);
                }}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
