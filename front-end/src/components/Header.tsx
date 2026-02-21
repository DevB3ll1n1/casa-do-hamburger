import { Link, useLocation } from "react-router";
import { UserContext } from "../contexts/UserContext";
import { useContext, useEffect } from "react";
import { LogOut, ShoppingCart, Box, LayoutDashboard, Plus } from "lucide-react";

const Header = () => {
  const { user, setUser } = useContext(UserContext);
  const location = useLocation();

  console.log(location.pathname);

  const handleAuthUser = async () => {
    try {
      const response = await fetch("http://localhost:3000/me", {
        credentials: "include",
      });

      if (response.status !== 200) {
        console.log("Deu ruim");
        return;
      }

      const data = await response.json();
      console.log(data);
      setUser(data);
    } catch (error) {
      console.log(error);
      return;
    }
  };

  const handleLogout = async () => {
    const response = await fetch("http://localhost:3000/logout", {
      method: "POST",
      credentials: "include",
    });

    console.log(response);

    if (!response.ok) {
      console.log("Deu ruim no logout");
      return;
    }

    setUser(null);
  };

  useEffect(() => {
    handleAuthUser();
  }, []);

  const getNaveItemClass = (path: string) => {
    const baseClass = `h-[35px] w-[35px] rounded-md border-1 flex justify-center items-center cursor-pointer`;

    if (location.pathname === path) {
      return `${baseClass} text-[#161410] bg-[#F2DAAC]`;
    } else {
      return baseClass;
    }
  };

  return (
    <div className="bg-[#161410] ">
      <div className="w-full md:w-[737px] p-3 md:p-0 mx-auto flex items-center justify-between">
        <Link to="/">
          <img src="./logo.png" alt="" />
        </Link>

        {user ? (
          <div className="text-white flex gap-8 items-center flex  ">
            {user.admin && (
              <div className="text-[#F2DAAC] flex gap-2 items-center ">
                <Link to="/">
                  <div className={getNaveItemClass("/")}>
                    <Box size={18} className="cursor-pointer" />
                  </div>
                </Link>
                <Link to="/pedidos">
                  <div className={getNaveItemClass("/pedidos")}>
                    <LayoutDashboard size={18} className="cursor-pointer" />
                  </div>
                </Link>
                <Link to="/">
                  <div className={getNaveItemClass("/novo-pedido")}>
                    <Plus size={18} className="cursor-pointer" />
                  </div>
                </Link>
              </div>
            )}
            <div className="relative cursor-pointer">
              <ShoppingCart size={18} />
              <p className="absolute -top-4 -right-4 bg-[#F2DAAC] p-1 rounded-full w-5 h-5 text-[#161410] flex justify-center items-center">
                1
              </p>
            </div>

            <div className=" flex  gap-2 items-center ">
              <p> {user?.name}</p>
              <LogOut
                size={18}
                className="cursor-pointer"
                onClick={() => handleLogout()}
              />
            </div>
          </div>
        ) : (
          <Link to="/login">
            <div className="bg-[#F2DAAC] w-[130px] h-[35px] flex items-center justify-center rounded-sm cursor-pointer">
              Entrar
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
