import { useState } from 'react'
import Form from './Form'
import { nanoid } from 'nanoid'
import Items from './Items'
import { ToastContainer, toast } from 'react-toastify'

const setLocalStorage = (items) => {
  localStorage.setItem('list', JSON.stringify(items))
}

const getLocalStorage = () => {
  let list = localStorage.getItem('list')
  console.log('localStorageList ', list)
  if (list) {
    list = JSON.parse(localStorage.getItem('list'))
  } else {
    list = []
  }
  return list
}
// A one-liner for the getLocalStorage
const defaultList = JSON.parse(localStorage.getItem('list') || '[]')

const App = () => {
  getLocalStorage()
  //const [items, setItems] = useState(getLocalStorage())
  // use one liner
  const [items, setItems] = useState(defaultList)

  const addItem = (itemName) => {
    // create a newItem object with properties of id, completed & name
    const newItem = {
      // name to come from the param passed into the function(itemName)
      name: itemName,
      completed: false,
      id: nanoid(),
    }
    console.log('Debug:  App.jsx::newItem Created -- ', newItem)
    const newItems = [...items, newItem]
    setItems(newItems)
    setLocalStorage(newItems)
    toast.success('Item added to the list.')
  }

  const removeItem = (itemId) => {
    const newItems = items.filter((item) => itemId !== item.id)
    setItems(newItems)
    setLocalStorage(newItems)
    toast.success('Item removed from list.')
  }

  const editItem = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        const newItem = { ...item, completed: !item.completed }
        return newItem
      }
      return item
    })
    setItems(newItems)
    setLocalStorage(newItems)
  }
  return (
    <section className="section-center">
      <ToastContainer position="top-center" />
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} editItem={editItem} />
    </section>
  )
}

export default App
