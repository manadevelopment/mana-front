/** @jsxImportSource @emotion/react */

// * components
import ServiceCard from "../cards/ServiceCard";

// * assets
import bg from "../../assets/images/service-wave.svg";
import createWebsiteIcon from "../../assets/images/service-picture-1.webp";

const ServiceHome = () => {
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        paddingBlock: "2.5rem",
        gap: "1rem",
        alignItems: "center",
        background: `url(${bg.src})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center 0",
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
        })}
      >
        خدمات حرفه‌ای مانا افزار
      </h2>
      <p
        css={(theme) => ({
          margin: 0,
          color: theme.colors.mainGray,
          textAlign: "center",
        })}
      >
        خدمات حرفه‌ای مانا افزار
      </p>
      <div
        css={(theme) => ({
          width: theme.width,
          maxWidth: theme.maxWidth,
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "6rem 2rem",
          marginTop: "5rem",
          "@media (max-width:768px)": {
            width: theme.mobileWidth,
            gridTemplateColumns: "repeat(1,1fr)",
          },
        })}
      >
        <ServiceCard
          icon={createWebsiteIcon}
          title={"طراحی وبسایت"}
          text={
            "مانا افزار با طراحی اختصاصی و گرافیکـی خلاقانه متناسب با فضای کسب و کـار و سلیقـه شمـا، در بالاتریـن سطح کیفیت، کدنویسـی حرفـه‌ای و کاملا اختصاصـی و با استفــاده از بـروزتـرین تکنـولـوژی‌ها، لــذت تفـــاوت را بــرای شـمـــا به ارمغــان می‌آورد."
          }
          path={""}
        />
        <ServiceCard
          icon={createWebsiteIcon}
          title={"طراحی وبسایت"}
          text={
            "مانا افزار با طراحی اختصاصی و گرافیکـی خلاقانه متناسب با فضای کسب و کـار و سلیقـه شمـا، در بالاتریـن سطح کیفیت، کدنویسـی حرفـه‌ای و کاملا اختصاصـی و با استفــاده از بـروزتـرین تکنـولـوژی‌ها، لــذت تفـــاوت را بــرای شـمـــا به ارمغــان می‌آورد."
          }
          path={""}
        />
        <ServiceCard
          icon={createWebsiteIcon}
          title={"طراحی وبسایت"}
          text={
            "مانا افزار با طراحی اختصاصی و گرافیکـی خلاقانه متناسب با فضای کسب و کـار و سلیقـه شمـا، در بالاتریـن سطح کیفیت، کدنویسـی حرفـه‌ای و کاملا اختصاصـی و با استفــاده از بـروزتـرین تکنـولـوژی‌ها، لــذت تفـــاوت را بــرای شـمـــا به ارمغــان می‌آورد."
          }
          path={""}
        />
        <ServiceCard
          icon={createWebsiteIcon}
          title={"طراحی وبسایت"}
          text={
            "مانا افزار با طراحی اختصاصی و گرافیکـی خلاقانه متناسب با فضای کسب و کـار و سلیقـه شمـا، در بالاتریـن سطح کیفیت، کدنویسـی حرفـه‌ای و کاملا اختصاصـی و با استفــاده از بـروزتـرین تکنـولـوژی‌ها، لــذت تفـــاوت را بــرای شـمـــا به ارمغــان می‌آورد."
          }
          path={""}
        />
        <ServiceCard
          icon={createWebsiteIcon}
          title={"طراحی وبسایت"}
          text={
            "مانا افزار با طراحی اختصاصی و گرافیکـی خلاقانه متناسب با فضای کسب و کـار و سلیقـه شمـا، در بالاتریـن سطح کیفیت، کدنویسـی حرفـه‌ای و کاملا اختصاصـی و با استفــاده از بـروزتـرین تکنـولـوژی‌ها، لــذت تفـــاوت را بــرای شـمـــا به ارمغــان می‌آورد."
          }
          path={""}
        />
        <ServiceCard
          icon={createWebsiteIcon}
          title={"طراحی وبسایت"}
          text={
            "مانا افزار با طراحی اختصاصی و گرافیکـی خلاقانه متناسب با فضای کسب و کـار و سلیقـه شمـا، در بالاتریـن سطح کیفیت، کدنویسـی حرفـه‌ای و کاملا اختصاصـی و با استفــاده از بـروزتـرین تکنـولـوژی‌ها، لــذت تفـــاوت را بــرای شـمـــا به ارمغــان می‌آورد."
          }
          path={""}
        />
        <ServiceCard
          icon={createWebsiteIcon}
          title={"طراحی وبسایت"}
          text={
            "مانا افزار با طراحی اختصاصی و گرافیکـی خلاقانه متناسب با فضای کسب و کـار و سلیقـه شمـا، در بالاتریـن سطح کیفیت، کدنویسـی حرفـه‌ای و کاملا اختصاصـی و با استفــاده از بـروزتـرین تکنـولـوژی‌ها، لــذت تفـــاوت را بــرای شـمـــا به ارمغــان می‌آورد."
          }
          path={""}
        />
        <ServiceCard
          icon={createWebsiteIcon}
          title={"طراحی وبسایت"}
          text={
            "مانا افزار با طراحی اختصاصی و گرافیکـی خلاقانه متناسب با فضای کسب و کـار و سلیقـه شمـا، در بالاتریـن سطح کیفیت، کدنویسـی حرفـه‌ای و کاملا اختصاصـی و با استفــاده از بـروزتـرین تکنـولـوژی‌ها، لــذت تفـــاوت را بــرای شـمـــا به ارمغــان می‌آورد."
          }
          path={""}
        />
      </div>
    </div>
  );
};

export default ServiceHome;
