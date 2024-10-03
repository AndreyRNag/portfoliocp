import CSS from "../assets/CSS.png";
import Figma from "../assets/Figma.png";
import Html from "../assets/Html.png";
import Ilustrator from "../assets/Github.png";
export default function Sobremim() {
  return (
    <section className="flex items-center relative flex-col gap-20">
      <h1 className="uppercase gradienttext font-semibold text-4xl mt-24 text-center">
        sobre mim
      </h1>

      <div className="grid grid-cols-5 px-28 gap-12">
        <img
          src="https://picsum.photos/200/200"
          className="w-72 aspect-square rounded"
          alt=""
        />
        <div className="col-span-4 flex flex-col gap-10">
          <p className=" text-lg  text-[#a4a4a4]">
            Sou Andrey Nagata programador de front-end e apaixonado por UX.
            Adoro criar interfaces intuitivas e funcionais, sempre priorizando a
            experiência do usuário. Estou sempre em busca de novas tecnologias e
            inovações que possam aprimorar meus projetos, combinando habilidades
            técnicas com uma sensibilidade estética que faz a diferença.
          </p>
          <div className="grid grid-cols-4">
          
          </div>
        </div>
      </div>
    </section>
  );
}
