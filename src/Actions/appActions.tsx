import * as Types from "../Constants/Types";

export const setIsSidebarOpen = (value: boolean) => ({
  type: Types.SET_IS_SIDEBAR_OPEN,
  value,
});
