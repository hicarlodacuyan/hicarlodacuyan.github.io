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
      "A full stack movie app that allow users to browse and search for movies and tv shows, as well as save their favorites if they are logged-in. The app also provide users with movie recommendations based on what is trending and popular worldwide.",
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
      "A simple shopping app with API fetching and add to cart page functionality. This app enables users to search and shop for products that they like. The add to cart page allows users to add items to their shopping cart and automatically compute the total.",
    photoURL: ShoppingCart,
    techStack: [
      { name: "React", color: "#61DBFB" },
      { name: "Tailwind", color: "#EC4899" },
      { name: "API", color: "#84cc16" },
    ],
    repo: "https://github.com/hicarlodacuyan/shopping-cart",
    live: "https://hicarlodacuyan.github.io/shopping-cart/",
  },
  {
    id: 3,
    name: "CV Project",
    description:
      "A resume builder app  that help users create a professional looking resume in minutes. The built-in template and design is minimalist, and you can simply input your details to automatically build your resume. Once you're done, you can print your resume directly from the app.",
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
      "A battleship game with AI functionality. The app features a modern and simple design and utilizes Object Oriented Programming to build the logic. It was a good practice to strengthen my vanilla JavaScript knowledge.",
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
      "This simple todo app has a modern looking design and helps you keep track of your personal tasks. You can add, edit and remove tasks, and mark them as complete. It utilizes your browser's local storage to save your tasks.",
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
      "My Tic Tac Toe project is a modern looking implementation of the classic game. It features a sleek and stylish design with a simple user interface. The game can be played against a computer or another player (WIP). It also keeps track of your win/loss record, so you can see how you're doing over time.",
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
