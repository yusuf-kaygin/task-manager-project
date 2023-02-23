import React from "react";
import JobList from "../components/jobList";
import AddJob from "../components/addJob";

function Main() {
  return (
    <div>
      <AddJob />
      <JobList />
    </div>
  );
}

export default Main;
