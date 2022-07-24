import React, { useState } from 'react'
import Header from './components/Header/Header.js'
import Kanban from './components/Kanban/Kanban.js'
import './App.css'
import { Plus } from 'react-feather'

function App() {
  const [boards, setBoards] = useState([
    {
      id: Math.random() * 1000000,
      title: 'To Do List',
      cards: [
        {
          id: Math.random() * 100000,
          text: 'todays task',
          description: 'Please check the card below for today task',
          image:
            'https://images.pexels.com/photos/2471234/pexels-photo-2471234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          labels: [
            { id: Math.random() * 1000000, title: 'Frontend' },
            { id: Math.random() * 1000000, title: 'React' },
          ],
        },
        {
          id: Math.random() * 100000,
          text: 'Other task',
          description: 'Some other task',
          image:
            'https://images.pexels.com/photos/2471234/pexels-photo-2471234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          labels: [
            { id: Math.random() * 1000000, title: 'Frontend' },
            { id: Math.random() * 1000000, title: 'React' },
          ],
        },
        {
          id: Math.random() * 100000,
          text: 'complete till eod',
          description: 'Please check the card below for today task',
          image:
            'https://images.pexels.com/photos/2471234/pexels-photo-2471234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          labels: [
            { id: Math.random() * 1000000, title: 'Frontend' },
            { id: Math.random() * 1000000, title: 'React' },
          ],
        },
      ],
    },
    {
      id: Math.random() * 1000000,
      title: 'On Progress',
      cards: [
        {
          id: Math.random() * 100000,
          text: 'update Progress',
          description: 'Check the deadline & get it done',
          image:
            'https://images.pexels.com/photos/2249961/pexels-photo-2249961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          labels: [
            { id: Math.random() * 1000000, title: 'Backend' },
            { id: Math.random() * 1000000, title: 'Node js' },
          ],
        },
      ],
    },
    {
      id: Math.random() * 1000000,
      title: 'Completed',
      cards: [
        {
          id: Math.random() * 100000,
          text: 'Completed tasks',
          description: 'Please check the completed tasks below',
          image:
            'https://images.pexels.com/photos/2699282/pexels-photo-2699282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          labels: [
            { id: Math.random() * 1000000, title: 'Full stack' },
            { id: Math.random() * 1000000, title: 'React' },
            { id: Math.random() * 1000000, title: 'Node js' },
          ],
        },
      ],
    },
  ])

  const [target, setTarget] = useState({
    cid: '',
    bid: '',
  })

  const addBoard = () => {
    let title = prompt('Please enter the title', 'Untitled')
    setBoards([
      ...boards,
      {
        id: Math.random() * 10000000,
        title,
        cards: [],
      },
    ])
  }

  const removeBoard = (bid) => {
    setBoards(boards.filter((item) => item.id !== bid))
  }

  const addCard = (bid) => {
    const text = prompt('Enter Card Title', 'New Card')
    const card = {
      id: Math.random() * 10000000,
      text,
      description: 'Untitled description',
      image: '',
      labels: [],
    }
    const index = boards.findIndex((item) => item.id === bid)
    console.log(index)
    if (index < 0) return
    const tempBoard = [...boards]
    tempBoard[index].cards.push(card)
    setBoards(tempBoard)
  }

  const removeCard = (bid, cid) => {
    const bIndex = boards.findIndex((item) => item.id === bid)
    if (bIndex < 0) return
    const cIndex = boards[bIndex].cards.findIndex((item) => item.id === cid)
    if (cIndex < 0) return
    const tempBoards = [...boards]
    tempBoards[bIndex].cards.splice(cIndex, 1)
    setBoards(tempBoards)
  }

  const handleDragEnd = (cid, bid) => {
    let s_bIndex, s_cIndex, t_bIndex, t_cIndex
    s_bIndex = boards?.findIndex((item) => item.id === bid)
    if (s_bIndex < 0) return
    s_cIndex = boards[s_bIndex].cards?.findIndex((item) => item.id === cid)
    if (s_cIndex < 0) return
    t_bIndex = boards?.findIndex((item) => item.id === target.bid)
    if (t_bIndex < 0) return
    t_cIndex = boards[t_bIndex].cards?.findIndex(
      (item) => item.id === target.cid
    )
    if (t_cIndex < 0) return
    const tempBoards = [...boards]
    const tempCard = tempBoards[s_bIndex].cards[s_cIndex]
    tempBoards[s_bIndex].cards?.splice(s_cIndex, 1)
    tempBoards[t_bIndex].cards?.splice(t_cIndex, 0, tempCard)
    setBoards(tempBoards)
    setTarget({
      bid: '',
      cid: '',
    })
  }

  const handleDragEnter = (cid, bid) => {
    setTarget({
      cid: cid,
      bid: bid,
    })
  }

  return (
    <div className='App'>
      <Header />
      <div className='addBoard'>
        <Plus onClick={() => addBoard()} />
      </div>
      <div className='boards_container noselect'>
        {boards?.map((board) => (
          <Kanban
            board={board}
            addBoard={addBoard}
            removeBoard={removeBoard}
            addCard={addCard}
            removeCard={removeCard}
            handleDragEnter={handleDragEnter}
            handleDragEnd={handleDragEnd}
          />
        ))}
      </div>
    </div>
  )
}

export default App
