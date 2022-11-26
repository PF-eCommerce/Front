import React from 'react'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Skeleton from '@mui/material/Skeleton';
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

const CardSkeleton = () => {
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
      };
  return (
    <Card sx={{ maxWidth: 330 }}>
      <CardHeader
        avatar={<Skeleton animation="wave" variant="circular" width={40} height={40} />}
        action={ null
        }
        title={ <Skeleton
          animation="wave"
          height={10}
          width="80%"
          style={{ marginBottom: 6 }}
        />}
      
      />
      
      <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
      
      <CardContent>
        <Typography variant='h8' color='secondary'>
           <Skeleton animation="wave" height={10} width="40%" />
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='add to favorites'>
          <FavoriteIcon
         
          />
        </IconButton>
       
          <IconButton>
            <AddShoppingCartOutlinedIcon sx={{ marginRight: "1rem" }} />
          </IconButton>
       

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label='show more'
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <CardContent>
          <Typography paragraph><Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
            <Skeleton animation="wave" height={10} width="80%" /></Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}

export default CardSkeleton
