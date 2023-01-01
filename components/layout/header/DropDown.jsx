/** @jsxImportSource @emotion/react */
import Link from "next/link";

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
        transition: "max-height 0.3s",

        "a:hover &": {
          maxHeight: "25rem",
        },
      }}
    >
      <div
        css={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          padding: "1rem",
        }}
      >
        {items.map((item) => (
          <Link
            key={item.title}
            href={item.path}
            css={(theme) => ({
              color: theme.colors.mainGray,
              fontSize: "1.4rem",
              fontWeight: "bold",
              transition: "color 0.25s",
              whiteSpace: "nowrap",
              ":hover": {
                color: theme.colors.mainBlue,
              },
            })}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DropDown;
