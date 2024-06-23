import React, { useState } from "react";
import TabButtons from "./TabButtons";
import TabContent from "./TabContent";
import "./tabs.css"

const tabs = [
  {
    id: 1,
    label: "Home",
    content:
      "Welcome to the home tab! Here you'll find the main content of our application.",
  },
  {
    id: 2,
    label: "Profile",
    content:
      "This is the profile tab. Here you can view and edit your user profile information.",
  },
  {
    id: 3,
    label: "Settings",
    content:
      "The settings tab allows you to configure various preferences and options for your account.",
  },
  {
    id: 4,
    label: "About",
    content:
      "Learn more about our application and its features in the about tab.",
  },
  {
    id: 5,
    label: "Help",
    content: "Need assistance? Find help and FAQs in the help tab.",
  },
];

const Tabs = () => {
  const [activeId, setActiveId] = useState(1);

  const handleChange=(id)=>{
    setActiveId(id)
  }


  return (
    <main className="main_container">
      <TabButtons tabsData={tabs} tabId={handleChange} activeId={activeId}/>
      <TabContent tabsData={tabs} activeId={activeId} />
    </main>
  );
};

export default Tabs;
