/** @jsxImportSource @emotion/react */
import { keyframes } from "@emotion/react";

const fadeIn = keyframes`
    0%{
        opacity:0;
    }
    100%{
        opacity:1;
    }
`;

const MobileMenu = ({ setIsOpen }) => {
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        top: 0,
        right: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        animation: `${fadeIn} 0.25s`,
      }}
    >
      <button
        onClick={() => {
          document.body.style.overflowY = "scroll";
          setIsOpen(false);
        }}
      >
        بستن
      </button>
      منو موبایل
    </div>
  );
};

export default MobileMenu;
