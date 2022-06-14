import React, { Fragment } from 'react';
import { inAccusative } from 'shevchenko';
import { Props } from '../types/props';
import { inflect } from '../utils';

const Accusative = (props: Props) => {
  return <Fragment>{inflect(inAccusative, props)}</Fragment>;
};

export default Accusative;
