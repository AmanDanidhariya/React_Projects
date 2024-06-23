import React, { act } from "react";
import "./tabs.css";

const TabButtons = ({ tabsData, tabId, activeId }) => {
  return (
    <div className="btn_container">
      {tabsData.map((item) => {
        return (
          <button
            className={`btn ${item.id === activeId ? "active" : ""}`}
            key={item.id}
            onClick={() => tabId(item.id)}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
};

export default TabButtons;
