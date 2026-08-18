import Container from "./components/Container";
import Logo from "./components/Logo";
import Menu from "./components/Menu";
import { useEffect, useState, useRef } from "react";

import "./styles/theme.css";
import "./styles/global.css";
import CountDown from "./components/CountDown";
import DefaultInput from "./components/DefaultInput";
import Cycles from "./components/Cycles";
import DefaultButton from "./components/DefaultButton";
import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import Footer from "./components/Footer";
import Heading from "./components/Heading";

function App() {
  const [number, setNumber] = useState(0);

  const handleClick = () => {
    setNumber((prevState) => prevState + 1);
  };

  return (
    <>
      <Container>
        <Heading>Número: {number}</Heading>
        <button onClick={handleClick}>Aumenta</button>
      </Container>

      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form action="" className="form">
          <div className="formRow">
            <DefaultInput
              type="text"
              id="meuinput"
              labelText={"Número: " + number.toString()}
              placeholder="Digite algo"
              disabled
            />
          </div>
          <div className="formRow">
            <Cycles />
          </div>

          <div className="formRow">
            <DefaultButton icon={<PlayCircleIcon />} />
            <DefaultButton icon={<StopCircleIcon />} color="red" />
          </div>
        </form>
      </Container>

      <Container>
        <Footer />
      </Container>
    </>
  );
}

export default App;
