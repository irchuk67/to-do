import React, {useState} from "react";
import ItemStatusFilter from "../item-status-filter/item-status-filter";
import './SearchPannel.css'

const Search = (props) => {
    const {filter, onFilterChange} = props;
    let [text, setText] = useState('');

    const searchText = 'Type here to search task';

    const onTextChange = (event) => {
        const text = event.target.value;
        setText(text)
    }

        return(
            <div className="searchPanel input-group ">
                <input
                    placeholder={searchText}
                    className={'form-control'}
                    value={text}
                    onChange={onTextChange}
                />
                <ItemStatusFilter className={'input-group-append'}
                                  filter={filter}
                                  onFilterChange = {onFilterChange}
                />
            </div>
        )

}

export default Search;