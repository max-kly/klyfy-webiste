import { redirect } from "next/navigation";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Thank you for joining our waitlist! | Klyfy",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};
export default async function Page({
  searchParams,
}: {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const raw = (params?.name ?? "") as string | string[];
  const nameValue = Array.isArray(raw) ? (raw[0] ?? "") : raw;
  const name = nameValue ? decodeURIComponent(nameValue) : "";
  if (!name) redirect("/");
  return (
    <div className="thank-you">
      <h1>
        Thank you, <span>{name}</span>
      </h1>
      <p>We got your details!</p>
      <p>
        You will receive an email with invitation once we go live.
        <br />
        We promise special offers to our first users, don&apos;t miss our email!
      </p>
    </div>
  );
}
