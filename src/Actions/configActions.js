import * as Types from "../Reducers/Types";
// import * as Urls from "../../Constant/Urls";
// import * as Config from "../../Constant/Config";
// import * as appActions from "./appActions";
// import * as moduleActions from "./moduleActions";
// import * as apiActions from "./apiActions";
// import axios from "axios";
// const server = axios.create({ withCredentials: true });

export const setIsSidebarOpen = (isSideBarOpen) => ({
  type: Types.SET_IS_SIDEBAR_OPEN,
  isSideBarOpen,
});

export const setCoordinates = (coordinates) => ({
  type: Types.SET_COORDINATES,
  coordinates,
});
