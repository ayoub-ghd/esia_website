import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
export const Route = createFileRoute("/")({
head: () => ({
  meta: [
    {
      title: "ESIA — École du Sud d'Informatique et d'Administration",
    },
    {
      name: "description",
      content:
        "ESIA propose des formations professionnelles en informatique, administration et éducation en Tunisie.",
    },
    {
      property: "og:title",
      content: "ESIA — École du Sud d'Informatique et d'Administration",
    },
    {
      property: "og:description",
      content: "Former les professionnels de demain, dès aujourd'hui.",
    },
  ],
}),
  component: Index,
});
// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
function Index() {
  useEffect(() => {
    window.location.replace("/esia.html");
  }, []);
  return (
    <div
      className="flex min-h-screen items-center justify-center"
      style={{ backgroundColor: "#fcfbf8" }}
    >
      <img
        data-lovable-blank-page-placeholder="REMOVE_THIS"
        src="https://cdn.gpteng.co/blank-app-v1.svg"
        alt="Your app will live here!"
      />
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "sans-serif", color: "#1A3A6B" }}>
      Chargement…
    </div>
  );
}