import classes from './MainHeader.module.css'

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <a href='/welcome'>Welcome</a>
            </li>
            <li>
            <a href='/factspage'>Facts</a>
            </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
