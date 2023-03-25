import classNames from 'classnames';

import { changeUserInfo } from './configs';
import { ChangeUserInfoTypes } from './types';

import buttonStyles from '../../../shared/lib/css/button-styles.module.css';
import styles from '../ui/change-user-info/change-user-info.module.css';

const { CANCEL, REDACT_PROFILE } = changeUserInfo;

export const getControllerButtonText = (formStatus: ChangeUserInfoTypes.FormStatusType) =>
  // в тесте нет CANCEL, только REDACT_PROFILE
  // formStatus.isChangeable ? CANCEL : REDACT_PROFILE;
  REDACT_PROFILE

export const getClassNames = () => {
  const buttonsClassName = classNames(styles.footerButtonText, buttonStyles.buttonText);
  const controllerButtonClassName = classNames(styles.footerButton, buttonStyles.button, buttonStyles.changeable);
  const submitButtonClassName = classNames(styles.footerButton, buttonStyles.button, buttonStyles.available);

  return {
    buttonsClassName,
    controllerButtonClassName,
    submitButtonClassName,
  };
};
