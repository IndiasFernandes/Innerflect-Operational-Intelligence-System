import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const AREAS: {title: string; blurb: string}[] = [
  {
    title: 'Strategy',
    blurb:
      'Operating model design, AI readiness, market positioning, governance.',
  },
  {
    title: 'Brand',
    blurb: 'Brand systems, visual identity, messaging, brand audits.',
  },
  {
    title: 'Marketing',
    blurb: 'Campaign systems, funnels, content workflows, performance.',
  },
  {
    title: 'Sales',
    blurb: 'Pipeline automation, outreach, CRM workflows, conversions.',
  },
  {
    title: 'Product / Service',
    blurb: 'Websites, applications, solution design, delivery lifecycle.',
  },
  {
    title: 'Operations',
    blurb: 'Process automation, workflows, knowledge management, rhythm.',
  },
  {
    title: 'Customer',
    blurb: 'Onboarding, delivery management, retention, feedback loops.',
  },
  {
    title: 'Management',
    blurb: 'Dashboards, resource allocation, governance, reporting.',
  },
];

const PILLARS: {title: string; body: string}[] = [
  {
    title: 'Intelligence-driven',
    body: 'Every system feeds a data pipeline. Decisions are informed by AI analysis, not gut instinct. We build systems that learn.',
  },
  {
    title: 'Human-operated',
    body: 'AI provides the intelligence; people make the decisions. Administrators oversee systems, commercials act on insights, coordinators keep execution flowing.',
  },
  {
    title: 'Full lifecycle',
    body: 'Design, deploy, monitor, improve, evolve. From Core Solutions to Emergent Systems, we own the outcome — the relationship does not end at handoff.',
  },
  {
    title: 'Cross-area integration',
    body: 'Strategy connects to sales, brand to marketing, product to customer, operations to management. Eight areas, one system — not silos.',
  },
];

const ROLE_LINKS: {label: string; to: string; hint: string}[] = [
  {label: 'Owner', to: '/docs/by-role/owner', hint: 'Governance & direction'},
  {
    label: 'Administrator',
    to: '/docs/by-role/administrator',
    hint: 'Systems oversight',
  },
  {label: 'Commercial', to: '/docs/by-role/commercial', hint: 'Growth & clients'},
  {
    label: 'Coordinator',
    to: '/docs/by-role/coordinator',
    hint: 'People & tasks',
  },
  {
    label: 'Contributor',
    to: '/docs/by-role/contributor',
    hint: 'Execution',
  },
  {label: 'Investor', to: '/docs/by-role/investor', hint: 'External'},
];

const ROLES: {title: string; body: string}[] = [
  {
    title: 'Owner',
    body: 'Strategic direction. Full visibility across all areas. Final authority on decisions.',
  },
  {
    title: 'Administrator',
    body: 'Oversees running systems. Monitors performance, keeps systems healthy, manages configuration.',
  },
  {
    title: 'Commercial',
    body: 'Brings in clients and accompanies relationships. Uses the intelligence engine for informed commercial decisions.',
  },
  {
    title: 'Coordinator',
    body: 'Coordinates tasks and people — clients, contributors, commercial, and admin. Keeps deliverables on track.',
  },
  {
    title: 'Contributor',
    body: 'Hands-on execution. Follows playbooks, builds deliverables, operates day-to-day inside our systems.',
  },
];

