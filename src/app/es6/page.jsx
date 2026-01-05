"use client";
// import { Scripts } from "@/components/Scripts";
// import { App } from "../../components/App";
// import { URL } from "next/dist/compiled/@edge-runtime/primitives/url";
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

// export default function Home() {
//   return <Status stock={0} />;
// }
// const Status = ({ stock }) => (
//   <div className="bg-amber-400">{stock > 0 ? "in stock" : "out of stock"}</div>
// );

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen bg-pink-300 ">
      <BirthdayList />
    </div>
  );
}

const Birthday = [
  {
    id: 1,
    name: "Bold",
    age: 15,
    image: "https://avatar.iran.liara.run/public",
  },

  {
    id: 2,
    name: "Bat",
    age: 15212,
    image: "https://avatar.iran.liara.run/public",
  },

  {
    id: 3,
    name: "chimeg",
    age: 1526,
    image: "",
  },

  {
    id: 4,
    name: "dddddd",
    age: 131,
    image: "",
  },

  {
    id: 5,
    name: "Boldssssssssss",
    age: 20,
    image: "",
  },
];

const BirthdayList = () => {
  return (
    <div className=" bg-white p-10">
      <h1 className="font-semibold mb-8 text-3xl text-black">
        {Birthday.length} birthdays today
      </h1>
      <div className="flex flex-col gap-4">
        {Birthday.map(({ id, age, name, image }) => (
          <BirthdayListItem key={id} name={name} age={age} image={image} />
        ))}
      </div>
    </div>
  );
};

const BirthdayListItem = () => {
  return (
    <div className="flex gap-4 items-center w-134">
      <img
        className="w-20 h-20 rounded-full"
        src={Birthday.image}
        alt="profile"
      />
      <div>
        <h2 className="text-2xl font-bold">{Birthday.name}</h2>
        <p className="text-gray-500">{Birthday.age}</p>
      </div>
    </div>
  );
};
