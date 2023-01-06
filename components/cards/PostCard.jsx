/** @jsxImportSource @emotion/react */
import Link from "next/link";
import Image from "next/image";

const PostCard = ({ post, customCss }) => {
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        borderRadius: "2rem",
        backgroundColor: "white",
        boxShadow: "0px 10px 10px 0px #2121211A",
        height: "100%",
        ...customCss,
      }}
    >
      <Link href={post.url} css={{ display: "flex" }}>
        <Image
          src={post.image}
          alt={post.title}
          width={250}
          height={190}
          css={{
            width: "100%",
            aspectRatio: "25/19",
            height: "auto",
            borderRadius: "2rem 2rem 0 0",
          }}
        />
      </Link>
      <div
        css={{
          display: "flex",
          flexDirection: "column",
          flex: "1 0 0",
          paddingBottom: "1rem",
          gap: "1rem",
        }}
      >
        <p
          css={{
            margin: 0,
            fontSize: "1.2rem",
            fontWeight: 700,
            padding: "0.5rem",
            backgroundColor: "#EF476F",
            borderRadius: "100rem",
            alignSelf: "center",
            color: "white",
            marginTop: "-1.46rem",
          }}
        >
          {post.category}
        </p>
        <Link href={post.url} css={{ paddingInline: "1rem", fontWeight: 700 }}>
          {post.title}
        </Link>
        <p
          css={(theme) => ({
            margin: 0,
            backgroundColor: theme.colors.darkerBg,
            padding: "0.5rem 1rem",
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            fontSize: "1.4rem",
            borderRadius: "0.5rem",
            alignSelf: "center",
            marginTop: "auto",

            "& > svg": {
              fill: theme.colors.mainGray,
              width: "1.2rem",
            },
          })}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M256 512C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256s-114.6 256-256 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
          </svg>
          زمان مطالعه: ۷ دقیقه
        </p>
      </div>
    </div>
  );
};

export default PostCard;
