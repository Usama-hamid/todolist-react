import React from "react"
import TaskItems from "./taskItems";
import "./TodoList.css"
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
library.add(faTrash);


class TodoList extends React.Component {
    constructor(props) {
      super(props); //pass props to parent component
      this.state = {
        items: [], //store array of to do list items
        currentItem: {
          text: "", //stores text is input value
          key: "", //stores key is going to be unique
        },
      };
      this.handleInput = this.handleInput.bind(this); //binding the handleinput()
      this.addItem = this.addItem.bind(this);
      this.deleteItem = this.deleteItem.bind(this);
      this.setUpdate = this.setUpdate.bind(this);
    }
    handleInput(event) {
      //handle input seems to lost its context because this keyword doesnot point to the class automatically you have to bind it
      this.setState({
        currentItem: {
          text: event.target.value,
          key: Date.now(),
        },
      });
    }
    addItem(event) {
      event.preventDefault();
      const newTask = this.state.currentItem;
      if (newTask.text !== "") {
        const newItems = [...this.state.items, newTask];
        this.setState({
          items: newItems,
          currentItem: {
            text: "",
            key: "",
          },
        });
      }
    }
    deleteItem(key) {
      const filteredItems = this.state.items.filter((item) => item.key !== key);
      this.setState({
        items: filteredItems,
      });
    }
    setUpdate(text, key) {
      const items = this.state.items;
      items.map((item) => {
        if (item.key === key) {
          item.text = text;
        }
      });
      this.setState({
        items: items,
      });
    }
    render() {
      return (
        <div className="main-div">
            <h1>To Do List</h1>
          <form onSubmit={this.addItem} className="list-container">
            <input
              className="input-task"
              type="text"
              onChange={this.handleInput}
              value={this.state.currentItem.text}
              placeholder="Enter Task"
            />
            <button type="submit" className="add-btn">Add</button>
  
            <TaskItems
              items={this.state.items}
              deleteItem={this.deleteItem}
              setUpdate={this.setUpdate}
            ></TaskItems>
            {/* this taskitems will receive as a props in taskitems.js */}
          </form>
        </div>
      );
    }
  }
  export default TodoList