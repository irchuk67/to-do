import React from "react";
import TaskItem from "../TaskItem/TaskItem";
import './TaskList.css';

const TaskList = ({todos, onDeleted, onToggleDone, onToggleImportant}) => {
    const elements = todos.map((item) => {
        const {id, ...itemProps} = item;
      return(
          <li key = {id} className={'list-group-item'}>
              <TaskItem
                  {...itemProps}
                  onDeleted = {()=>onDeleted(id)}
                  onToggleImportant = {() => onToggleImportant(id)}
                  onToggleDone = {() => onToggleDone(id)}
              />
          </li>
      )
    })
    return(
        <ul className="list-group task-list">
            {elements}
        </ul>

    );
};

export default TaskList;
