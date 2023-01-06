/** @jsxImportSource @emotion/react */
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

// * components
import TestimonialCard from "../cards/TestimonialCard";

// * assets
import bg from "../../assets/images/comments-bg.webp";
import commentPicture from "../../assets/images/comment-picture.webp";

const TestimonialHome = () => {
  const mobile = useSelector((state) => state.isMobile.value);
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        padding: "5rem 1rem 10rem",
        gap: "1rem",
        alignItems: "center",
        background: `url(${bg.src})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        position: "relative",

        "@media (max-width:768px)": {
          padding: "3rem 0rem 10rem",
        },
      }}
    >
      <h2
        css={{
          margin: 0,
          fontSize: "3.2rem",
          color: "white",
          textAlign: "center",
        }}
      >
        اعتمــاد مشتریــان
      </h2>
      <p
        css={{
          margin: 0,
          fontWeight: 700,
          textAlign: "center",
          marginInline: "5%",
        }}
      >
        نظرات برخی از مشتری‌های مانا افزار را در مورد خدمات این شرکت برای رونق
        کسب و کارشان بدانید
      </p>
      <div
        css={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <div
          className="testimonial-slider-prev"
          css={{
            display: "flex",
            width: "3rem",
            aspectRatio: "1",
            backgroundColor: "#05B083",
            padding: "0.5rem",
            borderRadius: "50%",
            cursor: "pointer",
            justifyContent: "center",
            "& > svg": {
              fill: "white",
            },

            "@media (max-width:768px)": {
              display: "none",
            },
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
          </svg>
        </div>
        <Swiper
          spaceBetween={mobile ? 10 : 20}
          slidesPerView={1}
          pagination={{
            type: "bullets",
          }}
          navigation={{
            nextEl: ".testimonial-slider-next",
            prevEl: ".testimonial-slider-prev",
          }}
          modules={[Pagination, Navigation, Autoplay]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
          css={(theme) => ({
            padding: "1rem",
            width: "50%",
            margin: 0,
            "& .swiper-pagination-bullet-active": {
              backgroundColor: theme.colors.mainBlue,
            },
            "@media (max-width:768px)": {
              width: "100%",
              padding: "5rem 2rem 1rem",
            },
          })}
        >
          <SwiperSlide>
            <TestimonialCard
              image={commentPicture}
              title={"وبسایت فروشگاه رادهوم"}
              text={
                "طراحی سایت مانا افزار تبلیغ بـر اساس دستـرسـی راحـت کاربران به محصـولات و مشـاهده ویژگی‌های آنان و همچنین هدایت کاربران به صفحات با اهمیت انجام شده است."
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard
              image={commentPicture}
              title={"وبسایت فروشگاه رادهوم"}
              text={
                "طراحی سایت مانا افزار تبلیغ بـر اساس دستـرسـی راحـت کاربران به محصـولات و مشـاهده ویژگی‌های آنان و همچنین هدایت کاربران به صفحات با اهمیت انجام شده است."
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard
              image={commentPicture}
              title={"وبسایت فروشگاه رادهوم"}
              text={
                "طراحی سایت مانا افزار تبلیغ بـر اساس دستـرسـی راحـت کاربران به محصـولات و مشـاهده ویژگی‌های آنان و همچنین هدایت کاربران به صفحات با اهمیت انجام شده است."
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard
              image={commentPicture}
              title={"وبسایت فروشگاه رادهوم"}
              text={
                "طراحی سایت مانا افزار تبلیغ بـر اساس دستـرسـی راحـت کاربران به محصـولات و مشـاهده ویژگی‌های آنان و همچنین هدایت کاربران به صفحات با اهمیت انجام شده است."
              }
            />
          </SwiperSlide>
        </Swiper>
        <div
          className="testimonial-slider-next"
          css={{
            display: "flex",
            width: "3rem",
            aspectRatio: "1",
            backgroundColor: "#05B083",
            padding: "0.5rem",
            borderRadius: "50%",
            cursor: "pointer",
            justifyContent: "center",
            "& > svg": {
              fill: "white",
            },
            "@media (max-width:768px)": {
              display: "none",
            },
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TestimonialHome;
