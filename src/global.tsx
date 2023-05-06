import { MapDispatchToProps as MyMapDispatchToProps } from "react-redux";

declare global {
  type MapDispatchToProps = MyMapDispatchToProps<any, any>;
  type StateType = {
    appReducer: {
      isSideBarOpen: boolean;
    };
    configReducer: {
      theme: any;
    };
  };

  type ProjectType = {
    key: number;
    name: string;
    img: string | undefined;
    description: string;
    long_description: string;
    long_description_2: string;
    link: string;
    technologies: any[];
  };
}

export {};
