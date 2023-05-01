const Accordion = (props) => {
  const style = props.showing ? "font-bold" : "";

  return (
    <div className="my-2">
      <div
        className="flex flex-row text-black hover:text-[#f47c57]"
        onClick={() => props.onClick(props.title)}
      >
        <h1 className={`p-4 text-2xl ${style}`}>{props.title}</h1>
        <button className="text-2xl ml-auto mx-2 pb-2">
          {props.showing ? "-" : "+"}
        </button>
      </div>
      {props.showing && <div className="p-4">{props.content}</div>}
    </div>
  );
};

export default Accordion;
