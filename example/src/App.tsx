import React from 'react';

import { Ablative, Genitive } from 'react-shevchenko';

const App = () => {
  return (
    <main style={{ padding: 16 }}>
      <article>
        <h3>Приклад використання відмінювання прізвищ та імен.</h3>
        <p>
          Бібліотека <b>react-shevchenko</b> надає наступний перелік компонент:
        </p>
        <ul>
          <li>Nominative</li>
          <li>Genitive</li>
          <li>Dative</li>
          <li>Accusative</li>
          <li>Ablative</li>
          <li>Locative</li>
          <li>Vocative</li>
        </ul>
        <p>
          Синтаксис використання наступний{' '}
          <b>{'<назва_компоненти>ПІБ</назва_компоненти>'}</b>:
        </p>
        <p>
          <b>{"<Genitive gender='male'>Шевченко Тарас</Genitive>"}</b>
          {' // '}
          <Genitive gender='male'>Шевченко Тарас</Genitive>
        </p>
        <p>Або</p>
        <p>
          <b>
            {"<Ablative gender='male'>Шевченко Тарас Григорович</Ablative>"}
          </b>{' '}
          {' // '}
          <Ablative gender='male'>Шевченко Тарас Григорович</Ablative>
        </p>
      </article>
    </main>
  );
};

export default App;
