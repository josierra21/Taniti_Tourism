import { createRoot } from "react-dom/client";
import FaqsPage from "./faqs/page";
import FoodDrinkPage from "./food-drink/page";
import HomePage from "./page";
import ThingsToDoPage from "./things-to-do/page";
import TransportationPage from "./transportation/page";
import WhereToStayPage from "./where-to-stay/page";
import "./globals.css";

function NetlifyApp() {
  const path = window.location.pathname.replace(/\/$/, "") || "/";

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

  return <HomePage />;
}

createRoot(document.getElementById("root")!).render(<NetlifyApp />);
