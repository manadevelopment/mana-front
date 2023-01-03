/** @jsxImportSource @emotion/react */
import NavItem from "./NavItem";

const DropDown = ({ items, className }) => {
  return (
    <div
      className={className}
      css={(theme) => ({
        overflow: "hidden",
        transition: "max-height 0.3s,opacity 0.3s",
        maxHeight: className === "open" ? "50vh" : 0,
        backgroundColor: theme.colors.bg,

        "@media (min-width:769px)": {
          backgroundColor: "white",
          borderRadius: "1rem",
          position: "absolute",
          top: "100%",
          right: 0,
          opacity: 0,
          maxHeight: 0,
          boxShadow: "0px 2px 4px 0px #21212140",
          "li:hover > &": {
            maxHeight: "25rem",
            opacity: 1,
          },
        },
      })}
    >
      <ul
        css={{
          display: "flex",
          flexDirection: "column",
          padding: 0,
          listStyle: "none",
          margin: 0,
          "@media (min-width:769px)": {
            padding: "1rem 1rem 1rem 3rem",
            gap: "1rem",
          },
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
