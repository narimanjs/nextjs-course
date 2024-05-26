import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home Page",
  description: "Home page description",
};

export default function Home() {
  return (
    <div>
      <h1>Hello NextJS Course</h1>
      <Link href='/catalog'>Got to catalog</Link>
    </div>
  );
}
