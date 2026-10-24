import SectionHeading from "@/components/ui/SectionHeading";

interface AboutProps {
  content: {
    sectionLabel: string;
    title: string;
    paragraphs: string[];
  };
}

export default function About({ content }: AboutProps) {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <SectionHeading
          eyebrow={content.sectionLabel}
          title={content.title}
        />

        <div className="about-content">
          {content.paragraphs.map((paragraph, index) => (
            <p key={`${index}-${paragraph}`}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}