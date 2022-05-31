import React from "react";
import { Search } from "react-bootstrap-icons";
import "./searchbar.css";
const SearchBar = () => {
  return (
    <div className="d-flex flex-row justify-content-center align-items-center bg-style-admin">
      
        <input
          className={"input-field bg-nova dove-gray-text"}
          type={"text"}
          name={"searchbar"}
          placeholder={"Search here..."}
          req={true}
        />
        <div className="input-group-append">
          <span className="">
            <Search size={48} />
          </span>
        </div>
      
    </div>
  );
};

export default SearchBar;
