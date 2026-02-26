// import { Link } from "react-router";

import { useEffect, useState } from "react";
import Product from "../components/Product";
import type { ProductType } from "../types/Product";

const Home = () => {
  const [category, setCategory] = useState("Hamburger");
  const [products, setProducts] = useState<ProductType[]>([]);

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

  const getProducts = async () => {
    try {
      const response = await fetch("http://localhost:3000/products");
      const data = await response.json();
      setProducts(data);
      //  console.log(data);
    } catch (error) {
      console.log(error);
      return;
    }
  };

  const filteredProducts = products.filter((product) => {
    return product.category === category;
  });

  console.log(filteredProducts);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="text-white w-full md:w-[737px] md:px-0 mx-auto px-3 ">
      <div className="flex gap-2 my-1 md:my-3">
        <div
          className={getCategoryClass("Hamburger")}
          onClick={() => handleChangeCategory("Hamburger")}
        >
          Hamburger
        </div>
        <div
          className={getCategoryClass("Bebida")}
          onClick={() => handleChangeCategory("Bebida")}
        >
          Bebidas
        </div>
        <div
          className={getCategoryClass("Porção")}
          onClick={() => handleChangeCategory("Porção")}
        >
          Porções
        </div>
      </div>

      <p className="uppercase text-[#F2DAAC] mb-2 font-bold text-sm md:text-lg mt-2">
        {category}
      </p>
      <div className="flex flex-col md:gap-3 gap-2 ">
        {filteredProducts.map((product) => (
          <Product
            id={product.id}
            description={product.description}
            imageUrl={product.imageUrl}
            name={product.name}
            price={product.price}
            category={product.category}
            key={product.id}
          />
        ))}
        {filteredProducts.length === 0 && (
          <p className="text-sm text-[#848484]">Nenhum produto encontrado</p>
        )}
      </div>
    </div>
  );
};

export default Home;
