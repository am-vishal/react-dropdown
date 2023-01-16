const Dropdown = (props) => {
  return (
    <div className="dropdown">
      {/* Map through the options and create an <p> element for each one */}
      {props.options.map((el, i) => (
        <span>
          <p key={i} onClick={() => props.onClickHandler(el)}>
            {el}
          </p>
          {/* Add a horizontal line between each option, but not after the last one */}
          {props.options.length - 1 > i && <hr style={{ width: "198px" }} />}
        </span>
      ))}
    </div>
  );
};

export default Dropdown;
