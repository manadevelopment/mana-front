/** @jsxImportSource @emotion/react */
import Link from "next/link";

// * components
import DropDown from "./DropDown";

const NavItem = ({ title, path, subMenu }) => {
  return (
    <Link
      href={path}
      css={(theme) => ({
        alignItems: "center",
        color: theme.colors.mainGray,
        display: "flex",
        fontSize: "1.4rem",
        fontWeight: "bold",
        gap: "0.5rem",
        paddingBlock: "1rem",
        position: "relative",
        transition: "color 0.25s",

        ":hover": {
          color: theme.colors.mainBlue,
        },
      })}
    >
      {title}
      {subMenu ? (
        <>
          <svg
            css={(theme) => ({
              width: "1rem",
              fill: theme.colors.mainGray,
              transition: "all 0.25s",
              "a:hover &": { fill: theme.colors.mainBlue, rotate: "180deg" },
            })}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
          </svg>
          <DropDown items={subMenu} />
        </>
      ) : null}
    </Link>
  );
};

export default NavItem;
