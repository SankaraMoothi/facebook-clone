import React from "react";
import {
  ChatDots,
  CollectionPlay,
  HouseDoor,
  People,
  PlusSquare,
  ShopWindow,
} from "react-bootstrap-icons";
import { useSelector } from "react-redux";

function Menu() {
  const user = useSelector((state) => state.user.value);
  return (
    <div className="menus  content-left mb-20 ">
      <div className="d-flex align-items-center">
        <img
          className="me-2 br-20"
          src={user.photoUrl}
          alt="myProfile"
          width={35}
          height={35}
        />
        <b>{"Mass"}</b>
      </div>

      <div className="d-flex">
        <PlusSquare />
        <b>{"COVID-19 Information"}</b>
      </div>
      <div className="d-flex">
        <HouseDoor />
        <b>{"Pages"}</b>
      </div>
      <div className="d-flex">
        <People />
        <b>{"Friends"}</b>
      </div>
      <div className="d-flex">
        <ChatDots />
        <b>{"Messager"}</b>
      </div>
      <div className="d-flex">
        <CollectionPlay />
        <b>{"Videos"}</b>
      </div>
      <div className="d-flex">
        <ShopWindow />
        <b>{"MarketPlace"}</b>
      </div>
    </div>
  );
}

export default Menu;
