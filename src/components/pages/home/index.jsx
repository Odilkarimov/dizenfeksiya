import Dzn from "../../../assets/dizinfeksiya.png";
import Dzimg from "../../../assets/dzimg.png";
import Mask from "../../../assets/Mask.png";
import Mask2 from "../../../assets/Mask2.png";
import Mask3 from "../../../assets/Mask3.png";

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
            <img src={Dzn} alt="Dizinfeksiya" />
          </div>
          <button className="text-white bg-blue-700 hover:opacity-70 rounded-[30px] text-sm px-5 py-2.5 text-center w-[200px]">
            <h3 className="text-[25px]">Aloqa</h3>
          </button>
        </div>
      </div>
      <div className="mt-[10px] ">
        <img data-aos="flip-right" className="mt-[100px]" src={Dzimg} alt="" />
      </div>
      <div className="w-full flex flex-col gap-[100px]">
        <div>
          <h2 className="text-[40px]">Avfzalliklarimiz</h2>
        </div>
        <div>
          <ul className="flex items-center justify-between gap-[50px] px-[40px] flex-wrap">
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
              <h2 className="text-[24px] font-bold">Yetuk mutahasislaimiz</h2>
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
    </div>
  );
};

export default Home;
