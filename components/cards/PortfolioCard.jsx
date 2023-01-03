/** @jsxImportSource @emotion/react */
import Image from "next/image";
import Link from "next/link";

const PortfolioCard = ({ image, path, title }) => {
  return (
    <div css={{ display: "flex", flexDirection: "column" }}>
      <Image
        src={image}
        alt={title}
        css={{
          aspectRatio: "4/3",
          objectGit: "cover",
          borderRadius: "5rem",
          height: "auto",
        }}
      />
      <Link
        href={path}
        css={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "90%",
          alignSelf: "center",
          backgroundColor: "white",
          padding: "2rem",
          borderRadius: "5rem",
          boxShadow: "0px 0px 30px 0px #2121214d",
          marginTop: "-4rem",
          fontWeight: "bold",
        }}
      >
        {title}
        <svg
          css={(theme) => ({
            fill: "white",
            width: "4rem",
            height: "4rem",
            backgroundColor: theme.colors.mainGreen,
            padding: "1rem",
            borderRadius: "50%",
          })}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
        </svg>
      </Link>
    </div>
  );
};

export default PortfolioCard;
