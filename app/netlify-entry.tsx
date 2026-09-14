import { useEffect } from "react";
import { createRoot } from "react-dom/client";
import ContactPage from "./contact/page";
import FaqsPage from "./faqs/page";
import FoodDrinkPage from "./food-drink/page";
import HomePage from "./page";
import ThingsToDoPage from "./things-to-do/page";
import TransportationPage from "./transportation/page";
import WhereToStayPage from "./where-to-stay/page";
import "./globals.css";

function NetlifyApp() {
  const path = window.location.pathname.replace(/\/$/, "") || "/";

  useEffect(() => {
    if (!window.location.hash) {
      return;
    }

    const scrollToHashTarget = () => {
      const target = document.getElementById(window.location.hash.slice(1));

      if (target) {
        target.scrollIntoView({ block: "start" });
      }
    };

    window.setTimeout(scrollToHashTarget, 0);
  }, [path]);

  if (path === "/things-to-do") {
    return <ThingsToDoPage />;
  }

  if (path === "/where-to-stay") {
    return <WhereToStayPage />;
  }

  if (path === "/food-drink") {
    return <FoodDrinkPage />;
  }

  if (path === "/transportation") {
    return <TransportationPage />;
  }

  if (path === "/faqs") {
    return <FaqsPage />;
  }

  if (path === "/contact") {
    return <ContactPage />;
  }

  return <HomePage />;
}

createRoot(document.getElementById("root")!).render(<NetlifyApp />);
