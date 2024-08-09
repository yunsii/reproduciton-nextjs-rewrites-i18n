import Link from "next/link";

export default function Page() {
  return (
    <main>
      <h1>test.com/about</h1>
      <div className="flex flex-col">
        <Link href="/">home</Link>
        <Link href="/api/hello">/api/hello</Link>
        <Link href="/api/hello2">/api/hello2</Link>
      </div>
    </main>
  );
}
