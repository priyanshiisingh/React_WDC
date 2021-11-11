import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

const AddItem = () => {
  const [item, setitem] = useState("");
  const dispatch = useDispatch();

  const addTodo = (id) => {
    console.log(item);

    const action = {
      type: "ADD_ITEM",
      payload: { id: uuidv4(), text: item },
    };

    dispatch(action);
  };
  return (
    <div>
      <input
        onChange={(e) => {
          setitem(e.target.value);
        }}
        type="text"
      />
      <button onClick={addTodo}>Add</button>
    </div>
  );
};

export default AddItem;
