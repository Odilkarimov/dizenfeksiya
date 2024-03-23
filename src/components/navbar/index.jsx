import Logo from "../../assets/Union.png";
import Menu from "../../assets/menu.svg";
import Close from "../../assets/close.svg";
import Uzbflag from "../../assets/uzbflag.jpg";
import Rusflag from "../../assets/rusflag.png";
import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

const Navbar = () => {
  const changelang = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };
  const { t } = useTranslation();

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <div
          className="flex items-center justify-end px-[10px] cursor-pointer
        "
        >
          <img src={Close} width={40} alt="" />
        </div>
        <div className="flex flex-col items-center justify-center gap-[40px]">
          <ul className="flex flex-col items-center justify-center gap-[20px]">
            <li className="text-[20px]">
              <a href="#asosiy">{t("navbar.navtext1")}</a>
            </li>
            <li className="text-[20px]">
              <a href="#biz">{t("navbar.navtext2")}</a>
            </li>
            <li className="text-[20px]">
              <a href="#xizmat">{t("navbar.navtext3")}</a>
            </li>
            <li className="text-[20px]">
              <a href="#faq">{t("navbar.navtext4")}</a>
            </li>
          </ul>
          <button className="text-white bg-blue-700 hover:opacity-70 rounded-[30px] w-[200px] text-sm px-5 py-2.5 text-center ">
            <h3 className="text-[20px]">Bog'lanish</h3>
          </button>
        </div>
      </List>
    </Box>
  );

  return (
    <>
      <div className="flex items-center justify-between mt-[20px] py-[20px] px-[20px]">
        <div className="flex">
          <img src={Logo} alt="Dizinfeksiya logo" />
          <h3>Dizinfeksiya</h3>
        </div>
        <div>
          <ul className="flex items-center justify-center gap-[20px] max-md:hidden">
            <li className="text-[20px]">
              <a href="#asosiy">{t("navbar.navtext1")}</a>
            </li>
            <li className="text-[20px]">
              <a href="#biz">{t("navbar.navtext2")}</a>
            </li>
            <li className="text-[20px]">
              <a href="#xizmat">{t("navbar.navtext3")}</a>
            </li>
            <li className="text-[20px]">
              <a href="#faq">{t("navbar.navtext4")}</a>
            </li>
          </ul>
        </div>
        <div className="bg-blue-500">
          <select onChange={(e) => changelang(e.target.value)}>
            <option value="uz">uzb</option>
            <option value="ru">rus</option>
          </select>
        </div>
        <div className="hidden max-lg:block">
          <img
            onClick={toggleDrawer("right", true)}
            src={Menu}
            width={40}
            alt=""
          />
        </div>
        <div className="max-lg:hidden">
          <button className="text-white bg-blue-700 hover:opacity-70 rounded-[30px] w-[200px] text-sm px-5 py-2.5 text-center ">
            <h3 className="text-[20px]">{t("button.btn")}</h3>
          </button>
        </div>
      </div>
      <div>
        {["left", "right", "top", "bottom"].map((anchor) => (
          <React.Fragment key={anchor}>
            <SwipeableDrawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              onOpen={toggleDrawer(anchor, true)}
              skdj
            >
              {list(anchor)}
            </SwipeableDrawer>
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default Navbar;
