import React from 'react';
import "./CoreConcept.css";

import ComponentsImg1 from "../../assets/components.png";
import ComponentsImg2 from "../../assets/config.png";
import ComponentsImg3 from "../../assets/jsx-ui.png";
import ComponentsImg4 from "../../assets/state-mgmt.png";

const applicants = [
  {
    image: ComponentsImg1,
    title: 'New Title 1',
    description: 'Fundamental React concepts you will need for almost any app you are going to build!'
  },
  {
    image: ComponentsImg2,
    title: 'New Title 2',
    description: 'Fundamental React concepts you will need for almost any app you are going to build!'
  },
  {
    image: ComponentsImg3,
    title: 'New Title 3',
    description: 'Fundamental React concepts you will need for almost any app you are going to build!'
  },
  {
    image: ComponentsImg4,
    title: 'New Title 4',
    description: 'Fundamental React concepts you will need for almost any app you are going to build!'
  },
];

const CoreConcept = () => {
  return (
    <>
      {applicants.map((data, index) => (
        <li key={index}>
          <img src={data.image} alt={data.title} />
          <h3>{data.title}</h3>
          <p>{data.description}</p>
        </li>
      ))}
    </>
  );
};

export default CoreConcept;
