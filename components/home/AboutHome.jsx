/** @jsxImportSource @emotion/react */

import Link from "next/link";

const AboutHome = () => {
  return (
    <div
      css={(theme) => ({
        backgroundColor: theme.colors.darkerBg,
        paddingBlock: "2rem",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      })}
    >
      <div
        css={{
          fontWeight: 900,
          fontSize: "28rem",
          textAlign: "center",
          lineHeight: "1.5",
          color: "#e5e5e5",
          "@media (max-width:768px)": {
            fontSize: "15rem",
            writingMode: "vertical-lr",
            textOrientation: "mixed",
            rotate: "180deg",
          },
        }}
      >
        درباره ما
      </div>
      <div
        css={(theme) => ({
          display: "flex",
          alignItems: "flex-start",
          width: theme.width,
          maxWidth: theme.maxWidth,
          alignSelf: "center",
          gap: "5rem",
          position: "absolute",
          top: "40%",
          "@media (max-width:768px)": {
            flexDirection: "column",
            top: "5rem",
            width: theme.mobileWidth,
            gap: "1rem",
            alignItems: "stretch",
          },
        })}
      >
        <h2
          css={{
            whiteSpace: "nowrap",
            fontSize: "4rem",
            fontWeight: 700,
            margin: 0,
            textAlign: "center",
          }}
        >
          <span css={(theme) => ({ color: theme.colors.mainGreen })}>
            از مجمــوعــه مــا
          </span>
          <br />
          <span css={(theme) => ({ color: theme.colors.mainBlue })}>
            بـیشتــر بــدانیــد
          </span>
        </h2>
        <div css={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <p css={{ margin: "1rem 0 0", textAlign: "justify" }}>
            به راستی چـرا صفحه دربـاره مـا یا همـان About Us یکـی از مهمتـرین
            صفحـات وب سایت هـا محسوب مـی شود؟ امروزه اکثر مشاغل موفق متوجه شده
            اند که برای استفاده بهینه از فرصت ها، نیاز به حضـور قـوی در وب
            دارند. بسیـاری از آنها زمان زیادی را صرف طراحی زیبای صفحات اصلی خـود
            برای جلب مشتریـان احتمالـی می کننـد اما همیـن شرکت ها ممکن است از
            بخش بسیار مهمی از وب سایت های خود یعنی صفحه درباره ما غفلت کنند.
          </p>
          <Link
            css={(theme) => ({
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              color: theme.colors.mainGreen,
            })}
            href="/"
          >
            درباره ما بیشتر بدانید
            <svg
              css={(theme) => ({ width: "1rem", fill: theme.colors.mainGreen })}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutHome;
