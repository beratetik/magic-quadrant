import React from 'react'

import { QuadrantList, Points, Axis } from './components'
import { ChartWrapper } from './styles'

import { list } from '../../shared/config'
import { getBoundaries } from '../../shared/utils'

const Chart = ({ itemList, setItem, setItemList, item }) => {
  const onMouseDown = (e, index) => {
    if (e.target.id === "circle") {
      setItem(itemList[index])
    }
  }

  const onMouseMove = ({ clientX, clientY }) => {
    if (item) {
      const { xBoundary, yBoundary } = getBoundaries({ clientX, clientY })
      if (xBoundary && yBoundary) {
        setItemList(() => {
          item.x = Math.floor(clientX - 30) / 4
          item.y = (100 - Math.floor(clientY - 30) / 4)
          return [...itemList]
        })
      }
    }
  }

  const onMouseUp = () => setItem(null)

  return (
    <>
      <Axis />
      <ChartWrapper {...{ onMouseUp, onMouseMove }} >
        <QuadrantList  {...{ list }} />
        <Points {...{ itemList, onMouseDown }} />
      </ChartWrapper>
    </>
  )
}

export default Chart
