import { Box, makeStyles, Container } from "@material-ui/core"
import Head from "next/head"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Film from "../../components/Film"

const movieList = [
  {
    id: 1,
    img: "/static/movie-item1.png",
    title: "Мульт в кино. Выпуск №103. Некогда грустить!",
    description: "Описание для Мульт в кино. Выпуск №103. Некогда грустить!",
    country: "США, Германия",
    genre: "Комедия"
  },
  {
    id: 2,
    img: "/static/movie-item2.png",
    title: "Новый бэтмен",
    description: "Описание для фильма новый бэтмен",
    country: "США, Германия",
    genre: "Комедия"
  },
  {
    id: 3,
    img: "/static/movie-item3.png",
    title: "Однажды... в Голливуде",
    description: "Фильм повествует о череде событий, произошедших в Голливуде в 1969 году, на закате его «золотого века». Известный актер Рик Далтон и его дублер Клифф Бут пытаются найти свое место в стремительно меняющемся мире киноиндустрии.",
    country: "США, Германия",
    genre: "Комедия"
  },
  {
    id: 4,
    img: "/static/movie-item4.png",
    title: "Стриптизёрши",
    description: "Описание для фильма Стриптизёрши",
    country: "США, Германия",
    genre: "Комедия"
  },
  {
    id: 5,
    img: "/static/movie-item1.png",
    title: "Мульт в кино. Выпуск №103. Некогда грустить!",
    description: "Описание для Мульт в кино. Выпуск №103. Некогда грустить!",
    country: "США, Германия",
    genre: "Комедия"
  },
  {
    id: 6,
    img: "/static/movie-item2.png",
    title: "Новый бэтмен",
    description: "Описание для фильма новый бэтмен",
    country: "США, Германия",
    genre: "Комедия"
  },
  {
    id: 7,
    img: "/static/movie-item3.png",
    title: "Однажды... в Голливуде",
    description: "Фильм повествует о череде событий, произошедших в Голливуде в 1969 году, на закате его «золотого века». Известный актер Рик Далтон и его дублер Клифф Бут пытаются найти свое место в стремительно меняющемся мире киноиндустрии.",
    country: "США, Германия",
    genre: "Комедия"
  },
  {
    id: 8,
    img: "/static/movie-item4.png",
    title: "Стриптизёрши",
    description: "Описание для фильма Стриптизёрши",
    country: "США, Германия",
    genre: "Комедия"
  }
]

const useStyles = makeStyles((theme) => ({

}))

const FilmPage = ({ router }) => {
  const classes = useStyles()
  const newFilm = movieList.filter(m => m.title === router)

  return (
    <Box>
      <Container fixed>
        <div >
          <Head>
            <title>{newFilm && newFilm.length > 0 ? newFilm[0].title : "Название фильма"}</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Header />
          <Film film={newFilm[0]} />
          <Footer />
        </div>
      </Container>
    </Box>
  )
}

FilmPage.getInitialProps = async (ctx) => {
  const router = ctx.query.slug

  return { router }
}

export default FilmPage