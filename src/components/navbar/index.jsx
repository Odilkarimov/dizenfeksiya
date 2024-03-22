import Logo from "../../assets/Union.png";
import Menu from "../../assets/menu.svg";
import Close from "../../assets/close.svg";
import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

const Navbar = () => {
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
        <div>
          <ul className="flex flex-col items-center justify-center gap-[20px] max-md:hidden">
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
        <div>
          <img
            onClick={toggleDrawer("right", true)}
            src={Menu}
            width={40}
            alt=""
          />
        </div>
        <div className="max-lg:hidden">
          <button className="text-white bg-blue-700 hover:opacity-70 rounded-[30px] w-[200px] text-sm px-5 py-2.5 text-center ">
            <h3 className="text-[20px]">Bog'lanish</h3>
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
