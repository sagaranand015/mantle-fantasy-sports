// ** MUI Imports
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

const CardImgTop3 = () => {
  return (
    <Card>
      <CardMedia sx={{ height: '10.5625rem' }} image='/images/cards/watch-on-hand.jpg' />
      <CardContent>
        <Typography variant='h6' sx={{ marginBottom: 2 }}>
          Ingenious Engineering!
        </Typography>
        <Typography variant='body2'>
          We make use of the Mantle SDK to perform computationally heavy transactions on the L2 chain, making sure all calculations for all competitions are tracable at all times.
        </Typography>
      </CardContent>
    </Card>
  )
}

export default CardImgTop3;
