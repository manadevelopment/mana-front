/** @jsxImportSource @emotion/react */
import NavItem from "./NavItem";

const DropDown = ({ items }) => {
  return (
    <div
      css={{
        position: "absolute",
        top: "100%",
        right: 0,
        backgroundColor: "white",
        borderRadius: "1rem",
        boxShadow: "0px 2px 4px 0px #21212140",
        overflow: "hidden",
        maxHeight: 0,
        opacity: 0,
        transition: "max-height 0.3s,opacity 0.3s",

        "li:hover > &": {
          maxHeight: "25rem",
          opacity: 1,
        },
      }}
    >
      <ul
        css={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          padding: "1rem",
          listStyle: "none",
          margin: 0,
        }}
      >
        {items.map((item) => (
          <li key={item.title}>
            <NavItem title={item.title} path={item.path} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropDown;
