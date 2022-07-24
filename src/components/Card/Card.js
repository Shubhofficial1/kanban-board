import React, { useState } from 'react'
import Labels from '../Labels/Labels'
import './Card.css'
import { MoreHorizontal } from 'react-feather'
import Dropdown from '../Dropdown/Dropdown'

const Card = ({ card, bid, removeCard, handleDragEnter, handleDragEnd }) => {
  const [showCardDropdown, setShowCardDropdown] = useState(false)
  return (
    <div
      className='card_container'
      draggable
      onDragEnter={() => handleDragEnter(card.id, bid)}
      onDragEnd={() => {
        handleDragEnd(card.id, bid)
      }}
    >
      <div key={card.id} className='card noselect'>
        <div className='options'>
          <MoreHorizontal
            className='dot'
            onClick={() => setShowCardDropdown(!showCardDropdown)}
          />
          {showCardDropdown && (
            <Dropdown
              onClose={() => {
                setShowCardDropdown(false)
              }}
            >
              <div className='dropdown_option'>
                <p
                  onClick={() => {
                    removeCard(bid, card.id)
                  }}
                >
                  Delete Card
                </p>
              </div>
            </Dropdown>
          )}
        </div>
        {/* <img className='card_image' src={card.image} alt={card.text} /> */}
        <h1 className='card_text'>{card.text}</h1>
        <p className='card_description'>{card.description}</p>
        <div className='labels_container'>
          {card?.labels?.map((label) => {
            return <Labels key={label.id} label={label} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Card
