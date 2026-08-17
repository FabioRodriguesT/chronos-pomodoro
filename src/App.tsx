import Container from "./components/Container";
import Logo from "./components/Logo";
import Menu from "./components/Menu";

import "./styles/theme.css";
import "./styles/global.css";
import CountDown from "./components/CountDown";
import DefaultInput from "./components/DefaultInput";

function App() {
  return (
    <>
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
              labelText="task"
              placeholder="Digite algo"
              disabled
            />
          </div>
        </form>
      </Container>
    </>
  );
}

export default App;
