"use client";
import { useState } from "react";
import CloseIcon from "../icons/CloseIcon";
import {
  joinWaitlist,
  resetError,
  resetForm,
  validateCompany,
  validateEmail,
  validateName,
} from "@/utils/waitlistForm.utils";
import LoaderDots from "./LoaderDots";

export default function Form({
  setFormActive,
  className,
}: {
  setFormActive: (active: boolean) => void;
  className: string;
}) {
  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isError, setIsError] = useState(false);
  const [isSendingForm, setIsSendingForm] = useState(false);
  return (
    <div className={`form ${className}`}>
      <div
        className="close-button"
        onClick={() => {
          setFormActive(false);
          resetForm(setName, setEmail, setCompanyName, setError, setIsError);
        }}
      >
        <CloseIcon />
      </div>
      <div className="formHeading">Thank you for joining our waitlist!</div>
      <p className="formSubheading">
        We&apos;re excited to have you among Klyfy&apos;s first users!
      </p>
      {isError && <p className="error">{error}</p>}
      <input
        type="text"
        autoComplete="on"
        placeholder="John Doe"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onFocus={(e) => resetError(e, setError, setIsError)}
        onBlur={(e) => {
          const isValid = validateName(e.target.value, setError, setIsError);
          if (isValid) {
            e.currentTarget.className = "";
          } else {
            e.currentTarget.className = "error";
          }
        }}
      />
      <input
        type="email"
        autoComplete="on"
        placeholder="john.doe@mycompany.com"
        value={email}
        onFocus={(e) => resetError(e, setError, setIsError)}
        onChange={(e) => setEmail(e.target.value)}
        onBlur={(e) => {
          const isValid = validateEmail(e.target.value, setError, setIsError);
          if (isValid) {
            e.currentTarget.className = "";
          } else {
            e.currentTarget.className = "error";
          }
        }}
      />
      <input
        type="text"
        autoComplete="on"
        placeholder="My business"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
        onFocus={(e) => resetError(e, setError, setIsError)}
        onBlur={(e) => {
          const isValid = validateCompany(e.target.value, setError, setIsError);
          if (isValid) {
            e.currentTarget.className = "";
          } else {
            e.currentTarget.className = "error";
          }
        }}
      />
      <div className="button__container">
        <button
          onClick={async () => {
            if (
              !validateName(name, setError, setIsError) ||
              !validateEmail(email, setError, setIsError) ||
              !validateCompany(companyName, setError, setIsError)
            )
              return;
            else {
              setIsSendingForm(true);
              try {
                const res = await joinWaitlist(name, email, companyName);
                if (res && res.success) {
                  window.location.href = `/thank-you?name=${encodeURIComponent(
                    name,
                  )}`;
                }
              } catch (error) {
                console.log(error);
                setError("Form submission failed");
                setIsError(true);
              }
            }
          }}
          disabled={isSendingForm}
        >
          {isSendingForm ? <LoaderDots /> : "Join waitlist"}
        </button>
      </div>
    </div>
  );
}
