// ** MUI Imports
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

const CardImgTop2 = () => {
  return (
    <Card>
      <CardMedia sx={{ height: '10.5625rem' }} image='/images/cards/paper-boat.png' />
      <CardContent>
        <Typography variant='h6' sx={{ marginBottom: 2 }}>
          All Sports Supported
        </Typography>
        <Typography variant='body2'>
          We're written our Smart Contracts in the most generic fashion and any sport in the world can be used as a base for fantasy gaming. Be it Formula1, Soccer or Cricket, we have everything supported!
        </Typography>
      </CardContent>
    </Card>
  )
}

export default CardImgTop2;
