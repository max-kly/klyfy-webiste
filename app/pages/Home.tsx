"use client";
import { Metadata } from "next";
import Image from "next/image";
import { useState } from "react";
import Form from "../components/Form";
import Preloader from "../components/Preloader";
import BlockHeading from "../components/BlockHeading";

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
        <BlockHeading
          heading={
            <h2>
              Count <span>how many tools</span> you opened today.
            </h2>
          }
          subheading="Dozens of tools. Zero connection. One part-time job just holding it together."
        />
        <div className="cards">
          <div className="card__container">
            <div className="card__content card__regular">
              <div className="card__heading">💸 $2,000+/month</div>
              <div className="card__desc">
                Paying for tools that don&apos;t talk to each other
              </div>
            </div>
          </div>
          <div className="card__container">
            <div className="card__content card__regular">
              <div className="card__heading">🔄 Zapier as glue</div>
              <div className="card__desc">
                One broken automation breaks everything and loses data
              </div>
            </div>
          </div>
          <div className="card__container">
            <div className="card__content card__regular">
              <div className="card__heading">😤 9+ logins</div>
              <div className="card__desc">
                Switching between apps all day just to do your job
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <BlockHeading
          heading={
            <h2>
              The average agency calls this &quot;the stack&quot;.
              <br />
              We call it <span>the problem.</span>
            </h2>
          }
          subheading="Your competitors are running the same broken stack. The first one to switch wins."
        />
        <div className="cards">
          <div className="card__container">
            <div className="card__content card__compare">
              <div className="card__heading">Before Klyfy</div>
              <div className="card__desc">
                CRM in HubSpot, tasks in ClickUp, docs in Notion,, chat in
                Slack, finance in QuickBooks, calendar in Google, video in Zoom,
                campaigns in Mailchimp, reports in spreadsheets
              </div>
            </div>
          </div>
          <div className="card__container">
            <div className="card__content card__compare card__klyfy">
              <div className="card__heading">After Klyfy</div>
              <div className="card__desc">
                Everything you need.
                <br />
                In one place.
                <br />
                Always in sync.
                <br />
                Nothing bolted.
              </div>
            </div>
          </div>
        </div>
        <div className="button__container">
          <button onClick={() => setFormActive(true)}>Join waitlist</button>
        </div>
      </section>
      <section>
        <BlockHeading
          heading={
            <h2>
              $2,000+ a month for tools that <span>hate each other.</span>
            </h2>
          }
          subheading="There's a better way to spend that money."
        />
        <div className="cards">
          <div className="card__container">
            <div className="card__content card__compare">
              <div className="card__heading">$135/user/month</div>
              <div className="card__desc">
                $2,000+ for a 15-user agency each month
              </div>
            </div>
          </div>
          <div className="card__container">
            <div className="card__content card__compare card__klyfy">
              <div className="card__heading">$45/user/month</div>
              <div className="card__desc">
                $675 per month for a 15-user agency, replacing $2000+ SaaS stack
              </div>
            </div>
          </div>
        </div>
        <div className="button__container">
          <button onClick={() => setFormActive(true)}>Join waitlist</button>
        </div>
      </section>
      <section>
        <BlockHeading
          heading={
            <h2>
              What happens when agency operators see <span>Klyfy</span>?
            </h2>
          }
          subheading='The reaction is always the same — "Why doesn&apos;t this exist already?".'
        />
        <div className="cards">
          <div className="card__container">
            <div className="card__content card__regular">
              <div className="card__desc">
                It eliminates the need for many different tools and allows you
                to do ever ything in one place. It&apos;s so simple and
                intuitive.
                <br />
                <br />— Aharon,
                <br />
                Head of Marketing & Partnerships
                <br /> at Hype Digital, early reviewer
              </div>
            </div>
          </div>
          <div className="card__container">
            <div className="card__content card__regular">
              <div className="card__desc">
                Too many apps, zero connection between them. Everything held
                together by Zapier. I&apos;d move our entire team to Klyfy.
                <br />
                <br />— Rina,
                <br />
                Marketing Director
                <br />
                at PPM Solar
              </div>
            </div>
          </div>
        </div>
        <div className="button__container">
          <button onClick={() => setFormActive(true)}>
            Reserve early access
          </button>
        </div>
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
