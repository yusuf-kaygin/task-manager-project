import React from "react";
import Select from "react-select";

export default function filter() {
  return (
    <div className="filter py-2">
      <div className="col-8 col-xl-7    ">
        <input type="search" className="form-control" placeholder="Search" />
      </div>

      <div className="col-4 col-xl-5">
        <Select
          // value={selectedOption}
          // onChange={this.handleChange}
          options={[
            { value: "chocolate", label: "Chocolate" },
            { value: "strawberry", label: "Strawberry" },
            { value: "vanilla", label: "Vanilla" },
          ]}
        />
      </div>
    </div>
  );
}
