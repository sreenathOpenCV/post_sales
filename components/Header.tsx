"use client";

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide, { SlideProps } from '@mui/material/Slide';
import { forwardRef } from 'react';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail'
import Link from 'next/link';
import { TextField } from '@mui/material';

// Define the Transition component
const Transition = forwardRef<HTMLDivElement, SlideProps>((props, ref) => {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [openPopup, setOpenPopup] = React.useState(false);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickOpenPopup = () => {
    setOpenPopup(true);
  };

  const handleClosePopup = () => {
    setOpenPopup(false);
  };

  return (
    <div className="container mx-auto flex w-full p-2 m-4">
      <div className="border border-gray-300 w-full bg-white shadow-lg rounded-lg">
        <div className="flex justify-between p-2 rounded w-full">
          <div className='flex flex-row w-5/6'>
            <Button variant="outlined" onClick={handleClickOpenPopup} sx={{width:"100%", height: "100%"}}>
            </Button>            
            <Dialog
      open={openPopup}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClosePopup}
      aria-describedby="alert-dialog-slide-description"
      fullWidth={true}  // Ensures the dialog takes up the full width of the container
      maxWidth="sm"  // Adjust this value to control the maximum size of the dialog
    >
      <DialogTitle>{"Metro Search"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          Navigate to any component you want...!
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="search"
          label="Search Component"
          type="search"
          fullWidth  // Makes the search box take up the full width of the dialog content
          variant="outlined"
          placeholder="Type here to search..."
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClosePopup}>Disagree</Button>
        <Button onClick={handleClosePopup} color="primary">
          Agree
        </Button>
      </DialogActions>
    </Dialog>
          <div className="flex justify-center px-2">
            <button className="p-2 border rounded-xl" onClick={handleClickOpenPopup}>
              <SearchIcon sx={{ color: "black" }}/>
            </button>
          </div>
          </div>  
          <div className="flex">
          <div className='relative right-0'>
          <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
          <Tooltip title="message">
            <Badge badgeContent={4} color="primary">
              <MailIcon color="action" />
            </Badge>
            </Tooltip>
            <Tooltip title="Satya Mallik">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
              >
                <Avatar sx={{ width: 32, height: 32 }} src="/satyaMallick.png"></Avatar>
              </IconButton>
            </Tooltip>
          </Box>   
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&::before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem onClick={handleClose}>
              <Avatar /> Profile
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <PersonAdd fontSize="small" />
              </ListItemIcon>
              Add another account
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              Settings
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              <Link href='/api/auth/signout'>Logout</Link> 
            </MenuItem>
          </Menu>         
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
