import { getMatchShieldedRegExp } from './get-match-shielded-reg-exp';

export const getSubstringMatches = (subString: string, string: string) => {
  const subStringRegEpx = getMatchShieldedRegExp(subString);

  return string.match(subStringRegEpx);
};
