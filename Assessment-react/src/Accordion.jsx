import React, { useState } from "react";


const Accordion = () => {
  
  const [activeIndex, setActiveIndex] = useState(null);


  const accordionData = [
    {
      title: "Accordion 1",
      body: "This is the body of Accordion 1.",
    },
    {
      title: "Accordion 2",
      body: "This is the body of Accordion 2.",
    },
    {
      title: "Accordion 3",
      body: "This is the body of Accordion 3.",
    },
  ];

  
  const toggleAccordion = (index) => {
    
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div style={{ width: "300px", margin: "0 auto", fontFamily: "Arial" }}>
      {accordionData.map((item, index) => (
        <div key={index} style={{ marginBottom: "10px", border: "1px solid #ccc", borderRadius: "5px" }}>
          
          <div
            style={{
              padding: "10px",
              background: "#f7f7f7",
              cursor: "pointer",
              fontWeight: "bold",
            }}
            onClick={() => toggleAccordion(index)}
          >
            {item.title}
          </div>

      
          <div
            style={{
              padding: "10px",
              display: activeIndex === index ? "block" : "none",
              background: "#fff",
            }}
          >
            {item.body}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
