<template>
  <div class="counter">
    <h1>Contador Manual</h1>
    <p>Personas: {{ current }}</p>
    <div class="buttons">
      <button @click="increment">Incrementar</button>
      <button @click="decrement">Decrementar</button>
    </div>
  </div>
</template>

<script setup>
import { ref,watchEffect, onMounted, onUnmounted } from 'vue';
import { useCounterStore } from '../stores/counter';
import api from '../services/api';
import socket from '../services/socket';
import { useMessageStore } from '../stores/messageStore';

var current;

const data1= {
"type": "manual-add",
"quantity": 1,
"client": "DEMO001",
"location": "DEMO001A1L1",
"mac_address": "DEMO001A1L1Z1MC2"
}
// Función para interactuar con la API REST
const increment = async () => {
  try {
    await api.post('https://ikcount.com/iklab/ikcount/api/counting/command?atoken=dG9ueW1veWE4OTpBUElfS0VZQGVjYWFjODQwMjNiNTdhMjdiOTJiNGM1ZDgwNTVjZTI4MjUzZTY1MzMxYzYwNWFhYjI2NGFkNDMyMGJhZTQxNTM4MmJkMjFiMDE0NGE1YmU4MTI4YzU5NTcwOTllMWEzMzZlNGEyZmQ1YzAxNTQ0MGNjMGQ5ODI2NzEzOTI4ZDcxOklLTEFCMDA1', data1);
    current = useMessageStore().message;
    console.log(current)
}catch (error) {
    console.error('Error al incrementar:', error);
  }
};
const data2= {
"type": "manual-sub",
"quantity": 1,
"client": "DEMO001",
"location": "DEMO001A1L1",
"mac_address": "DEMO001A1L1Z1MC2"
}
const decrement = async () => {
  try {
    
      await api.post('https://ikcount.com/iklab/ikcount/api/counting/command?atoken=dG9ueW1veWE4OTpBUElfS0VZQGVjYWFjODQwMjNiNTdhMjdiOTJiNGM1ZDgwNTVjZTI4MjUzZTY1MzMxYzYwNWFhYjI2NGFkNDMyMGJhZTQxNTM4MmJkMjFiMDE0NGE1YmU4MTI4YzU5NTcwOTllMWEzMzZlNGEyZmQ1YzAxNTQ0MGNjMGQ5ODI2NzEzOTI4ZDcxOklLTEFCMDA1', data2 );
     
    
  } catch (error) {
    console.error('Error al decrementar:', error);
  }
};


// Conexión a Socket.IO
onMounted(() => {current = useMessageStore().message;
});

onUnmounted(() => {
  socket.off('updateCount');
});

</script>

<style scoped>
.counter {
  text-align: center;
  margin: 50px auto;
  max-width: 300px;
}
.buttons button {
  margin: 5px;
  padding: 10px 15px;
  font-size: 16px;
  cursor: pointer;
}
</style>

