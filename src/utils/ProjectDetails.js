import EntertainmentWebApp from "../assets/entertainment-webapp.png";
import ShoppingCart from "../assets/shopping-cart.jpg";
import CVBuilder from "../assets/cv-builder.jpg";
import Battleship from "../assets/battleship.jpg";
import TodoApp from "../assets/todo-app.jpg";
import TicTacToe from "../assets/tic-tac-toe.jpg";

const projects = [
  {
    id: 1,
    name: "Entertainment Webapp",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    photoURL: EntertainmentWebApp,
    techStack: [
      { name: "React", color: "#61DBFB" },
      { name: "Firebase", color: "#FDE047" },
      { name: "React Query", color: "#F97316" },
    ],
    repo: "https://github.com/hicarlodacuyan/entertainment-webapp",
    live: "https://hicarlodacuyan.github.io/entertainment-webapp",
  },
  {
    id: 2,
    name: "Shopping Cart",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    photoURL: ShoppingCart,
    techStack: [
      { name: "React", color: "#61DBFB" },
      { name: "Tailwind", color: "#EC4899" },
      { name: "API", color: "#374151" },
    ],
    repo: "https://github.com/hicarlodacuyan/shopping-cart",
    live: "https://hicarlodacuyan.github.io/shopping-cart/",
  },
  {
    id: 3,
    name: "CV Project",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    photoURL: CVBuilder,
    techStack: [
      { name: "React", color: "#61DBFB" },
      { name: "Tailwind", color: "#EC4899" },
    ],
    repo: "https://github.com/hicarlodacuyan/cv-project",
    live: "https://hicarlodacuyan.github.io/cv-project",
  },
  {
    id: 4,
    name: "Battleship",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    photoURL: Battleship,
    techStack: [
      { name: "HTML", color: "#61DBFB" },
      { name: "CSS", color: "#EC4899" },
      { name: "JavaScript", color: "#FDE047" },
    ],
    repo: "https://github.com/hicarlodacuyan/battleship",
    live: "https://hicarlodacuyan.github.io/battleship",
  },
  {
    id: 5,
    name: "Todo App",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    photoURL: TodoApp,
    techStack: [
      { name: "HTML", color: "#61DBFB" },
      { name: "CSS", color: "#EC4899" },
      { name: "JavaScript", color: "#FDE047" },
    ],
    repo: "https://github.com/hicarlodacuyan/todo-app",
    live: "https://hicarlodacuyan.github.io/todo-app",
  },
  {
    id: 6,
    name: "Tic Tac Toe",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    photoURL: TicTacToe,
    techStack: [
      { name: "HTML", color: "#61DBFB" },
      { name: "CSS", color: "#EC4899" },
      { name: "JavaScript", color: "#FDE047" },
    ],
    repo: "https://github.com/hicarlodacuyan/tic-tac-toe",
    live: "https://hicarlodacuyan.github.io/tic-tac-toe",
  },
];

export default projects;
