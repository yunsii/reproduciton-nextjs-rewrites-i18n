import Link from "next/link";

export default function Page() {
  return (
    <main>
      <h1>test.com/api/hello2</h1>
      <div className="flex flex-col">
        <Link href="/">home</Link>
        <Link href="/about">/about</Link>
        <Link href="/api/hello">/api/hello</Link>
      </div>
    </main>
  );
}
