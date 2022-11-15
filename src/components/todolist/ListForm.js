import React,{useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addList, updateListByIndex } from '../../features/todolist/todoListSlice';
import List from './List';
const ListForm = () => {
  const [listName, setListName] = useState('');
  // const [listIndex, setSetIndex] = useState('');
  // const [editedNameIndex, setEditedNameIndex] = useState('');

  const dispatch = useDispatch();

  const lists = useSelector((state)=> state.todolist);

  const createList = (event) => {
    event.preventDefault();
    
    // console.log(editedNameIndex,"editedNameIndex");
    if (lists.listNameByIndex !== '') {
      dispatch(updateListByIndex(listName));
      setListName('');
    } 

    else {
      dispatch(addList(listName));
      setListName('');
    }
  };

  useEffect(()=>{
    console.log('main', lists)
    setListName(lists.listNameByIndex)
  },[lists])

  const handleInputChange = (event) => {
    setListName(event.target.value);
  };

  // const getEditedNameIndex = (index) => {
  //   setEditedNameIndex(index);
  // };
  return (
    <div>
      <form className="input-container" onSubmit={createList}>
        <input
          className="list-input"
          type="text"
        value={listName}
        onChange={handleInputChange}
        />
        <button
          className="add-list-btn"
          // disabled={listName ? false : true}
          type="submit"
        >
          Add List
        </button>
      </form>
      <List
        lists={lists}
        // setListItems={setListItems}
        setListName={setListName}
        // editedNameIndex={(index) => getEditedNameIndex(index)}
      />
    </div>
  );
};

export default ListForm;
