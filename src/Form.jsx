import { useState } from 'react'
import { toast } from 'react-toastify'

const Form = ({ addItem }) => {
  const [newItemName, setNewItemName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // check for a value in the input field
    if (!newItemName) {
      toast.error('Please provide a value.')
      return
    }
    addItem(newItemName)
    setNewItemName('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <h4>Grocery Bud</h4>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          value={newItemName}
          onChange={(event) => setNewItemName(event.target.value)}
        />
        <button type="submit" className="btn">
          Add Item
        </button>
      </div>
    </form>
  )
}
export default Form
