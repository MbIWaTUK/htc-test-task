import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { makeStyles } from "@material-ui/core/styles"
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Container, Box, Typography, Grid } from '@material-ui/core'
import { useState } from 'react'
import BlockNew from '../components/BlockNew'
import BlockGenre from '../components/BlockGenre'
import BlockTV from '../components/BlockTV'

const movieList = [
  {
    id: 1,
    img: "/static/movie-item1.png",
    title: "Мульт в кино. Выпуск №103. Некогда грустить!",
    description: "Описание для Мульт в кино. Выпуск №103. Некогда грустить!"
  },
  {
    id: 2,
    img: "/static/movie-item2.png",
    title: "Новый бэтмен",
    description: "Описание для фильма новый бэтмен"
  },
  {
    id: 3,
    img: "/static/movie-item3.png",
    title: "Однажды... в Голливуде",
    description: "Фильм повествует о череде событий, произошедших в Голливуде в 1969 году, на закате его «золотого века». Известный актер Рик Далтон и его дублер Клифф Бут пытаются найти свое место в стремительно меняющемся мире киноиндустрии."
  },
  {
    id: 4,
    img: "/static/movie-item4.png",
    title: "Стриптизёрши",
    description: "Описание для фильма Стриптизёрши"
  },
  {
    id: 5,
    img: "/static/movie-item1.png",
    title: "Мульт в кино. Выпуск №103. Некогда грустить!",
    description: "Описание для Мульт в кино. Выпуск №103. Некогда грустить!"
  },
  {
    id: 6,
    img: "/static/movie-item2.png",
    title: "Новый бэтмен",
    description: "Описание для фильма новый бэтмен"
  },
  {
    id: 7,
    img: "/static/movie-item3.png",
    title: "Однажды... в Голливуде",
    description: "Фильм повествует о череде событий, произошедших в Голливуде в 1969 году, на закате его «золотого века». Известный актер Рик Далтон и его дублер Клифф Бут пытаются найти свое место в стремительно меняющемся мире киноиндустрии."
  },
  {
    id: 8,
    img: "/static/movie-item4.png",
    title: "Стриптизёрши",
    description: "Описание для фильма Стриптизёрши"
  }
]

