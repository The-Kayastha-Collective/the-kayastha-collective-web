import Button from "@/components/ui/Button";

interface HeroContent {
  eyebrow: string;
  title: string;
  description: string;
  primaryButton: {
    label: string;
    url: string;
    external?: boolean;
  };
  secondaryButton: {
    label: string;
    url: string;
    external?: boolean;
  };
  backgroundImage: string;
  showScrollIndicator: boolean;
}

interface HeroProps {
  content: HeroContent;
}

export default function Hero({ content }: HeroProps) {
  return (
    <section className="hero" id="home">
      {/* Animated background */}
      <div className="hero-particles" aria-hidden="true">
        {Array.from({ length: 35 }, (_, index) => (
          <span
            className="hero-particle"
            key={index}
            style={{
              left: `${(index * 37 + 13) % 100}%`,
              top: `${(index * 53 + 7) % 100}%`,
              animationDelay: `${(index % 10) * -0.7}s`,
              animationDuration: `${8 + (index % 8)}s`,
              "--particle-size": `${2 + (index % 3)}px`,
            } as React.CSSProperties}
          />
        ))}
      </div>

      {/* Subtle background glow */}
      <div className="hero-glow" aria-hidden="true" />

      {/* Centered content */}
      <div className="hero-content">
        <p className="hero-eyebrow">{content.eyebrow}</p>

        <h1 className="hero-title">{content.title}</h1>

        <p className="hero-description">{content.description}</p>

        <div className="hero-actions">
          <Button
            label={content.primaryButton.label}
            url={content.primaryButton.url}
            external={content.primaryButton.external}
            variant="primary"
          />

          <Button
            label={content.secondaryButton.label}
            url={content.secondaryButton.url}
            external={content.secondaryButton.external}
            variant="secondary"
          />
        </div>

        {content.showScrollIndicator && (
          <a
            className="hero-scroll"
            href="#about"
            aria-label="Scroll to About Us"
          >
            <span />
          </a>
        )}
      </div>
    </section>
  );
}