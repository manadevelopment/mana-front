/** @jsxImportSource @emotion/react */
import Link from "next/link";
import Image from "next/image";

// * components
import NavItem from "./NavItem";

// * assets
import logo from "../../../assets/images/logo.webp";

// * dummy data
const menu = [
  {
    title: "خانه",
    path: "/",
    subMenu: undefined,
  },
  {
    title: "خدمات",
    path: "/",
    subMenu: [
      {
        title: "طراحی سایت",
        path: "/",
      },
      {
        title: "سئو و بهینه‌سازی",
        path: "/",
      },
      {
        title: "دیجیتال مارکتینگ",
        path: "/",
      },
      {
        title: "آموزش و مشاوره",
        path: "/",
      },
      {
        title: "تولید محتوا",
        path: "/",
      },
    ],
  },
  {
    title: "دوره‌ها",
    path: "/",
    subMenu: undefined,
  },
  {
    title: "نمونه‌کارها",
    path: "/",
    subMenu: undefined,
  },
  {
    title: "دریافت سفارش",
    path: "/",
    subMenu: undefined,
  },
  {
    title: "مقالات",
    path: "/",
    subMenu: undefined,
  },
  {
    title: "سایر",
    path: "/",
    subMenu: [
      {
        title: "درباره ما",
        path: "/",
      },
      {
        title: "تیم ما",
        path: "/",
      },
      {
        title: "سوالات متداول",
        path: "/",
      },
      {
        title: "ارتباط با ما",
        path: "/",
      },
    ],
  },
];

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
        {/* Logo */}
        <Link href="/" css={{ display: "flex", width: "15%" }}>
          <Image
            src={logo}
            placeholder="blur"
            css={{ width: "100%", height: "auto" }}
            alt="Mana's Logo"
          />
        </Link>
        {/* Menu */}
        <ul
          css={{
            listStyle: "none",
            margin: 0,
            padding: 0,
            display: "flex",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          {menu.map((item) => (
            <NavItem
              key={item.title}
              title={item.title}
              path={item.path}
              subMenu={item.subMenu}
            />
          ))}
        </ul>
        {/* Buttons */}
      </nav>
    </header>
  );
};

export default Header;