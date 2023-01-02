/** @jsxImportSource @emotion/react */
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setIsMobile } from "../../services/states/mobileSlice";

// * components
import Header from "./header/Header";
import Footer from "./footer/Footer";

const MainLayout = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsMobile(window.innerWidth <= 768 ? true : false));
  }, []);

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
