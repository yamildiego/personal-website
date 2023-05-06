import * as React from "react";
import { Box, Typography, Modal, Card, CardHeader, CardMedia, CardActions, Grid, Link } from "@mui/material";

import LinkIcon from "@mui/icons-material/Link";

import { isMobile } from "react-device-detect";

interface ModalProjectProps {
  project: ProjectType | null;
  closeModal: () => void;
}

const ModalProject = (props: ModalProjectProps) => {
  const { project, closeModal } = props;

  return (
    <div>
      <Modal open={project !== null} onClose={closeModal} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <>
          {project !== null && (
            <Card sx={{ position: "relative", p: 2, maxWidth: 650, margin: "auto", mt: { xs: 0, sm: "40px" } }}>
              <Box sx={styles.close} onClick={closeModal}>
                x
              </Box>
              <CardHeader title={project.name} sx={{ maxWidth: "100%", p: "0 16px" }} subheader={project.description} />
              <Grid container p={2}>
                <Grid item xs={12}>
                  <Link href={project.link} target={"_blank"} sx={{ textDecoration: "none" }}>
                    <CardMedia component="img" sx={{ maxWidth: "250px", margin: "auto" }} image={project.img} alt="Paella dish" />
                  </Link>
                </Grid>
                <Grid item xs={12} sx={{ textAlign: "justify" }}>
                  <Typography variant="body1" color="text.secondary" sx={{ fontSize: isMobile ? "14px" : "16px" }}>
                    <p>{project.long_description}</p>
                    <p>{project.long_description_2}</p>
                  </Typography>
                </Grid>
              </Grid>

              <CardActions disableSpacing>
                {project.technologies.map((tech, index) => {
                  return (
                    <Box className="container-tech" key={`tech_${index}`} sx={{ mr: 2 }}>
                      <img className="tech" style={styles.img} src={tech.img} alt={tech.title} />
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

const styles = {
  img: {
    maxWidth: "80px",
    maxHeight: "40px",
  },
  close: {
    position: "absolute",
    right: "0px",
    top: "0px",
    cursor: "pointer",
    padding: "15px",
    lineHeight: "12px",
  },
};

export default ModalProject;
