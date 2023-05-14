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
    `}
    />
)

const heading = css({
    marginTop: '80px',
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