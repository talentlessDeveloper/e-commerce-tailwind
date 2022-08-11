import React,{useEffect} from 'react'
import { client } from '../lib/sanitySetup'
import { fetchAllProductsquery } from '../lib/query'

export const Home = () => {
  useEffect(()=>{
    client.fetch(fetchAllProductsquery)
    .then(data => console.log(data))
  });
  
  return (
    <>
    <main>
        <div className="App text-center text-3xl font-bold underline">
            ECOMMERCE WITH PRINCE
        </div>
    </main>
    </>
  )
}
