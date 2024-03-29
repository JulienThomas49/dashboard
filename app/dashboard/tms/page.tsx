'use client';
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import {
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
} from '@mui/material';
import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import { List } from '@mui/icons-material';
import { InboxIcon } from '@heroicons/react/24/outline';

export default function Page() {
  const [nbMails, setnbMail] = useState(0);
  const [open, setOpen] = useState(false);

  function handleClickAdd() {
    setnbMail(nbMails + 1);
  }

  function handleCickDec() {
    setnbMail(Math.max(nbMails - 1, 0));
  }

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Stack className="p-8" direction="row" spacing={4}>
        <Button onClick={handleClickAdd} variant="contained">
          +
        </Button>
        <Button onClick={handleCickDec} variant="contained">
          -
        </Button>
      </Stack>

      <Badge className="my-4 p-0" badgeContent={nbMails} color="primary">
        <MailIcon fontSize="large" color="action" />
      </Badge>
      <div>
        <Button variant="contained" className="p-8 " onClick={toggleDrawer(true)}>
          click me !!
        </Button>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </div>
    </div>
  );
}
