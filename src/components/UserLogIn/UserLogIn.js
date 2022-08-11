import React, {useState} from 'react';
import './UserLogIn.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import EmailIcon from '@mui/icons-material/Email';

function App() {
  const [open, setOpen] = useState(false);
  const [openSignIn, setOpenSignIn] = useState(false);

  function singUp(e) {
    e.preventDefault();
    //signup code here..

    setOpen(false)
  }

  function singIn(e) {
    e.preventDefault();
    // signin code here..

    setOpenSignIn(false)
  }
  return (
    <div className="app">      
    
      <div className="app__header">
        <img 
          className=""
          src=""
          alt=""
        />

        <Modal
          open={open}
          onClose={() => setOpen(false)} >
          <Box className="modal__box">
            <div className="app__signup__leftSection">
              <div 
                className="app__headerImage"
              />
            </div>
            <div className="app__signup__rightSection">
              <form className="app__singup">
                <p className="title">Sign Up</p>
                <small className="UserAgreement ">
                  By continuing, you are setting up a Reddit account and agree to our 
                  <a target="_blank" rel="noreferrer" href="https://www.redditinc.com/policies/user-agreement"> User Agreement</a> and <a target="_blank" rel="noreferrer" href="https://www.redditinc.com/policies/privacy-policy">Privacy Policy</a>. 
                </small>
                <Button className="google__btn" variant="outlined" startIcon={<GoogleIcon />}>
                  Continue with Google
                </Button>
                <Button className="apple__btn" variant="outlined" startIcon={<AppleIcon />}>
                  Continue with Apple
                </Button>
                <h5 className="app__signup__or">OR</h5>
                <TextField id="outlined-basic" label="Email" variant="outlined" />
                {/* <TextField id="outlined-basic" label="password" variant="outlined" /> */}
                <Button className="app__signupForm__btn" variant="contained" type="submit" onClick={singUp}>Sing Up</Button>
                <small className="already__redditor">Already a redditor? <span><a target="_blank" href="" rel="noreferrer">LOG IN</a></span></small>
              </form>
            </div>

          </Box>
        </Modal>

        <Modal
          open={openSignIn}
          onClose={() => setOpenSignIn(false)} >
          <Box className="modal__box">
            <div className="app__signup__leftSection">
              <div 
                className="app__headerImage"
              />
            </div>
            <div className="app__signup__rightSection">
              <form className="app__singup">
                <p className="title">Log In</p>
                <small className="UserAgreement__signin ">
                  By continuing, you are agree to our 
                  <a target="_blank" rel="noreferrer" href="https://www.redditinc.com/policies/user-agreement"> User Agreement</a> and <a target="_blank" rel="noreferrer" href="https://www.redditinc.com/policies/privacy-policy">Privacy Policy</a>. 
                </small>
                <Button className="google__btn" variant="outlined" startIcon={<GoogleIcon />}>
                  Continue with Google
                </Button>
                <Button className="apple__btn" variant="outlined" startIcon={<AppleIcon />}>
                  Continue with Apple
                </Button>
                <Button className="apple__btn" variant="outlined" startIcon={<EmailIcon />}>
                  Continue with Email
                </Button>
                <h5 className="app__signin__or">OR</h5>
                <TextField id="outlined-basic" label="Email" variant="outlined" />
                <br />
                <TextField id="outlined-basic" label="password" variant="outlined" />
                <Button className="app__signupForm__btn" variant="contained" type="submit" onClick={singIn}>Log In</Button>
                <small className="forget__pass">Forgot your username or password ?</small>
                <small className="already__redditor">New to Reddit? <span><a target="_blank" rel="noreferrer" href="" >SIGN UP</a></span></small>
              </form>
            </div>

          </Box>
        </Modal>
        
        <div className="app__loginContainer">
          <Button className="app__login__btn" variant="contained" onClick={() => setOpenSignIn(true)}>Log In</Button>
          <Button className="app__signup__btn" variant="contained" onClick={() => setOpen(true)}>Sing Up</Button>
          {/* <Button variant="contained">Logout</Button> */}
        </div>

      </div>     

    </div>
  );
}

export default App;
