import Link from "next/link";

export function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-block rounded-full px-2 py-1 text-sm text-dark hover:bg-light hover:text-dark"
    >
      {children}
    </Link>
  );
}
