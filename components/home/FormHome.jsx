/** @jsxImportSource @emotion/react */

// * assets
import bg from "../../assets/images/form-home-bot-wave.svg";

const FormHome = () => {
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        padding: "3rem 0 4rem",
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
    </div>
  );
};

export default FormHome;
