import { FormProvider } from 'react-hook-form';

import { FormInput } from 'entities/form-input';
import { Button } from 'shared/ui';
import { ButtonTypes } from 'shared/lib';
import { handlers, hooks } from '../../model';
import {configs, getClassNames, getControllerButtonText} from '../../lib';
import { ChangeUserInfoTypes } from '../../lib/types';

import styles from './change-user-info.module.css';

const { changeFormStatusHandler, changeProfileInfo } = handlers.changeUserInfo;
const { SAVE_CHANGE } = configs.changeUserInfo;

export const ChangeUserInfo = () => {
  const { methods, dispatch, initialProfileFields, formStatus, setFormStatus } = hooks.useProfileForm();
  const { controllerButtonClassName, submitButtonClassName, buttonsClassName} = getClassNames();

  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = methods;

  const onSubmit = (formFieldsData: ChangeUserInfoTypes.ProfileFieldNamesType) => {
    changeProfileInfo(formFieldsData, dispatch, setFormStatus);
  };

  const controllerButtonText = getControllerButtonText(formStatus);

  return (
    <FormProvider {...methods}>
      <form data-test-id='profile-form' onSubmit={handleSubmit(onSubmit)} className={styles.formWrapper}>
        <div className={styles.inputsWrapper}>
          {configs.changeUserInfoDataFields.map((fieldData) => (
            <FormInput
              {...fieldData}
              control={control}
              name={fieldData.name}
              errorMessage={errors[fieldData.name]?.message}
              key={fieldData.name}
              isDisabled={!formStatus.isChangeable}
            />
          ))}
        </div>
        <div className={styles.formFooter}>
          <Button
            dataTestId='edit-button'
            type={ButtonTypes.BUTTON}
            classButton={controllerButtonClassName}
            buttonText={controllerButtonText}
            classText={buttonsClassName}
            onClick={() => changeFormStatusHandler(formStatus, setFormStatus, reset, initialProfileFields)}
          />
          <Button
            dataTestId='save-button'
            type={ButtonTypes.SUBMIT}
            classButton={submitButtonClassName}
            buttonText={SAVE_CHANGE}
            classText={buttonsClassName}
            isDisabled={!formStatus.isChangeable}
          />
        </div>
      </form>
    </FormProvider>
  );
};
