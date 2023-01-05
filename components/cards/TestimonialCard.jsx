/** @jsxImportSource @emotion/react */
import Image from "next/image";

const TestimonialCard = ({ image, text, title }) => {
  return (
    <div
      css={{
        display: "flex",

        padding: "4rem",
        gap: "2rem",
        borderRadius: "3rem",
        backgroundColor: "white",
        boxShadow: "0px 4px 4px 0px #2121211A",
        "@media (max-width:768px)": {
          flexDirection: "column",
          alignItems: "center",
          padding: "0rem 1rem 3rem",
        },
      }}
    >
      <Image
        src={image}
        placeholder="blur"
        alt={title}
        css={{
          width: "10rem",
          aspectRatio: "1",
          borderRadius: "50%",
          border: "0.1rem solid #E0E0E0",
          "@media (max-width:768px)": {
            marginTop: "-3rem",
          },
        }}
      />

      <div
        css={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <p
          css={(theme) => ({
            margin: 0,
            color: theme.colors.mainGray,
          })}
        >
          {text}
        </p>
        <p
          css={(theme) => ({
            margin: 0,
            color: theme.colors.mainBlue,
          })}
        >
          {title}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
