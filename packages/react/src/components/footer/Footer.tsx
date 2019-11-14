import React from 'react';

import Section from '../section/Section';
import styles from './Footer.module.css';

export type FooterProps = React.PropsWithChildren<{}>;

export default ({ children }: FooterProps) => (
  <div className={styles.footer}>
    <Section color="secondary" koros="basic">
      {children}
    </Section>
  </div>
);
