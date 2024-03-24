import Dzn from "../../../assets/dizinfeksiya.png";
import Dzimg from "../../../assets/dzimg.png";
import Mask from "../../../assets/Mask.png";
import Mask2 from "../../../assets/Mask2.png";
import Mask3 from "../../../assets/Mask3.png";
import Secimg1 from "../../../assets/dizinfeksiyasec1.png";
import Secimg2 from "../../../assets/dezinyeksiyasec2.png";
import Secimg3 from "../../../assets/derazatsiyasec3.png";
import Obrazovaniya from "../../../assets/obrazovaniye_s.png";
import Icon3d from "../../../assets/3dicons.png";
import Person from "../../../assets/person.png";
import { Accordion } from "flowbite-react";
import { Button, TextInput } from "flowbite-react";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  return (
    <div className="flex items-center justify-between flex-wrap max-md:flex-col">
      <div className="flex gap-[30px]">
        <div id="#asosiy">
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <h1 className="text-[64px] text-[#3375FF] font-bold max-md:text-[45px] max-w-[200px]">
              {t("header.headertext")}
            </h1>
            <div className="flex">
              <p className="flex max-w-[300px] text-[20px]">
                {t("header.headertext2")}
              </p>
              <img className="" src={Dzn} alt="Dizinfeksiya" />
            </div>
            <button className="text-white bg-blue-700 hover:opacity-70 rounded-[30px] text-sm px-5 py-2.5 text-center w-[200px] mt-[10px] ml-[20px]">
              <h3 className="text-[25px] ">{t("button.btn")}</h3>
            </button>
          </div>
        </div>
        <div className="max-md:hidden mb-8">
          <img
            data-aos="flip-right"
            className="mt-[100px]"
            src={Dzimg}
            alt=""
          />
        </div>
      </div>

      <div className="w-full">
        <div
          id="biz"
          className="w-full flex flex-col gap-[100px] max-md:mt-[100px]"
        >
          <div>
            <h2 data-aos="flip-up" className="text-[40px] font-bold">
              {t("header.headertext3")}
            </h2>
          </div>
          <div className="border-t flex"></div>
        </div>
        <div className="bg-disinfection flex items-center justify-end py-[40px]">
          <div
            data-aos="fade-right"
            className="flex items-start justify-center flex-col px-[30px]"
          >
            <h2 className="text-[40px] font-bold text-white max-w-[500px]">
              {t("img.text1")}
            </h2>
            <p className="text-[16px] text-white max-w-[300px]">
              {t("img.text2")}
            </p>
            <button className="text-white bg-blue-700 hover:opacity-70 rounded-[30px] text-sm px-5 py-2.5 text-center w-[200px] mt-[20px]">
              <h3 className="text-[25px]">{t("button.btn")}</h3>
            </button>
          </div>
        </div>
      </div>
      <div id="xizmat">
        <ul className="flex items-center max-lg:justify-between gap-[50px] lg:gap-[150px] max-md:px-[20px] flex-wrap mt-[100px]  w-full">
          <li
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            className="p-[30px] rounded-[20px] lg:max-w-[300px] border shadow-2xl"
          >
            <img src={Mask} alt="avfzallik rasm" />
            <h2 className="text-[24px] font-bold">{t("ul1.textli1")}</h2>
            <p className="text-[#676D83]">{t("ul1.textp1")}</p>
          </li>
          <li
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            className="p-[30px] rounded-[20px] lg:max-w-[300px] border shadow-2xl"
          >
            <img src={Mask2} alt="avfzallik rasm" />
            <h2 className="text-[24px] font-bold">{t("ul1.textli2")}</h2>
            <p className="text-[#676D83]">{t("ul1.textp2")}</p>
          </li>
          <li
            data-aos="fade-right"
            data-aos-offset="150"
            data-aos-easing="ease-in-sine"
            className=" p-[30px] lg:max-w-[300px] lg:h-[358px] rounded-[20px] border shadow-2xl"
          >
            <img src={Mask3} alt="avfzallik rasm" />
            <h2 className="text-[24px] font-bold">{t("ul1.textli3")}</h2>
            <p className="text-[#676D83]">{t("ul1.textp3")}</p>
          </li>
        </ul>
        <div className="mt-[30px]">
          <h2 className="text-[52px] text-bold">{t("ul2.textsec1")}</h2>
          <p className="text-[24px]">{t("ul2.textsec2")}</p>
        </div>
        <div className="mt-[24px]">
          <ul className="flex gap-[40px] flex-col">
            <li
              data-aos="fade-right"
              className="flex items-start justify-center border-black border rounded-xl md:gap-[100px] p-[30px] max-md:flex max-md:items-center max-md:justify-center max-md:flex-col"
            >
              <div>
                <img src={Secimg1} alt="" className="max-md:w-[250px]" />
              </div>
              <div className="flex flex-col gap-[20px]">
                <h2 className="text-[30px] font-bold">{t("ul2.textli1")}</h2>
                <p className="text-[20px]">{t("ul2.textp1")}</p>
              </div>
            </li>
            <li
              data-aos="fade-right"
              className="flex items-start justify-center border-black border rounded-xl gap-[100px] p-[30px] max-md:flex max-md:items-center max-md:justify-center max-md:flex-col"
            >
              <div>
                <img
                  src={Secimg2}
                  alt=""
                  width={600}
                  className="max-md:w-[250px]"
                />
              </div>
              <div className="flex flex-col gap-[20px]">
                <h2 className="text-[30px] font-bold">{t("ul2.textli2")}</h2>
                <p className="text-[20px]">{t("ul2.textp2")}</p>
              </div>
            </li>
            <li
              data-aos="fade-right"
              className="flex items-start justify-center border-black border rounded-xl gap-[100px] p-[30px] max-md:flex max-md:items-center max-md:justify-center max-md:flex-col"
            >
              <div>
                <img
                  src={Secimg3}
                  alt=""
                  width={600}
                  className="max-md:w-[250px]"
                />
              </div>
              <div className="flex flex-col gap-[20px]">
                <h2 className="text-[30px] font-bold">{t("ul2.textli3")}</h2>
                <p className="text-[20px]">{t("ul2.textp3")}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg_section max-w-[1300px]  w-full  h-full flex items-center gap-[100px] p-[50px] mt-[100px] rounded-2xl max-md:flex max-md:flex-col">
        <div className="w-[50%] max-md:w-[100%]">
          <img src={Obrazovaniya} alt="" />
        </div>
        <div className="w-[50%] max-md:w-[100%]">
          <img data-aos="zoom-in-down" src={Icon3d} alt="" />
          <h2
            data-aos="zoom-in-down"
            className="text-white text-[32px] font-bold max-w-[400px]"
          >
            {t("img.text3")}
          </h2>
          <button className="text-white bg-blue-700 hover:opacity-70 rounded-[30px] text-sm px-5 py-2.5 text-center w-[200px] mt-[100px]">
            <h3 className="text-[25px]">{t("button.btn")}</h3>
          </button>
        </div>
      </div>
      <div id="faq" className="w-full border-t mt-[80px] max-md:mt-[20px]">
        <Accordion className="mt-[50px] max-md:mt-[20px] flex flex-col gap-[25px] py-[40px] px-[20px]">
          <Accordion.Panel>
            <Accordion.Title className="text-[22px] text-black h-[80px] rounded-lg">
              {t("accordion.title1")}
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400 text-[20px]">
                {t("accordion.content1")}
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className="text-[22px] text-black h-[80px] rounded-lg">
              {t("accordion.title2")}
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400 text-[20px]">
                {t("accordion.content2")}
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className="text-[22px] text-black h-[80px] rounded-lg">
              {t("accordion.title3")}
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400 text-[20px]">
                {t("accordion.content3")}
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div>
      <div className="bg_section2 flex px-[30px] items-center justify-around rounded-lg mt-[30px] max-w-[1400px] w-full max-lg:py-[50px]">
        <div
          data-aos="fade-up-right"
          className="bg-[#fff] rounded-2xl max-md:w-full max-w-[450px] w-full px-[20px] py-[20px]"
        >
          <h2 className="text-[30px] font-bold">{t("accordion.content4")}</h2>
          <form className="flex flex-col gap-4 w-full">
            <div className="mt-[30px]">
              <TextInput
                id="fullName"
                type="fullName"
                placeholder={t("input.text")}
                required
              />
            </div>
            <div>
              <TextInput
                id="number"
                type="number"
                required
                placeholder="+998"
              />
            </div>
            <Button type="submit" className="bg-blue-500 hover:bg-blue-300">
              {t("button.btn2")}
            </Button>
          </form>
        </div>
        <div className="max-lg:hidden">
          <img src={Person} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
