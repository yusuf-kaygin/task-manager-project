import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function list() {
  return (
    <div className="table-responsive">
      <table className="table table-hover table-bordered">
        <thead className="table-primary">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Priority</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mark</td>
            <td>
              <span className="badge bg-danger">Danger</span>
            </td>
            <td>
              <div className="action-btns">
                <button className="btn btn-outline-primary">
                  <FontAwesomeIcon icon={faEdit} size="xs" />
                </button>
                <button className="btn btn-outline-danger">
                  <FontAwesomeIcon icon={faTrash} size="xs" />
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td>Jacob</td>
            <td>
              <span className="badge bg-warning text-dark">Warning</span>
            </td>
            <td>
              <div className="action-btns">
                <button className="btn btn-outline-primary">
                  <FontAwesomeIcon icon={faEdit} size="xs" />
                </button>
                <button className="btn btn-outline-danger">
                  <FontAwesomeIcon icon={faTrash} size="xs" />
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td>Jacob</td>
            <td>
              <span className="badge bg-primary">Primary</span>
            </td>
            <td>
              <div className="action-btns">
                <button className="btn btn-outline-primary">
                  <FontAwesomeIcon icon={faEdit} size="xs" />
                </button>
                <button className="btn btn-outline-danger">
                  <FontAwesomeIcon icon={faTrash} size="xs" />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
