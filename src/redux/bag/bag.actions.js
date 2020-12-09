import { BagActionTypes } from './bag.types'

export const toggleBagHidden = () => ({
  type: BagActionTypes.TOGGLE_BAG_HIDDEN
})

export const addItem = item => ({
  type: BagActionTypes.ADD_ITEM,
  payload: item
})

export const removeItem = item => ({
  type: BagActionTypes.REMOVE_ITEM,
  payload: item
})

export const clearBag = () => ({
  type: BagActionTypes.CLEAR_BAG
})
