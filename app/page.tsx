import { Metadata } from "next";
import HomePage from "./pages-components/HomePage";

export const metadata: Metadata = {
  title:
    "Klyfy - Business OS for agencies — not tools integrated, but one system that was never fragmented",
  description:
    "Klyfy is the Business OS for agencies. Only one system. Every business function native. Your SaaS stack is Windows — fragmented by design, held together with Zapier and hope. Klyfy is the Mac.",
};
export default function Page() {
  return <HomePage />;
}
