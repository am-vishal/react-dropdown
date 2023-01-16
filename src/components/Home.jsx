const Home = (props) => {
  return (
    <div className="home">
      <h1>Q. Should you use a Dropdown?</h1>
      <button onMouseEnter={props.onMouseEnterHandler}>
        <span>Select</span>{" "}
        <i
          className={
            // Ternary operator to change the class of the icon based on the isShow prop
            props.isShow ? "fa-solid fa-angle-down" : "fa-solid fa-angle-right"
          }
        ></i>
      </button>
    </div>
  );
};

export default Home;
