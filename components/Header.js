import { makeStyles, TextField, Typography, Modal, Fade, FormControlLabel, Checkbox, Hidden } from "@material-ui/core"
import ButtonCustom from "./ButtonCustom"
import { useState, useContext } from "react"
import Backdrop from '@material-ui/core/Backdrop'
import clsx from 'clsx'
import { AuthContext } from "../lib/authContext"


const useStyles = makeStyles((theme) => ({
  '@global': {
    '*::-webkit-scrollbar': {
      width: '2px'
    },
    '*::-webkit-scrollbar-track': {
      boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
    },
    '*::-webkit-scrollbar-thumb': {
      background: "#BDBDBD",
      borderRadius: "2px"
    }
  },
  main: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "35px 0",
  },
  searchBlock: {
    display: "flex",
    alignItems: "center",
    "@media(max-width:768px)": {
      width: "199px",
      marginLeft: "1rem"
    },
    "@media(max-width:426px)": {
      width: "150px",
      marginLeft: "0rem"
    },

  },
  search: {
    width: "320px"
  },
  searchText: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: '16px',
    color: "#E5261E",
    paddingLeft: "32px",
    cursor: "pointer"
  },
  authBlock: {
    display: "flex",
    alignItems: "center",
  },
  authBlockName: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    color: "#333333",
    '& .MuiInputBase-root:after': {
      borderBottom: 'unset',
    },
    '& .MuiInputBase-root:before': {
      borderBottom: 'unset',
    },
    '& .MuiInputBase-root:hover:not(.Mui-disabled):before': {
      borderBottom: 'unset',
    },
    "& .MuiInputBase-input": {
      textAlign: "right",
      color: "#000",
    }
  },
  authBlockExit: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: '16px',
    color: "#E5261E",
    paddingLeft: "16px",
    cursor: "pointer"
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: "#fff",
    borderRadius: '8px',
    padding: '36px',
    display: 'flex',
    flexDirection: "column",
    alignItems: 'center',
    width: "305px"
  },
  modalTitle: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "28px",
    color: "#333333"
  },
  modalSearch: {
    width: '100%',
    padding: "12px 0"
  },
  check: {
    width: "100%"
  },
  rootCheck: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  icon: {
    borderRadius: "4px",
    width: 18,
    height: 18,
    boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: 'transparent',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '$root.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
    },
    'input:hover ~ &': {
      backgroundColor: 'transparent',
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background: 'rgba(206,217,224,.5)',
    },
  },
  checkedIcon: {
    backgroundColor: 'transparent',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      width: 24,
      height: 24,
      backgroundImage:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='1 1 18 18'%3E%3Cpath" +
        " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
        "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23000'/%3E%3C/svg%3E\")",
      content: '""',
    },
    'input:hover ~ &': {
      backgroundColor: 'transparent',
    },
  },
  img: {
    "@media(max-width:768px)": {
      height: "28px"
    }
  }

}))


const Header = ({ onClick }) => {
  const classes = useStyles()
  const { auth, setAuth } = useContext(AuthContext)
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState(null)
  const [login, setLogin] = useState(null)
  const [password, setPassword] = useState(null)
  const [saved, setSaved] = useState(false)
  const [error, setError] = useState(null)
  const [isEditLogin, setIsEditLogin] = useState(false)
  const [name, setName] = useState(auth && auth[0] ? auth[0].login : "")
  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleAuth = async () => {
    const errors = {}

    if (!login) {
      errors.login = 'Введите логин'
    }
    if (!password) {
      errors.password = 'Введите пароль'
    }
    await setError(errors)
    const err = await Object.keys(errors).length
    if (err === 0) {
      setAuth([{ login, password, saved }])
      setOpen(false)
    }

  }

  const logOut = () => {
    setAuth([])
  }

  const changeName = async (newName) => {
    // await setName(newName)
    setAuth([{ login: newName, password: auth[0].password, saved: auth[0].saved }])
  }
  // const handleSearch = () => {
  //   searchValue(search)
  // }

  return (
    <div className={classes.main}>
      <Hidden only="xs">
        <img src="/static/logo.png" className={classes.img} />
      </Hidden>

      <div className={classes.searchBlock}>
        <TextField className={classes.search}
          placeholder="Поиск..."
          defaultValue={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              onClick(search)
            }
          }}
        />
        <Typography className={classes.searchText} component="p" onClick={() => onClick(search)}>Найти</Typography>
      </div>

      {auth && auth.length === 0 && <ButtonCustom onClick={handleOpen}>
        Войти
      </ButtonCustom>}

      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <>
          <Fade in={open}>
            <div className={classes.paper}>
              <Typography className={classes.modalTitle} component="h4">Вход</Typography>
              <TextField className={classes.modalSearch} placeholder="Логин" value={login} onChange={(e) => setLogin(e.target.value)} error={error && error.login ? true : false} helperText={error && error.login ? error.login : false} />
              <TextField className={classes.modalSearch} type="password" placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value)} error={error && error.password ? true : false} helperText={error && error.password ? error.password : false} />
              <FormControlLabel
                className={classes.check}
                control={
                  <Checkbox
                    className={classes.rootCheck}
                    disableRipple
                    color="default"
                    checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
                    icon={<span className={classes.icon} />}
                    inputProps={{ 'aria-label': 'decorative checkbox' }}
                    value={saved}
                    onChange={() => setSaved(!saved)}
                  />
                }
                label="Запомнить"
              />
              <ButtonCustom onClick={handleAuth} style={{ marginTop: "110px" }}>Войти</ButtonCustom>
            </div>
          </Fade>

        </>
      </Modal>
      {isEditLogin && (
        <div
          className={"modalx"}
          onClick={(e) =>
            e.target.classList.contains("modalx")
              ? setIsEditLogin(false)
              : null
          }
        ></div>
      )}
      {auth && auth.length > 0 && <div className={classes.authBlock}>
        <TextField className={classes.authBlockName}
          onClick={() => setIsEditLogin(true)}
          disabled={isEditLogin ? false : true}
          value={auth[0].login}
          onChange={(e) => changeName(e.target.value)}
          autoFocus />
        <Typography className={classes.authBlockExit} onClick={logOut}>Выйти</Typography>
      </div>}
      <style jsx>{`
        .modalx{
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
        }
      `}</style>
    </div>
  )
}

export default Header