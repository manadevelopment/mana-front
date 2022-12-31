/** @jsxImportSource @emotion/react */
import Link from "next/link";
import Image from "next/image";

// assets

import logo from "../../assets/images/logo.webp";

const Header = () => {
  return (
    <header css={{ display: "flex", justifyContent: "center" }}>
      <nav
        css={(theme) => ({
          alignItems: "center",
          display: "flex",
          maxWidth: theme.maxWidth,
          paddingBlock: "1rem",
          width: theme.width,
          justifyContent: "space-between",
        })}
      >
        <Link href="/" css={{ display: "flex", width: "15%" }}>
          <Image
            src={logo}
            placeholder="blur"
            css={{ width: "100%", height: "auto" }}
          />
        </Link>
        <ul
          css={(theme) => ({
            listStyle: "none",
            margin: 0,
            padding: 0,
            display: "flex",
            alignItems: "center",
            gap: "2rem",

            "& a": {
              color: theme.colors.mainGray,
              transition: "color 0.25s",
              fontSize: "1.4rem",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              paddingBlock: "1rem",

              "& svg": {
                width: "1rem",
                fill: theme.colors.mainGray,
                transition: "all 0.25s",
              },

              ":hover": {
                color: theme.colors.mainBlue,

                "& svg": {
                  fill: theme.colors.mainBlue,
                  rotate: "180deg",
                },
              },
            },
          })}
        >
          <li>
            <Link href={"/"}>خانه</Link>
          </li>
          <li>
            <Link href={"/"}>
              خدمات
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
              </svg>
            </Link>
          </li>
          <li>
            <Link href={"/"}>دوره‌ها</Link>
          </li>
          <li>
            <Link href={"/"}>نمونه‌کارها</Link>
          </li>
          <li>
            <Link href={"/"}>دریافت سفارش</Link>
          </li>
          <li>
            <Link href={"/"}>مقالات</Link>
          </li>
          <li>
            <Link href={"/"}>
              سایر
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
              </svg>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
