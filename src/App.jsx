import "./App.css";
import UserCard from "./components/UserCard";

const userData = [
  {
    id: 1,
    name: "gnohnoey",
    job: "Programmer",
    imageSrc: "avatar.webp",
  },
  {
    id: 2,
    name: "조연홍",
    job: "스껄",
    imageSrc: "avatar2.webp",
  },
  {
    id: 3,
    name: "가나디",
    job: "작가",
    imageSrc: "avatar3.jpeg",
  },
];

const App = () => {
  return (
    <>
      {userData.map((value, index) => (
        <UserCard
          key={value.id} //unique 값
          name={value.name}
          job={value.job}
          imageSrc={value.imageSrc}
        />
      ))}
    </>
  );
};

export default App;
