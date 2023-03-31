import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Customer Management',
    Svg: require('@site/static/img/fea-3.svg').default,
    description: (
      <>
        A customer-centric approach is all you need for all your CRM needs. Track and Monitor your customers' journeys with the power of a single click.
      </>
    ),
  },
  
  {
    title: 'Case Management System',
    Svg: require('@site/static/img/fea-3-3.svg').default,
    description: (
      <>
        This is software that enables businesses to automate case workflows and procedures, store and access a large amount of client data, and drive case resolution to improve customer satisfaction.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
