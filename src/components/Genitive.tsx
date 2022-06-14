import React, { Fragment } from 'react';
import { inGenitive } from 'shevchenko';
import { Props } from '../types/props';
import { inflect } from '../utils';

const Genitive = (props: Props) => {
  return <Fragment>{inflect(inGenitive, props)}</Fragment>;
};

export default Genitive;
