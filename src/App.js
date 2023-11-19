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
      link: "https://github.com/Angel2001-programmer/MG-Music",
      status: "Completed",
    },

    {
      id: 1,
      name: "Calculator",
      image: Calculator,
      video: 'https://www.youtube.com/embed/3QB91QGuhAs?si=lI7tuiil5k6ohkej',
      link: "https://github.com/Angel2001-programmer/calculator-ReactJS",
      status: "Completed",
    },

    {
      id: 2,
      name: "TicTacToe",
      image: TicTacToe,
      video: 'https://www.youtube.com/embed/xS5WJvOKDT0?si=Eh4mnfSeWHwLMhDR',
      link: "https://github.com/Angel2001-programmer/Tic-Tac-Toe-ReactJS",
      status: "Completed",
    },

    {
      id: 3,
      name: "WeatherApp",
      image: WeatherApp,
      video: 'https://www.youtube.com/embed/ajdc8AB4TmQ?si=5yizcvWNzZm1T2K5',
      link: "https://github.com/Angel2001-programmer/WeatherReactJS",
      status: "Completed",
    },

    {
      id: 4,
      name: "NoteApp",
      image: NoteApp,
      video: 'https://www.youtube.com/embed/nLL2lYJKJuQ?si=AWlvIX4meBDNyS_T',
      link: "https://github.com/Angel2001-programmer/NoteAppReactJS",
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
