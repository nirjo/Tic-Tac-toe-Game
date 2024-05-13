// Board.js
import React from 'react';
import Cell from '../components/Cell';

function Board({ squares, onClick }) {
  const renderCell = (index) => {
    return <Cell value={squares[index]} onClick={() => onClick(index)} />;
  };

  return (
    <div className="board">
      {[0, 1, 2].map((row) => (
        <div key={row} className="board-row">
          {[0, 1, 2].map((col) => renderCell(row * 3 + col))}
        </div>
      ))}
    </div>
  );
}

export default Board;