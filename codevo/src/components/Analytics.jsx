import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

export default function Analytics() {
  const location = useLocation();

  useEffect(() => {
    if (MEASUREMENT_ID) {
      ReactGA.initialize(MEASUREMENT_ID);
    }
  }, []);

  useEffect(() => {
    if (MEASUREMENT_ID) {
      ReactGA.send({
        hitType: "pageview",
        page: location.pathname + location.search,
      });
    }
  }, [location]);

  return null;
}