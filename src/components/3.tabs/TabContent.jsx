import React from "react";
import "./tabs.css"

const TabContent = ({ tabsData, activeId }) => {
    console.log(activeId);
  return (
    <div className="content">
      {tabsData.map((item) => {
        return (
          <p
            key={item.id}
            style={{ display: item.id === activeId ? "block" : "none" }}
          >
            {item.content}
          </p>
        );
      })}
    </div>
  );
};

export default TabContent;
