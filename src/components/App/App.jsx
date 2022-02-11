import AppHeader from "../Header/Header";
import Search from "../SearchPannel/SearchPannel";
import TaskList from "../TaskList/TaskList";
import AddTask from "../AddTask/AddTask"
import React from "react";
import './App.css'


class App extends React.Component{

    minId = 100;

    createItem = (label) =>{
        return{
            label,
            important: false,
            done: false,
            id: this.minId++
        }
    };

    state = {
        toDoData:[
            this.createItem('Prepare to DB exam'),
            this.createItem('Learn React'),
            this.createItem('Be productive')
        ],
        text: '',
        filter: ''
    };

    deleteItem = (id) => {
        this.setState(({toDoData})=>{
            const nodeIdx = toDoData.findIndex((obj) => obj.id === id);
            const newArr = [
                ...toDoData.slice(0, nodeIdx),
                ...toDoData.slice(nodeIdx + 1)];
            return{
                toDoData:newArr
            }

        })
    };

    addItem = (text) => {
        const newTask = this.createItem(text);
        // add item to taskList
        this.setState(({toDoData})=>{
            const newArr = [...toDoData.slice(0), newTask];
            return{
                toDoData: newArr
            }
        })
    };

    searchItem = (list, text) => {
        if (text.length === 0){
            return list
        }

        return list.filter((el) =>
            el.label.toLowerCase().search(text.toLowerCase()) !== -1
        )

    }

    filterItems = (list, filter) => {
        switch (filter){
            case 'active':
                return list.filter((item) => item.done === false)
            case 'done':
                return list.filter((item) => item.done === true)
            case 'all':
                return list
            default:
                return list
        }
    }

    toggleProp(arr, id, prop){
        const nodeIdx = arr.findIndex((obj) => obj.id === id);
        const oldItem = arr[nodeIdx];
        const newItem = {...oldItem, [prop]: !oldItem[prop]};

        return [
            ...arr.slice(0, nodeIdx),
            newItem,
            ...arr.slice(nodeIdx + 1)]
    };

    onToggleImportant = (id) => {
       this.setState(({toDoData}) => {
           return{
               toDoData: this.toggleProp(toDoData, id, 'important')
           }
       })
    };

    onToggleDone = (id) => {
        this.setState(({toDoData}) => {
            return{
                toDoData: this.toggleProp(toDoData, id, 'done')
            }
        })
    };

    onSearchChange = (text) => {
        this.setState({
            text: text
        })
    }

    onFilterChange = (filter) => {
        this.setState({
            filter: filter
        })
    }


    render() {
        const {toDoData, text, filter} = this.state;
        const visibleItems = this.filterItems(this.searchItem(toDoData, text), filter);
        const doneCount = this.state.toDoData.filter((el) => el.done).length;
        const toDoCount = this.state.toDoData.length - doneCount;
        return(
            <div className="wrapper">
                <div className="centre-block">
                    <span>{(new Date()).toDateString()}</span>
                    <AppHeader todo={toDoCount} done={doneCount}/>
                    <Search
                        filter = {filter}
                        onChange = {this.onSearchChange}
                        onFilterChange = {this.onFilterChange}/>
                    <AddTask onTaskAdded = {this.addItem}/>
                    <TaskList
                        todos = {visibleItems}
                        onDeleted = {this.deleteItem}
                        onToggleDone = {this.onToggleDone}
                        onToggleImportant = {this.onToggleImportant}
                    />
                </div>
            </div>

        );
    }
}

export default App;