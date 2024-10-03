import { FaLinkedin,FaGithub } from "react-icons/fa";
import logo from "./assets/Andreylogo.png";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Sobremim from "./components/Sobremim";
export default function App() {
  return (
    <main className=" flex-col flex items-center w-full">
    <Header/>
      <Banner/>
      <Sobremim/>
    </main>
  );
}
