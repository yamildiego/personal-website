import { connect, useDispatch } from "react-redux";

const connectWithDispatch = (Component: any, mapStateToProps?: any, mapDispatchToProps?: any) => {
  let Connect = connect(mapStateToProps, mapDispatchToProps)(Component);
  return (props: any) => <Connect {...props} dispatch={useDispatch()} />;
};

export default connectWithDispatch;
