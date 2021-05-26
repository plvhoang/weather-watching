import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
    table: {
      marginTop: '20px',
      paddingTop: '10px'
    },
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
    paper: {
      width: '500px',
      padding: '20px'
    },
    title: {
      marginTop: '10px',
    },
    title1: {
      marginTop: '40px',
    },
    text: {
      marginBottom: '15px',
    },
    pagination: {
      '& > *': {
        marginTop: theme.spacing(2),
      },
    },
}))
