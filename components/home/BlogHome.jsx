/** @jsxImportSource @emotion/react */
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// * components
import PostCard from "../cards/PostCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

// * assets
import bg from "../../assets/images/blog-home-top-wave.svg";
import postImage from "../../assets/images/blog-picture-1.webp";

// * dummy data

const post = {
  title: "اهمیت بالا تجربه کاربـری در طراحی اپلیکیشن‌ها",
  category: "شروع به کار و کسب درآمد",
  url: "/",
  image: postImage,
};
const secPost = {
  title:
    "اهمیت بالا تجربه کاربـری در طراحی اپلیکیشن‌ها اهمیت بالا تجربه کاربـری در طراحی اپلیکیشن‌ها",
  category: "شروع به کار و کسب درآمد",
  url: "/",
  image: postImage,
};

const BlogHome = () => {
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        padding: "6rem 0 2.5rem",
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
          marginInline: "5%",
        })}
      >
        آخرین مقـالات مانـا افــزار
      </h2>
      <p
        css={(theme) => ({
          margin: 0,
          color: theme.colors.mainGray,
          textAlign: "center",
          marginInline: "5%",
        })}
      >
        نوشتن کار جالبیه که از هزاران سال همراه ما بوده و کمک کرده تا همیشه به
        روز باشیم
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
          className="blog-slider-prev"
          css={{
            display: "flex",
            width: "3rem",
            aspectRatio: "1",
            backgroundColor: "#E0E0E0",
            padding: "0.5rem",
            borderRadius: "50%",
            cursor: "pointer",
            justifyContent: "center",
            "& > svg": {
              fill: "#BDBDBD",
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
          spaceBetween={20}
          slidesPerView={"auto"}
          pagination={{
            type: "bullets",
          }}
          navigation={{
            nextEl: ".blog-slider-next",
            prevEl: ".blog-slider-prev",
          }}
          modules={[Pagination, Navigation, Autoplay]}
          css={(theme) => ({
            padding: "1rem 1rem 5rem",
            width: theme.width,
            maxWidth: theme.maxWidth,
            margin: 0,
            "& .swiper-pagination-bullet-active": {
              backgroundColor: theme.colors.mainBlue,
            },
            "@media (max-width:768px)": {
              width: "100%",
            },

            "& .swiper-slide": {
              width: "25rem",
              height: "auto",
            },
          })}
        >
          <SwiperSlide>
            <PostCard post={post} />
          </SwiperSlide>
          <SwiperSlide>
            <PostCard post={post} />
          </SwiperSlide>
          <SwiperSlide>
            <PostCard post={post} />
          </SwiperSlide>
          <SwiperSlide>
            <PostCard post={secPost} />
          </SwiperSlide>
          <SwiperSlide>
            <PostCard post={post} />
          </SwiperSlide>
          <SwiperSlide>
            <PostCard post={post} />
          </SwiperSlide>
          <SwiperSlide>
            <PostCard post={post} />
          </SwiperSlide>
          <SwiperSlide>
            <PostCard post={post} />
          </SwiperSlide>
        </Swiper>
        <div
          className="blog-slider-next"
          css={{
            display: "flex",
            width: "3rem",
            aspectRatio: "1",
            backgroundColor: "#E0E0E0",
            padding: "0.5rem",
            borderRadius: "50%",
            cursor: "pointer",
            justifyContent: "center",
            "& > svg": {
              fill: "#BDBDBD",
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

export default BlogHome;
