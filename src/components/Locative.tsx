import React, { Fragment } from 'react';
import { inLocative } from 'shevchenko';
import { Props } from '../types/props';
import { inflect } from '../utils';

const Locative = (props: Props) => {
  return <Fragment>{inflect(inLocative, props)}</Fragment>;
};

export default Locative;
