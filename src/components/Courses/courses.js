import Card from "../../UI/Card/card";
import React from "react";
import "./courses.css";

const courses = props => {

  const clickHandler = (item, e) => {
    let property = props.data.find(obj => obj.id === item);

    console.log(property)
   
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

        case 'CodeFirstGirls Kickstarter Frontend Development':
          window.location.href = "/WebDevelopmentPDF"
        break;
        
        case 'React - The Complete Guide (incl Hooks, React Router, Redux)':
          alert('No certicate yet.') 
        break;

        case 'CodeFirstGirls Degree FullStack Developer':
            alert('No certicate yet.') 
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
             onClick={(e) => clickHandler(home.id, e)}>
               <div className='cardInfo'>
                 <h2 className='projectTitle'>{home.name}</h2>
                 <img src={home.image} alt="Preview"></img>
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