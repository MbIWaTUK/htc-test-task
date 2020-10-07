import { makeStyles, Box, Typography, GridList, GridListTile } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  box: {
    margin: "30px 0px 72px 0px"
  },
  title: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "24px",
    color: "#333333",
    paddingBottom: "10px"
  },
  roots: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
    paddingBottom: "15px",
    '&::-webkit-scrollbar': {
      height: "5px"
    },
    '&::-webkit-scrollbar-track': {
      boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
      webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '&::-webkit-scrollbar-thumb': {
      background: "#BDBDBD",
      borderRadius: "5px"
    }
  },
  card: {
    minWidth: "280px",
    minHeight: "208px",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    marginRight: "20px",
    borderRadius: "6px",
    cursor: "pointer",
    opacity: "0.8",
    userSelect: "none",
    "&:hover": {
      opacity: "1"
    }
  },
  smile: {
    paddingBottom: "10%"
  },
  genreTitle: {
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "20px",
    color: "#fff",
    paddingBottom: "24px"
  }
}))

const BlockGenre = ({ list }) => {
  const classes = useStyles()
  return (
    <Box className={classes.box}>
      <Typography className={classes.title} component="h4">Жанры</Typography>
      <div className={classes.roots}>
        {list.map(l => (
          <div className={classes.card} style={{ background: `${l.bg}` }} key={l.id}>
            <img className={classes.smile} src={l.smile} />
            <span className={classes.genreTitle}>{l.name}</span>
          </div>
        ))}
      </div>

    </Box>
  )
}

export default BlockGenre