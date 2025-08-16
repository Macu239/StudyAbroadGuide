import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();// Get the current path from the router

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on path change
  }, [pathname]);

  return null;
}