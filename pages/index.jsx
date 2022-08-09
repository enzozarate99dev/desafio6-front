import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Card from '../components/ComicCard'
import {useState, useEffect} from 'react'
import axios from 'axios'
//https://gateway.marvel.com:443/v1/public/comics?dateRange=2000-01-01%2C2010-01-01&orderBy=onsaleDate&limit=20&apikey=d75dc0cc6bee7df1d6695434c3b96ecb

//d75dc0cc6bee7df1d6695434c3b96ecb   marvel key publica

//36ea7a513a91b2690cfbe3243a35774d9ac25b62  marvel key privada

//hash generado en google 745e80971c7deb4997097a3aec8c0a34
export default function Home() {
  const [comics, setComics] = useState([])

  // Functions
  const getComics = async () => {
    const response = await axios.get(
      'https://gateway.marvel.com:443/v1/public/comics?ts=1dateRange=2000-01-01%2C2010-01-01&orderBy=onsaleDate&limit=20&apikey=d75dc0cc6bee7df1d6695434c3b96ecb&hash=745e80971c7deb4997097a3aec8c0a34'
      ,
    )

    setComics(response.data.results)
  }

  // Effects
  useEffect(() => {
    getComics()
  }, [])
  return (
    <div className={styles.container}>
      <Head>
        <title>Marvel Shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Marvel Comics</h1>

      <ul>
        {comics.map((comic) => (
          <Card
            key={comic.id}
            title={comic.title}
            image={comic.image}
            description={comic.description}
          />
        ))}
      </ul>

    </div>
  )
}
