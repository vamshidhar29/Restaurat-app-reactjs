import {useState, useEffect} from 'react'

const BtnsMenue = props => {
  const {menuList, setActiveStatus, activeState} = props

  const sendCategory = () => {
    setActiveStatus(menuList.menu_category)
  }

  const applyClass =
    menuList.menu_category === activeState
      ? 'selected-li-btns-bg'
      : 'li-btns-bg'

  return (
    <li className={applyClass}>
      <button onClick={sendCategory} className="btns-li">
        {menuList.menu_category}
      </button>
    </li>
  )
}

export default BtnsMenue
