import './Header.css'
import Avatar from '@mui/material/Avatar';
import ToggleButton from '@mui/material/ToggleButton';
import ViewListIcon from '@mui/icons-material/ViewList';
import Typography from '@mui/material/Typography';


function stringToColor(string) {
    let hash = 0;
    let i;
  
    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */
  
    return color;
  }

function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
        width: 50,
        height: 50 
      },
      children: `${name.split('')[0][0].toUpperCase()}${name.split('')[1][0].toUpperCase()}`,
    };
  }

const Header = ({setState,state,loggedUser,isLoading}) => {
    const handleClick = (anchor, open) =>{
      setState({ ...state, [anchor]: open });
    }
    return (
            <div className="header">
              <div className="toggle">
                <ToggleButton value="list" aria-label="list" sx={{border: 'none'}} onClick={()=>handleClick('left',true)}>
                  <ViewListIcon />
                </ToggleButton>
              </div>
              
              {!isLoading && <Typography sx={{
                marginLeft:'30rem',
                fontSize:20,
                '@media (max-width: 600px)': {
                  margin: 0,
                  fontSize:18,
                  
                },
                }}>{loggedUser.staffName}</Typography> }
              {!isLoading && <Avatar {...stringAvatar(loggedUser.companyName)} /> }
            </div>

    );
}
 
export default Header;