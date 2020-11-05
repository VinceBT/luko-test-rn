import moment from 'moment'

import { ISODateFormat } from '../../global/constants'
import { State } from '../../store'

export type AddItemFormData = {
  name: string
  category: string
  purchaseDate: string
  purchasePrice: string
  description: string
  picture: string
  bill: string
}

export const addItem = (id: number, formData: AddItemFormData) => (
  state: State
) => {
  const insuredItemsCopy = [...state.insuredItems]
  state.insuredItems.push({
    id: id,
    name: formData.name,
    image: { uri: formData.picture },
    bill: { uri: formData.bill },
    price: formData.purchasePrice,
    category: formData.category,
    purchaseDate: moment(formData.purchaseDate, ISODateFormat).toDate(),
    purchasePrice: formData.purchasePrice,
  })
  return { ...state, insuredItems: insuredItemsCopy }
}
