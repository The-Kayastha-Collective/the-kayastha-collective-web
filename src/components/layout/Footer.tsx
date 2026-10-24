import Link from "next/link";

interface SocialLink {
  platform: string;
  label: string;
  url: string;
  enabled: boolean;
}

interface FooterProps {
  content: {
    brandName: string;
    tagline: string;
    copyrightStartYear: number;
    socialLinks: SocialLink[];
  };
}

export default function Footer({ content }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const socialLinks = content.socialLinks.filter(
    (link) => link.enabled
  );

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <Link href="#home" className="footer-brand-name">
              {content.brandName}
            </Link>

            <p>{content.tagline}</p>
          </div>

          <nav
            className="footer-social-links"
            aria-label="Social media links"
          >
            {socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
              >
                {link.label}
                <span aria-hidden="true"> ↗</span>
              </a>
            ))}
          </nav>
        </div>

        <div className="footer-bottom">
          <p>
            © {content.copyrightStartYear === currentYear
              ? currentYear
              : `${content.copyrightStartYear}–${currentYear}`}{" "}
            {content.brandName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}