import * as React from 'react';
import CardMUI from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';

export type CardProps = {
  url: string,
  title: string,
  description: string,
}

const Card: React.FC<CardProps> = ({
  description, url, title,
}) => {
  return (
    <Grid item xs={12} sm={4} md={4}>
      <CardMUI>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={url}
            alt={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </CardMUI>
    </Grid>

  );
}

export default Card;
