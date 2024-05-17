// ExampleTabs.jsx
import React from 'react';
import "./ExampleTab.css";

const ExampleTabs = ({ tabs, handleTabClick, isSelected }) => {
  return (
    <>
      {tabs.map((data, index) => {
        let dataTitle = data.title.toLowerCase().replace(/\s/g, '');
        return (
          <li key={index}>
            <button className={isSelected === dataTitle ? 'active' : ''} onClick={() => handleTabClick(dataTitle)}>{data.title}</button>
          </li> 
        );
      })}
    </>
  );
}

export default ExampleTabs;
