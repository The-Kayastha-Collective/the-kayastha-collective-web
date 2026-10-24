import SectionHeading from "@/components/ui/SectionHeading";

interface MissionVisionProps {
  content: {
    sectionLabel: string;
    mission: {
      title: string;
      description: string;
    };
    vision: {
      title: string;
      description: string;
    };
  };
}

export default function MissionVision({
  content,
}: MissionVisionProps) {
  const items = [
    {
      id: "mission",
      title: content.mission.title,
      description: content.mission.description
    },
    {
      id: "vision",
      title: content.vision.title,
      description: content.vision.description
    },
  ];

  return (
    <section
      id="mission-vision"
      className="section mission-vision-section"
    >
      <div className="container">
        <SectionHeading
          eyebrow={content.sectionLabel}
          title="What Guides Us"
          description="A shared purpose that connects our heritage with our aspirations for the future."
        />

        <div className="mission-vision-grid">
          {items.map((item) => (
            <article
              key={item.id}
              className="mission-vision-card"
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}