import Logo from "../../assets/Union.png";
import Menu from "../../assets/menu.svg";
import Close from "../../assets/close.svg";

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
            <a href="#biz">Biz xaqimizda</a>
          </li>
          <li>
            <a href="#xizmat">Hizmatlar</a>
          </li>
          <li>
            <a href="#faq">Faq</a>
          </li>
        </ul>
      </div>
      <div></div>
      <div>
        <button className="text-white bg-blue-700 hover:opacity-70 rounded-[30px] w-[200px] text-sm px-5 py-2.5 text-center max-md:hidden">
          <h3 className="text-[20px]">Kirish</h3>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
