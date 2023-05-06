const initialState = {
  theme: {
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
};

export default function configReducer(state = initialState, action = {}) {
  return state;
}
