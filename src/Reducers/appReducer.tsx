import * as Types from "../Constants/Types";

const initialState = {
  isSideBarOpen: false,
};

type appReducerState = { isSideBarOpen: boolean };

type SetIsSidebarOpenAction = { type: typeof Types.SET_IS_SIDEBAR_OPEN; value: boolean };

export default function appReducer(state: appReducerState = initialState, action: SetIsSidebarOpenAction) {
  switch (action.type) {
    case Types.SET_IS_SIDEBAR_OPEN: {
      return { ...state, isSideBarOpen: action.value };
    }
    default:
      return state;
  }
}
