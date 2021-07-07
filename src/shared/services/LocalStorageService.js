const get = (key) => {
  const item = window.localStorage.getItem(key)
  if (!item) return null
  return JSON.parse(item) 
}

const set = (key, value) => {
  const item = value
  
  if ((typeof value === 'object' && value !== null) || Array.isArray(value)) {
    item = JSON.stringify(value)
  }

  window.localStorage.setItem(key, item)
}

export default {
  get,
  set
}