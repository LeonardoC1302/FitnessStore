import { useState } from 'react'
import Categories from './components/categories/categories.component'

function App() {
  const categories = [
    {
      id: 1,
      title: 'Supplements',
      imageUrl: 'https://i.ibb.co/bPmd5DK/supplements.jpg'
    },
    {
      id: 2,
      title: 'Weight',
      imageUrl: 'https://i.ibb.co/gvLDhPp/weight.jpg'
    },
    {
      id: 3,
      title: 'Wellness',
      imageUrl: 'https://i.ibb.co/wgyjJ1L/wellness.jpg'
    },
    {
      id: 4,
      title: 'Equipment',
      imageUrl: 'https://i.ibb.co/NyVCGYt/equipment.jpg'
    },
    {
      id: 5,
      title: 'Accesories',
      imageUrl: 'https://i.ibb.co/rwyQmF1/clothes.jpg'
    }
  ]

  return (
    <Categories categories={categories} />
  )
}

export default App
