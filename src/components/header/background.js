import React from 'react'
import styled from 'styled-components'

const StyledBackground = styled.div`
  height: 100%;
  width: 100%;
  background-size:cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(https://images.squarespace-cdn.com/content/v1/571fc5edd210b89083925aba/1559599181675-4MQHUP31SG13I9W04NH7/ke17ZwdGBToddI8pDm48kHu-gQqVtNHyDZW_Bn_Cecp7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0kMlYkjvFlctRdmAM11rxFSYXH9LI4fTdHB98XNnOeA6MMLMLVbi4gExhPrIx0rDpQ/LiamWong_EveningsInTokyo.jpg?format=2500w);
  filter: grayscale(1);
`

export const Background = props => <StyledBackground {...props} role="img" aria-label="Header background" />
