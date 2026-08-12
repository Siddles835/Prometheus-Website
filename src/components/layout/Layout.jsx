import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import ScrollToTop from "../ScrollToTop";
import { useReveal } from "../../hooks/useReveal";

export default function Layout() {
  const { pathname } = useLocation();
  useReveal(pathname);

  return (
    <>
      <ScrollToTop />
      <Header />
      <main id="top">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
