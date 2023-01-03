/** @jsxImportSource @emotion/react */
import Image from "next/image";
import Link from "next/link";

const ServiceCard = ({ icon, title, text, path }) => {
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
        boxShadow: "0px 10px 20px 0px #2121211a",
        borderRadius: "5rem 5rem 2rem 2rem",
        padding: "0 1rem 2rem",
        backgroundColor: "white",
      }}
    >
      <Image
        src={icon}
        alt={title}
        css={(theme) => ({
          width: "12rem",
          height: "auto",
          marginTop: "-3rem",
        })}
        placeholder="blur"
      />
      <h3
        css={(theme) => ({
          margin: 0,
          fontSize: "2rem",
          color: theme.colors.mainBlue,
        })}
      >
        {title}
      </h3>
      <p css={{ margin: 0, textAlign: "justify" }}>{text}</p>
      <Link
        css={(theme) => ({
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          color: theme.colors.mainGreen,
        })}
        href={path}
      >
        توضیحات بیشتر
        <svg
          css={(theme) => ({ width: "1rem", fill: theme.colors.mainGreen })}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
        >
          <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
        </svg>
      </Link>
    </div>
  );
};

export default ServiceCard;
