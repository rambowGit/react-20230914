import React from 'react';
import ReactDOM from 'react-dom/client';
import restaurants from './constants/mock';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

/*
Название ресторана
Заголовок - Меню
Список названий блюд
Заголовок - Отзывы
Список текстов отзывов
*/
root.render(
  <div id="container">
    <div data-id="restaurant-0">
      <h3>
        {restaurants[0].name}
      </h3>
      <h4>
        Меню
      </h4>
      <ul>
        <li>
          {restaurants[0].menu[0].name}
        </li>
        <li>
          {restaurants[0].menu[1].name}
        </li>
        <li>
          {restaurants[0].menu[2].name}
        </li>
      </ul>
      <h4>
        Отзывы
      </h4>
      <ul>
        <li>
          <small>
            {restaurants[0].reviews[0].text}
          </small>
        </li>
        <li>
          <small>
            {restaurants[0].reviews[1].text}
          </small>
        </li>
      </ul>
    </div>

    <div data-id="restaurant-1">
      <h3>
        {restaurants[1].name}
      </h3>
      <h4>
        Меню
      </h4>
      <ul>
        <li>
          {restaurants[1].menu[0].name}
        </li>
        <li>
          {restaurants[1].menu[1].name}
        </li>
      </ul>
      <h4>
        Отзывы
      </h4>
      <ul>
        <li>
          <small>
            {restaurants[1].reviews[0].text}
          </small>
        </li>
        <li>
          <small>
            {restaurants[1].reviews[1].text}
          </small>
        </li>
        <li>
          <small>
            {restaurants[1].reviews[2].text}
          </small>
        </li>
      </ul>
    </div>
    <div data-id="restaurant-2">
      <h3>
        {restaurants[2].name}
      </h3>
      <h4>
        Меню
      </h4>
      <ul>
        <li>
          {restaurants[2].menu[0].name}
        </li>
        <li>
          {restaurants[2].menu[1].name}
        </li>
        <li>
          {restaurants[2].menu[2].name}
        </li>
      </ul>
      <h4>
        Отзывы
      </h4>
      <ul>
        <li>
          <small>
            {restaurants[2].reviews[0].text}
          </small>
        </li>
      </ul>
    </div>

    <div data-id="restaurant-3">
      <h3>
        {restaurants[3].name}
      </h3>
      <h4>
        Меню
      </h4>
      <ul>
        <li>
          {restaurants[3].menu[0].name}
        </li>
        <li>
          {restaurants[3].menu[1].name}
        </li>
      </ul>
      <h4>
        Отзывы
      </h4>
      <ul>
        <li>
          <small>
            {restaurants[3].reviews[0].text}
          </small>
        </li>
        <li>
          <small>
            {restaurants[3].reviews[1].text}
          </small>
        </li>
      </ul>
    </div>
  </div>,
);
