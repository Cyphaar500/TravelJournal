import React from 'react';
import './App.css'
import {data} from './dataArray';
import Header from './Components/Nav';
import Body from './Components/Body';


export default function App() {

   const travelData = data.map(items => {
      return (
        <Body 
          key={items.id}
          img={items.img}
          googleMapsUrl={items.googleMapsUrl}
          loc={items.loc}
          title={items.title} 
          description={items.description}
          startDate={items.startDate}
          endDate={items.endDate}
        />
      )
   })

  return (
    <div>
      <Header />
        <main className='Demo'>
        {travelData}
        </main>
    </div>
  );
}