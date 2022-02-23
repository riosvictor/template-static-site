import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Card, { CardProps } from '../components/Card'
import Grid from '../components/Grid'
import ImageList, { itemData } from '../components/ImageList'
import Map from '../components/Map'
import NavBar, { MenuOptions } from '../components/NavBar'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const applicationTitle = 'Cargas ABC';
  const urlMainImage = 'https://images.unsplash.com/photo-1562307534-a03738d2a81a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bG9nb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&h=400&q=60'
  
  const menuItems: MenuOptions[] = [
    { 
      handleAction: () => console.log('item 1'),
      title: 'item 1' 
    }
  ]
  
  const cardItems: CardProps[] = [
    { 
      url: 'https://media.istockphoto.com/photos/route-of-arial-view-futuristic-route-gps-tracking-map-navigator-with-picture-id1291379828?b=1&k=20&m=1291379828&s=170667a&w=0&h=g8t_KVN_8H94oQNnf0UgKN7e9CGVpQzydsY8eUT7nac=',
      description: 'make your travel here', 
      title: 'travels'
    },
    { 
      url: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      description: 'home travels we made', 
      title: 'home travels'
    },
    { 
      url: 'https://media.istockphoto.com/photos/delivering-quality-construction-for-a-quality-lifestyle-picture-id1297780288?b=1&k=20&m=1297780288&s=170667a&w=0&h=NDdDs9BBGULLwYUDUt1AjIOroHuwmFY9N6ZEDAYV7sE=',
      description: 'building travels we made', 
      title: 'building travels'
    }
  ]


  return (
    <>
      <NavBar title={applicationTitle} items={menuItems} />

      <div className={styles.container}>
        <Head>
          <title>{applicationTitle}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>


        <main className={styles.main}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={urlMainImage} alt="Main image" style={{
            height: 'auto',
            width: '100%',
          }} />

          <Grid>
            {cardItems.map((item, idx) => {
              return (
                <Card
                  key={idx}
                  url={item.url}
                  title={item.title}
                  description={item.description}
                />
              )
            }
            )}
          </Grid>

          <h1>Veja alguns dos nossos serviços</h1>

          <ImageList items={itemData} />
            
        </main>

        <footer className={styles.footer}>
          <Map />

          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <span className={styles.logo}>
              <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span>
          </a>
        </footer>
      </div>
    </>
  )
}

export default Home
