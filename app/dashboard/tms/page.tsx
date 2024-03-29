'use client';

import { useState } from 'react';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';

import LoginIcon from '@mui/icons-material/Login';
import MinusIcon from '@heroicons/react/24/outline/MinusIcon';
import PlusIcon from '@heroicons/react/24/outline/PlusIcon';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

export default function Page() {
  const [nbMails, setnbMail] = useState(0);
  const [open, setOpen] = useState(false);

  function handleClickAdd() {
    setnbMail(nbMails + 1);
    if (nbMails === 9) {
      setOpen(true);
    }
  }

  function handleCickDec() {
    setnbMail(Math.max(nbMails - 1, 0));
  }

  function handleLoginclick() {
    setnbMail(0);
  }

  const toggleDrawer =
    (newOpen: boolean | ((prevState: boolean) => boolean)) => () => {
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
      <Stack className="flex p-4" direction="row" spacing={1}>
        <Button onClick={handleLoginclick} variant="contained">
          <span className="sr-only">Login</span>
          <LoginIcon className="w-5" />
        </Button>
        <Button onClick={handleClickAdd} variant="contained">
          <span className="sr-only">Add</span>
          <PlusIcon className="w-5" />
        </Button>
        <Button onClick={handleCickDec} variant="contained">
          <span className="sr-only">Dec</span>
          <MinusIcon className="w-5" />
        </Button>
      </Stack>

      <Badge className="my-4 p-0" badgeContent={nbMails} color="primary">
        <MailIcon fontSize="large" color="action" />
      </Badge>
      <div>
        <Button
          variant="contained"
          className="p-8 "
          onClick={toggleDrawer(true)}
        >
          Open drawer !!
        </Button>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </div>
    </div>
  );
}
