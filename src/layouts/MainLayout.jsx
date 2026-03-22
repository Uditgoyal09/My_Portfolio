import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion as Motion } from "motion/react";
import AnimatedBackground from "../components/AnimatedBackground";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SocialSidebar from "../components/SocialSidebar";

const pageVariants = {
  initial: { opacity: 0, y: 28, filter: "blur(10px)" },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: -18,
    filter: "blur(8px)",
    transition: { duration: 0.35, ease: [0.4, 0, 1, 1] },
  },
};

const MainLayout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [location.pathname]);

  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-[#050816] text-white">
      <AnimatedBackground
        zIndex={0}
        accentColor="#1ad8a3"
        accentColor2="#5ab8ff"
      />

      <Navbar />
      <SocialSidebar />

      <main className="relative z-10 flex-1 pt-10">
        <AnimatePresence mode="wait">
          <Motion.div
            key={location.pathname}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="mx-auto w-full max-w-7xl px-4 pb-12 pt-4 sm:px-6 sm:pt-5 lg:px-8 lg:pt-6"
          >
            <Outlet />
          </Motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
