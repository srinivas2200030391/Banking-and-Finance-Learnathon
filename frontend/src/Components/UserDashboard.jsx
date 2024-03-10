import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dashboardbody from "./Dashboardbody";

const UserDashboard = () => {
  const [state, setState] = useState("");
  return (
    <div>
      <nav
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          height: "200px",
        }}>
        <div>
          <img
            src="Blogo.svg"
            style={{
              cursor: "pointer",
              height: "100px",
              width: "100px",
              marginLeft: "10px",
            }}
            onClick={() => setState("")}
          />
          <input
            type="text"
            placeholder="Search Blogs..."
            style={{
              marginTop: "50pt",
              transform: "translateY(-115%)",
              padding: "10px",
              borderRadius: "20pt",
              border: "1px solid black",
            }}
          />
        </div>
        <div
          style={{
            transform: "translateX(-100%)",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            height: "100px",
          }}>
          <i
            style={{
              transform: "translateX(-10pt)",
              fontSize: "20pt",
              cursor: "pointer",
            }}>
            🔔
          </i>
          <img
            src="me.jpg"
            style={{
              cursor: "pointer",
              height: "50px",
              width: "50px",
              marginLeft: "10px",
              borderRadius: "30pt",
            }}
          />
        </div>
      </nav>
      <Dashboardbody state={state} />
    </div>
  );
};

export default UserDashboard;
