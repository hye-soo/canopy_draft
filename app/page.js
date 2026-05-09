import styles from "./page.module.css";
import RevealOnScroll from "./component/RevealOnScroll";
import FeatureBudgetDemo from "./component/FeatureBudgetDemo";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* NAVBAR */}
      <nav className={styles.navbar}>
        <div className={styles.navInner}>
          <a href="/" className={styles.navLogo}>
            <img
              src="/logo.svg"
              alt="Canopy logo"
              className={styles.navLogoImg}
            />
            <span>Canopy</span>
          </a>

          <ul className={styles.navLinks}>
            <li>
              <a href="#section-banner" className={styles.navLink}>
                Home
              </a>
            </li>
            <li>
              <a href="#section-logo" className={styles.navLink}>
                Intro
              </a>
            </li>
            <li>
              <a href="#section-set-budget" className={styles.navLink}>
                Demo
              </a>
            </li>
            <li>
              <a href="#section-hero-carousel" className={styles.navLink}>
                Branding
              </a>
            </li>
            <li>
              <a href="#section-about-us" className={styles.navLink}>
                Roots
              </a>
            </li>
            <li>
              <a href="#section-about-us" className={styles.navLink}>
                Let's Grow
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* TEMP FIRST SECTION */}
      <section id="section-banner" className={styles.heroSection}>
        <img
          src="https://placehold.co/1000/500/green"
          alt="Placeholder"
          style={{ width: "100%", height: "100vh", objectFit: "cover" }}
        ></img>
      </section>

      {/* EXPERIENCE CANOPY SECTION */}
      <section className={styles.experienceIntroSection}>
        <h3 className={styles.interactiveAppHeading}>
          Interactive app features
        </h3>

        <RevealOnScroll className={styles.typingTitleReveal}>
          <h1 className={styles.interactiveAppTitle}>
            <span className={styles.typingText}>Experience Canopy</span>
          </h1>
        </RevealOnScroll>

        <h2 className={styles.interactiveAppDescription}>
          Click, Type, and Hover to preview
        </h2>
      </section>

      {/* FEATURE 1 */}
      <FeatureBudgetDemo />
    </main>
  );
}
