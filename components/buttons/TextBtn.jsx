/** @jsxImportSource @emotion/react */
import Link from "next/link";

const TextBtn = ({ children, path }) => {
  return (
    <Link
      href={path || "#"}
      css={(theme) => ({
        color: theme.colors.mainGreen,
        fontSize: "1.4rem",
      })}
    >
      {children}
    </Link>
  );
};

export default TextBtn;
