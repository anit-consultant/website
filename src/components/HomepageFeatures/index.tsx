import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Experience',
    description: (
      <>
      <p>Technical Leadership</p> 
      <p>FullStack Development</p>
      <p>DevOps & Delivery</p>
      </>
    ),
  },
  {
    title: 'Expertise',
    description: (
      <>
        <p>Enterprise Applications</p>
        <p>Systems Development</p>
        <p>Platform & Infrastructure</p>
      </>
    ),
  },
  {
    title: 'Exposure',
    description: (
      <>
        <p>Startups</p>
        <p>Small & Medium Sized Business</p>
        <p>Enterprises</p>
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--3', styles.heroBanner)}>
      <div className="text">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
