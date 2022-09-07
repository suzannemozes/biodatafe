import { Link } from "react-router-dom";
import { classNames } from "react-select/dist/declarations/src/utils";

const MainHeader = () => {
  return (
    <header className={classNames.header}>
      <ul>
        <li>
          <Link to="/welcome">welcome</Link>
        </li>
        <li>
          <Link to="/products">products</Link>
        </li>
      </ul>
    </header>
  );
};

export default MainHeader;
