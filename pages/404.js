import { makeStyles } from "@material-ui/core/styles"
import Head from "next/head"
import { Link } from "@material-ui/core"

const Page404 = () => (

  <div>
    <Head>
      <title>Страница не найдена</title>
    </Head>
    <main>
      <div
        className="container"
        style={{ minHeight: "40vh", padding: "4rem 2rem" }}
      >
        <h2>Страница не найдена!</h2>
        <p style={{ marginTop: "2rem" }}>
          Такой страницы не существует,
          перейдите на <Link href="/">главную </Link>страницу
        </p>
      </div>
    </main>
  </div>
)


export default Page404
