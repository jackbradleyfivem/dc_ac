import Link from "next/link";

export default function NotFound() {
  return (
    <div className="py-24">
      <p className="text-sm text-zinc-500">404</p>
      <h1 className="mt-3 text-4xl tracking-tight">That page is not here</h1>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black"
      >
        Back to dashboard
      </Link>
    </div>
  );
}
