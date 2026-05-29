"use client";
import { Metadata } from "next";
import Image from "next/image";
import { useState } from "react";
import Form from "../components/Form";
import Preloader from "../components/Preloader";

export const metadata: Metadata = {
  title:
    "Klyfy - Business OS for agencies — not tools integrated, but one system that was never fragmented",
  description:
    "Klyfy is the Business OS for agencies. Only one system. Every business function native. Your SaaS stack is Windows — fragmented by design, held together with Zapier and hope. Klyfy is the Mac.",
};
export default function HomePage() {
  const [formActive, setFormActive] = useState(false);
  return (
    <>
      <Preloader />
      <div className="logo__fixed">
        <Image
          src={"/media/logo.png"}
          width={75}
          height={73}
          alt="Klyfy - Business Operating System"
          style={{
            position: "fixed",
            top: "20px",
            left: "20px",
          }}
        />
      </div>
      <div className="hero">
        <div className="hero__content">
          <h1>
            Your SaaS stack is Windows.
            <br />
            <span>Klyfy is the Mac.</span>
          </h1>
          <h2 style={{ margin: "50px 0px" }}>
            Klyfy - Business Operating System for agencies — not tools
            integrated, but one system that was never fragmented.
          </h2>
          <div className="button__container">
            <button onClick={() => setFormActive(true)}>
              Get early access
            </button>
          </div>
          <div className="img__container">
            <img src="/media/crm.png" alt="" />
          </div>
        </div>
      </div>
      <section>
        
      </section>
      <footer>
        <p>Klyfy © 2026</p>
        <p>
          One system to run your entire agency, built as one thing from day one.
        </p>
      </footer>
      <Form
        className={formActive ? "shown" : ""}
        setFormActive={setFormActive}
      />
    </>
  );
}
