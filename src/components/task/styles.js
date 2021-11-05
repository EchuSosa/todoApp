import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme)=>({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        padding: '20px',
        margin: '10px',

        '& .MuiCardContent-root': {
            padding: 0,
            margin: 0,
            overflow: 'hidden',
            textOverflow: "ellipsis",
            width: '200px',
            [theme.breakpoints.only('mobile')]: {
                width: '120px',
                height: '30px',
                '& h5': {
                    fontSize: 17,
                },
                '& h6': {
                    fontSize: 15,
                },
            },
        }
    },
}));
