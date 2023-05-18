import { GREETING, INITIAL_NAME } from '.';

export const getHelloUserString = (name = INITIAL_NAME) => `${GREETING}${name}`;
