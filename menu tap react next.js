import React, { useState } from "react";

export interface menunametap {
  id?: string;
  tap1?: string;
  tap2?: string;
  tap3?: string;
  tap4?: string;
  content1?: any;
  content2?: any;
  content3?: any;
  content4?: any;
}

const MenuTaps = (props: menunametap) => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div id={props.id} className="relative">
      <div className="flex justify-between ">
        <button
          className={`py-[12px] w-[275px] inter-button border-solid border-b-[1px] uppercase hover:text-primary-redmaroon02 hover:border-b-primary-redmaroon02  ${
            activeTab === 1
              ? "text-primary-redmaroon02 border-b-primary-redmaroon02"
              : "text-primary-redmaroon03 border-b-primary-redmaroon03"
          }`}
          onClick={() => setActiveTab(1)}
        >
          {props.tap1}
        </button>
        <button
          className={`py-[12px] w-[275px] inter-button-2  border-solid border-b-[1px] uppercase hover:text-primary-redmaroon02 hover:border-b-primary-redmaroon02 ${
            activeTab === 2
              ? " text-primary-redmaroon02 border-b-primary-redmaroon02"
              : "text-primary-redmaroon03 border-b-primary-redmaroon03"
          }`}
          onClick={() => setActiveTab(2)}
        >
          {props.tap2}
        </button>
        <button
          className={`py-[12px] w-[275px] inter-button-2  border-solid border-b-[1px] uppercase hover:text-primary-redmaroon02 hover:border-b-primary-redmaroon02 ${
            activeTab === 3
              ? " text-primary-redmaroon02 border-b-primary-redmaroon02"
              : "text-primary-redmaroon03 border-b-primary-redmaroon03"
          }`}
          onClick={() => setActiveTab(3)}
        >
          {props.tap3}
        </button>
        <button
          className={`py-[12px] w-[275px] inter-button-2 border-solid border-b-[1px] uppercase hover:text-primary-redmaroon02 hover:border-b-primary-redmaroon02 ${
            activeTab === 4
              ? " text-primary-redmaroon02 border-b-primary-redmaroon02"
              : "text-primary-redmaroon03 border-b-primary-redmaroon03"
          }`}
          onClick={() => setActiveTab(4)}
        >
          {props.tap4}
        </button>
      </div>
      <div>
        {activeTab === 1 && <div>{props.content1}</div>}
        {activeTab === 2 && <div>{props.content2}</div>}
        {activeTab === 3 && <div>{props.content3}</div>}
        {activeTab === 4 && <div>{props.content4}</div>}
      </div>
    </div>
  );
};

export default MenuTaps;
