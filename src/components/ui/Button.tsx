import Link from "next/link";

interface ButtonProps {
  label: string;
  url: string;
  variant?: "primary" | "secondary";
  external?: boolean;
  className?: string;
}

export default function Button({
  label,
  url,
  variant = "primary",
  external = false,
  className = "",
}: ButtonProps) {
  const classes = `button button-${variant} ${className}`.trim();

  if (external) {
    return (
      <a
        href={url}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
      >
        {label}
      </a>
    );
  }

  return (
    <Link href={url} className={classes}>
      {label}
    </Link>
  );
}