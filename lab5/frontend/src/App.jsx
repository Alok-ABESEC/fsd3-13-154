function You(prop) {
  return (
    <>
      <h1>{prop.name}</h1>
      <h2>{prop.email}</h2>
    </>
  );
}

const Friend = (props) => {
  return (
    <>
      <h1>{props.name}</h1>
      <h2>{props.email}</h2>
      <h3>{props.age}</h3>
    </>
  );
};

export default function App() {
  return (
    <>
      <h1>My Self</h1>

      <You
        name="Aman Kumar"
        email="7129aman@gmail.com"
      />

      <h2>My friends are:</h2>

      <Friend
        name="Amit Sharma"
        email="amit@gmail.com"
        age="32"
      />

      <Friend
        name="Manish Sharma"
        email="manish@gmail.com"
        age="42"
      />

      <Friend
        name="Mohan Singh"
        email="mohan@gmail.com"
        age="30"
      />
    </>
  );
}