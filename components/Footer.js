import { makeStyles, Typography, Link, Container } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#F2F2F2",
    display: "flex",

    padding: "28px 0",
    marginTop: "72px"
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  footerTextBlock: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: "40px"
  },
  footerText: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    color: "#333333"
  },
  footerLink: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    color: "#1F4766",
    textDecoration: "none",
    paddingTop: "5px"
  },

}))

const Footer = () => {
  const classes = useStyles()
  return (
    <div className={classes.footer}>
      <Container fixed className={classes.container}>
        <img src="/static/footer-logo.png" className={classes.img} />
        <div className={classes.footerTextBlock}>
          <Typography className={classes.footerText}>426057, Россия, Удмуртская Республика, г. Ижевск, ул. Карла Маркса, 246 (ДК «Металлург»)</Typography>
          <Typography className={classes.footerText}>+7 (3412) 93-88-61, 43-29-29</Typography>
          <Link href="#" className={classes.footerLink}>htc-cs.ru</Link>
        </div>
      </Container>
    </div>
  )
}

export default Footer