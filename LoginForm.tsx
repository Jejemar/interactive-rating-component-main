import { Button, makeStyles } from '@material-ui/core'
import React, { useLayoutEffect, useRef, useState } from 'react'

import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import clsx from 'clsx'
import google from '../images/google.svg'
import lock from '../images/lock.svg'

const useStyles = makeStyles(({ spacing, palette }) => ({
  card: {
    alignContent: 'center',
    // padding: `${spacing()}px ${spacing(2)}px`,
    borderRadius: spacing(3)
  },
  title: {
    textAlign: 'center',
    padding: `${spacing()}px 0`
  },
  formContainer: {
    alignItems: 'center',
    paddingTop: spacing(),
    backgroundColor: '#e9e0f9',
    borderBottomLeftRadius: spacing(3),
    borderBottomRightRadius: spacing(3)
  },
  inputs: {
  },
  input: {
    minWidth: 320,
    paddingBottom: spacing(),
    paddingTop: spacing(),
    marginLeft: spacing(1.5),
    marginRight: spacing(1.5),

  },
  actions: {

  },
  forgotPw: {
    '&:hover': {
      textDecoration: 'underline',
      textDecorationColor: palette.secondary.main
    },
    cursor: 'pointer',
    fontSize: 13,
    paddingBottom: 24,
    color:palette.secondary.light
  },
  loginBtn: {

  },

  forgotPw2: {
    '&:hover': {
      // textDecoration: 'underline',
      textDecorationColor: palette.secondary.main
    },
    // cursor: 'pointer',
    fontSize: 13,
    paddingBottom: 24
  },

  box_header: {

    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#c7c5db',
    borderTopLeftRadius: spacing(3),
    borderTopRightRadius: spacing(3),


  },


}))


const LoginForm: React.FunctionComponent = (props) => {
  const [visibleSide, setVisibleSide] = useState<string>('front')
  const classes = useStyles()

  const handleFlip = () => {
    visibleSide === 'front' ? setVisibleSide('back') : setVisibleSide('front')
  }

  return (
    <>
      {visibleSide ==='front' && (
        <Card className={classes.card}>
          <div className={classes.box_header}><Typography className={classes.title} variant="h6">Login</Typography></div>
          <Grid container direction="column" className={clsx(classes.formContainer, classes.inputs)} color="secondary">
            <TextField className={classes.input} variant='outlined' color="primary" label="E-mail" required />
            <TextField className={classes.input} variant='outlined' color="primary" label="Password" required type="password" />
            <Button className={classes.loginBtn} variant="contained" startIcon={<img src={lock} alt="Lock" />}>Login</Button>
            <p>
              <span className={classes.forgotPw2}>Haven't Signed Up Yet?</span>&nbsp;<span className={classes.forgotPw} onClick={handleFlip}>Sign up now</span>
              <br /><span className={classes.forgotPw2}>Forgot your password?</span>&nbsp;<span className={classes.forgotPw}>Reset</span>
            </p>
          </Grid>
        </Card>

      )}
      {visibleSide === 'back' && (
      <Card className={classes.card}>
        <div className={classes.box_header}><Typography className={classes.title} variant="h6">Sign Up</Typography></div>
        <Grid container direction="column" className={clsx(classes.formContainer, classes.inputs)} color="secondary">
          <TextField className={classes.input} variant='outlined' color="primary" label="Full Name" required />
          <TextField className={classes.input} variant='outlined' color="primary" label="Username" required  />
          <TextField className={classes.input} variant='outlined' color="primary" label="Password" required type='password' />
          <TextField className={classes.input} variant='outlined' color="primary" label="Confirm Password" required type='password' />
          <Button className={classes.loginBtn} variant="contained" startIcon={<img src={lock} alt="Lock" />}>Sign Up</Button>
          <p>
            <span className={classes.forgotPw2}>Already Signed Up?</span>&nbsp;<span className={classes.forgotPw} onClick={handleFlip}>Log in now</span>
          </p>
        </Grid>
      </Card>
      )}
    </>
  )
}

export default LoginForm
