import { useEffect, useState } from 'react'

import { useLocalStorage } from './shared/hooks'
import { initialState, defaultItem, header } from './shared/config'

import { Chart, Table } from './components'
import { Wrapper } from './styles'

function App() {
  const [item, setItem] = useState(null)
  const [itemList, setItemList] = useLocalStorage("items", initialState)

  const onDelete = (index) => {
    setItemList(itemList.filter((_, i) => i !== index))
  }

  const onChange = (e, i, property) => {
    setItemList(() => {
      const list = [...itemList]

      list[i][property] = e.target.value
      return [...list]
    })
  }

  const addItem = () => { 
    setItemList([
      ...itemList,
      {...defaultItem}
    ])
  }

  return (
    <Wrapper>
      <Chart {...{ item, setItem, itemList, setItemList }} />
      <Table {...{ addItem, header, itemList, onChange, onDelete }} />
    </Wrapper>
  )
}

export default App

