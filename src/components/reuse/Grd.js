import React  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/grid';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 12,
    },
    
  }));

export default function Grd({children}){
    const classes = useStyles();

    return (
        <div className={classes.root}>
        <Grid 
        container 
        spacing={2} direction="row"
        justify="space-between"
        alignItems="flex-start">

        {children}

        </Grid>
        </div>
    );
}