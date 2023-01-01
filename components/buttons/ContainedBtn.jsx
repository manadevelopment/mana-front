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
        fontSize: "1.4rem",
      })}
    >
      {children}
    </Link>
  );
};

export default ContainedBtn;
