import gravitationalBeep from "../assets/audios/gravitational_beep.mp3";

const loadBeep = () => {
  const audio = new Audio(gravitationalBeep);
  audio.load();

  return () => {
    audio.currentTime = 0;
    audio.play().catch((error) => console.log("Erro ao tocar audio", error));
  };
};

export default loadBeep;
