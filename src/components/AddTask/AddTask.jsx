import React, {Component} from "react";
import './AddTask.css'


class AddTask extends Component{
    state = {
        label: ''
    }

    onLabelChange = (event) => {
       this.setState({
           label: event.target.value
       })
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onTaskAdded(this.state.label);
        this.setState({
            label: ''
        });
    }
    render() {
        return (<form className="addForm"
                      onSubmit={this.onSubmit}
                        >
                <input
                    placeholder={'task'}
                    type={'text'}
                    className={'form-control'}
                    onChange={this.onLabelChange}
                    value={this.state.label}
                />
                <button
                    type={'button'}
                    className="btn btn-outline-secondary"
                    onClick={this.onSubmit}>
                    Add new task
                </button>
            </form>
        )
    }
}

export default AddTask;