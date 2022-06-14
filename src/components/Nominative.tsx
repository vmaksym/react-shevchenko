import React, { Fragment } from 'react';
import { inNominative } from 'shevchenko';
import { Props } from '../types/props';
import { inflect } from '../utils';

const Nominative = (props: Props) => {
  return <Fragment>{inflect(inNominative, props)}</Fragment>;
};

export default Nominative;
