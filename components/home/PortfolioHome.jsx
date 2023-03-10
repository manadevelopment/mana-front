/** @jsxImportSource @emotion/react */
import Image from "next/image";

// * assets
import image from "../../assets/images/portfolio-1.webp";
import bg from "../../assets/images/portfolio-bg.webp";
import bgWaveTop from "../../assets/images/portfolio-top-bg.svg";
import bgWaveBottom from "../../assets/images/portfolio-bottom-bg.svg";

// * components
import PortfolioCard from "../cards/PortfolioCard";

const PortfolioHome = () => {
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        paddingBlock: "1rem 7.5rem",
        gap: "2rem",
        alignItems: "center",
        background: `url(${bg.src})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        position: "relative",
        marginTop: "18rem",
        "@media (max-width:768px)": {
          marginTop: "4rem",
          paddingBlock: "6rem",
        },
      }}
    >
      <Image
        src={bgWaveTop}
        css={{
          width: "100%",
          height: "auto",
          position: "absolute",
          bottom: "100%",
        }}
        alt="مانا"
      />
      <h2
        css={{
          margin: "0 5%",
          fontSize: "3.2rem",
          color: "white",
          textAlign: "center",
        }}
      >
        نمونه کارهای تیم ما
      </h2>
      <p
        css={{
          margin: "0 5%",
          color: "white",
          textAlign: "center",
        }}
      >
        طراحی منحصر به فرد، سرعت لود بالا و پشتیبانی ۲۴ ساعته در ۷ روز هفته
      </p>
      <div
        css={(theme) => ({
          width: theme.width,
          maxWidth: theme.maxWidth,
          display: "flex",
          gap: "2rem",
          "@media (max-width:768px)": {
            flexDirection: "column",
            width: theme.mobileWidth,
          },
        })}
      >
        <PortfolioCard
          image={image}
          title={"شرکت داروسازی سبحان دارو"}
          path={""}
        />
        <PortfolioCard
          image={image}
          title={"شرکت داروسازی سبحان دارو"}
          path={""}
        />
        <PortfolioCard
          image={image}
          title={"شرکت داروسازی سبحان دارو"}
          path={""}
        />
      </div>
      <Image
        src={bgWaveBottom}
        css={{
          width: "100%",
          height: "auto",
          position: "absolute",
          bottom: "0",
        }}
        alt="مانا"
      />
    </div>
  );
};

export default PortfolioHome;
