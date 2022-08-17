import React from 'react'

const SidebarSearch = () => {
  return (
    <div className="sidebar-block">
      <h3 className="sidebar-title">Search</h3>
      <form action="/" className="search-form">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Type a keyword and hit enter"
          />
          <button type="submit" className="btn">
            <span className="icon mai-search"></span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default SidebarSearch
