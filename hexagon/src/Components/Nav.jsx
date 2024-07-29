const Nav = () => {
  return (
    <div className="nav">
      <img
        src="src\assets\hexagon-logo.svg"
        className="hexagon-logo hexagon"
        alt="hexagon-logo"
      ></img>
      <span className="hexagon-title"><h1>HEXAGON</h1></span>
      <ul className="nav-list">
        <li className="nav-list-item">MATHS</li>
        <li className="nav-list-item">BEES</li>
        <li className="nav-list-item">CHEMISTRY</li>
        <li className="nav-list-item">CHESS</li>
      </ul>
    </div>
  );
};

export default Nav;
