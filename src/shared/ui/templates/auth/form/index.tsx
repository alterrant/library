import { ReactNode } from 'react';

import { Button, LinkedTextWithArrow } from '../../..';
import { ButtonTypes, LinkedTextWithArrowType } from '../../../../lib';

import styles from './auth-form-template.module.css';

type FormTemplateProps = {
  title: string;
  subtitle?: string;
  footerText: string;
  submitText: string;
  isSubmitDisabled: boolean;
  footerLinkedTextConfig?: LinkedTextWithArrowType;
  inputs: ReactNode;
  inputHelper?: ReactNode;
  dataTestId: string;
  handleSubmit: () => void;
  linkHandler?: () => void;
};
// TODO: заменить FormTemplate на Form
export const FormTemplate = ({
  title,
  subtitle,
  footerText,
  submitText,
  isSubmitDisabled,
  footerLinkedTextConfig,
  inputs,
  inputHelper,
  dataTestId,
  handleSubmit,
  linkHandler,
}: FormTemplateProps) => (
  <form data-test-id={dataTestId} onSubmit={handleSubmit} className={styles.formWrapper}>
    <div className={styles.title}>
      <p>{title}</p>
      {subtitle && <p className={styles.subTitle}>{subtitle}</p>}
    </div>

    <div className={styles.inputsWrapper}>
      <div className={styles.inputs}>{inputs}</div>
      {inputHelper}
    </div>

    <div className={styles.formFooter}>
      <Button
        type={ButtonTypes.SUBMIT}
        classButton={styles.submitButton}
        buttonText={submitText}
        classText={styles.submitButtonText}
        isDisabled={isSubmitDisabled}
      />
      <div className={styles.footer}>
        <p className={styles.footerText}>{footerText}</p>

        {footerLinkedTextConfig && (
          <LinkedTextWithArrow
            clickHandler={linkHandler}
            path={footerLinkedTextConfig.path}
            text={footerLinkedTextConfig.text}
            orientation={footerLinkedTextConfig.orientation}
          />
        )}
      </div>
    </div>
  </form>
);
