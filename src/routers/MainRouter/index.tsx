import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import AboutPomodoro from "../../pages/AboutPomodoro";
import Home from "../../pages/Home";
import NotFound from "../../pages/NotFound";
import { useEffect } from "react";
import History from "../../pages/History";

const ScrolltoTop = () => {
  const pathname = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);

  return null;
};

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-pomodoro" element={<AboutPomodoro />} />
        <Route path="/history" element={<History />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ScrolltoTop />
    </BrowserRouter>
  );
};

export default MainRouter;
