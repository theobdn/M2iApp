import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const FoodCard = () => {
    return (
        <>
        <Card sx={{ maxWidth: 345, margin: "3px" }}>
      <CardMedia
        component="img"
        height="140"
        image="https://img.passeportsante.net/1200x675/2019-09-24/i91733-.webp"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Avocat
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Calories : 
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Protéines :
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Glucides :
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Graisses :
        </Typography>
      </CardContent>
      <CardActions sx={{display: "flex", justifyContent: "center"}}>
        <Button size="small">Quantité</Button>
        <Button color='error' size="small">Supprimer</Button>
      </CardActions>
    </Card>
        </>
    )
}