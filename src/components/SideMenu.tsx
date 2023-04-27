import React from 'react'
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Paper  from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import MenuList from '@mui/material/MenuList';

function SideMenu() {
  return (
    <div className="SideMenu ">
        <Stack direction="row" spacing={2}>
            <Paper>
                
                <MenuList>
                    <MenuItem> <i className="fa-solid fa-chart-line"></i> Dashboard</MenuItem>
                    <MenuItem> <i className="fa-solid fa-keyboard"></i> Input</MenuItem>
                    <MenuItem> <i className="fa-solid fa-calendar-day"></i> Daily</MenuItem>
                    <MenuItem> <i className="fa-solid fa-calendar-days"></i> Monthly</MenuItem>
                    <MenuItem>Yearly</MenuItem>
                    <MenuItem> <i className="fa-solid fa-chart-line"></i> Home Energy</MenuItem>
                    <MenuItem> <i className="fa-solid fa-keyboard"></i> Transportation</MenuItem>
                    <MenuItem> <i className="fa-solid fa-calendar-day"></i> Water</MenuItem>
                    <MenuItem> <i className="fa-solid fa-calendar-days"></i> Waste</MenuItem>
                    <MenuItem>Recycling</MenuItem>
                </MenuList>
            </Paper>
        </Stack>
        
    </div>
  )
}

export default SideMenu
