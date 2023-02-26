import { ReactNode } from 'react';

import styles from './centred-template.module.css';

type CenteredTemplateProps = {
  dataTestId: string;
  children: ReactNode;
};

export const CenteredTemplate = ({ children, dataTestId }: CenteredTemplateProps) => (
    <div data-test-id={dataTestId} className={styles.wrapper}>
        {children}
    </div>
);
