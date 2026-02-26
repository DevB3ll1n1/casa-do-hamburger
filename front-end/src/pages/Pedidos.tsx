import { useState } from "react";
import CardPedido from "../components/CardPedido";
const Pedidos = () => {
  const [category, setCategory] = useState("Pendente");

  const handleChangeCategory = (newCategory: string) => {
    setCategory(newCategory);
  };

  const getCategoryClass = (categoryName: string) => {
    const elemenentoSelecionado =
      "w-24 md:w-32 h-7 border-1 border-[#F2DAAC] md:h-9 cursor-pointer rounded-md text-[#161410] text-sm font-bold md:text-sm bg-[#F2DAAC] flex justify-center items-center ";

    const elementoNaoSelecionado =
      "w-24 md:w-32 h-7 border-1 border-[#F2DAAC] md:h-9 cursor-pointer rounded-md text-[#F2DAAC] text-sm font-bold md:text-sm bg-[#161410] hover:bg-[#F2DAAC] hover:text-[#161410] flex justify-center items-center";

    if (category === categoryName) {
      return elemenentoSelecionado;
    } else {
      return elementoNaoSelecionado;
    }
  };

  return (
    <div className="text-white w-full md:w-[737px] md:px-0 mx-auto px-3 ">
      {/* CATEGORIAS */}
      <div className="flex gap-2 mt-1 mb-3 md:my-3">
        <div
          className={getCategoryClass("Pendente")}
          onClick={() => handleChangeCategory("Pendente")}
        >
          Pendente
        </div>
        <div
          className={getCategoryClass("Retirado")}
          onClick={() => handleChangeCategory("Retirado")}
        >
          Retirado
        </div>
        <div
          className={getCategoryClass("Cancelado")}
          onClick={() => handleChangeCategory("Cancelado")}
        >
          Cancelado
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <CardPedido
          id={2}
          name="Bellini"
          date="25/02/2026"
          oderTime="21:00"
          deliveredTime="21:15"
          total={124.75}
        />
      </div>
    </div>
  );
};

export default Pedidos;
