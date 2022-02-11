import React from "react";
import './TaskItem.css';


export default class TaskItem extends React.Component{

    render(){
        const {label, onDeleted, onToggleImportant, onToggleDone, done, important} = this.props;

        let classNames = 'task-item';
        if(done){
            classNames += ' done';
        }
        if (important){
            classNames += ' important'
        }


        return(
            <div className={classNames}>
                <span
                      onClick={onToggleDone}>{label}</span>
                <div className="buttons">
                    <button type={'button'}
                            className="btn btn-outline-danger btn-sm"
                            onClick={onDeleted}
                    >
                        <i className="fa fa-trash-o"/>
                    </button>
                    <button type={'button'}
                            className="btn btn-outline-success btn-sm"
                            onClick={onToggleImportant}
                    >
                        <i className="fa fa-exclamation"/>
                    </button>
                </div>

            </div>
        )
    }
}

