/** @jsxImportSource @emotion/react */
import Image from "next/image";

// * components
import ContainedBtn from "../buttons/ContainedBtn";

// * assets
import image from "../../assets/images/hero-image.webp";
import bg from "../../assets/images/hero-bg-wave.svg";
import arrow from "../../assets/images/hero-arrow.svg";

const HeroHome = () => {
  console.log(bg);
  return (
    <div
      css={{
        height: "60rem",
        width: "100%",
        display: "flex",
        padding: "2rem",
        alignItems: "center",
        justifyContent: "center",
        gap: "15rem",
        background: `url(${bg.src})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center 100%",
        backgroundSize: "100%",

        "@media (max-width:768px)": {
          flexDirection: "column",
          gap: "1rem",
          backgroundSize: "500%",
        },
      }}
    >
      <div css={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <h2
          css={(theme) => ({
            fontWeight: 900,
            margin: 0,
            fontSize: "4rem",
            textAlign: "center",
            color: theme.colors.mainBlue,
            "@media (max-width:768px)": {
              fontSize: "2.4rem",
            },
          })}
        >
          چطور میشه یه سایت ایده‌آل
          <br />
          با کـلی امکانـات داشته باشم؟
        </h2>
        <p
          css={(theme) => ({
            margin: 0,
            fontSize: "3.6rem",
            color: theme.colors.mainGray,
            textAlign: "center",
            "@media (max-width:768px)": {
              fontSize: "2rem",
            },
          })}
        >
          جــواب سـوالـت هـمـیــن جــاســت!
        </p>
        <div
          css={{
            position: "relative",
            marginTop: "2rem",
            "@media (max-width:768px)": {
              padding: "0 11% 0 0",
            },
          }}
        >
          <ContainedBtn padding={"1rem 4rem"}>مشاوره رایگان</ContainedBtn>
          <Image
            src={arrow}
            css={{
              position: "absolute",
              width: "13rem",
              height: "auto",
              top: "-3rem",
              marginInlineStart: "1rem",
              "@media (max-width:768px)": {
                width: "10rem",
                top: "-2rem",
              },
            }}
          />
        </div>
      </div>
      <div
        css={{
          "@media (max-width:768px)": {
            width: "100%",
          },
        }}
      >
        <Image
          src={image}
          placeholder="blur"
          css={{ width: "100%", height: "auto" }}
          alt="مردی در حال فکر کردن"
        />
      </div>
    </div>
  );
};

export default HeroHome;
