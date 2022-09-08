import classes from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <a href="/home">HOME</a>
          </li>
          <li>
            <a href="facts">FACTS</a>
          </li>
          <li>
            <a href="/characters">CHARACTERS</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
