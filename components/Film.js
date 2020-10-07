import { Box, makeStyles, Typography, Link, TextField, Grid, Button } from "@material-ui/core"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ButtonCustom from "./ButtonCustom"
import { useContext, useState } from "react"
import { CommentContext } from "../lib/commentContext"
import { AuthContext } from "../lib/authContext"
import { v4 as uuidv4 } from "uuid"
import ClearIcon from '@material-ui/icons/Clear'
const commentsList = [
  {
    id: 1,
    name: "Nickname",
    comment: "По моему ни на что не претендующему мнению, если человеку нужна особая причина, чтобы посмотреть Тарантино, то тут одно из двух: либо совсем уж вкусы разнятся, либо кинематограф, как явление человеку безразличен. Во всех остальных случаях имя режиссера говорит само за себя — надо смотреть."
  },
  {
    id: 2,
    name: "pasha_cinema",
    comment: "Главный эмоциональный удар лента наносит в самом конце. Когда фильм после мастерского нагнетания сбрасывает оковы и пускается во все тяжкие. Финальные сцены являют собой нечто фантастическое. Они веселят и напрягают одновременно. Это действительно шедевральный отрывок, который будут помнить, но он ничто по сравнению с самым последним диалогом, от которого становится очень хорошо, но в то же время бесконечно грустно."
  }
]
const useStyles = makeStyles((theme) => ({
  blockCard: {
    display: "flex",
    alignItems: "start",
    position: "relative"
  },
  img: {
    margin: "0 50px",
    "@media(max-width:426px)": {
      margin: "0px"
    },
  },
  blockCardInfo: {
    display: "flex",
    flexDirection: "column",
  },
  text: {
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "16px",
    color: "#333333",
    width: "100px",
    "@media(max-width:426px)": {
      fontSize: "14px",
      width: "69px"
    },
  },
  title: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "20px",
    color: "#333333",
    "@media(max-width:426px)": {
      fontSize: "18px"
    },
  },
  description: {
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "16px",
    color: "#333333",
    paddingTop: "20px"
  },
  blockComments: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

  },
  commentTitle: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "20px",
    padding: "43px 0 24px 0"
  },
  commentItem: {
    background: "#F2F2F2",
    borderRadius: "8px",
    padding: "16px",
    marginBottom: "16px",
    width: "100%",
    position: "relative"
  },
  commentSend: {
    backgroundColor: "rgba(235,42,27, 0.15)",
    borderRadius: "8px",
    padding: "16px",
    marginBottom: "16px",
    width: "100%",
    position: "relative",

    '& .MuiInput-underline:after': {
      borderBottom: 'unset',
    },
    '& .MuiInput-underline:before': {
      borderBottom: 'unset',
    },
    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
      borderBottom: 'unset',
    },
    "& .MuiInputBase-input::placeholder": {
      color: "#E5261E",
      opacity: "1"
    },
    "@media (max-width:426px)": {
      marginBottom: "80px"
    }
  },
  commentName: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    paddingBottom: "8px"
  },
  commentSendBlock: {
    width: "100%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-end"
  },
  commentDelete: {
    fontSize: "20px",
    color: "#E5261E",
    position: "absolute",
    top: "0px",
    right: "-25px",
    cursor: "pointer",
    "@media(max-width:426px)": {
      right: "0px"
    }
  },
  textBlock: {
    display: "flex",
    alignItems: "flex-end",
    marginBottom: "5px",
    "@media(max-width:1024px)": {
      alignItems: "flex-start"
    },
    "@media(max-width:768px)": {

    },
    "@media(max-width:426px)": {

    },
  },
  blockImgAndText: {
    display: "flex",
    "@media(max-width:768px)": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    "@media(max-width:426px)": {

    },
  },
  arrow: {
    color: "#E5261E",
    cursor: "pointer",
    "@media(max-width:426px)": {
      position: "absolute",
      top: "6px",
      left: "12px"
    },

  },
  mainBtn: {
    color: "#fff",
    backgroundColor: "#E5261E",
    padding: "10px 32px",
    '&:hover': {
      backgroundColor: "#CC221B",
    },
    position: "absolute",
    top: "0px",
    right: "-190px",
    "@media(max-width:768px)": {
      display: "none"
    },
    "@media(max-width:426px)": {
      top: "150px",
      display: "block",
      right: "0px"

    },
  },

  mainBtn2: {
    color: "#fff",
    backgroundColor: "#E5261E",
    padding: "5px 5px",
    '&:hover': {
      backgroundColor: "#CC221B",
    },
    position: "absolute",
    top: "0px",
    right: "-70px",
    "@media(min-width:769px)": {
      display: "none"
    },
    "@media(max-width:426px)": {
      display: "none"
    },
  },

}))

