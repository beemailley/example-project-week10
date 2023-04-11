import React from 'react'
import { useSelector } from 'react-redux'
import { Square } from 'components/Square'

export const Board = () => {
  const squares = useSelector((store) => (store.game.squares))
  // above function takes the entire store from redux and returns something from that store

  return (
    <div className="board">
      {squares.map((value, index) => (
        <Square key={index} value={value} index={index} />
      ))}
    </div>
  )
}
