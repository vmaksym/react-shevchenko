# react-shevchenko

react-shevchenko - є врапером до бібліотеки [shevchenko](https://shevchenko-js.tooleks.com/#documentation) для зручного використання з бібліотекою `react`.

> react library

[![NPM](https://img.shields.io/npm/v/react-shevchenko.svg)](https://www.npmjs.com/package/react-shevchenko) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Втановлення

```bash
npm install --save shevchenko react-shevchenko
```
або

```bash
yarn add shevchenko react-shevchenko
```

## Приклад використання відмінювання прізвищ та імен.

Бібліотека `react-shevchenko` надає наступний перелік компонент:

- Nominative
- Genitive
- Dative
- Accusative
- Ablative
- Locative
- Vocative

Синтаксис використання наступний `<назва_компоненти>П(І(Б))</назва_компоненти>` :

```tsx
import React from 'react';
import { Ablative, Genitive } from 'react-shevchenko';


const App = () => {
  return (<main>
    <Genitive gender='male'>Шевченко Тарас</Genitive> {/* Шевченка Тараса */}
    <Ablative gender='male'>Шевченко Тарас Григорович</Ablative>{/* Шевченком Тарасом Григоровичем */}
  </main>)
}
```

## Ліцензія

MIT © [vmaksym](https://github.com/vmaksym)