const Film = ({ film }) => {
  const classes = useStyles()
  const [newComment, setNewComment] = useState(null)
  const { auth, setAuth } = useContext(AuthContext)
  const { comment, setComment } = useContext(CommentContext)
  const [err, setErr] = useState(null)

  const commentFilm = comment && comment.length > 0 && comment.filter(c => c.film === film.id).reverse()

  const handleSendComment = () => {
    if (!newComment || newComment.length === 0) {
      setErr("Комменатрий не должен быть пустым")
      return
    }
    setComment([...comment, { id: uuidv4(), name: auth[0].login, comment: newComment, film: film.id }])
    setNewComment("")
    setErr(null)
  }


  const handleDeleteComment = (id) => {
    const newComments = comment.filter(c => c.id !== id)
    setComment(newComments)
  }
  return (
    <Box>
      <div className={classes.blockCard}>
        <Link href="/">
          <ArrowBackIosIcon className={classes.arrow} />
        </Link>
        <div className={classes.blockImgAndText}>
          <img src={film.img} className={classes.img} />
          <div className={classes.blockCardInfo}>
            <div className={classes.textBlock} >
              <Typography className={classes.text}>Название:</Typography><Typography className={classes.title}>{film.title}</Typography>
            </div>

            <div className={classes.textBlock}>
              <Typography className={classes.text}>Страна:</Typography><Typography className={classes.title}>{film.country}</Typography>
            </div>

            <div className={classes.textBlock}>
              <Typography className={classes.text}>Жанр:</Typography><Typography className={classes.title}>{film.genre}</Typography>
            </div>

            <Typography className={classes.description}>{film.description}</Typography>
          </div>
        </div>
      </div>

      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item xs={12} md={8}>
          <Typography className={classes.commentTitle}>Комментарии</Typography>
        </Grid>

        {auth && auth.length > 0 &&
          // <div className={classes.commentSendBlock}>
          <Grid item xs={12} md={8} style={{ width: "100%", position: "relative" }}>
            <TextField
              error={err ? true : false}
              helperText={err ? err : ""}
              className={classes.commentSend}
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Введите комментарий..."
              multiline
              rows={5}
            />
            <Button className={classes.mainBtn} onClick={handleSendComment}>
              Опубликовать
            </Button>
            <Button className={classes.mainBtn2} onClick={handleSendComment}>
              >>>
            </Button>
            {/* <ButtonCustom onClick={handleSendComment}>Опубликовать</ButtonCustom> */}
          </Grid>
        }

        {/* </div> */}
        {commentFilm && commentFilm.length > 0 && commentFilm.map(c => (
          // <div className={classes.commentItem} key={c.id}>
          <Grid item className={classes.commentItem} key={c.id} xs={12} md={8}>
            <Typography className={classes.commentName}>{c.name}</Typography>
            <Typography className={classes.commentText}>{c.comment}</Typography>
            <ClearIcon className={classes.commentDelete} onClick={() => handleDeleteComment(c.id)} />
          </Grid>
          // </div>
        ))}
        {commentsList.map(c => (
          // <div className={classes.commentItem} key={c.id}>
          <Grid item className={classes.commentItem} key={c.id} xs={12} md={8}>
            <Typography className={classes.commentName}>{c.name}</Typography>
            <Typography className={classes.commentText}>{c.comment}</Typography>
          </Grid>
          // </div>
        ))}
      </Grid>
    </Box>
  )
}

export default Film