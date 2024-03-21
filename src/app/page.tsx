import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24 space-y-5">
     <Link href="/test-stream/abc">GO to test stream</Link>
     <Link href="/test-stream-wrong/abc">GO to test stream failed</Link>
    </main>
  );
}
