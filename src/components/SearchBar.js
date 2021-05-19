import React from 'react'

const SearchBar = () => {

    return (
        <div>
            <div className="search-input">
              <input id="searchField" type="text" placeholder="What are you searching for?" />
              <button>Go</button>
            </div>
        </div>
    )
}

export default SearchBar