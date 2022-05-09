import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';

// import FormHelperText from '@mui/material/FormHelperText';

import Box from '@mui/material/Box';

const Login = () => {

    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
      });
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };


    return (

        

        <Box sx={{
            width: '97%',
            backgroundColor: 'white',
            marginTop: '2rem',
            paddingTop: '2rem',
            paddingBottom: '2rem',
            '@media (max-width: 600px)': {
                marginTop: 0,
                width: '100%'
              },

        }}>
            <Box sx={{
            width: '90%',
            backgroundColor: '#f7faff',
            margin: 'auto',
            paddingTop: '2rem',
            paddingBottom: '2rem',
            '@media (max-width: 600px)': {
                paddingTop: '1rem',
                borderRadius: 2,
                paddingBottom: '1rem',

              },


        }}>
                <Box sx={{
                    border: '1px solid #D0D5DA',
                    borderRadius: 1,
                    width: '50%',
                    margin: 'auto',
                    backgroundColor: 'white',
                    '@media (max-width: 600px)': {
                        width: '90%'
                      },
                }}>
                    <Typography sx={{
                        paddingTop: '1.2rem',
                        paddingLeft: '1.9rem',
                        textAlign: 'left',
                        height: '4rem',
                        backgroundColor: '#f7faff',
                        fontSize: 22
                        
                    }}>Log in</Typography>
                    
                    
                        <Stack spacing={2} direction="column" sx={{
                            padding: '2rem'
                        }}>

                            <TextField id="outlined-basic" label="Enter your mail" variant="outlined" />

                            <FormControl sx={{ m: 1 }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                onChange={handleChange('password')}
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                    >
                                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                                }
                                label="Password"
                            />
                            </FormControl>

                              

                            <Button variant="contained">Log in</Button>
                            
                            <Stack spacing={1} direction="row" alignItems='baseline' justifyContent='center'>
                                <Typography sx={{
                                    '@media (max-width: 600px)': {
                                        fontSize: 13
                        
                                      },
                                }}
                                > Need an account?</Typography>
                                <Button variant="text" sx={{
                                    '@media (max-width: 600px)': {
                                        fontSize: 13
                        
                                      },
                                }}
                                >Sign Up</Button>

                            </Stack>
                            <Button variant="text">Forget Password?</Button>
                        </Stack>

                </Box>
            </Box>
        </Box>
       
    );
}
 
export default Login;