import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Welcome Home</h1>
      <Link href="/blog">Blog</Link><br/>
      <Link className="text-blue-500" href="/products">Products</Link>
      <Link className="text-blue-500" href="/articles/breaking-news-123?lang=en">Read in English</Link>
      <Link className="text-blue-500" href="/articles/breaking-news-123?lang=fr">Read in French</Link>
    </>
  );
}
