import React from "react";
import Link from "./Link";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link href="/basic-react-app/" className="item">
        Accordion
      </Link>
      <Link href="/basic-react-app/list" className="item">
        Search
      </Link>
      <Link href="/basic-react-app/dropdown" className="item">
        Dropdown
      </Link>
      <Link href="/basic-react-app/translate" className="item">
        Translate
      </Link>
    </div>
  );
};

export default Header;
