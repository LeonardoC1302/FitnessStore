import { useState } from 'react'
import Directory from '../../components/directory/directory.component';

function Home() {
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
      imageUrl: 'https://i.ibb.co/0cRWDrp/wellness.jpg'
    },
    {
      id: 4,
      title: 'Equipment',
      imageUrl: 'https://i.ibb.co/NyVCGYt/equipment.jpg'
    },
    {
      id: 5,
      title: 'Accessories',
      imageUrl: 'https://i.ibb.co/4M81C57/clothes.jpg'
    }
  ]

  return (
    <Directory categories={categories} />
  )
}

export default Home;
