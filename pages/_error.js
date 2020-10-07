import { makeStyles } from "@material-ui/core/styles"

const Error = ({ statusCode }) => (
  <>
    <div className="error-container">
      <div className="container">
        <h2 className="error-title">Ошибка!</h2>
        <p>
          {statusCode
            ? `Упс! На сервере возникла ошибка ${statusCode}`
            : "An error occured on client"}
        </p>
      </div>
    </div>
    <style jsx>{`
      .error-container {
        padding: 3rem 0;
      }
      .error-title {
        margin-bottom: 2rem;
      }
    `}</style>
  </>
)

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error

