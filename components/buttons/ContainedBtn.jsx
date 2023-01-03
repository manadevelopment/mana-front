/** @jsxImportSource @emotion/react */
import Link from "next/link";

const ContainedBtn = ({ children, path, padding }) => {
  return (
    <Link
      href={path || "#"}
      css={(theme) => ({
        background: theme.colors.gradient,
        padding: padding || "0.5rem 1rem",
        borderRadius: theme.borderRadius,
        color: "white",
        display: "inline-flex",
        "@media (max-width:768px)": {
          padding: "1rem 2rem",
        },
      })}
    >
      {children}
    </Link>
  );
};

export default ContainedBtn;
