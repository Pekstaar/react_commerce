import React from 'react'

import { Typography, Card, CardActionArea, CardMedia, CardContent, CardActions, IconButton } from '@mui/material';
import { withStyles, makeStyles } from '@mui/styles';
import { ContactSupport, Visibility, StarOutline } from '@mui/icons-material'


const Product = ({ product }) => {
    // css styling
    const classes = useStyles();

    return (
        <Card className={classes.product_card} style={{ fontFamily: "Poppins" }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="100%"
                    width="100%"
                    image={product.assets[0].url}
                    alt={product.name}
                />

                <CardContent>
                    <div className={classes.product_info}>
                        <Typography gutterBottom variant="body1" component="h6" className={classes.product_name}>
                            {product.name.length >= 18 ? `${product.name.slice(0, 18)}...` : product.name}
                        </Typography>

                        <Typography gutterBottom variant="body1" component="h6" className={classes.product_name}>
                            <Typography variant="caption">kshs</Typography>{`${product.price.formatted}`}
                        </Typography>
                    </div>
                    <Typography variant="body2" color="text.secondary" className={classes.product_description} dangerouslySetInnerHTML={{ __html: product.description.length <= 80 ? product.description : `${product.description.slice(0, 75)}...` }} />
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.card_actions} >
                <IconButton size="small" color="primary" className={classes.card_button}>
                    <Visibility />
                </IconButton>

                <IconButton size="small" color="warning" className={classes.card_button}>
                    <StarOutline />
                </IconButton>

                <IconButton size="small" color="primary" className={classes.card_button}>
                    <ContactSupport />
                </IconButton>
            </CardActions>
        </Card>
    )
}

//styling
const useStyles = makeStyles({
    product_card: {
        fontFamily: "inherit"

    },
    product_name: {
        textTransform: "uppercase",
        fontFamily: "Poppins"
    },
    product_description: {
        fontFamily: "Poppins"
    },
    product_info: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between"
    },
    card_actions: {
        display: 'flex',
        justifyContent: "space-around",

    },
    card_button: {
        margin: "0 2em"
    }

})

export default withStyles(useStyles)(Product);
