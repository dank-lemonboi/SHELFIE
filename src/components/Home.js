import React from 'react';
import { Link } from 'react-router-dom';
import HomeNavbar from './Navbars/homeNavbar'
import '../App.css'


export default function Home() {
    
    const arr = ['A', 'B', 'C', 'D'];
    let mappedArr = arr.map( (x, i) => {
        return <Link to={`/shelf/${x}`} key={i} style={ {textDecoration: 'none'} }>
         <div className='shelf' shelf={x}>
         {`Shelf ${x}`}
         </div>
        <br />
        </Link>
    })
        return(
            <div>
             <HomeNavbar />
               <div className='shelfies'>
               { mappedArr }
               </div>
            </div>
        )
}