const TVList = [
  {
    id: 1,
    logo: "/static/logo-1-canal.png",
    title: "Первый канал",
    schedule: [
      {
        id: 1,
        time: "13:00",
        title: "Новости (с субтитрами)"
      },
      {
        id: 2,
        time: "14:00",
        title: "Давай поженимся"
      },
      {
        id: 3,
        time: "15:00",
        title: "Другие новости"
      }
    ]
  },
  {
    id: 2,
    logo: "/static/logo-2x2.png",
    title: "2x2",
    schedule: [
      {
        id: 1,
        time: "13:00",
        title: "МУЛЬТ ТВ. Сезон 4, 7 серия"
      },
      {
        id: 2,
        time: "14:00",
        title: "ПОДОЗРИТЕЛЬНАЯ СОВА. Сезон 7, 7 серия"
      },
      {
        id: 3,
        time: "15:00",
        title: "БУРДАШЕВ. Сезон 1, 20 серия"
      }
    ]
  },
  {
    id: 3,
    logo: "/static/logo-rbk.png",
    title: "РБК",
    schedule: [
      {
        id: 1,
        time: "13:00",
        title: "ДЕНЬ. Горючая смесь: как бороться с суррогатом на АЗС"
      },
      {
        id: 2,
        time: "14:00",
        title: "ДЕНЬ. Главные темы"
      },
      {
        id: 3,
        time: "15:00",
        title: "Главные новости"
      }
    ]
  },
  {
    id: 4,
    logo: "/static/logo-amedia.png",
    title: "AMEDIA PREMIUM",
    schedule: [
      {
        id: 1,
        time: "13:00",
        title: "Клиент всегда мёртв"
      },
      {
        id: 2,
        time: "14:00",
        title: "Голодные игры: Сойка-пересмешница. Часть I"
      },
      {
        id: 3,
        time: "15:00",
        title: "Секс в большом городе"
      }
    ]
  },
  {
    id: 5,
    logo: "/static/logo-1-canal.png",
    title: "Первый канал",
    schedule: [
      {
        id: 1,
        time: "13:00",
        title: "Новости (с субтитрами)"
      },
      {
        id: 2,
        time: "14:00",
        title: "Давай поженимся"
      },
      {
        id: 3,
        time: "15:00",
        title: "Другие новости"
      }
    ]
  },
  {
    id: 6,
    logo: "/static/logo-2x2.png",
    title: "2x2",
    schedule: [
      {
        id: 1,
        time: "13:00",
        title: "МУЛЬТ ТВ. Сезон 4, 7 серия"
      },
      {
        id: 2,
        time: "14:00",
        title: "ПОДОЗРИТЕЛЬНАЯ СОВА. Сезон 7, 7 серия"
      },
      {
        id: 3,
        time: "15:00",
        title: "БУРДАШЕВ. Сезон 1, 20 серия"
      }
    ]
  },
  {
    id: 7,
    logo: "/static/logo-rbk.png",
    title: "РБК",
    schedule: [
      {
        id: 1,
        time: "13:00",
        title: "ДЕНЬ. Горючая смесь: как бороться с суррогатом на АЗС"
      },
      {
        id: 2,
        time: "14:00",
        title: "ДЕНЬ. Главные темы"
      },
      {
        id: 3,
        time: "15:00",
        title: "Главные новости"
      }
    ]
  },
  {
    id: 8,
    logo: "/static/logo-amedia.png",
    title: "AMEDIA PREMIUM",
    schedule: [
      {
        id: 1,
        time: "13:00",
        title: "Клиент всегда мёртв"
      },
      {
        id: 2,
        time: "14:00",
        title: "Голодные игры: Сойка-пересмешница. Часть I"
      },
      {
        id: 3,
        time: "15:00",
        title: "Секс в большом городе"
      }
    ]
  }
]
const filmGenreList = [
  {
    id: 1,
    name: "Комедии",
    smile: "/static/emoji/smile.png",
    bg: "linear-gradient(127.83deg, #F2C94C 8.44%, #F29A4A 91.36%)"
  },
  {
    id: 2,
    name: "Драмы",
    smile: "/static/emoji/cry.png",
    bg: "linear-gradient(127.83deg, #F2994A 8.44%, #EB5757 91.36%)"
  },
  {
    id: 3,
    name: "Фантастика",
    smile: "/static/emoji/ufo.png",
    bg: "linear-gradient(127.83deg, #56CCF2 8.44%, #2F80ED 91.36%)"
  },
  {
    id: 4,
    name: "Ужасы",
    smile: "/static/emoji/ghost.png",
    bg: "linear-gradient(127.83deg, #828282 8.44%, #333333 91.36%)"
  },
  {
    id: 5,
    name: "Комедии",
    smile: "/static/emoji/smile.png",
    bg: "linear-gradient(127.83deg, #F2C94C 8.44%, #F29A4A 91.36%)"
  },
  {
    id: 6,
    name: "Драмы",
    smile: "/static/emoji/cry.png",
    bg: "linear-gradient(127.83deg, #F2994A 8.44%, #EB5757 91.36%)"
  },
  {
    id: 7,
    name: "Фантастика",
    smile: "/static/emoji/ufo.png",
    bg: "linear-gradient(127.83deg, #56CCF2 8.44%, #2F80ED 91.36%)"
  },
  {
    id: 8,
    name: "Ужасы",
    smile: "/static/emoji/ghost.png",
    bg: "linear-gradient(127.83deg, #828282 8.44%, #333333 91.36%)"
  }
]

const useStyles = makeStyles((theme) => ({
  tab: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "28px",
    color: "#333333",
    cursor: "pointer",
    marginBottom: "1rem",
    "@media(max-width:426px)": {
      fontSize: "20px",
    }
  },
  activeTab: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "28px",
    color: "#E5261E",
    // textDecoration: "underline",
    borderBottom: "2px solid #E5261E",
    cursor: "pointer",
    marginBottom: "1rem",
    "@media(max-width:426px)": {
      fontSize: "20px",
    }
  }
}))
export default function Home() {
  const classes = useStyles()
  const [activeTab, setActiveTab] = useState("films")
  const [newMovieList, setNewMovieList] = useState(movieList)
  const searchList = (search) => {

    const searchItem = movieList.filter((data) => {

      if (data.title.toLowerCase().includes(search.toLowerCase())) {
        return data
      }
    })

    setNewMovieList(searchItem)
  }

  return (
    <Box>
      <Container fixed>
        <div >
          <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Header onClick={(search) => searchList(search)} />
          <Grid container spacing={4} xs={12} direction="row" justify="center" alignItems="flex-end">
            <Grid item >
              <Typography onClick={() => setActiveTab("films")} className={activeTab === "films" ? classes.activeTab : classes.tab}>Фильмы</Typography>
            </Grid>
            <Grid item >
              <Typography onClick={() => setActiveTab("TV")} className={activeTab === "TV" ? classes.activeTab : classes.tab}>Телеканалы</Typography>
            </Grid>
          </Grid>
          {activeTab === "films" && (
            <>
              <BlockNew list={newMovieList} />
              <BlockGenre list={filmGenreList} />
            </>
          )}
          {activeTab === "TV" && (
            <BlockTV list={TVList} />
          )}
        </div>
      </Container>
      <Footer />
    </Box>
  )
}
