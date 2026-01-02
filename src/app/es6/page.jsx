"use client";
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

export default function Home() {
  return <Numbered />;
}

const Numbered = () => {
  const drinks = ["Coffee", "Tea", "Water"];
  return (
    <ol>
      {drinks.map((drink, index) => (
        <li key={index}>{drink}</li>
      ))}
    </ol>
  );
};
