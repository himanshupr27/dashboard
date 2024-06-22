// src/pages/Kanban.js
import React from 'react';
import Board from 'react-trello';

const data = {
  lanes: [
    {
      id: '1',
      title: 'To Do',
      cards: [],
    },
    {
      id: '2',
      title: 'In Progress',
      cards: [],
    },
    {
      id: '3',
      title: 'Done',
      cards: [],
    },
  ],
};

const Kanban = () => (
  <div className="kanban-board">
    <Board data={data} />
  </div>
);

export default Kanban;
