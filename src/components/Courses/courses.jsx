import Card from "../../UI/Card/card";
import React from "react";
import "./courses.css";

const Courses = props => {
  const clickHandler = (item) => {
    let property = props.data.find(obj => obj.id === item);
    console.log(property)
   
    switch(property.name){
      case 'CodeFirstGirls Music App':
        alert('No Video on this option.')
        window.location.href = 'https://github.com/Angel2001-programmer/MG-Music';
        break;
        
        case 'Calculator':
          props.onChangeTitle(property.name);
          props.onChangeDesc('NONE');
          props.onChangeVideo(property.video);
          props.onChangeRepo(property.link);
          // props.isModal(true);
        break;

        case 'TicTacToe':
          props.onChangeTitle(property.name);
          props.onChangeDesc('NONE');
          props.onChangeVideo(property.video);
          props.onChangeRepo(property.link);
          // props.isModal(true);
        break;

        case 'WeatherApp':
          props.onChangeTitle(property.name);
          props.onChangeDesc('NONE');
          props.onChangeVideo(property.video);
          props.onChangeRepo(property.link);
          // props.isModal(true);
        break;

        case 'NoteApp':
          props.onChangeTitle(property.name);
          props.onChangeDesc('NONE');
          props.onChangeVideo(property.video);
          props.onChangeRepo(property.link);
          // props.isModal(true);
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
          alert('That option is not avaliable please try again.')
        break;
    }
  }

  return (
    <div className="coursesContent">
      {props.data.map((home) => (
        <Card key={home.id}>
          <div className='content'>
           <div className='cardContainer'>
             <div className='card'
             onClick={(e) => clickHandler(home.id)}>
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

export default Courses;