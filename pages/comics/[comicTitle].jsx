

import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Image from 'next/image'

const ComicDetails = () => {
  // Data
  const router = useRouter()

  const { comicTitle } = router.query

 // States
  // const [comic, setComic] = useState([])

  // Functions
  // const getComic= async () => {
  //   const response = await axios.get(
  //     `https://pokeapi.co/api/v2/pokemon/${pokemonName}`,
  //   )

  //   setComic(response.data)
  // }

  // Effects
  // useEffect(() => {
  //   getComic()
  // }, [])

  // Detalle del Comic
  return <h1>{comicTitle}</h1>
}
export default ComicDetails