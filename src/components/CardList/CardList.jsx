import { Card } from '../Card/Card';
import './index.css';
import { useEffect, useState } from 'react';

export const CardList = ({ cards }) => {
  // console.log({ data });
  // const dataNew = data.results.map((e)=> ({...e, picture: e.image}));
  // const [state2, setState2] = useState('>>>');
  // useEffect(() => {
  //   console.log(state2);
  //   return () => {
  //     console.log('unmount');
  //     // chart.dispose()
  //   }
  // }, []);
  return (
    <div className='cards'>
      {cards.map((item) => {
        // console.log({ item });
        return <Card {...item} key={item.name} />; // rest operator
      })}
    </div>
  );
};
