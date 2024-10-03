import logo from '../assets/Andreylogo.png'; // Ajuste o caminho conforme necessário
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="text-neutral-600 flex justify-between w-full max-w-screen-xl items-center p-6" >
     <div className='flex items-center gap-14'> <img src={logo} alt="Logo" /> 
      <nav>
        <ul className="flex uppercase gap-6">
          <li className="mr-4">
            <a href="#">Projetos</a>
          </li>
          <li className="mr-4">
            <a href="#">Sobre mim</a>
          </li>
          <li>
            <a href="#">Serviços</a>
          </li>
        </ul>
      </nav>
      </div>
      <ul className="flex gap-4">
        <li className="mr-4">
          <a href="#">
            <FaLinkedin size={40} />
          </a>
        </li>
        <li>
          <a href="#">
            <FaGithub size={40} />
          </a>
        </li>
      </ul>
    </header>
  );
}
