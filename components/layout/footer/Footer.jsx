/** @jsxImportSource @emotion/react */
import Image from "next/image";

// * components

import MenuFooter from "./MenuFooter";
import ContactFooter from "./ContactFooter";

// * assets
import bgWave from "../../../assets/images/footer-wave.svg";
import enamad from "../../../assets/images/enamad.webp";
import samandehi from "../../../assets/images/samandehi.webp";

// * dummy data
const menu = [
  {
    title: "خانه",
    path: "/",
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
    title: "مشاوره رایگان",
    path: "/",
  },
  {
    title: "مقالات",
    path: "/",
  },
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
];

const Footer = () => {
  return (
    <footer
      css={(theme) => ({
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        backgroundColor: theme.colors.darkerBg,
        backgroundImage: `url(${bgWave.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        backgroundPositionY: "0",
        padding: "2rem",
      })}
    >
      <div
        css={(theme) => ({
          display: "flex",
          width: theme.width,
          maxWidth: theme.maxWidth,
          alignSelf: "center",
          justifyContent: "space-between",
          paddingTop: "5rem",
          "@media (max-width:768px)": {
            width: theme.mobileWidth,
            flexDirection: "column",
            gap: "1rem",
            paddingTop: "2rem",
          },
        })}
      >
        <MenuFooter title={"بخش‌های سایت"} menu={menu} />
        <MenuFooter title={"بخش‌های سایت"} menu={menu} />
        {/* contact way */}
        <ContactFooter />
        <div
          css={{
            display: "flex",
            gap: "1rem",
            alignSelf: "center",
          }}
        >
          <a href="#">
            <Image src={enamad} alt="اینماد" placeholder="blur" />
          </a>
          <a href="#">
            <Image src={samandehi} alt="ساماندهی" placeholder="blur" />
          </a>
        </div>
      </div>
      {/* copy right */}
      <p
        css={(theme) => ({
          margin: 0,
          color: theme.colors.mainGray,
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "1.4rem",

          "& span": {
            color: theme.colors.mainBlue,
          },
        })}
      >
        کليه حقوق محصولات و محتوای اين سایت متعلق به <span>مانا افزار</span> می
        باشد و هر گونه کپی برداری از محتوا سایت غیر مجاز است. | طراحی شده با ❤️
        در مانا افزار
      </p>
    </footer>
  );
};

export default Footer;
