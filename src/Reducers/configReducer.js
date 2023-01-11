import * as Types from "../Reducers/Types";

const initialState = {
  theme: {
    components: {},
    shape: {
      borderRadius: 1,
    },
    typography: {
      fontSize: 18,
      fontWeightMedium: 300,
      button: {
        lineHeight: 2.8,
        textTransform: "capitalize",
      },
    },
  },
  isSideBarOpen: false,
};

export default function configReducer(state = initialState, action = {}) {
  switch (action.type) {
    case Types.SET_IS_SIDEBAR_OPEN: {
      return { ...state, isSideBarOpen: action.isSideBarOpen };
    }
    default:
      return state;
  }
}
