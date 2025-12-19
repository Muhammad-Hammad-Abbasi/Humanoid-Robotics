import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Module 1: Physical AI',
    description: (
      <>
        <ul>
          <li>01. Introduction to Physical AI</li>
          <li>01. Physical AI Summary</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Module 2: ROS 2 System',
    description: (
      <>
        <ul>
          <li>02. The Robotic Nervous System (ROS 2)</li>
          <li>02. ROS 2 System Summary</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Module 3: Digital Twins',
    description: (
      <>
        <ul>
          <li>03. Digital Twins (Gazebo & Unity)</li>
          <li>03. Digital Twins Summary</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Module 4: NVIDIA Isaac',
    description: (
      <>
        <ul>
          <li>04. AI Robot Brain (NVIDIA Isaac)</li>
          <li>04. NVIDIA Isaac Summary</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Module 5: Humanoid Dev',
    description: (
      <>
        <ul>
          <li>05. Humanoid Robot Development</li>
        </ul>
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md margin-bottom--lg">
        <div className={clsx('card shadow--md', styles.featureCard)} style={{padding: '20px', height: '100%'}}> 
           <Heading as="h3">{title}</Heading>
           <div className="text--left">{description}</div>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row" style={{justifyContent: 'center'}}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}