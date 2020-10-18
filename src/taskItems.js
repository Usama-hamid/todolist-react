import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TaskItems(props) {
  const items = props.items;
  const taskItems = items.map((item) => {
    return (
      <div>
        <div className="task-item-list" key={item.key}>
          <input
            type="text"
            className="input-task"
            id={item.key}
            value={item.text}
            onChange={(e) => {
              props.setUpdate(e.target.value, item.key);
            }}
          />
          <span>
            <FontAwesomeIcon
              className="faicons"
              icon="trash"
              onClick={() => props.deleteItem(item.key)}
            ></FontAwesomeIcon>
          </span>
        </div>
      </div>
    );
  });
  return <div>{taskItems}</div>;
}
export default TaskItems;
