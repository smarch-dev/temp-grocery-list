import { useState } from 'react'

const SingleItem = ({ item, removeItem, editItem }) => {
  // In state, we have an item with a completed attribute.  You could
  // either set up the state with a false value or use the item.completed
  //const [isChecked, setIsChecked] = useState(item.completed)
  return (
    <div className="single-item">
      <input
        type="checkbox"
        //checked={isChecked}
        checked={item.completed}
        //onChange={() => setIsChecked(!isChecked)}
        onChange={() => editItem(item.id)}
      />
      <p
        style={{
          textTransform: 'capitalize',
          textDecoration: item.completed && 'line-through',
        }}
      >
        {item.name}
      </p>
      <button
        className="btn remove-btn"
        type="button"
        onClick={() => removeItem(item.id)}
      >
        delete
      </button>
    </div>
  )
}
export default SingleItem
