import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';
function LoginDialog() {
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleLogin = () => {
    if (username && password) {
      console.log('Logging in with:', { username, password });
      setOpen(false);
    } else {
      alert('Please enter both username and password');
    }
  };
  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen} data-testid="login">
        Login
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Username"
            type="text"
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            data-testid="username"
          />
          <TextField
            margin="dense"
            label="Password"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            data-testid="password"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary" data-testid="cancel">
            Cancel
          </Button>
          <Button onClick={handleLogin} color="primary" data-testid="dia-login">
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default LoginDialog;