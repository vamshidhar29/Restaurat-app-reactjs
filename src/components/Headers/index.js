import {useState} from 'react'

import {IoCartOutline} from 'react-icons/io5'

import BtnsMenue from './btnsMenue'
import './index.css'

const Head = props => {
  const {resturant, menuList, updateActiveStatus, activeState, cartCount} = props

  const setActiveStatus = val => {
    updateActiveStatus(val)
  }

  return (
    <div>
      <div className="resturant-bg">
        <h1 className="resturant-name">{resturant}</h1>
        <div className="card-bg">
          <p>My Orders</p>
          <IoCartOutline className="cart-img" />
          <p>{cartCount}</p>
        </div>
      </div>

      <ul className="ul-btns-list-bg">
        {menuList.map(each => (
          <BtnsMenue
            menuList={each}
            setActiveStatus={setActiveStatus}
            key={each.menu_category_id}
            activeState={activeState}
          />
        ))}
      </ul>
    </div>
  )
}

export default Head
