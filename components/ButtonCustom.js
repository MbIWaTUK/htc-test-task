import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  main: {
    color: "#fff",
    backgroundColor: "#E5261E",
    padding: "10px 32px",
    '&:hover': {
      backgroundColor: "#CC221B",
    },
  }
}))

const ButtonCustom = ({ onClick, children, ...props }) => {
  const classes = useStyles()
  return (
    <Button className={classes.main} onClick={onClick} {...props}>
      {children}
    </Button>
  )
}

export default ButtonCustom