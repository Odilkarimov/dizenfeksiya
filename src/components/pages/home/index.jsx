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
import { Button, Checkbox, Label, TextInput } from "flowbite-react";

const Home = () => {
  return (
    <div className="flex items-center justify-between flex-wrap">
      <div id="#asosiy">
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="mt-[80px]"
        >
          <h1 className="text-[64px] text-[#3375FF] font-bold max-md:text-[45px]">
            Dizenfeksiya
            <br />
            xizmati
          </h1>
          <div className="flex">
            <p>
              Bizning ko'p yillardan beri o'z faoliyatini olib <br /> kelayotgan
              kompaniyamiz Mijozlarimiz <br /> bizdan mamnun
            </p>
            <img className="max-md:hidden" src={Dzn} alt="Dizinfeksiya" />
          </div>
          <button className="text-white bg-blue-700 hover:opacity-70 rounded-[30px] text-sm px-5 py-2.5 text-center w-[200px] mt-[20px]">
            <h3 className="text-[25px]">Bog'lanish</h3>
          </button>
        </div>
      </div>
      <div className="mt-[10px] max-md:hidden">
        <img data-aos="flip-right" className="mt-[100px]" src={Dzimg} alt="" />
      </div>
      <div
        id="biz"
        className="w-full flex flex-col gap-[100px] max-md:mt-[100px]"
      >
        <div>
          <h2 data-aos="flip-up" className="text-[40px] font-bold">
            Avfzalliklarimiz
          </h2>
        </div>
        <div className="border-t">
          <ul className="flex items-center justify-between gap-[50px] max-md:px-[40px] flex-wrap mt-[100px]">
            <li
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              className="max-w-[300px] max-md:p-[30px] max-md:rounded-[20px] max-md:shadow-2xl"
            >
              <img src={Mask} alt="avfzallik rasm" />
              <h2 className="text-[24px] font-bold">Tezda xizmat ko'rsatish</h2>
              <p className="text-[#676D83]">
                ARIZALAR KUNIGA 24 SOAT QABUL QILINADI. AGAR MUAMMO ShOShILINCh
                BO'LSA, BIZ DARHOL KETIShIMIZ MUMKIN. ShU BILAN BIRGA, SIFAT
                MUKAMMAL BO'LIB QOLADI.
              </p>
            </li>
            <li
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              className="max-w-[300px] max-md:p-[30px] max-md:rounded-[20px] max-md:shadow-2xl"
            >
              <img src={Mask2} alt="avfzallik rasm" />
              <h2 className="text-[24px] font-bold">Yetuk mutahasislarimiz</h2>
              <p className="text-[#676D83]">
                BIZNING XODIMLARIMIZ HAMMA NARSAGA G'AMXO'RLIK QILADI:
                HISOB-KITOBLAR, XONANI TAYYoRLASh, QAYTA IShLASh, YaKUNIY
                TOZALASh, VENTILYaTSIYa VA NAZORAT TEKShIRUVI.
              </p>
            </li>
            <li
              data-aos="fade-right"
              data-aos-offset="150"
              data-aos-easing="ease-in-sine"
              className="max-w-[300px] max-md:p-[30px] max-md:rounded-[20px] max-md:shadow-2xl"
            >
              <img src={Mask3} alt="avfzallik rasm" />
              <h2 className="text-[24px] font-bold">Sizga maqul vaqtda</h2>
              <p className="text-[#676D83]">
                SIZ O'ZINGIZ UCHUN MAQUL VA QULAY VAQTNI TANLANG VA BIZGA
                MUROJAT QILING. SIZGA KAFOLATLANGAN VA SAMARALI NATIJANI OLIB
                BORAMIZ
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full mt-10">
        <div className="bg-disinfection flex items-center justify-end py-[40px]">
          <div
            data-aos="fade-down-left"
            className="flex items-start justify-center flex-col px-[30px]"
          >
            <h2 className="text-[40px] font-bold text-white">
              Klapa va zararli <br /> hashorot endi yo'q <br /> deb hisoblang
              !!!
            </h2>
            <p className="text-[16px] text-white">
              Bizning ko'p yillardan beri o'z faoliyatini olib <br /> kelayotgan
              kompaniyamiz Mijozlarimiz bizdan mamnun
            </p>
            <button className="text-white bg-blue-700 hover:opacity-70 rounded-[30px] text-sm px-5 py-2.5 text-center w-[200px] mt-[20px]">
              <h3 className="text-[25px]">Bog'lanish</h3>
            </button>
          </div>
        </div>
      </div>
      <div id="xizmat">
        <div className="mt-[30px]">
          <h2 className="text-[52px] text-bold">Xizmatlar</h2>
          <p className="text-[24px]">
            Biz sizga samarali va kafolatli xizmat taqdi etamiz.
          </p>
        </div>
        <div className="mt-[24px]">
          <ul className="flex gap-[40px] flex-col">
            <li
              data-aos="fade-right"
              className="flex items-start justify-center border-black border rounded-xl gap-[100px] p-[30px] max-md:flex max-md:items-center max-md:justify-center max-md:flex-col"
            >
              <div>
                <img src={Secimg1} alt="" />
              </div>
              <div className="flex flex-col gap-[20px]">
                <h2 className="text-[24px] font-bold">
                  Dezinfeksiya - zararli mikro organizmlarni yo'q qilish
                </h2>
                <p>
                  Har qanday dezinfeksiyaning asosiy vazifasi infeksiyalar va
                  kasalliklarga olib kelishi mumkin bo'lgan xavfli
                  mikroorganizmlarni yo'q qilishdir. Dezinfeksiya choralari
                  bo'sh joyni mog'or, virus, chiriyotgan va bakteriyalardan
                  tozalaydi. Jarayon atrof-muhitni patogen organizmlardan
                  tozalaydi.Agar o'zingizni yomon his qilsangiz, charchoq yoki
                  sababsiz zaiflashsangiz kerak.
                </p>
              </div>
            </li>
            <li
              data-aos="fade-right"
              className="flex items-start justify-center border-black border rounded-xl gap-[100px] p-[30px] max-md:flex max-md:items-center max-md:justify-center max-md:flex-col"
            >
              <div>
                <img src={Secimg2} alt="" width={600} />
              </div>
              <div className="flex flex-col gap-[20px]">
                <h2 className="text-[24px] font-bold">
                  Dezinseksiya - hasharotlarni yo'q qilish
                </h2>
                <p className="">
                  Ko'p odamlar birinchi navbatda 'dezinfestatsiya' so'zini
                  istalmagan qo'shnilaridan - choyshablar, hamamböcekler,
                  chumolilar va boshqa hasharotlardan xalos bo'lish yolini
                  qidirganda duch kelishadi. Ularning o'zlari yo'qimsiz va ular
                  ham ma'lum infektsiya tashuvchilari. Dezinseksiya - bu
                  hasharotlarni: chivinlar, chivinlar, choyshablar, tarakanlar,
                  kuya, shomil, qobiq qo'ng'izlari, yog'och bitlari va boshqa
                  sudralib yuruvchi va uchuvchi jonzotlarni yo'q qilish.
                </p>
              </div>
            </li>
            <li
              data-aos="fade-right"
              className="flex items-start justify-center border-black border rounded-xl gap-[100px] p-[30px] max-md:flex max-md:items-center max-md:justify-center max-md:flex-col"
            >
              <div>
                <img src={Secimg3} alt="" width={600} />
              </div>
              <div className="flex flex-col gap-[20px]">
                <h2 className="text-[24px] font-bold">
                  Deratizatsiya - kemiruvchilarni yo'q qilish.
                </h2>
                <p>
                  Toshkentda deratizatsiya kemiruvchilarni yo'q qilishga
                  qaratilgan kompleks chora-tadbirlarning butun majmuasidir.
                  Ma'lumki, kemiruvchilar juda qattiq jonzotlar bo'lib, ular
                  turli xil xavfli ta'sirlarga dosh beradilar. Shuning uchun
                  ularni yo'q qilish uchun bir qator usullardan foydalanish
                  kerak. Deratizatsiya Toshkent shahrida kemiruvchilar paydo
                  bo'lgan joylarda: ko'p qavatli uylar, omborlar, do'konlar,
                  umumiy ovqatlanish korxonalari amalga oshiriladi.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg_section max-w-[1360px] h-full flex items-center justify-between gap-[100px] p-[50px] mt-[100px] rounded-2xl max-md:flex max-md:flex-col">
        <div className="w-[50%] max-md:w-[100%]">
          <img src={Obrazovaniya} alt="" />
        </div>
        <div className="w-[50%] max-md:w-[100%]">
          <img data-aos="zoom-in-down" src={Icon3d} alt="" />
          <h2
            data-aos="zoom-in-down"
            className="text-white text-[32px] font-bold"
          >
            Bizga ko'p yillardan beri kompaniyamizga ishonch bildirganlar
            talaygina
          </h2>
          <button className="text-white bg-blue-700 hover:opacity-70 rounded-[30px] text-sm px-5 py-2.5 text-center w-[200px] mt-[100px]">
            <h3 className="text-[25px]">Bog'lanish</h3>
          </button>
        </div>
      </div>
      <div id="faq" className="w-full border-t mt-[80px] max-md:mt-[20px]">
        <Accordion className="mt-[50px] max-md:mt-[20px] flex flex-col gap-[30px]">
          <Accordion.Panel>
            <Accordion.Title className="text-[20px]">
              Zararkunandalarni yo'q qilish qanday amalga oshiriladi?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Maxsus asbob-uskunalar yordamida insektitsidlar ayerozolli
                tumanga aylanadi va devor qog'ozi, devorlar va taxta plitalari
                orasidagi yeng kichik bo'shliqlarga, ko'zga ko'rinmas
                hasharotlar uchun potentsial 'yashirish joylari' ga kiradi.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className="text-[20px]">
              Siz foydalanadigan dorilar xavflimi?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Preparatlar odamlar, uy hayvonlari va o'simliklar uchun xavfli
                yemas. Ammo davolanishdan keyin xonani 40 daqiqa davomida
                ventilyatsiya qilish kerak.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className="text-[20px]">
              Menga uyimni davolanishga tayyorlashning qandaydir usuli kerakmi?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Asosan, idish-tovoq va shaxsiy gigiyena vositalarini izolyatsiya
                qilishingiz kerak. Davolash paytida uy hayvonlari ham
                izolyatsiya qilinishi kerak. Mebel yoki maishiy texnikani
                ko'chirishga hojat yo'q.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div>
      <div className="bg_section2 flex px-[30px] items-center justify-around rounded-lg mt-[30px] max-w-[1300px] w-full max-lg:py-[50px]">
        <div
          data-aos="fade-up-right"
          className="bg-[#fff] rounded-2xl max-md:w-full max-w-[450px] w-full px-[20px] py-[20px]"
        >
          <h2 className="text-[30px] font-bold">
            Malumotingizni <br /> qoldiring
          </h2>
          <form className="flex flex-col gap-4 w-full">
            <div className="mt-[30px]">
              <TextInput
                id="email1"
                type="email"
                placeholder="name@flowbite.com"
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
            <Button type="submit" className="text-black">
              Submit
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
