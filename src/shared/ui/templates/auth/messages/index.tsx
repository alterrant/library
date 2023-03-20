import { Button } from '../../../button';
import { MessagesTemplateConfigTypes } from '../../../../lib';

import styles from './auth-messages-template.module.css';

type MessagesTemplateProps = MessagesTemplateConfigTypes & {
  clickHandler?: () => void;
};

export const MessagesTemplate = ({
  title,
  message,
  buttonText,
  clickHandler,
}: MessagesTemplateProps) => (
  <div className={styles.wrapper} data-test-id='status-block'>
    <h1>{title}</h1>
    <p>{message}</p>
    {clickHandler && (
      <Button
        onClick={clickHandler}
        classButton={styles.submitButton}
        buttonText={buttonText}
        classText={styles.submitButtonText}
      />
    )}
  </div>
);
