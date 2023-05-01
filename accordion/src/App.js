import "./App.css";
import Accordion from "./Components/Accordion";
import data from "./Assets/data";
import { useState } from "react";

function App() {
  const [active, setActive] = useState("");

  function showMore(question) {
    if (question === active) {
      setActive("");
    } else {
      setActive(question);
    }
  }

  const accordionComponent = data.map((question) => {
    return (
      <Accordion
        title={question.title}
        content={question.content}
        showing={question.title === active}
        onClick={showMore}
      />
    );
  });

  return (
    <div className="bg-gradient-to-b from-[#af67e9] to-[#6565e7] w-screen h-screen flex items-center justify-center font-kumbh">
      <div className="flex flex-row w-3/4 h-3/4 bg-white rounded-3xl items-center align-middle">
        <div className="relative w-2/5 h-full">
          <img
            src="illustration-woman-online-desktop.svg"
            alt="computer"
            className="aspect-square -mx-10 absolute top-1/3"
          />
          <img
            src="illustration-box-desktop.svg"
            alt="box"
            className="aspect-square absolute top-1/2 -mx-24"
          />
        </div>
        <div className="ml-auto w-3/5">
          <h1 className="text-5xl font-bold my-10 mx-3">FAQ</h1>
          <div className="divide-y divide-[#e7e7e9] ">{accordionComponent}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
