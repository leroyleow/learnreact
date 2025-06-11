import { useState } from "react";
import {bookData} from './data'
function Book(props) {
    //var isRead = false;
    const [isRead, setisRead] = useState(false)

    return (
      <div className='card'>
        <img src={props.image} alt="" />
        <h3>Title: {props.title}</h3>
        <span>Subtitle: {props.subtitle}</span>
        <h4>Author: {props.author}</h4>
        <p>{props.summary}</p>
        <button onClick={() => {
          console.log("Status", isRead)
          setisRead(!isRead);
        }}>
          {isRead ? 'Read' : 'UnRead'}
          {/* {isRead ? 'Read' : 'UnRead'}  //this line alone with useState does not trigger React DOM change and Repaint */}
        </button>
      </div>
    );
  }

  export default function BookContainer(){
      <div>
        {booksData.items.map((item, index) => {
          <Book
          key = {index}
          title = {item.volume.title}
          image = {item.volume.image}
          subtitle = {item.volume.subtitle}
          author = {item.volume.author}
          summary = {item.volume.description} 
          />
        })}
      </div>
  }

  