/** @jsxImportSource @emotion/react */
import Link from "next/link";

const MenuFooter = ({ title, menu }) => {
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        "@media (max-width:768px)": {
          textAlign: "center",
        },
      }}
    >
      <p
        css={(theme) => ({
          margin: 0,
          color: theme.colors.mainBlue,
          marginBottom: "1rem",
          "@media (max-width:768px)": {
            marginTop: "1rem",
            marginBottom: "0",
          },
        })}
      >
        {title}
      </p>

      {menu.map((item) => (
        <Link
          key={item.title}
          href={item.path}
          css={(theme) => ({
            transition: "color 0.25s",
            fontSize: "1.4rem",
            ":hover": {
              color: theme.colors.mainBlue,
            },
          })}
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default MenuFooter;
