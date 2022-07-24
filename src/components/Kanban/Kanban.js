import React, { useState } from 'react'
import './Kanban.css'
import { MoreHorizontal, Plus } from 'react-feather'
import Card from '../Card/Card.js'
import Dropdown from '../Dropdown/Dropdown'
const Kanban = ({
  board,
  // addBoard,
  removeBoard,
  addCard,
  removeCard,
  handleDragEnter,
  handleDragEnd,
}) => {
  const [showBoardDropDown, setShowBoardDropdown] = useState(false)

  return (
    <div className='boards_container'>
      <div key={board.id} className='board'>
        <div className='board_header'>
          <p>{board.title}</p>
          <Plus
            onClick={() => {
              addCard(board.id)
            }}
            className='plus size-18'
          />
          <div className='board_dropdown'>
            <MoreHorizontal
              className='dot'
              onClick={() => setShowBoardDropdown(!showBoardDropDown)}
            />
            {showBoardDropDown && (
              <Dropdown
                onClose={() => {
                  setShowBoardDropdown(false)
                }}
              >
                <div className='dropdown_option'>
                  <p
                    onClick={() => {
                      removeBoard(board.id)
                    }}
                  >
                    Delete Board
                  </p>
                </div>
              </Dropdown>
            )}
          </div>
        </div>

        {board?.cards?.map((card) => {
          return (
            <Card
              key={card.id}
              card={card}
              bid={board.id}
              removeCard={removeCard}
              handleDragEnter={handleDragEnter}
              handleDragEnd={handleDragEnd}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Kanban
