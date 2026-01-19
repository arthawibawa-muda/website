import Link from "next/link";

export function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className="text-sm text-dark">
      {children}
    </Link>
  );
}
