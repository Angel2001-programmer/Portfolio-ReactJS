import "./App.css";
import Portfolio from "./components/Portfolio/portfolio";
import Calculator from "./images/calculatorpreview.PNG";
import NoteApp from "./images/noteapppreview.PNG";
import TicTacToe from "./images/tictactoe-project.PNG";
import WeatherApp from "./images/WeatherPreview.PNG";
import MusicApp from "./images/MusicPreview.PNG";

function App() {
  let data = [
    {
      id: 0,
      name: "React - The Complete Guide (incl Hooks, React Router, Redux)",
      image: "https://img-c.udemycdn.com/course/480x270/1362070_b9a1_2.jpg",
      link: "https://",
      status: "Not Complete",
    },

    {
      id: 1,
      name: "CodeFirstGirls Kickstarter Frontend Development",
      image:
        "https://codefirstgirls.com/wp-content/uploads/2021/05/Featured-image-web-1.png",
      link: "https://",
      status: "Completed",
    },

    {
      id: 2,
      name: "CodeFirstGirls Degree FullStack Developer",
      image:
        "https://codefirstgirls.com/wp-content/uploads/2022/04/CFGDegree-Logo-3.png",
      link: "CFGDegree-Logo-3",
      status: "Not Complete",
    },
  ];

  let projects = [
    {
      id: 0,
      name: "CodeFirstGirls Music App",
      image: MusicApp,
      video: '',
      description: "A Music Website that is responsive to all devices and is made with HTML, CSS and JavaScript. This project was made during kickstarter CFG Web Development course. The course put us in a group of 4 and we worked as a team to complete this project and present at the end of course. We had 4 weeks to complete before to complete this project. I was team leader I provided the tasks and assigned everyone fairly. If they did not complete the tasks I would message them asking them if they had any blockers and if they needed to pair programe.",
      link: "https://github.com/Angel2001-programmer/MG-Music",
      deployment: "https://angel2001-programmer.github.io/MG-Music/",
      status: "Completed",
    },

    {
      id: 1,
      name: "Calculator",
      image: Calculator,
      description: "A simple calculator web application built with React JS, HTML, CSS and JavaScript. The calculator allows you add numbers together, multiple, minus, divide. You can also turn your number into percentages by clicking the percentage button.",
      video: 'https://www.youtube.com/embed/3QB91QGuhAs?si=lI7tuiil5k6ohkej',
      link: "https://github.com/Angel2001-programmer/calculator-ReactJS",
      deployment: "https://angel2001-programmer.github.io/calculator-ReactJS/",
      status: "Completed",
    },

    {
      id: 2,
      name: "TicTacToe",
      image: TicTacToe,
      description: "A simple TicTacToe game made using React JS, HTML, CSS and JavaScript.",
      video: 'https://www.youtube.com/embed/xS5WJvOKDT0?si=Eh4mnfSeWHwLMhDR',
      link: "https://github.com/Angel2001-programmer/Tic-Tac-Toe-ReactJS",
      deployment: "https://angel2001-programmer.github.io/Tic-Tac-Toe-ReactJS/",
      status: "Completed",
    },

    {
      id: 3,
      name: "WeatherApp",
      image: WeatherApp,
      description: "A simple Weather website that takes the input of user finds the weather information depending on what city they have selected. The tech stack was HTML, CSS, ReactJS, JavaScript. The API I used in this web app was REST API.",
      video: 'https://www.youtube.com/embed/ajdc8AB4TmQ?si=5yizcvWNzZm1T2K5',
      link: "https://github.com/Angel2001-programmer/WeatherReactJS",
      deployment: "https://angel2001-programmer.github.io/WeatherReactJS/",
      status: "Completed",
    },

    {
      id: 4,
      name: "NoteApp",
      image: NoteApp,
      description: "A simple NoteApp that takes in users notes by input. You have option to remove notes or add them. The web app was bulit using HTML, CSS, ReactJS and JavaScript. The app stored the inputs of user using Arrays in JavaScript.",
      video: 'https://www.youtube.com/embed/nLL2lYJKJuQ?si=AWlvIX4meBDNyS_T',
      link: "https://github.com/Angel2001-programmer/NoteAppReactJS",
      deployment: "https://angel2001-programmer.github.io/NoteAppReactJS/",
      status: "Completed",
    },
  ];

  let tools = [
    {
      id: 0,
      name: "HTML",
      image: "https://cdn-icons-png.flaticon.com/512/919/919827.png",
    },

    {
      id: 1,
      name: "CSS",
      image: "https://cdn-icons-png.flaticon.com/512/5968/5968242.png",
    },

    {
      id: 2,
      name: "Javascript",
      image: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
    },

    {
      id: 3,
      name: "Wordpress",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/WordPress_blue_logo.svg/2048px-WordPress_blue_logo.svg.png",
    },

    {
      id: 4,
      name: "ReactJS",
      image:
        "https://cdn.iconscout.com/icon/free/png-256/free-react-1-282599.png?f=webp&w=256",
    },

    {
      id: 5,
      name: "Bootstrap",
      image:
        "https://seeklogo.com/images/B/bootstrap-logo-3C30FB2A16-seeklogo.com.png",
    },
  ];
  return (
      <Portfolio 
      data={data} 
      projects={projects} 
      tools={tools}
      />
  );
}

export default App;
