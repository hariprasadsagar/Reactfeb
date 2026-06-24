import Home from "./Home";
import About from "./About";
import Homeclass from "./Classcomponents/Homeclass";
import Contactclass from "./Classcomponents/Contactclass";
import Greating from "./Greating";

function App() {
  let name = "Hari";
  let age = 25;
  return (
    <>
      <h1>Hello Everyone</h1>
      <h3>Welcome to React</h3>
      <Home />
      <Homeclass/>
      <About />
      <Contactclass/>
      <Greating fn={name} age={age}/>

    </>
  );
}
export default App;