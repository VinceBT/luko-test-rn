import { ImageSourcePropType } from 'react-native'

export type InsuredItem = {
  id: number
  name: string
  price: string
  image: ImageSourcePropType
  bill: ImageSourcePropType
  category: string
  purchaseDate: Date
  purchasePrice: string
  endOfWarrantyDate?: Date
}

export type InsuredItems = Array<InsuredItem>

const insuredItems: InsuredItems = [
  {
    id: 1,
    name: 'Cartier Ring',
    price: '5780 €',
    image: require('../images/cartier-ring.jpg'),
    bill: require('../images/document.png'),
    category: 'Jewelry',
    purchaseDate: new Date(),
    purchasePrice: '5700-5800 €',
    endOfWarrantyDate: new Date(),
  },
  {
    id: 2,
    name: 'Lou.Yetu Necklace',
    price: '60 €',
    image: require('../images/lou-yetu-necklace.jpg'),
    bill: require('../images/document.png'),
    category: 'Jewelry',
    purchaseDate: new Date(),
    purchasePrice: '5700-5800 €',
    endOfWarrantyDate: new Date(),
  },
  {
    id: 3,
    name: 'Chanel Pearl Bracelet',
    price: '2100 €',
    image: require('../images/chanel-pearl-bracelet.jpg'),
    bill: require('../images/document.png'),
    category: 'Jewelry',
    purchaseDate: new Date(),
    purchasePrice: '5700-5800 €',
    endOfWarrantyDate: new Date(),
  },
  {
    id: 4,
    name: 'Messika Earrings',
    price: '10 090 €',
    image: require('../images/messika-earrings.jpg'),
    bill: require('../images/document.png'),
    category: 'Jewelry',
    purchaseDate: new Date(),
    purchasePrice: '5700-5800 €',
    endOfWarrantyDate: new Date(),
  },
  {
    id: 5,
    name: 'Swarovski Bracelet',
    price: '200 €',
    image: require('../images/swarovski-bracelet.jpg'),
    bill: require('../images/document.png'),
    category: 'Jewelry',
    purchaseDate: new Date(),
    purchasePrice: '5700-5800 €',
    endOfWarrantyDate: new Date(),
  },
]

export default insuredItems
