import React, { useContext, useState } from "react";
import Card from "react-bootstrap/Card";
import NotesIconDark from "./Icons/Notes-icon-dark.svg";
import { DashboardDataContext } from "./Context/DashboardContext";
import Create from "./DashboardComponents/Create";
import {useNavigate } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";

function Dashboard() {
  const { Data, setData } = useContext(DashboardDataContext);
  let navigate = useNavigate();
  const timeStamp = new Date().toISOString();
  const getRelativeTime = (timestamp) => {
    return formatDistanceToNow(new Date(timestamp), { addSuffix: true });
  };
  const handleDelete = (index) => {
    let newArray = [...Data];
    newArray.splice(index, 1);
    setData(newArray);
  };
  return (
    <>
      <div className="dashboard-overall">
        <Create />
        <div>
          <div className="Mynotes-title">
            <span>
              <img src={NotesIconDark} alt="icon" />
            </span>
            <span className="Mynotes-text">My Notes</span>
          </div>
          <div>
            <p className="recently-viewed-text">Recently viewed</p>
          </div>
          <div className="Card-contents">
            {Data.map((e, i) => {
              return (
                <div key={i}>
                  <Card className="card-data">
                    <Card.Body>
                      <Card.Title>
                        <div className="card-title-icon">
                          <div className="card-title-text">{e.title}</div>
                          <div>
                            <button className="btn btn-outline-primary"
                              onClick={() => {
                                navigate(`/Edit/${i}`);
                              }}
                            >
                              {" "}
                              <span className="fa-solid fa-pen" />
                            </button>
                            <button className="btn btn-outline-primary" onClick={() => handleDelete(i)}>
                              <span className="fa-solid fa-trash-can" />
                            </button>
                          </div>
                        </div>
                      </Card.Title>
                      <Card.Text>{e.notes}</Card.Text>
                      <div className="timestamp">
                        {getRelativeTime(timeStamp)}
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
