import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import LinkIcon from "@mui/icons-material/Link";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";

const ModalProject = (props) => {
  const { project } = props;

  return (
    <div>
      <Modal
        open={project !== null}
        onClose={props.closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <>
          {project !== null && (
            <Card sx={{ maxWidth: 650, margin: "auto", marginTop: 5 }}>
              <CardHeader title={project.name} sx={{ maxWidth: "100%" }} subheader={project.description} />
              <Grid container p={2}>
                <Grid item xs={12}>
                  <Link href={project.link} target={"_blank"} sx={{ textDecoration: "none" }}>
                    <CardMedia component="img" sx={{ maxWidth: "300px", margin: "auto" }} image={project.img} alt="Paella dish" />
                  </Link>
                </Grid>
                <Grid item xs={12} sx={{ textAlign: "justify", pr: 2 }}>
                  <Typography variant="body3" color="text.secondary">
                    <p>{project.long_description}</p>
                    <p>{project.long_description_2}</p>
                  </Typography>
                </Grid>
              </Grid>

              <CardActions disableSpacing>
                {project.technologies.map((tech, index) => {
                  return (
                    <Box className="container-tech" key={`tech_${index}`} sx={{ mr: 2 }}>
                      <img className="tech" src={tech.img} alt={tech.title} width="50px" />
                    </Box>
                  );
                })}

                <Link href={project.link} target={"_blank"} sx={{ textDecoration: "none", color: "#555", marginLeft: "auto" }}>
                  <LinkIcon />
                </Link>
              </CardActions>
            </Card>
          )}
        </>
      </Modal>
    </div>
  );
};

export default ModalProject;
