import { useState } from "react";

export default function Preloader() {
  const [preloaderActive, setPreloaderActive] = useState(true);
  const launchPreloader = () => {
    setTimeout(() => {
      document.getElementById("logo")!.style.opacity = "1";
      setTimeout(() => {
        setPreloaderActive(false);
      }, 1500);
    }, 500);
  };
  launchPreloader();
  return (
    <div className={`preloader ${preloaderActive ? "active" : ""}`}>
      <img
        id="logo"
        src="/media/logo.png"
        alt="Klyfy - Business Operating System"
      />
    </div>
  );
}
