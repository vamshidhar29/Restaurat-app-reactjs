import {useState} from 'react'

import './index.css'

const FoodItems = props => {
  const [itemsCount, setItemsCount] = useState(0)
  const {foodData, updateCartCount} = props
  const {
    addonCat,
    dish_Availability,
    dish_Type,
    dish_calories,
    dish_currency,
    dish_description,
    dish_id,
    dish_image,
    dish_name,
    dish_price,
    nexturl,
  } = foodData
  console.log(foodData)

  const minusClick = () => {
    if (itemsCount > 0) {
      setItemsCount(preVal => preVal - 1)
      updateCartCount('-')
    }
  }

  const plusClick = () => {
    setItemsCount(preVal => preVal + 1)
    updateCartCount('+')
  }

  return (
    <li className="li-bg">
      <img src={nexturl} className="food-icons" />

      <div className="food-items-data-bg">
        <h1 className="dish_name">{dish_name}</h1>
        <h4 className="rating-bg">
          {dish_currency} {dish_price}
        </h4>
        <p className="dish-description">{dish_description}</p>
        {dish_Availability ? (
          <div className="btn-vontainer">
            <button onClick={minusClick} className="minus-btn">
              -
            </button>
            <p>{itemsCount}</p>
            <button onClick={plusClick} className="plus-btn">
              +
            </button>
          </div>
        ) : (
          <p className="not-available-text">Not available</p>
        )}
        {addonCat.length !== 0 ? (
          <p className="customizations-text">Customizations available</p>
        ) : (
          ''
        )}
      </div>

      <p className="calories-text">{dish_calories} calories</p>

      <img src={dish_image} className="dish-img" />
    </li>
  )
}

export default FoodItems
