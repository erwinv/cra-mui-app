import { useEffect, useState } from 'react'
import { Avatar, Card, CardHeader, Container, IconButton, Menu, MenuItem, ListItemIcon } from '@mui/material'
import { MoreVert as MoreVertIcon, Logout as LogoutIcon } from '@mui/icons-material'

// import { initializeApp } from 'firebase/app'
// import { IdTokenResult, getAuth } from 'firebase/auth'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'

const config = {
  apiKey: "AIzaSyDIZewt0XohkPnRDLEtyThAtzWi9beaGOc",
  authDomain: "erwinv-personal-website.firebaseapp.com",
  databaseURL: "https://erwinv-personal-website.firebaseio.com",
  projectId: "erwinv-personal-website",
  storageBucket: "erwinv-personal-website.appspot.com",
  messagingSenderId: "734101838842",
  appId: "1:734101838842:web:b795ffa9b8979c63f96243",
  measurementId: "G-ZRKHRDKG04"
}

const authUIConfig: firebaseui.auth.Config = {
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    signInSuccessWithAuthResult: () => false,
  },
  tosUrl: '',
  privacyPolicyUrl: '',
}

const app = firebase.initializeApp(config)
const auth = app.auth()
const authUI = new firebaseui.auth.AuthUI(auth)
const uiElId = 'firebaseui-auth-container'

function Firebase() {
  const [user, setUser] = useState<firebase.User | null>(null)
  const [menuAnchor, setMenuAnchor] = useState<HTMLElement | null>(null)

  useEffect(() => {
    auth.setPersistence(firebase.auth.Auth.Persistence.SESSION)
    authUI.start(`#${uiElId}`, authUIConfig)
    return auth.onAuthStateChanged(user => setUser(user))
  }, [])

  const name = user?.displayName ?? ''
  const email = user?.email ?? ''
  const photo = user?.photoURL ?? ''

  const userCard = <Card>
    <CardHeader
      avatar={<Avatar alt={name} src={photo} />}
      action={
        <>
          <IconButton onClick={(e) => setMenuAnchor(e.currentTarget)}>
            <MoreVertIcon />
          </IconButton>
        </>
      }
      title={name}
      subheader={email}
    />
  </Card>

  const userMenu = <Menu anchorEl={menuAnchor} open={Boolean(menuAnchor)} onClose={() => setMenuAnchor(null)}>
    <MenuItem onClick={() => {
      setMenuAnchor(null)
      auth.signOut()
      authUI.reset()
      authUI.start(`#${uiElId}`, authUIConfig)
    }
    }>
      <ListItemIcon><LogoutIcon fontSize='small' /></ListItemIcon>
      Sign out
    </MenuItem>
  </Menu>

  const signInUi = <div id={uiElId} />

  return (
    <>
      <Container maxWidth='xs'>
        {user ? userCard : signInUi}
      </Container>
      {userMenu}
    </>
  )
}

export default Firebase
