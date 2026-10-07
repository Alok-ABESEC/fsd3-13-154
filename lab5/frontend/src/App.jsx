const Hello = () => {
  return <h2>welcome to react 19</h2>;
};
const book = () => {
  return(<>
  <h1>Book Title</h1>
  <h2>Book Author</h2>
  <h3>Book Price:799</h3>
  </>)
};



export default function App() {

  return (<>
  <h1 className="text-4xl font-bold text-center bg-red-500 text-gray-300">Hello Alok Yadav</h1>
  <Hello />
  <book />
  </>);
};

