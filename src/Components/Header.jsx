import React from "react";
import {
  Bell,
  ChatLeftDots,
  CollectionPlay,
  Flag,
  HouseDoor,
  People,
  PersonCircle,
  Plus,
  Power,
  Search,
  ShopWindow,
} from "react-bootstrap-icons";
import { useSelector } from "react-redux";

function Header() {
  const user = useSelector((state) => state.user.value);
  return (
    <div className="hole container p-3 d-flex justify-content-between bg-white">
      <div className="logo d-flex  align-items-center">
        <img
          width={60}
          height={35}
          src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo-768x480.png"
          alt="fblogo"
        />

        <div className="search-container d-flex align-items-center mx-3 p-1 br-20">
          <Search className="ms-1 me-1" />
          <input
            type="search"
            placeholder="Search Something"
            className="search-box mx-1"
          />
        </div>
      </div>
      <div className="headmenu d-flex flex-shrink-1 menu fs-3 cr-p">
        <div className="active">
          <HouseDoor />
        </div>
        <div>
          <Flag />
        </div>
        <div>
          <CollectionPlay />
        </div>
        <div>
          <ShopWindow />
        </div>

        <div>
          <People />
        </div>
      </div>
      <div className="headmenu d-flex fs-3 justify-content-between profile align-items-center">
        <div>
          <PersonCircle />
        </div>
        <b className="user ps-3">{user.displayName}</b>
        <div>
          <Plus />
        </div>
        <div>
          <ChatLeftDots />
        </div>
        <div>
          <Bell />
        </div>
        <div>
          <button
            type="button"
            className="align-items-center btn background-white"
            title="logout"
          >
            <Power className="cr-p fs-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
