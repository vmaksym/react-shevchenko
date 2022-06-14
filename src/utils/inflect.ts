import { Props } from '../types/props';
import { Anthroponym } from 'shevchenko/dist/types/core';

const inflect = (
  fn: (anthroponym: Anthroponym) => Anthroponym,
  { gender, children }: Props
) => {
  const [lastName, firstName, middleName] = children.split(' ');

  const anthroponym = fn({
    gender,
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
