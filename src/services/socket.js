import { io } from 'socket.io-client';
import { useMessageStore } from '../stores/messageStore';

// Conexión al servidor Socket.IO
const socket = io('https://ikcount.com/live?atoken=dG9ueW1veWE4OTpBUElfS0VZQGVjYWFjODQwMjNiNTdhMjdiOTJiNGM1ZDgwNTVjZTI4MjUzZTY1MzMxYzYwNWFhYjI2NGFkNDMyMGJhZTQxNTM4MmJkMjFiMDE0NGE1YmU4MTI4YzU5NTcwOTllMWEzMzZlNGEyZmQ1YzAxNTQ0MGNjMGQ5ODI2NzEzOTI4ZDcxOklLTEFCMDA1', {

});
// Manejo de eventos
socket.on('connect', () => {
  console.log('Conectado al servidor Socket.IO');
});
// Manejo de eventos
socket.on('raw', (data) => {
    console.log('obteniendo info socket');
    console.log(data.current_aforo)
    const messageStore = useMessageStore()
    messageStore.updateMessage(data.current_aforo);
  });


socket.on('disconnect', () => {
  console.log('Desconectado del servidor Socket.IO');
});

  socket.on('connect_error', (err) => {
    console.error('Error de conexión:', err);
  });
  

export default socket;
