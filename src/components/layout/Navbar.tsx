import Image from "next/image";
import Button from "@/components/ui/Button";

interface NavbarProps {
  content: {
    logo: string;
    logoAlt: string;
    joinButton: {
      label: string;
      url: string;
      external?: boolean;
    };
  };
}

export default function Navbar({ content }: NavbarProps) {
  return (
    <header className="navbar">
      <div className="container navbar-container">
        <a
          href="#home"
          className="navbar-brand"
          aria-label="The Kayastha Collective home"
        >
          <Image
            src={content.logo}
            alt={content.logoAlt}
            width={260}
            height={90}
            priority
            className="navbar-logo"
          />
        </a>

        <div className="navbar-actions">
          <Button
            label={content.joinButton.label}
            url={content.joinButton.url}
            external={content.joinButton.external ?? true}
          />
        </div>
      </div>
    </header>
  );
}