import { Props } from '../types/props';
import { Anthroponym, Gender } from 'shevchenko/dist/types/core';

const inflect = (
  fn: (anthroponym: Anthroponym) => Anthroponym,
  { gender, children }: Props
) => {
  const [lastName, firstName, middleName] = children.split(' ');

  const anthroponym = fn({
    gender: gender as Gender,
    firstName,
    middleName,
    lastName
  });

  return [
    anthroponym.lastName,
    anthroponym.firstName,
    anthroponym.middleName
  ].join(' ');
};

export default inflect;
