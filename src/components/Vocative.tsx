import React, { Fragment } from 'react';
import { inVocative } from 'shevchenko';
import { Props } from '../types/props';
import { inflect } from '../utils';

const Vocative = (props: Props) => {
  return <Fragment>{inflect(inVocative, props)}</Fragment>;
};

export default Vocative;
