import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList: FeatureItem[] = [
  {
    title: 'Physical AI',
    description: (
      <>
        Explore the integration of artificial intelligence with physical systems, focusing on real-world robotics applications.
      </>
    ),
  },
  {
    title: 'Humanoid Robotics',
    description: (
      <>
        Delve into the design, control, and intelligence of humanoid robots, covering topics from kinematics to advanced behaviors.
      </>
    ),
  },
  {
    title: 'Advanced Algorithms',
    description: (
      <>
        Master the cutting-edge algorithms that drive intelligent robotic systems, including perception, planning, and learning.
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4', 'glass-card')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
