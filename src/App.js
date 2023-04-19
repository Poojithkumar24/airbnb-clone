import logo from './logo.svg';
import Hero from './Componenet/Hero'
import Navbar from './Componenet/Navbar';
import Card from './Componenet/Card';
import data from './Componenet/data';
export default function App() {
  const cards=data.map(item =>{
    
      return(
        <Card
          id={item.id}
          item={item}
          /*
          img={item.coverImg}
          rating={item.stats.rating}
          likes={item.stats.reviewCount}
          country={item.location}
          title={item.title}
          message={item.description}
          bold={item.price}
          openSpots={item.openSpots}
           */

        />
      )
    
  })
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className='cards-list'>
        {cards}
      </section>
    </div>
  );
}


