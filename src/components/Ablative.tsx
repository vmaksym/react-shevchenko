import React, { Fragment } from 'react';
import { inAblative } from 'shevchenko';
import { Props } from '../types/props';
import { inflect } from '../utils';

const Ablative = (props: Props) => {
  return <Fragment>{inflect(inAblative, props)}</Fragment>;
};

export default Ablative;
