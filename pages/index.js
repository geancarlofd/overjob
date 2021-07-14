
import Image from 'next/image'
import styles from '../styles/pages/Home.module.css'

//Componentes
import Header from '../src/components/Header';
import Filters from '../src/components/Filters';
import Cards from '../src/components/Cards';


export default function Home() {
  return (
    <div className={styles.structure}>
      <Header/>
      <Filters/>
      <Cards/>  
    </div>
  )
}
