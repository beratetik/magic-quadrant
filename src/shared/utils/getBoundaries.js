const getBoundaries = ({ clientX, clientY }) => ({
  xBoundary: Math.ceil(clientX + 15 / 2) <= 430 && Math.ceil(clientX - 15 / 2) >= 30,
  yBoundary: Math.ceil(clientY + 15 / 2) <= 430 && Math.ceil(clientY - 15 / 2) >= 30
})

export default getBoundaries
