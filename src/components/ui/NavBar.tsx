import React, { useEffect, useState } from "react";
import classnames from "classnames";
import { throttle } from "lodash";
import "./NavBar.css";

interface Props {
  children: React.ReactNode;
}

function NavBar({ children }: Props) {
  const [areListItemsHidden, setListItemVisibility] = useState(false);

  useEffect(() => {
    function handleScroll(): void {
      if (window.scrollY > 100) {
        setListItemVisibility(true);
      } else {
        setListItemVisibility(false);
      }
    }

    document.addEventListener("scroll", throttle(handleScroll, 250));

    return () => {
      document.removeEventListener("scroll", throttle(handleScroll, 250));
    };
  }, []);

  return (
    <nav className="NavBar">
      <ul
        data-testid="navbar-item"
        className={classnames("NavBar__list", {
          "NavBar__list--hidden": areListItemsHidden
        })}
      >
        {children}
      </ul>
    </nav>
  );
}

export default NavBar;
