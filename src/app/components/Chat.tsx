'use client';

import React, { useState, ChangeEvent } from 'react';
import { Box, Card, TextField, Button, List, ListItem, ListItemText } from '@mui/material';

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState<string>('');

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, input]);
      setInput('');
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <List sx={{ flex: 1, overflowY: 'hidden' }}>
        {messages.map((msg, index) => (
          <ListItem key={index}>
            <ListItemText primary={msg} />
          </ListItem>
        ))}
      </List>
      <Box sx={{ display: 'flex', p: 2, borderTop: '1px solid #e0e0e0' }}>
        <TextField
          fullWidth
          value={input}
          onChange={handleInputChange}
          placeholder="Type a message"
          variant="outlined"
        />
        <Button onClick={sendMessage} variant="contained" sx={{ ml: 2 }}>
          Send
        </Button>
      </Box>
    </Card>
  );
};

export default Chat;
