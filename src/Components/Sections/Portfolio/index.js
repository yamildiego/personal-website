import React, { Component } from "react";
import { connect } from "react-redux";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Link from "@mui/material/Link";

import verdeagostini from "../../../Assetss/verdeagostini.png";
import ecommerce from "../../../Assetss/ecommerce.png";
import tedx from "../../../Assetss/tedx.png";
import candydev from "../../../Assetss/candydev.png";
import myb from "../../../Assetss/myb.png";
import chessing from "../../../Assetss/chessing.png";

import "./Portfolio.css";

const portfolios = [
  {
    key: 1,
    name: "VerdeAgostini",
    img: verdeagostini,
    description: "Enterprise website",
    link: "https://verdeagostini.yamildiego.com/",
  },
  {
    key: 2,
    name: "Ecommerse test",
    img: ecommerce,
    description: "E-commerce with basic features",
    link: "https://ecommerce.yamildiego.com/",
  },
  {
    key: 3,
    name: "TEDx",
    img: tedx,
    description: "Independently organized TED event",
    link: "https://tedxvillalaangostura.yamildiego.com/",
  },
  {
    key: 4,
    name: "CandyDev",
    img: candydev,
    description: "Game CandyDev",
    link: "https://candydev.yamildiego.com/",
  },
  {
    key: 4,
    name: "MYB",
    img: myb,
    description: "Manage your business",
    link: "https://myb.yamildiego.com/",
  },
  {
    key: 5,
    name: "Chessing",
    img: chessing,
    description: "Chessing - Offline",
    link: "https://play.google.com/store/apps/details?id=com.yamildiego.chessing",
  },
];

class Portfolio extends Component {
  render() {
    return (
      <Box sx={styles.mainContainer}>
        <Box id={"portfolio"} sx={styles.container}>
          <Box sx={styles.subContainer}>
            <Box sx={styles.title}>Portfolio</Box>
            <Grid container spacing={{ xs: 4, sm: 4, md: 2, lg: 4, xl: 4 }} sx={{ justifyContent: "center" }}>
              {portfolios.map((port) => {
                return (
                  <Grid item xs={12} sm={12} md={6} xl={4} lg={4}>
                    <Card className="grid">
                      <CardActionArea>
                        <Link href={port.link} target={"_blank"} sx={{ textDecoration: "none", color: "#555" }}>
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
                        </Link>
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
