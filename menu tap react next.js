import React, { useState } from "react";
import RestaurantandcafeTap from "./restaurant.and.cafe";

const MenuTabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="relative">
      <div className="flex justify-between ">
        <button
          className={`py-[12px] w-[275px] inter-button border-solid border-b-[1px] uppercase hover:text-primary-redmaroon02 hover:border-b-primary-redmaroon02  ${
            activeTab === 1
              ? "text-primary-redmaroon02 border-b-primary-redmaroon02"
              : "text-primary-redmaroon03 border-b-primary-redmaroon03"
          }`}
          onClick={() => setActiveTab(1)}
        >
          restaurant & cafe
        </button>
        <button
          className={`py-[12px] w-[275px] inter-button-2  border-solid border-b-[1px] uppercase hover:text-primary-redmaroon02 hover:border-b-primary-redmaroon02 ${
            activeTab === 2
              ? " text-primary-redmaroon02 border-b-primary-redmaroon02"
              : "text-primary-redmaroon03 border-b-primary-redmaroon03"
          }`}
          onClick={() => setActiveTab(2)}
        >
          spa & massage
        </button>
        <button
          className={`py-[12px] w-[275px] inter-button-2  border-solid border-b-[1px] uppercase hover:text-primary-redmaroon02 hover:border-b-primary-redmaroon02 ${
            activeTab === 3
              ? " text-primary-redmaroon02 border-b-primary-redmaroon02"
              : "text-primary-redmaroon03 border-b-primary-redmaroon03"
          }`}
          onClick={() => setActiveTab(3)}
        >
          swimming pool
        </button>
        <button
          className={`py-[12px] w-[275px] inter-button-2 border-solid border-b-[1px] uppercase hover:text-primary-redmaroon02 hover:border-b-primary-redmaroon02 ${
            activeTab === 4
              ? " text-primary-redmaroon02 border-b-primary-redmaroon02"
              : "text-primary-redmaroon03 border-b-primary-redmaroon03"
          }`}
          onClick={() => setActiveTab(4)}
        >
          fitness
        </button>
      </div>

      {activeTab === 1 && (
        <div className="px-4 py-4 bg-white rounded-md mt-2">
          <RestaurantandcafeTap />
        </div>
      )}
      {activeTab === 2 && (
        <div className="px-4 py-4 bg-white rounded-md mt-2">2</div>
      )}
      {activeTab === 3 && (
        <div className="px-4 py-4 bg-white rounded-md mt-2">3</div>
      )}
      {activeTab === 4 && (
        <div className="px-4 py-4 bg-white rounded-md mt-2">4</div>
      )}
    </div>
  );
};

export default MenuTabs;
