import type { Metadata } from "next";
import SearchContent from "./SearchContent";

export const metadata: Metadata = {
  title: "Search — The Daily Chronicle",
  description: "Search the archives of The Daily Chronicle",
};

export default function SearchPage() {
  return <SearchContent />;
}
