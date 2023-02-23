import React from "react";
import "./style.css";
import Select from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function index() {
  return (
    <div className="card p-3 add-job">
      <div className="title">Create New Job</div>
      <div className="content">
        <div className="col-12 col-xl-7">
          <input className="form-control" placeholder="Job Name" />
        </div>
        <div className="select-btn col-12 col-xl-5 py-2 py-xl-0">
          <div className="col-8">
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
          <div className="col-4">
            <button className="btn btn-primary w-100">
              <FontAwesomeIcon icon={faPlus} size="lg" title="create" />
              <span>Create</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
