import { useState } from "react";
import "./styles.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion />
    </div>
  );
}

function Accordion() {
  const[opened,setOpened] =useState(2);
  function toggleOpened(someId){
      setOpened(someId);
  }
  return (
    <div className="accordion">
      {faqs.map((item, index) => (
        <AccordionItem 
           title={item.title} num={index+1 } currentOpened={opened}
          handelClick={toggleOpened}
          >{item.text} </AccordionItem>
      ))}
      </div>
  );
}

function AccordionItem({text,title,num,currentOpened,handelClick,children}) {
  
  const isOpened= currentOpened===num;

    return <div className={`item ${isOpened?"open":""}`}
    onClick= {
      
      (e)=>{isOpened?handelClick(null):handelClick(num)  }
    }  

    >

    <p className="number">  {num<10 ?"0":""} {num}</p>
    <p className="title "> {title}</p>
    <p className="icon">{isOpened?"-":"+"}</p>
    {isOpened && <p className="content-box"> {children}</p>}
  </div>;
}
