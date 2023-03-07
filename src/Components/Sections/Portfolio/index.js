import React, { Component } from "react";
import { connect } from "react-redux";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import ModalProject from "./ModalProject";

import verdeagostini from "../../../Assetss/verdeagostini.png";
import ecommerce from "../../../Assetss/ecommerce.png";
import tedx from "../../../Assetss/tedx.png";
import candydev from "../../../Assetss/candydev.png";
import myb from "../../../Assetss/myb.png";
import chessing from "../../../Assetss/chessing.png";

import nodeIMG from "../../../Assetss/tech_node.png";
import reactIMG from "../../../Assetss/tech_react.png";
import mongodbIMG from "../../../Assetss/tech_mongodb.png";
import react_nativeIMG from "../../../Assetss/tech_react_native.webp";
import stripeIMG from "../../../Assetss/tech_stripe.png";
import mysqlIMG from "../../../Assetss/mysql.png";

import "./Portfolio.css";

let node = { title: "Node.js", img: nodeIMG };
let react = { title: "React", img: reactIMG };
let mongodb = { title: "MongoDB", img: mongodbIMG };
let react_native = { title: "React Native", img: react_nativeIMG };
let stripe = { title: "Stripe", img: stripeIMG };
let mysql = { title: "MySQL", img: mysqlIMG };

const portfolios = [
  {
    key: 5,
    name: "Chessing",
    img: chessing,
    description: "Chessing - Offline",
    long_description:
      "Chessing is a complete chess game mobile application that allows users to play both online and offline. With Chessing, users can enjoy all the standard functions and moves of a traditional chess game, including castling, pawn promotion, checkmate, and more.",
    long_description_2:
      "The application was developed using React Native and utilizes Node.js as the backend and MySQL for data management.",
    link: "https://play.google.com/store/apps/details?id=com.yamildiego.chessing",
    technologies: [react_native, node, mysql],
  },
  {
    key: 4,
    name: "MYB",
    img: myb,
    description: "Manage your business",
    long_description: `Manage Your Business, a web application that is highly customizable and allows users to configure various modules. With MyB, users can create an "elements" module for items, contacts, and assets, among other things, and set the parameters and data types as needed. This generates a module that enables users to view, add, edit, and export the items in CSV or PDF format.`,
    long_description_2: ` MyB also includes a permissions system that simplifies function assignment by profile, making it easy to manage groups of people like sales reps, customers, and managers.`,
    link: "https://myb.yamildiego.com/",
    technologies: [react, node, mongodb],
  },
  {
    key: 1,
    name: "VerdeAgostini",
    img: verdeagostini,
    description: "Enterprise website",
    long_description:
      "VerdeAgostini offers electric water heaters and renewable energy supplies for residential, commercial, and government clients.",
    long_description_2:
      "The website was developed using React and various libraries, such as i18n for multilingual support, Bootstrap for the UI design, and Redux for state management.",
    link: "https://verdeagostini.yamildiego.com/",
    technologies: [react, node],
  },
  {
    key: 2,
    name: "Ecommerse test",
    img: ecommerce,
    description: "E-commerce with basic features",
    long_description:
      "Ecommerce is a demo Ecommerce platform that enables all the functionalities of a real Ecommerce website, such as adding items to cart, adding to favorites, making purchases, entering data, and filtering items.",
    long_description_2:
      " This application was built using React with Material UI for the frontend, Node.js for the backend, and MongoDB and JavaScript for implementing filters and pagination. The payment system was integrated using Stripe for secure and convenient online transactions.",
    link: "https://ecommerce.yamildiego.com/",
    technologies: [react, mongodb, stripe],
  },
  {
    key: 3,
    name: "TEDx",
    img: tedx,
    description: "Independently organized TED event",
    long_description:
      "TEDx Villa La Angostura is an independently organized event under the TEDx program (TED talks independently organized). This website was created to support the event by providing all the available information on location, schedule, speakers, and other details.",
    long_description_2: "The website was developed using React, React-Bootstrap, and Node.js for email delivery.",
    link: "https://tedxvillalaangostura.yamildiego.com/",
    technologies: [react],
  },
  {
    key: 4,
    name: "CandyDev",
    img: candydev,
    description: "Game CandyDev",
    long_description:
      "CandyDev is a personal project that consists of a simple game that simulates the basic operations of Candy Crush, featuring logos of various development technologies such as Bootstrap, JavaScript, React, Angular, and more. The game is fully functional but still in the development process. It was developed to showcase programming skills and provide a fun experience for players.",
    long_description_2: "",
    link: "https://candydev.yamildiego.com/",
    technologies: [react, node, mongodb],
  },
];

class Portfolio extends Component {
  state = { project: null };

  closeModal = () => this.setState({ project: null });

  render() {
    const { project } = this.state;
    return (
      <Box sx={styles.mainContainer}>
        <ModalProject project={project} closeModal={this.closeModal} />
        <Box id={"portfolio"} sx={styles.container}>
          <Box sx={styles.subContainer}>
            <Box sx={styles.title}>Portfolio</Box>
            <Grid container spacing={{ xs: 4, sm: 4, md: 2, lg: 4, xl: 4 }} sx={{ justifyContent: "center" }}>
              {portfolios.map((port, index) => {
                return (
                  <Grid key={`project_${index}`} onClick={() => this.setState({ project: port })} item xs={12} sm={12} md={6} xl={4} lg={4}>
                    <Card className="grid">
                      <CardActionArea>
                        <CardMedia
                          sx={{ paddingTop: "12px", margin: "auto", width: "70%" }}
                          component="img"
                          height="140"
                          image={port.img}
                          alt="green iguana"
                        />
                        <CardContent>
                          <Typography
                            sx={{ fontFamily: "Quicksand", fontSize: "25px", textAlign: "center" }}
                            gutterBottom
                            variant="h5"
                            component="div"
                          >
                            {port.name}
                          </Typography>
                          <Typography sx={{ fontFamily: "Quicksand", textAlign: "center" }} variant="body2" color="text.secondary">
                            {port.description}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Box>
      </Box>
    );
  }
}

const styles = {
  mainContainer: {
    backgroundColor: "#ff8c4d",
    boxShadow: "inset 0 0 10px #000000",
    display: "flex",
    justifyContent: "center",
    paddingBottom: 3,
  },
  container: {
    maxWidth: "1250px",
    width: "100%",
  },
  subContainer: {
    width: "98%",
    margin: "auto",
  },
  title: {
    lineHeight: "130px",
    fontFamily: "Bangers",
    fontSize: "40px",
    color: "white",
  },
};

function mapStateToProps(state, props) {
  return {};
}

export default connect(mapStateToProps)(Portfolio);
