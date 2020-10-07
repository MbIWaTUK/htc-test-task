import { makeStyles, Typography } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  main: {

    height: "695px",
    overflowY: "auto"
  },
  card: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    background: "#F2F2F2",
    borderRadius: "8px",
    height: "162px",
    marginBottom: "16px",
    marginRight: "10px"
  },
  logo: {
    margin: "0px 9vw",
    "@media(max-width:768px)": {
      margin: "0px 1vw"
    },
    "@media(max-width:426px)": {
      display: "none"
    },
  },
  scheduleBlock: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  title: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "20px",
    color: "#333333",
    paddingTop: "20px",
    "@media(max-width:768px)": {
      fontSize: "18px",
      paddingTop: "10px"
    },
    "@media(max-width:426px)": {
      paddingLeft: "5px"
    },
  },
  scheduleList: {
    paddingInlineStart: "0px",
    marginBlockStart: "0em",
    marginBlockEnd: "0em",
    '&::-webkit-scrollbar': {
      height: "5px"
    },
    '&::-webkit-scrollbar-track': {
      boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
    },
    '&::-webkit-scrollbar-thumb': {
      background: "#BDBDBD",
      borderRadius: "5px"
    }
  },
  schduleItem: {
    display: "flex",
    padding: "6px 0",
    color: "#333333",
  },
  schduleItemActive: {
    display: "flex",
    padding: "6px 0",
    color: "#E5261E",
  },
  time: {
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "16px",
    marginRight: "16px",
    "@media(max-width:768px)": {
      fontSize: "14px"
    },
    "@media(max-width:426px)": {
      paddingLeft: "5px"
    },
  },
  name: {
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "16px",
    "@media(max-width:768px)": {
      fontSize: "14px"
    },
    "@media(max-width:426px)": {

    },
  }
}))
const BlockTV = ({ list }) => {
  const classes = useStyles()
  return (
    <div className={classes.main}>
      {list && list.map(l => (
        <div className={classes.card} key={l.id}>
          <img src={l.logo} className={classes.logo} />
          <div className={classes.scheduleBlock}>
            <Typography className={classes.title}>{l.title}</Typography>
            <ul className={classes.scheduleList}>
              {l.schedule.map(s => (
                <li key={s.id} className={s.id === 1 ? classes.schduleItemActive : classes.schduleItem}><Typography className={classes.time}>{s.time}</Typography> <Typography className={classes.name}>{s.title}</Typography></li>
              ))}
            </ul>

          </div>
        </div>
      ))}
    </div>
  )
}

export default BlockTV