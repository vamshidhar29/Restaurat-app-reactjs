import {useState, useEffect} from 'react'

import Head from '../Headers'
import FoodItems from '../FoodItems'

const Home = () => {
  const [jsonResponse, setResponse] = useState('')
  const [start, setStart] = useState(false)
  const [activeState, setActiveState] = useState('Salads and Soup')
  const [cartCount, setCartCount] = useState(0)

  const fetchData = async () => {
    const url = 'https://run.mocky.io/v3/77a7e71b-804a-4fbd-822c-3e365d3482cc'
    const response = await fetch(url)
    const responseJson = await response.json()
    console.log(responseJson[0])
    setResponse(responseJson[0])
    setStart(true)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const updateActiveStatus = value => {
    setActiveState(value)
  }

  const updateCartCount = val => {
    if (val === '+') {
      setCartCount(preVal => preVal + 1)
    } else {
      if (cartCount > 0) {
        setCartCount(preVal => preVal - 1)
      }
    }
  }

  const categoryItems = () => {
    const data = jsonResponse.table_menu_list.filter(
      each => each.menu_category === activeState,
    )
    return data
  }

  return (
    <div>
      {start ? (
        <div>
          <Head
            resturant={jsonResponse.restaurant_name}
            menuList={jsonResponse.table_menu_list}
            updateActiveStatus={updateActiveStatus}
            activeState={activeState}
            cartCount={cartCount}
          />

          <ul className="ul-fooditems-bg">
            {categoryItems()[0].category_dishes.map(each => (
              <FoodItems
                foodData={each}
                updateCartCount={updateCartCount}
                key={each.dish_id}
              />
            ))}
          </ul>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default Home
