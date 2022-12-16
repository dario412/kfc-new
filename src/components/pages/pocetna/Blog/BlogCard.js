import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const BlogCard = (props) => {
  return (
    <Grid container spacing={1}>
      <img src={props.image} />
      <Grid item xs={12} sx={{ mx: "20px" }}>
        <Typography variant="h3" py={1}>
          {props.title}
        </Typography>
        <Typography variant="body">
          {props.description}
          <br />
          <br />
        </Typography>
        <Button
          variant="contained"
          sx={{
            mt: 1,
            border: "3px solid red",

            "&:hover": {
              backgroundColor: "white",
              border: "3px solid red",
              boxShadow: "none",
              color: "red",
            },
          }}
          href="/single-blog"
        >
          Види повеќе
        </Button>
      </Grid>
    </Grid>
  );
};

export default BlogCard;
