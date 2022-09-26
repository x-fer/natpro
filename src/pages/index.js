import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: "Za početnike i one naprednije",
    imageUrl: "img/index/Asking_questions.svg",
    description: (
      <>
        Ovi materijali su koncipirani tako da budu dovoljno jednostavni za
        početnike, a dovoljno temeljiti i za one naprednije. Upoznat ćete se s
        brojnim algoritmima i strukturama podataka te nekim trikovima za brže
        rješavanje zadataka.
      </>
    ),
  },
  {
    title: "Puno primjera za kvalitetno učenje",
    imageUrl: "img/index/Startup_Idea.svg",
    description: (
      <>
        Svaka tema popraćena je mnoštvom primjera s održanih natjecanja tako da
        možete učiti i pripremati se za svoje natjecateljske avanture!
      </>
    ),
  },
  {
    title: "Možete i doprinijeti",
    imageUrl: "img/index/File_Transfer.svg",
    description: (
      <>
        Ako primijetite da neka tema nedostaje, možete i sami napisati članak o
        njoj! Pročitajte upute u poglavlju "Doprinos ovim materijalima" te
        pomozite obogatiti sadržaj ove stranice!
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title="Početna"
      description="Materijali za učenje natjecateljskog programiranja"
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/o-materijalima/sadrzaj")}
            >
              Započnite
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
