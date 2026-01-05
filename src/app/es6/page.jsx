"use client";
import { Scripts } from "@/components/Scripts";
import { App } from "../../components/App";
// export default function Home() {
//   return <ColorList />;
// }
// const ColorList = () => {
//   const colors = ["Red", "Black", "Blue"];
//   return (
//     <ul>
//       {colors.map((color) => (
//         <li>{color}</li>
//       ))}
//     </ul>
//   );
// };
// export default function Home() {
//   const number = 5;
//   return <Double number={number} />;
// }
// const Double = ({ number }) => {
//   return <span>{number * 2} </span>;
// };

// export default function Home() {
//   return <Numbered />;
// }

// const Numbered = () => {
//   const drinks = ["Coffee", "Tea", "Water"];
//   return (
//     <ol>
//       {drinks.map((drink, index) => (
//         <li key={index}>{drink}</li>
//       ))}
//     </ol>
//   );
// };

// export default function Home() {
//   return (<Status isLoggedIn={true} />), (<Status isLoggedIn={false} />);
// }

// const Status = ({ isLoggedIn }) => (
//   <div>{isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>}</div>
// );

// export default function Home() {
//   return (
//     <div>
//       <Status stock={0} />
//       <Button />
//       <App />
//       <Scripts />
//     </div>
//   );
// }

export default function Home() {
  return <Status stock={0} />;
}
const Status = ({ stock }) => (
  <div className="bg-amber-400">{stock > 0 ? "in stock" : "out of stock"}</div>
);
