import { css, Global } from '@emotion/react'
import { styled } from '@mui/material/styles';
import {Box, Card, Paper as PaperMui} from "@mui/material";

export const globalStyles = (
    <Global
        styles={css`
      html,
      body {
        height: 100%;
        width: 100%;
        margin: 0;
        font-family: 'Roboto', sans-serif;
      }
      
      :root {
        --white: #F2F3F4;
        --cool-gray: #B4B9BF;
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
)

const heading = css({
    color: 'var(--white)'
})

export const Heading = styled('h1')`
  ${heading};   
`

const main = css({
  margin: '0 auto',
  padding: '2rem',
  height: '100%'
})

export const Main = styled(Box)`
  ${main};
`

const info = css({
  backgroundColor: 'var(--cool-gray)',
  padding: '20px'
})

export const Info = styled(Card)`
  ${info};
`

const paper = css({
  margin: '5px 10px',
  padding: '5px 10px'
})

export const Paper = styled(PaperMui)`
  ${paper};
`