import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from '../../../src/pages/styles.module.css';

const features = [
  {
    title: 'For beginners and more advanced ones',
    imageUrl: 'img/index/Asking_questions.svg',
    description: (
      <>
        These materials are designed to be simple enough to
        beginners, and thorough enough for the more advanced ones.
        You will explore numerous algorithms and data structures and
        some tricks for faster coding and solving.
      </>
    ),
  },
  {
    title: 'Lots of examples for quality learning',
    imageUrl: 'img/index/Startup_Idea.svg',
    description: (
      <>
        Each topic is accompanied by a multitude of examples from competitions
        so that you can learn and prepare for your competitive adventures!
      </>
    ),
  },
  {
    title: 'You can also contribute',
    imageUrl: 'img/index/File_Transfer.svg',
    description: (
      <>
        If you notice that a topic is missing, you can write an article about
        it yourself! Read the instructions in the chapter "Contribution to these
        materials" and help enrich the content of this page!
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
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
  const {siteConfig = {}} = context;
  return (
    <Layout
      title="Home"
      description="Competitive programming learning materials">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/o-materijalima/sadrzaj')}>
              Let's get started
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
