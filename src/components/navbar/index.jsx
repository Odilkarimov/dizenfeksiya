import Logo from "../../assets/Union.png";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between mt-[20px] py-[20px]">
      <div className="flex">
        <img src={Logo} alt="Dizinfeksiya logo" />
        <h3>Dizinfeksiya</h3>
      </div>
      <div>
        <ul className="flex items-center justify-center gap-[20px] max-md:hidden">
          <li>
            <a href="#asosiy">Asosiy</a>
          </li>
          <li>
            <a href="">Biz xaqimizda</a>
          </li>
          <li>
            <a href="">Hizmatlar</a>
          </li>
          <li>
            <a href="">Faq</a>
          </li>
        </ul>
      </div>
      <button className="text-white bg-blue-700 hover:opacity-70 rounded-[30px] w-[200px] text-sm px-5 py-2.5 text-center">
        <h3 className="text-[20px]">Aloqa</h3>
      </button>
    </div>
  );
};

export default Navbar;
