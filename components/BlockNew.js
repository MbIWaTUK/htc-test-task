import { Box, Typography, makeStyles, GridList, GridListTile, Link } from "@material-ui/core"
import { useState } from "react"
import PerfectScrollbar from "react-perfect-scrollbar"

const useStyles = makeStyles((theme) => ({

  roots: {
    display: 'flex',
    flexWrap: 'wrap',
    position: 'relative',
    overflowX: 'hidden',
    backgroundColor: theme.palette.background.paper,
    height: "460px",
    paddingBottom: "8px"
  },
  title: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "24px",
    color: "#333333",
    paddingBottom: "10px"
  },
  card: {
    height: "390px",
    position: "relative"
  },
  img: {
    height: "80%"
  },
  name: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "20px",
    color: "#333333",
  },
  gridList: {
    flexWrap: 'nowrap',
    height: 'auto',
    overflowY: 'auto',
    position: "relative",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
    "& .MuiGridListTile-root": {
      height: "425px"
    },
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

  // gridListTile: {
  //   height: '100%',
  // },
  activeCard: {
    position: 'absolute',
    top: "0",
    bottom: "20%",
    left: "0",
    right: "0",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    borderRadius: "10px"
  },
  activeCardText: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    color: "#fff",
    padding: "16px"
  }
}))

const BlockNew = ({ list }) => {
  const classes = useStyles()
  const [activeCard, setActiveCard] = useState(null)

  return (
    <Box style={{ position: "relative" }}>
      <Typography className={classes.title} component="h4"><img src="/static/emoji/fire.png" /> Новинки</Typography>
      {(!list || list.length === 0) && <Typography>Фильмы с таким названием не найден</Typography>}
      <div className={classes.roots}>
        <GridList className={classes.gridList} cols={1} spacing={12}>
          {list.map(l => (
            <Link href={`/film/${l.title}`}>
              <div className={classes.card} key={l.id}>
                <GridListTile onMouseEnter={() => setActiveCard(l.id)} onMouseLeave={() => setActiveCard(null)}>
                  <img src={`${l.img}`} className={classes.img} />
                  <Typography className={classes.name}>{l.title}</Typography>
                  {activeCard === l.id && (
                    <div className={classes.activeCard}>
                      <Typography coponent="p" className={classes.activeCardText}>{l.description}</Typography>
                    </div>
                  )}
                </GridListTile>

              </div>
            </Link>
          ))}

        </GridList>

      </div>
    </Box >
  )
}

export default BlockNew