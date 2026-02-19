import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goodsFromServer, setGoodsFromServer] = useState<Good[]>([]);

  const hendleButtonAll = async () => {
    const goods = await getAll();
    setGoodsFromServer(goods);
  };
  const hendleButton5first = async () => {
    const goods = await get5First();
    setGoodsFromServer(goods);
  };
  const hendleButtonRedGoods = async () => {
    const goods = await getRedGoods();
    setGoodsFromServer(goods);
  };

  return (
  <div className="App">
    <h1>Dynamic list of Goods</h1>

    <button type="button" data-cy="all-button" onClick={hendleButtonAll}>
      Load all goods
    </button>

    <button type="button" data-cy="first-five-button" onClick={hendleButton5first}>
      Load 5 first goods
    </button>

    <button type="button" data-cy="red-button" onClick={hendleButtonRedGoods}>
      Load red goods
    </button>

    <GoodsList goods={goodsFromServer} />
  </div>
  );
};