function Motif(): ReactNode {
  const src = useBaseUrl('img/thinking-motif.svg');
  return (
    <img src={src} alt="" className={styles.motif} width={40} height={40} />
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <>
      {/* ── Choose role ── */}
      <section className={styles.sectionLight}>
        <div className="container">
          <div className={styles.sectionHead}>
            <Heading as="h2" className={styles.sectionTitle}>
              Choose your role
            </Heading>
            <p className={styles.sectionLead}>
              Open a tailored path: what to read first, how you fit in the
              operating model, and links into playbooks and the responsibility
              matrix. Aligns with{' '}
              <Link to="/docs/vision/">product vision</Link> and{' '}
              <Link to="/docs/repo/">repository</Link> docs.
            </p>
          </div>
          <div className={styles.rolePicker}>
            {ROLE_LINKS.map((r) => (
              <Link key={r.to} className={styles.roleChip} to={r.to}>
                <span className={styles.roleChipLabel}>{r.label}</span>
                <span className={styles.roleChipHint}>{r.hint}</span>
              </Link>
            ))}
          </div>
          <p className={styles.rolePickerFoot}>
            <Link to="/docs/by-role/">See all role pages →</Link>
          </p>
        </div>
      </section>

      {/* ── What we build (eight areas) ── */}
      <section className={styles.sectionWarm}>
        <div className="container">
          <div className={styles.sectionHead}>
            <Motif />
            <Heading as="h2" className={styles.sectionTitle}>
              Eight business areas. One integrated system.
            </Heading>
            <p className={styles.sectionLead}>
              Every engagement touches one or more of these areas. We analyse
              what exists, improve what works, and build what is missing —
              always connected to an intelligence pipeline that informs every
              decision.
            </p>
          </div>
          <div className={styles.areaGrid}>
            {AREAS.map((area) => (
              <div key={area.title} className={styles.areaCard}>
                <Heading as="h3" className={styles.areaTitle}>
                  {area.title}
                </Heading>
                <p className={styles.areaBlurb}>{area.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Three layers ── */}
      <section className={styles.sectionLight}>
        <div className="container">
          <div className={styles.sectionHead}>
            <Heading as="h2" className={styles.sectionTitle}>
              Three layers of engagement
            </Heading>
            <p className={styles.sectionLead}>
              Start with a closed deliverable. Progress to ongoing optimization.
              Arrive at full partnership. Each layer generates the insight,
              trust, and data to unlock the next.
            </p>
          </div>
          <div className="row">
            <div className={clsx('col col--4', styles.engageCard)}>
              <Heading as="h3" className={styles.engageName}>
                Core Solutions
              </Heading>
              <p className={styles.engageTag}>Apply and deliver</p>
              <ul className={styles.engageList}>
                <li>
                  <strong>What:</strong> Proven solutions for specific needs
                </li>
                <li>
                  <strong>Deliverables:</strong> Websites, automations, BI
                  dashboards, audits
                </li>
                <li>
                  <strong>Engagement:</strong> Project-based, defined scope
                </li>
                <li>
                  <strong>For:</strong> New clients proving value together
                </li>
                <li>
                  <strong>Method:</strong> Think → Shape → Run
                </li>
              </ul>
            </div>
            <div className={clsx('col col--4', styles.engageCard)}>
              <Heading as="h3" className={styles.engageName}>
                Strategic Systems
              </Heading>
              <p className={styles.engageTag}>Improve and optimize</p>
              <ul className={styles.engageList}>
                <li>
                  <strong>What:</strong> Deepen systems in place; embed in
                  operations
                </li>
                <li>
                  <strong>Deliverables:</strong> Optimization, redesign,
                  expanded automation
                </li>
                <li>
                  <strong>Engagement:</strong> Retainer, builds on Core
                </li>
                <li>
                  <strong>For:</strong> Clients wanting sustained improvement
                </li>
                <li>
                  <strong>Method:</strong> Reflect → Inflect → Execute
                </li>
              </ul>
            </div>
            <div className={clsx('col col--4', styles.engageCard)}>
              <Heading as="h3" className={styles.engageName}>
                Emergent Systems
              </Heading>
              <p className={styles.engageTag}>Create and innovate</p>
              <ul className={styles.engageList}>
                <li>
                  <strong>What:</strong> Entirely new systems built from scratch
                </li>
                <li>
                  <strong>Deliverables:</strong> Custom agents, autonomous
                  workflows, predictive systems
                </li>
                <li>
                  <strong>Engagement:</strong> Long-term partnership
                </li>
                <li>
                  <strong>For:</strong> Deep trust, innovation, transformation
                </li>
                <li>
                  <strong>Method:</strong> Think → Shape → Run (frontier)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Intelligence engine ── */}
      <section className={styles.sectionIntel}>
        <div className="container">
          <div className={styles.sectionHead}>
            <Heading as="h2" className={styles.sectionTitle}>
              Every system feeds the intelligence pipeline
            </Heading>
            <p className={styles.sectionLead}>
              We do not build in isolation. Every website, automation, and
              workflow connects to an AI-powered engine that gathers data,
              analyses patterns, and surfaces what matters.
            </p>
          </div>
          <div className={styles.intelFlow}>
            <div className={styles.intelStep}>
              <span className={styles.intelNum}>1</span>
              <Heading as="h3" className={styles.intelTitle}>
                Gather
              </Heading>
              <p>
                Data flows from every system — websites, CRMs, campaigns,
                operations.
              </p>
            </div>
            <div className={styles.intelStep}>
              <span className={styles.intelNum}>2</span>
              <Heading as="h3" className={styles.intelTitle}>
                Analyse
              </Heading>
              <p>
                AI processes signals across all areas, spots patterns, flags
                opportunities.
              </p>
            </div>
            <div className={clsx(styles.intelStep, styles.intelStepWide)}>
              <span className={styles.intelNum}>3</span>
              <Heading as="h3" className={styles.intelTitle}>
                Decide
              </Heading>
              <p>
                <strong>People</strong> receive actionable intelligence — clear
                recommendations acted on by the right person in the right role.
              </p>
            </div>
          </div>
          <p className={styles.intelTagline}>
            This is what separates building systems from building thinking
            systems — intelligence serves people, and people make the decisions.
          </p>
        </div>
      </section>

      {/* ── Pillars ── */}
      <section className={styles.sectionPillars}>
        <div className="container">
          <Heading as="h2" className={styles.pillarsHeading}>
            Excellence at every layer
          </Heading>
          <p className={styles.pillarsLead}>
            What makes Innerflect different from consulting firms, technical
            integrators, and creative agencies.
          </p>
          <div className={styles.pillarGrid}>
            {PILLARS.map((p) => (
              <div key={p.title} className={styles.pillarCard}>
                <Heading as="h3" className={styles.pillarTitle}>
                  {p.title}
                </Heading>
                <p className={styles.pillarBody}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── People / roles detail ── */}
      <section className={styles.sectionWarm}>
        <div className="container">
          <div className={styles.sectionHead}>
            <Heading as="h2" className={styles.sectionTitle}>
              Systems are only as good as the people operating them
            </Heading>
            <p className={styles.sectionLead}>
              Every system we build is operated, monitored, and steered by people
              with clear roles. AI provides the intelligence — people make the
              decisions.
            </p>
          </div>
          <div className={styles.roleGrid}>
            {ROLES.map((r) => (
              <div key={r.title} className={styles.roleCard}>
                <Heading as="h3" className={styles.roleTitle}>
                  {r.title}
                </Heading>
                <p className={styles.roleBody}>{r.body}</p>
              </div>
            ))}
          </div>
          <div className={styles.investorCallout}>
            <strong>Investor</strong> — external stakeholder with strategic and
            capital interest. Not part of the day-to-day operating matrix.
          </div>
          <div className={styles.roleFlow} aria-label="Role relationships">
            <div className={styles.roleFlowRow}>
              <span className={styles.roleFlowItem}>Owner — direction</span>
              <span className={styles.roleFlowSep}>→</span>
              <span className={styles.roleFlowItem}>
                Administrator — systems
              </span>
              <span className={styles.roleFlowSep}>→</span>
              <span className={styles.roleFlowItem}>
                Commercial — clients + intelligence
              </span>
            </div>
            <div className={styles.roleFlowColumn}>
              <span className={styles.roleFlowVert}>↕</span>
              <span className={styles.roleFlowItemWide}>
                Coordinator — people and tasks
              </span>
              <span className={styles.roleFlowVert}>↕</span>
              <span className={styles.roleFlowItemWide}>
                Contributor — execution
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Matrix CTA ── */}
      <section className={styles.sectionMatrix}>
        <div className="container">
          <div className={styles.matrixCard}>
            <Heading as="h2" className={styles.matrixTitle}>
              Responsibility by area and role
            </Heading>
            <p>
              See how supervision and execution map across all eight business
              areas — and how Investor sits outside the operating matrix.
            </p>
            <Link
              className={clsx(
                'button button--primary button--lg',
                styles.matrixCta,
              )}
              to="/docs/system/role-and-area-responsibilities">
              View the full responsibility matrix
            </Link>
          </div>
        </div>
      </section>

      {/* ── Outcome promise + doc routes (aligned with product vision) ── */}
      <section className={styles.sectionLight}>
        <div className="container">
          <div className={styles.sectionHead}>
            <Heading as="h2" className={styles.sectionTitle}>
              The first screen promise
            </Heading>
            <p className={styles.sectionLead}>
              You bring a business problem—not a finished brief. We help shape
              scope and delivery; you get confidence, not endless profile
              browsing.
            </p>
          </div>
          <ul className={styles.promiseList}>
            <li>
              <strong>Goal-first</strong> — intake that respects uncertainty
              (“I know the goal, not the scope”).
            </li>
            <li>
              <strong>Governed execution</strong> — milestones, ownership, QA,
              and revision boundaries—not “technically delivered but wrong.”
            </li>
            <li>
              <strong>Memory & continuity</strong> — structured project memory
              so repeat work compounds on-platform.
            </li>
          </ul>
        </div>
      </section>

      <section className={styles.sectionTint}>
        <div className="container">
          <Heading as="h2" className={styles.sectionTitle}>
            Two documentation routes
          </Heading>
          <p className={styles.sectionLead}>
            Market narrative on one path, repository mechanics on the other.
            Sidebar pages marked <strong>[Stub]</strong> are placeholders we
            fill in priority order.
          </p>
          <div className="row">
            <div className={clsx('col col--6', styles.routeCard)}>
              <Heading as="h3">Product vision</Heading>
              <p>
                Outcome orchestration thesis, positioning, ICPs, wedge, MVP
                direction, and deeper stubs (market, product, risks, messaging).
              </p>
              <Link className={styles.routeLink} to="/docs/vision/">
                Open product vision →
              </Link>
            </div>
            <div className={clsx('col col--6', styles.routeCard)}>
              <Heading as="h3">Repository</Heading>
              <p>
                How this site maps to Git, stubs, and the two canonical
                playbooks on the build.
              </p>
              <Link className={styles.routeLink} to="/docs/repo/">
                Open repository guide →
              </Link>
            </div>
          </div>
          <p className={styles.stubHint}>
            <Link to="/docs/">Docs home</Link> — full sidebar IA.
          </p>
        </div>
      </section>

      {/* ── Canonical playbooks ── */}
      <section className={styles.sectionMatrix}>
        <div className="container">
          <div className={styles.matrixCard}>
            <Heading as="h2" className={styles.matrixTitle}>
              Canonical playbooks on this site
            </Heading>
            <p>
              Only these two <code>ops/</code> playbooks are wired into the
              static build; the full tree stays on GitHub.
            </p>
            <div className={styles.playbookRow}>
              <Link
                className={clsx(
                  'button button--primary button--lg',
                  styles.matrixCta,
                )}
                to="/ops/playbooks/development/deployment-pipeline-prompts">
                Deployment pipeline (5-step)
              </Link>
              <Link
                className={clsx(
                  'button button--secondary button--lg',
                  styles.matrixCta,
                )}
                to="/ops/playbooks/development/full-system-coherence-setup">
                Full system coherence (Context7)
              </Link>
            </div>
            <p className={styles.playbookFoot}>
              <Link to="/docs/repo/operational-assets">Why only these? →</Link>
            </p>
          </div>
        </div>
      </section>

      {/* ── Start working ── */}
      <section className={styles.sectionLight}>
        <div className="container">
          <Heading as="h2" className={styles.startHeading}>
            Start working
          </Heading>
          <div className="row">
            <div className={clsx('col col--4', styles.repoCard)}>
              <Heading as="h3">Product vision</Heading>
              <p>
                Market thesis, positioning, ICPs, wedge, and stub chapters for
                deeper strategy work.
              </p>
              <Link to="/docs/vision/">Open product vision →</Link>
            </div>
            <div className={clsx('col col--4', styles.repoCard)}>
              <Heading as="h3">Documentation hub</Heading>
              <p>
                Docs home — routes, by-role paths, system reference, and
                navigation.
              </p>
              <Link to="/docs/">Docs home →</Link>
            </div>
            <div className={clsx('col col--4', styles.repoCard)}>
              <Heading as="h3">Run a playbook</Heading>
              <p>
                Canonical procedures included in this site build — deployment
                and coherence.
              </p>
              <Link to="/docs/repo/operational-assets">Playbooks on site →</Link>
            </div>
          </div>
          <div className="row">
            <div className={clsx('col col--12', styles.repoCardNarrow)}>
              <Heading as="h3">Repository & roles</Heading>
              <p>
                How documentation meets <code>ops/</code>, stubs, onboarding —
                and tailored paths by role.
              </p>
              <Link to="/docs/repo/">Repository →</Link>
              {' · '}
              <Link to="/docs/by-role/">By role →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
