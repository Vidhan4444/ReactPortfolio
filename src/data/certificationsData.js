import Reactreducx from '../assets/images/certificates/reactRedux.png';
import Backend from '../assets/images/certificates/Backend.png';
import NPTELAI from '../assets/images/certificates/AI-NPTEL.png';
import HtmlFundamentals from '../assets/images/certificates/html-greatlearning.png';
import JAVAPGMMING from '../assets/images/certificates/Javapggming.png';
import OOPS from '../assets/images/certificates/OOPS-greatlearning.png';

const certificationsData = [
  {
    id: 1,
    title: "React and Redux",
    issuer: "Knowledge Gate",
    image: Reactreducx,
    description:
      "Learned core React concepts including components, hooks, and state management, along with Redux for global state handling and predictable data flow in applications.",
  },
  {
    id: 2,
    title: "Backend Development (Node.js, Express & MongoDB)",
    issuer: "Knowledge Gate",
    image: Backend,
    description:
      "Learned backend fundamentals including building REST APIs with Node.js and Express, handling requests and responses, and working with MongoDB for data storage.",
  },
  {
  id: 3,
  title: "Artificial Intelligence",
  issuer: "NPTEL",
  image: NPTELAI,
  description:
    "Covered foundational concepts of Artificial Intelligence including problem-solving, search techniques, basic machine learning concepts, and an introduction to intelligent agents.",
},
{
  id: 4,
  title: "HTML Fundamentals",
  issuer: "Great Learning",
  image: HtmlFundamentals,
  description:
    "Learned the fundamentals of HTML including semantic elements, forms, tables, and structuring web pages using best practices.",
}
,{
  id: 5,
  title: "Java Programming",
  issuer: "Great Learning",
  image: JAVAPGMMING,
  description:
    "Learned core Java concepts including syntax, control structures, object-oriented basics, and writing simple console-based programs.",
},{
  id: 6,
  title: "Object-Oriented Programming (OOPS)",
  issuer: "Great Learning",
  image: OOPS,
  description:
    "Learned object-oriented programming principles such as classes, objects, inheritance, polymorphism, encapsulation, and abstraction.",
}



];

export default certificationsData;
