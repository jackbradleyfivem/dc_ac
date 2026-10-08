import Link from "next/link";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <Container className="py-32 text-center">
      <p className="text-sm text-zinc-500">404</p>
      <h1 className="mt-3 text-4xl tracking-tight">That page is not here</h1>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black"
      >
        Back home
      </Link>
    </Container>
  );
}
