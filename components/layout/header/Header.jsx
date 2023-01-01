/** @jsxImportSource @emotion/react */
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// * components
import NavItem from "./NavItem";
import DropDown from "./DropDown";
import ContainedBtn from "../../buttons/ContainedBtn";
import TextBtn from "../../buttons/TextBtn";

// * assets
import logo from "../../../assets/images/logo.webp";

// * dummy data
const menu = [
  {
    title: "خانه",
    path: "/",
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
  },
  {
    title: "نمونه‌کارها",
    path: "/",
  },
  {
    title: "دریافت سفارش",
    path: "/",
  },
  {
    title: "مقالات",
    path: "/",
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
  const [scrollTop, setScrollTop] = useState(0);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", (event) => {
      setScrollTop(window.scrollY);
    });
  }
  return (
    <header
      css={{
        display: "flex",
        justifyContent: "center",
        position: "sticky",
        top: 0,
        boxShadow: scrollTop ? " 0px 2px 4px 0px #21212140" : "none",
        backgroundColor: scrollTop ? "white" : "transparent",
        transition: "box-shadow 0.25s,background-color 0.25s",
      }}
    >
      {console.log(scrollTop)}
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
            <li
              key={item.title}
              css={{ paddingBlock: "0.5rem", position: "relative" }}
            >
              <NavItem
                title={item.title}
                path={item.path}
                subMenu={item.subMenu ? true : false}
              />
              {item.subMenu && <DropDown items={item.subMenu} />}
            </li>
          ))}
        </ul>
        {/* Buttons */}
        <div css={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <TextBtn path={"/"}>ورود</TextBtn>
          <ContainedBtn path={"/"}>عضویت</ContainedBtn>
        </div>
      </nav>
    </header>
  );
};

export default Header;
