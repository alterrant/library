import { ROUTS } from '../routs';

export const checkIsAuthPath = (pathName: string) =>
  pathName === `/${ROUTS.AUTH.FORGOT_PASS}` || pathName === `/${ROUTS.AUTH.REGISTRATION}` || pathName === `/${ROUTS.AUTH.AUTH}`;
