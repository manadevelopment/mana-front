/** @jsxImportSource @emotion/react */

const ContactFooter = () => {
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        "@media (max-width:768px)": {
          textAlign: "center",
        },
      }}
    >
      <p
        css={(theme) => ({
          margin: 0,
          color: theme.colors.mainBlue,
          marginBottom: "1rem",
          "@media (max-width:768px)": {
            marginTop: "1rem",
            marginBottom: "0",
          },
        })}
      >
        مشاوره و ارتباط
      </p>
      <p
        css={{
          margin: 0,
          "& > span": {
            display: "inline-flex",
            gap: "0.5rem",
            alignItems: "center",
          },
          "&  svg": {
            fill: "#BDBDBD",
            width: "1.5rem",
          },
        }}
      >
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z" />
          </svg>{" "}
          آدرس:
        </span>
        <br /> قـم، خیـابـان بدون نـام، کوچـه بـدون نــام، فــرعـی
        <br />
        بدون جهت، انتهای کوچـه، ساختمــان بدون نــام،
        <br />
        طبقه مشخص نشده
      </p>
      <p
        css={(theme) => ({
          margin: 0,
          "& > span": {
            display: "inline-flex",
            gap: "0.5rem",
            alignItems: "center",
          },
          "&  svg": {
            fill: "#BDBDBD",
            width: "1.5rem",
          },

          "&  a": {
            transition: "color 0.25s",
            ":hover": {
              color: theme.colors.mainBlue,
            },
          },
        })}
      >
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M347.1 24.6c7.7-18.6 28-28.5 47.4-23.2l88 24C499.9 30.2 512 46 512 64c0 247.4-200.6 448-448 448c-18 0-33.8-12.1-38.6-29.5l-24-88c-5.3-19.4 4.6-39.7 23.2-47.4l96-40c16.3-6.8 35.2-2.1 46.3 11.6L207.3 368c70.4-33.3 127.4-90.3 160.7-160.7L318.7 167c-13.7-11.2-18.4-30-11.6-46.3l40-96z" />
          </svg>
          فروش و پشتیبانی:
        </span>
        <br />
        <a href="tel:+989123456789">۰۹۱۲۳۴۵۶۷۸۹</a> -{" "}
        <a href="tel:+989123456789">۰۹۱۲۳۴۵۶۷۸۹</a>
      </p>
      <p
        css={(theme) => ({
          margin: 0,
          "& > span": {
            display: "inline-flex",
            gap: "0.5rem",
            alignItems: "center",
          },
          "&  svg": {
            fill: "#BDBDBD",
            width: "1.5rem",
          },

          "&  a": {
            transition: "color 0.25s",
            ":hover": {
              color: theme.colors.mainBlue,
            },
          },
        })}
      >
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M224 122.8c-72.7 0-131.8 59.1-131.9 131.8 0 24.9 7 49.2 20.2 70.1l3.1 5-13.3 48.6 49.9-13.1 4.8 2.9c20.2 12 43.4 18.4 67.1 18.4h.1c72.6 0 133.3-59.1 133.3-131.8 0-35.2-15.2-68.3-40.1-93.2-25-25-58-38.7-93.2-38.7zm77.5 188.4c-3.3 9.3-19.1 17.7-26.7 18.8-12.6 1.9-22.4.9-47.5-9.9-39.7-17.2-65.7-57.2-67.7-59.8-2-2.6-16.2-21.5-16.2-41s10.2-29.1 13.9-33.1c3.6-4 7.9-5 10.6-5 2.6 0 5.3 0 7.6.1 2.4.1 5.7-.9 8.9 6.8 3.3 7.9 11.2 27.4 12.2 29.4s1.7 4.3.3 6.9c-7.6 15.2-15.7 14.6-11.6 21.6 15.3 26.3 30.6 35.4 53.9 47.1 4 2 6.3 1.7 8.6-1 2.3-2.6 9.9-11.6 12.5-15.5 2.6-4 5.3-3.3 8.9-2 3.6 1.3 23.1 10.9 27.1 12.9s6.6 3 7.6 4.6c.9 1.9.9 9.9-2.4 19.1zM400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM223.9 413.2c-26.6 0-52.7-6.7-75.8-19.3L64 416l22.5-82.2c-13.9-24-21.2-51.3-21.2-79.3C65.4 167.1 136.5 96 223.9 96c42.4 0 82.2 16.5 112.2 46.5 29.9 30 47.9 69.8 47.9 112.2 0 87.4-72.7 158.5-160.1 158.5z" />
          </svg>
          واتس‌اپ:
        </span>
        <br />
        <a href="tel:+989123456789">۰۹۱۲۳۴۵۶۷۸۹</a>
      </p>
      <p
        css={(theme) => ({
          margin: 0,
          "& > span": {
            display: "inline-flex",
            gap: "0.5rem",
            alignItems: "center",
          },
          "&  svg": {
            fill: "#BDBDBD",
            width: "1.5rem",
          },

          "&  a": {
            transition: "color 0.25s",
            ":hover": {
              color: theme.colors.mainBlue,
            },
          },
        })}
      >
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M64 208.1L256 65.9 448 208.1v47.4L289.5 373c-9.7 7.2-21.4 11-33.5 11s-23.8-3.9-33.5-11L64 255.5V208.1zM256 0c-12.1 0-23.8 3.9-33.5 11L25.9 156.7C9.6 168.8 0 187.8 0 208.1V448c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V208.1c0-20.3-9.6-39.4-25.9-51.4L289.5 11C279.8 3.9 268.1 0 256 0z" />
          </svg>
          ایمیل:
        </span>
        <br />
        <a href="mailto:info@manadev.net">info@manadev.net</a>
      </p>
    </div>
  );
};

export default ContactFooter;
