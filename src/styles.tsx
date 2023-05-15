import { css, Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import {
  Box,
  Button as ButtonMui,
  Card,
  Paper as PaperMui,
} from "@mui/material";

export const globalStyles = (
  <Global
    styles={css`
      html,
      body {
        height: 100%;
        width: 100%;
        margin: 0;
        font-family: "Roboto", sans-serif;
      }

      :root {
        --white: #f2f3f4;
        --black: #000000;
      }

      a {
        text-decoration: none;
      }

      .MuiDataGrid-root .MuiDataGrid-main {
        .MuiDataGrid-cell:focus,
        .MuiDataGrid-cell:focus-within,
        .MuiDataGrid-columnHeader:focus,
        .MuiDataGrid-columnHeader:focus-within {
          outline: none;
        }
      }
    `}
  />
);

const heading = css({
  color: "var(--black)",
});

export const Heading = styled("h1")`
  ${heading};
`;

const main = css({
  margin: "0 auto",
  padding: "2rem",
  height: "100%",
});

export const Main = styled(Box)`
  ${main};
`;

const info = css({
  backgroundColor: "var(--white)",
  padding: "20px",
});

export const Info = styled(Card)`
  ${info};
`;

const paper = css({
  margin: "15px 20px",
  padding: "15px 20px",
  backgroundColor: "#FFDA66",
  color: "#002C63",
});

export const Paper = styled(PaperMui)`
  ${paper};
`;

const button = css({
  margin: "15px auto",
  padding: "15px 100px",
  backgroundColor: "#FFDA66",
  color: "#002C63",
});

export const Button = styled(ButtonMui)`
  ${button};
`;
