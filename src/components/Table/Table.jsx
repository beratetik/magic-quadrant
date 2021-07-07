import React from 'react'

import { Input } from './components'
import { TableWrapper, AddItemButton, RowWrapper, Label } from './styles'

const Header = ({ header }) => (
  <RowWrapper>
    {header?.map((item, index) => <Label key={index}>{item}</Label>)}
  </RowWrapper>
)

const Row = ({ }) => {
  
  return (
    <RowWrapper></RowWrapper>
  )
}

const List = ({ header, itemList, onChange, onDelete }) => (
  <>
    <Header {...{ header }} />
    {itemList?.map((item, index) =>
      <RowWrapper key={index}>
        <Input
          value={item.label}
          onChange={(e) => onChange(e, index, "label")}
          {...item}
        />
        <Input
          value={item.x}
          type="number"
          onChange={(e) => onChange(e, index, "x")}
          {...item}
        />
        <Input
          value={item.y}
          type="number"
          onChange={(e) => onChange(e, index, "y")}
          {...item}
        />
        <Input
          value="Delete"
          onClick={() => onDelete(index)}
          type="button"
        />
      </RowWrapper> 
    )}
  </>
)

const Table = ({ addItem, ...rest }) => (
  <TableWrapper>
    <AddItemButton
      type="button"
      value="Add"
      onClick={addItem}
    />
    <List {...rest} />
  </TableWrapper>
)

export default Table
