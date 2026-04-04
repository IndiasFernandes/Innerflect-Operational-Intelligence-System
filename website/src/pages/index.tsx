import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader(): ReactNode {
  return (
    <header className={styles.heroBanner}>
      <div className={clsx('container', styles.heroInner)}>
        <p className={styles.heroKicker}>Innerflect — Outcome orchestration</p>
        <Heading as="h1" className={styles.heroTitle}>
          Turn business goals into{' '}
          <span className={styles.heroTitleEm}>managed execution</span> with
          elite independent talent.
        </Heading>
        <p className={styles.heroSubtitle}>
          Not a classic freelance marketplace: a system that shapes vague goals
          into scoped plans, assembles solo experts or small pods, runs delivery
          with milestones and QA, and preserves continuity. This site documents
          that vision—and how we work in this repository.
        </p>
        <div className={styles.buttons}>
          <Link
            className={clsx('button button--lg', styles.buttonPrimary)}
            to="/docs/vision/">
            Product vision
          </Link>
          <Link
            className={clsx('button button--lg', styles.buttonGhost)}
            to="/docs/repo/">
            Repository
          </Link>
        </div>
      </div>
      <div className={styles.scrollCue} aria-hidden="true">
        ↓
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}
      wrapperClassName="homepage-root">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
