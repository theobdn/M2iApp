import { TextField, Button, Grid, Avatar, Typography, FormControlLabel, Link, Checkbox, Paper } from "@mui/material";
import Box from "@mui/material/Box";
import { BasicButton } from "../../Components/BasicButton";
import LockIcon from '@mui/icons-material/Lock';
import { useNavigate, useParams } from "react-router-dom";

interface RegisterPageProps {
    title: string
    setEmail: (email:string) => any
    setPassword: (password:string) => any
    handleAction: () => void
}

export const RegisterPage = ({title, setEmail, setPassword, handleAction} : RegisterPageProps) => {

    return (
        <Grid container component="main" sx={{ height: '100vh' }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url(https://source.unsplash.com/random)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
          {title} Form
          </Typography>
          <Box component="form" sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <BasicButton title={title} handleAction={handleAction}/>
            <Grid container>
              <Grid item xs>
                  {window.location.pathname === "/login" ? <Link href="/register" variant="body2">
                  Vous n'avez pas de compte ? Créer un compte
                </Link> : <Link href="/login" variant="body2">
                  Vous avez déjà un compte ? Se connecter
                </Link>}
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
        // <div>
        //     <div className="heading-container">
        //         <h1>{title} Form</h1>
        //     </div>

        //     <Box
        //         component="form"
        //         sx={{
        //             '& > :not(style)': { m: 1, width: '25ch' },
        //         }}
        //         noValidate
        //         autoComplete="off"
        //     >
        //         <TextField id="email" label="Enter the Email" type="email" variant="outlined" onChange={(e) => setEmail(e.target.value)}/>
        //         <TextField id="password" label="Enter the Password" type="password" variant="outlined" onChange={(e) => setPassword(e.target.value)}/>
        //     </Box>

        //     <BasicButton title={title} handleAction={handleAction}/>
        // </div>
    )
}