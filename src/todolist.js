import React ,{useState} from 'react';
import ToDoListItem from './todolistitem';


const ToDoList = () => {
    const [toDoList, setToDoListItem] = useState([]);
  
    const [item, setItem] = useState("");
  
    const handleSubmitForm = e => {
      e.preventDefault();
      e.persist();
      setToDoListItem([...toDoList, { name: item, isComplete: false }]);
      setItem("");
    };
  
    const handeChange = e => {
      e.persist();
      setItem(e.target.value);
    };
  
    const removeItem = index => {
      const newList = toDoList.filter((item, i) => index !== i);
      setToDoListItem(newList);
    };
  
    const handleChange = index => {
      const toDos = [...toDoList];
      toDos[index].isComplete = !toDos[index].isComplete;
      setToDoListItem(toDos);
    };
  
    return (
      <div>
        <form onSubmit={handleSubmitForm}>
          <input type="text" name="item" value={item} onChange={handeChange} />
          <input type="submit" value="Submit" />
        </form>
        {toDoList.map((item, index) => {
          return (
            <ToDoListItem
              item={item}
              index={index}
              removeItem={removeItem}
              handleChange={handleChange}
            />
          );
        })}
      </div>
    );
};

export default ToDoList;