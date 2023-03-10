// ** MUI Imports
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

const CardImgTop = () => {
  return (
    <Card>
      <CardMedia sx={{ height: '10.5625rem' }} image='/images/cards/glass-house.png' />
      <CardContent>
        <Typography variant='h6' sx={{ marginBottom: 2 }}>
          Blockchain based Algorithm
        </Typography>
        <Typography variant='body2'>
          LeagueX3 is entirely based on blockchain and we use a combination of L1 and L2 networks, powered by the Mantle SDK to keep our gas costs as low as possible.
        </Typography>
      </CardContent>
    </Card>
  )
}

export default CardImgTop
