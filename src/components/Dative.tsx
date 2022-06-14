import React, { Fragment } from 'react';
import { inDative } from 'shevchenko';
import { Props } from '../types/props';
import { inflect } from '../utils';

const Dative = (props: Props) => {
  return <Fragment>{inflect(inDative, props)}</Fragment>;
};

export default Dative;
