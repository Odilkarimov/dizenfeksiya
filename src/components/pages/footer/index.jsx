import Logo from "../../../assets/Union.png";
import Locat from "../../../assets/locatsiya.svg";
import Tel from "../../../assets/telefon.svg";

const Footer = () => {
  return (
    <div className="container-box border-t border-black">
      <div className="flex items-center justify-around py-[70px] max-md:flex-col max-md:gap-[50px]">
        <div className="flex items-center justify-center gap-[10px]">
          <img src={Logo} alt="Icon" />
          <h2 className="text-[30px] font-bold">Dizinfeksiya</h2>
        </div>
        <div className="flex flex-col items-start  justify-center gap-[20px]">
          <div className="flex items-center justify-center gap-[20px] cursor-pointer">
            <img src={Locat} alt="locatsiya icon" />
            <h2>O'zbekiston, Toshkent sh</h2>
            <img
              className="w-[40px] transform rotate-180"
              src="https://cdn.icon-icons.com/icons2/1674/PNG/512/diagonalarrowleftdown_110984.png"
              alt=""
            />
          </div>
          <div className="flex items-center justify-center gap-[20px] cursor-pointer">
            <img src={Tel} alt="Tel icon" />
            <h2>+998991199933</h2>
            <img
              className="w-[40px] transform rotate-180"
              src="https://cdn.icon-icons.com/icons2/1674/PNG/512/diagonalarrowleftdown_110984.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
