import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editList } from '../../features/todolist/todoListSlice';



const List = (props) => {    
const lists = useSelector((state) => state.todolist);

    const dispatch = useDispatch();
    //   const deleteItem = (index) => {
    //     console.log(index, 'event');
    //     props.listItems.splice(index, 1);
    //     console.log(props.listItems, ' props.listItems');
    //     props.setListItems([...props.listItems]);
    //   };

      const editItem = (index) => {
        console.log(index,"indexx")
        dispatch(editList(index));
        // let listNameByIndex = lists.listItems.at(index);
        // console.log('edit', edit); 
        props.setListName(lists.listNameByIndex);
        // props.editedNameIndex(index);
      };

    //   const checkedList = (index) => {
    //     console.log('innnd', index);
    //   };
    return (
        <section className="list-container">
            <ul className="list-items">
        {lists.listItems.map((list, index) => {
          return (
            <>
              <div className="list">
                <div className="list-item">
                  {/* <input type="checkbox" onChange={() => checkedList(index)} /> */}
                  <li key={index}>{list}</li>
                </div>
                <div className="action-btns">
                  <button
                    className="edit-item-btn"
                    onClick={() => editItem(index)}
                  >
                    Edit
                  </button>
                  <button
                    className="delete-item-btn"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </ul>
        </section>
    );
};

export default List;
