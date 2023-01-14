/** @jsxImportSource @emotion/react */

// * assets
import bg from "../../assets/images/form-home-bot-wave.svg";

const FormHome = () => {
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        padding: "5rem 0 4rem",
        gap: "1rem",
        alignItems: "center",
        background: `url(${bg.src})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center 100%",
        backgroundSize: "100%",
        "@media (max-width:768px)": {
          backgroundSize: "450%",
        },
      }}
    >
      <h2
        css={(theme) => ({
          margin: 0,
          fontSize: "3.2rem",
          color: theme.colors.mainGreen,
          textAlign: "center",
          marginInline: "5%",
        })}
      >
        درخـواست مشــاوره رایگــان
      </h2>
      <p
        css={(theme) => ({
          margin: 0,
          color: theme.colors.mainGray,
          textAlign: "center",
          marginInline: "5%",
        })}
      >
        از طريق فرم ذيل ميتوانيد نسبت به استعلام قيمت طراحی وب سايت و يا ثبت
        سفارش طراحی وب سايت، اقدام بفرماييد
      </p>
      <form
        id="consultingForm"
        action="#"
        className="form"
        css={(theme) => ({
          width: theme.width,
          maxWidth: theme.maxWidth,
          display: "flex",
          flexDirection: "column",
          gap: "2rem",

          "& > .form__row": {
            width: "100%",
            display: "flex",
            gap: "2rem",
          },

          "& .form__col": {
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            flex: "1 0 0",
          },

          "& .form__box": {
            border: "0.1rem solid #E0E0E0",
            borderRadius: "3rem",
            padding: "2rem",
            flex: "1 0 0",
          },
          "& .form__input": {
            border: 0,
            width: "100%",
            backgroundColor: theme.colors.darkerBg,
            padding: "1.5rem 2rem",
            borderRadius: "1rem",
          },

          "@media (max-width:768px)": {
            width: theme.mobileWidth,

            "& > .form__row": {
              flexDirection: "column",
            },
          },
        })}
      >
        <div className="form__row">
          <div className="form__box"></div>
          <div className="form__box"></div>
          <div className="form__box"></div>
        </div>
        <div className="form__row">
          <div className="form__col">
            <input
              className="form__input"
              type="text"
              name="fullName"
              id="fullName"
              placeholder="نام و نام خانوادگی را اینجا وارد نمایید"
            />
            <input
              className="form__input"
              type="email"
              name="email"
              id="email"
              placeholder="پست الکترونیکی"
            />
          </div>
          <div className="form__col">
            <input
              className="form__input"
              type="tel"
              name="phoneNumber"
              id="phoneNumber"
              placeholder="شماره همراه"
            />
          </div>
        </div>
        <div className="form__row">
          <textarea
            className="form__input"
            name="description"
            id="description"
            rows="5"
            placeholder="توضيحات لازم را اينجا وارد کنيد"
          ></textarea>
        </div>
        <input
          type="submit"
          value="ارسال درخواست"
          css={(theme) => ({
            border: 0,
            background: theme.colors.gradient,
            padding: "1rem 4rem",
            borderRadius: theme.borderRadius,
            color: "white",
            display: "inline-flex",
            fontWeight: "bold",
            alignSelf: "flex-start",
            cursor: "pointer",
            "@media (max-width:768px)": {
              padding: "1rem 2rem",
            },
          })}
        />
      </form>
    </div>
  );
};

export default FormHome;
