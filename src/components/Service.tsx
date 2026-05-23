import type React from "react";
import Link from "./Link";
import check from "../img/check.png";

interface IServise {
  src: string;
  title: string;
  descr: string;
  arr: string[];
  price: string;
  deadline: string;
}

const Service: React.FC<IServise> = (props) => {
  const { src, title, descr, arr, price, deadline } = props;

  return (
    <div className="w-[90%] h-full flex flex-col justify-start items-center gap-1.5 p-3 border border-gray-500 rounded-[15px] mt-3">
      <div className="w-full h-[25%] flex flex-col justify-center items-start gap-0.5 border-b border-gray-500 pb-2">
        <div className="w-12 h-12 flex justify-center items-center rounded-[10px] border border-gray-500">
          <img src={src} width="40px" height="40px"></img>
        </div>
        <h2 className="text-[30px] bg-linear-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent font-bold">
          {title}
        </h2>
        <h3 className="text-[16px] text-gray-500 font-medium">{descr}</h3>
      </div>

      <div className="w-full h-[55%] flex justify-center items-start border-b border-gray-500 pb-3 pt-2">
        <ul className="flex flex-col justify-center items-start gap-2">
          {arr.map((e) => (
            <li className="text-white text-[17px] flex justify-start items-center">
              <img
                src={check}
                width="16px"
                height="16px"
                className="mr-2.5"
              ></img>
              <h4>{e}</h4>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full h-[20%] flex flex-col justify-center items-start">
        <h3 className="text-[24px] bg-linear-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent font-bold">{`${price} руб`}</h3>
        <h4 className="text-[18px] text-gray-500 font-medium">{`Срок: ${deadline}`}</h4>
        <Link href="https://t.me/kebablk" value="Заказать" />
      </div>
    </div>
  );
};

export default Service;
