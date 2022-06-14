import { Props } from '../types/props';
import { Anthroponym } from 'shevchenko/dist/types/core';
declare const inflect: (fn: (anthroponym: Anthroponym) => Anthroponym, { gender, children }: Props) => string;
export default inflect;
