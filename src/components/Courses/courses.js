import Card from "../../UI/Card/card";
import React from "react";
import "./courses.css";

const courses = props => {

  const clickHandler = (item) => {
    let property = props.data.find(obj => obj.id === item);
   
    switch(property.name){
      case 'CodeFirstGirls Music App':
        window.location.href = 'https://github.com/Angel2001-programmer/MG-Music';
        break;
        case 'Calculator':
          window.location.href  = 'https://github.com/Angel2001-programmer/calculator-ReactJS';
        break;
        case 'TicTacToe':
          window.location.href = 'https://github.com/Angel2001-programmer/Tic-Tac-Toe-ReactJS';
        break;
        case 'WeatherApp':
          window.location.href = 'https://github.com/Angel2001-programmer/WeatherReactJS';
        break;
        case 'NoteApp':
          window.location.href = 'https://github.com/Angel2001-programmer/NoteAppReactJS';
          break;
          default:
            console.log('Not Found');
            break;
    }
  }

  return (
    <div className="coursesContent">
      {props.data.map((home) => (
        <Card>
          <div className='content'>
           <div className='cardContainer'>
             <div className='card'
             onClick={() => clickHandler(home.id)}>
               <div className='cardInfo'>
                 <h2 className='projectTitle'>{home.name}</h2>
                 <img src={home.image} alt="Preview Image"></img>
               </div>
             </div>
           </div>
           <h3>Status: {home.status}</h3>
        </div>
        </Card>
      ))}
    </div>
  );
};

export default courses;