/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import Image from "next/image";

// * components
import NavItem from "./NavItem";
import DropDown from "./DropDown";
import ContainedBtn from "../../buttons/ContainedBtn";
import TextBtn from "../../buttons/TextBtn";

// * assets
import logo from "../../../assets/images/logo.webp";
import MobileMenu from "./MobileMenu";

// * dummy data
const menu = [
  {
    title: "خانه",
    path: "/",
  },
  {
    title: "خدمات",
    path: "",
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
  const mobile = useSelector((state) => state.isMobile.value);

  const [isOpen, setIsOpen] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
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
        boxShadow: scrollTop ? !isOpen && "0px 1px 8px 0px #2121211F" : "none",
        backgroundColor: scrollTop ? "white" : isOpen ? "white" : "transparent",
        transition: "box-shadow 0.25s,background-color 0.25s",
      }}
    >
      <nav
        css={(theme) => ({
          alignItems: "center",
          display: "flex",
          maxWidth: theme.maxWidth,
          padding: mobile ? "1rem 2rem" : "1rem 0",
          width: mobile ? "100%" : theme.width,
          justifyContent: "space-between",
          gap: "2rem",
        })}
      >
        {/* mobile toggle button */}
        {mobile && (
          <button
            css={{
              background: "none",
              border: 0,
              display: "flex",
              padding: 0,
            }}
            onClick={() => {
              document.body.style.overflowY = isOpen ? "scroll" : "hidden";
              setIsOpen((prevIsOpen) => !prevIsOpen);
            }}
          >
            {isOpen ? (
              <svg
                css={(theme) => ({
                  fill: theme.colors.mainGray,
                  width: "2.4rem",
                })}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
              </svg>
            ) : (
              <svg
                css={(theme) => ({
                  width: "2.4rem",
                  fill: theme.colors.mainGray,
                })}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
              </svg>
            )}
          </button>
        )}
        {/* Logo */}
        <Link href="/" css={{ display: "flex", width: mobile ? "40%" : "15%" }}>
          <Image
            src={logo}
            placeholder="blur"
            css={{ width: "100%", height: "auto" }}
            alt="Mana's Logo"
          />
        </Link>

        {/* Menu and Buttons */}
        {!mobile && (
          <>
            <ul
              css={{
                listStyle: "none",
                margin: 0,
                padding: 0,
                display: "flex",
                alignItems: "center",
                gap: "2rem",
                marginInlineEnd: "auto",
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
                    subMenu={item.subMenu}
                  />
                </li>
              ))}
            </ul>
            <div css={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <TextBtn path={"/"}>ورود</TextBtn>
              <ContainedBtn path={"/"}>عضویت</ContainedBtn>
            </div>
          </>
        )}

        {/* social media */}
        <div css={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          <form action="#" method="post">
            <button
              type="submit"
              css={{
                background: "none",
                border: 0,
                display: "flex",
                padding: 0,
                cursor: "pointer",
              }}
            >
              <svg
                css={{ width: mobile ? "2.4rem" : "2rem" }}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9 0C13.9706 0 18 4.02944 18 9C18 11.1248 17.2637 13.0776 16.0323 14.6172L19.7071 18.2929C20.0976 18.6834 20.0976 19.3166 19.7071 19.7071C19.3466 20.0676 18.7794 20.0953 18.3871 19.7903L18.2929 19.7071L14.6172 16.0323C13.0776 17.2637 11.1248 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0ZM9 2C5.13401 2 2 5.13401 2 9C2 12.866 5.13401 16 9 16C12.866 16 16 12.866 16 9C16 5.13401 12.866 2 9 2Z"
                  fill="#757575"
                />
              </svg>
            </button>
          </form>
          {!mobile && (
            <>
              <a href="#" css={{ display: "flex" }}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.00401338 20L1.35601 15.032C0.465151 13.5048 -0.00289063 11.768 1.34322e-05 9.99999C1.34322e-05 4.477 4.47701 0 10 0C15.523 0 20 4.477 20 9.99999C20 15.523 15.523 20 10 20C8.23279 20.0028 6.49667 19.5352 4.97001 18.645L0.00401338 20ZM6.39101 5.308C6.26187 5.31601 6.13568 5.35003 6.02001 5.408C5.91153 5.46943 5.81251 5.54622 5.72601 5.636C5.60601 5.749 5.53801 5.847 5.46501 5.942C5.09542 6.42299 4.89662 7.01341 4.90001 7.62C4.90201 8.10999 5.03001 8.58699 5.23001 9.03299C5.63901 9.93499 6.31201 10.89 7.20101 11.775C7.41501 11.988 7.62401 12.202 7.84901 12.401C8.9524 13.3725 10.2673 14.073 11.689 14.447L12.258 14.534C12.443 14.544 12.628 14.53 12.814 14.521C13.1052 14.506 13.3896 14.4271 13.647 14.29C13.813 14.202 13.891 14.158 14.03 14.07C14.03 14.07 14.073 14.042 14.155 13.98C14.29 13.88 14.373 13.809 14.485 13.692C14.568 13.606 14.64 13.505 14.695 13.39C14.773 13.227 14.851 12.916 14.883 12.657C14.907 12.459 14.9 12.351 14.897 12.284C14.893 12.177 14.804 12.066 14.707 12.019L14.125 11.758C14.125 11.758 13.255 11.379 12.724 11.137C12.668 11.1126 12.608 11.0987 12.547 11.096C12.4786 11.089 12.4095 11.0967 12.3443 11.1186C12.2791 11.1405 12.2193 11.1761 12.169 11.223V11.221C12.164 11.221 12.097 11.278 11.374 12.154C11.3325 12.2098 11.2753 12.2519 11.2098 12.275C11.1443 12.2982 11.0733 12.3013 11.006 12.284C10.9408 12.2666 10.877 12.2445 10.815 12.218C10.691 12.166 10.648 12.146 10.563 12.109L10.558 12.107C9.98592 11.8572 9.45623 11.5198 8.98801 11.107C8.86201 10.997 8.74501 10.877 8.62501 10.761C8.23159 10.3842 7.88872 9.95801 7.60501 9.49299L7.54601 9.39799C7.50363 9.33416 7.46937 9.2653 7.44401 9.19299C7.40601 9.04599 7.50501 8.92799 7.50501 8.92799C7.50501 8.92799 7.74801 8.66199 7.86101 8.51799C7.9551 8.39832 8.04288 8.27381 8.12401 8.14499C8.24201 7.955 8.27901 7.75999 8.21701 7.609C7.93701 6.925 7.64701 6.244 7.34901 5.568C7.29001 5.434 7.11501 5.338 6.95601 5.319C6.90201 5.313 6.84801 5.307 6.79401 5.303C6.65972 5.29632 6.52514 5.29766 6.39101 5.307V5.308Z"
                    fill="#757575"
                  />
                </svg>
              </a>
              <a href="#" css={{ display: "flex" }}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.9356 5.90309C19.9234 5.06376 19.7679 4.23107 19.4702 3.44606C18.9494 2.10556 17.8887 1.04557 16.546 0.526666C15.7697 0.235059 14.9489 0.0787228 14.1182 0.0609825C13.0498 0.0133053 12.711 0 9.99889 0C7.28676 0 6.93914 7.43489e-08 5.8785 0.0609825C5.04887 0.0787228 4.22812 0.235059 3.4518 0.526666C2.10906 1.04557 1.04731 2.10556 0.527543 3.44606C0.235451 4.22109 0.0777432 5.04047 0.0621946 5.86872C0.014438 6.93647 0 7.27464 0 9.98226C0 12.6899 -8.27475e-09 13.0358 0.0621946 14.0958C0.0788538 14.9252 0.235451 15.7434 0.527543 16.5207C1.04842 17.8601 2.10906 18.9201 3.45291 19.439C4.2259 19.7406 5.04665 19.9113 5.87961 19.9379C6.94913 19.9856 7.28787 20 10 20C12.7121 20 13.0598 20 14.1204 19.9379C14.95 19.9213 15.7708 19.7649 16.5482 19.4733C17.8909 18.9533 18.9516 17.8933 19.4725 16.5539C19.7646 15.7778 19.9211 14.9595 19.9378 14.1291C19.9856 13.0624 20 12.7242 20 10.0155C19.9978 7.30791 19.9978 6.96419 19.9356 5.90309ZM9.99223 15.1026C7.15571 15.1026 4.85784 12.8085 4.85784 9.97672C4.85784 7.14492 7.15571 4.85087 9.99223 4.85087C12.8265 4.85087 15.1266 7.14492 15.1266 9.97672C15.1266 12.8085 12.8265 15.1026 9.99223 15.1026ZM15.331 5.85653C14.6679 5.85653 14.1337 5.3221 14.1337 4.66127C14.1337 4.00044 14.6679 3.46602 15.331 3.46602C15.9918 3.46602 16.5271 4.00044 16.5271 4.66127C16.5271 5.3221 15.9918 5.85653 15.331 5.85653Z"
                    fill="#757575"
                  />
                  <path
                    d="M9.99223 13.3064C11.8342 13.3064 13.3274 11.8156 13.3274 9.97672C13.3274 8.13781 11.8342 6.64708 9.99223 6.64708C8.15026 6.64708 6.65704 8.13781 6.65704 9.97672C6.65704 11.8156 8.15026 13.3064 9.99223 13.3064Z"
                    fill="#757575"
                  />
                </svg>
              </a>
            </>
          )}
        </div>
      </nav>
      {mobile && <MobileMenu isOpen={isOpen} menu={menu} />}
    </header>
  );
};

export default Header;
