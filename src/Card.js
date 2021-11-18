const todoTitle = "Hello World"
const todoText = "We are Come Here"
const todoDesc = "Lorem ipsum Dolur Set Amit duminy Text"
const date = new Date();
const todayDate = date.getDate();
const currentMonth = date.getUTCMonth();
const currentYear = date.getFullYear();
const currentMinutes = date.getMinutes();
const currentHours = date.getHours();
const currentSecends = date.getSeconds();

// const HeadingStyle = { 
//   fontSize:"3rem",
//   color:"red",
//   backgroundColor:"purple",
//   padding:"1rem"
// }

function Card(props){
    const {textTitle, textDesc} = props;
 return <div className="Card">
    <h3>{textTitle}</h3>
    <p>{textDesc}</p>
    <p>{todayDate + '/' + currentMonth + '/' + currentYear + "-" + currentHours + ":" + currentMinutes + ":" + currentSecends}</p>
  </div>
}
 export default Card;