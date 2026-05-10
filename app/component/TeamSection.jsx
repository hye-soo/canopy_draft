import styles from "@/app/page.module.css";

const teamMembers = [
  {
    name: "Sara",
    role: "UX/UI Designer",
    contribution:
      "Shaped the budgeting flow, visual system, and landing page experience.",
    initial: "S",
  },
  {
    name: "Member 2",
    role: "Frontend Developer",
    contribution:
      "Built interactive app previews and supported React implementation.",
    initial: "M",
  },
  {
    name: "Member 3",
    role: "Research Lead",
    contribution:
      "Explored user needs and helped define key budgeting pain points.",
    initial: "M",
  },
  {
    name: "Member 4",
    role: "Brand Designer",
    contribution:
      "Created the Canopy mood, colors, and tree-inspired identity.",
    initial: "M",
  },
];

export default function TeamSection() {
  return (
    <section className={styles.teamSection}>
      <div className={styles.teamHeader}>
        <p className={styles.teamEyebrow}>About us</p>
        <h3 className={styles.teamTitle}>The Roots</h3>
        <p className={styles.teamIntro}>
          A small team growing a simpler way to track money, build habits, and
          stay on budget.
        </p>
      </div>

      <div className={styles.teamGrid}>
        {teamMembers.map((member, index) => (
          <article className={styles.teamCard} key={member.name}>
            <span className={styles.teamNumber}>
              {String(index + 1).padStart(2, "0")}
            </span>

            <div className={styles.leafCluster} aria-hidden="true">
              <span>🍃</span>
              <span>🌿</span>
              <span>🍃</span>
            </div>

            <div className={styles.memberAvatar}>
              <span>{member.initial}</span>
            </div>

            <div className={styles.memberInfo}>
              <h3>{member.name}</h3>
              <p className={styles.memberRole}>{member.role}</p>
            </div>

            <div className={styles.memberReveal}>
              <p>{member.contribution}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
