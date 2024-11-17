<template>
  <div class="counter">
    <h1>Contador Manual</h1>
    <p>Personas: {{ messageStore.value }}</p>
    <div class="buttons">
      <button @click="increment">Incrementar</button>
      <button @click="decrement">Decrementar</button>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';
import { useMessageStore } from '../stores/messageStore';
import api from '../services/api';
import socket from '../services/socket';



// Datos para incrementar y decrementar
const data1 = {
  type: "manual-add",
  quantity: 1,
  client: "DEMO001",
  location: "DEMO001A1L1",
  mac_address: "DEMO001A1L1Z1MC2",
};

const data2 = {
  type: "manual-sub",
  quantity: 1,
  client: "DEMO001",
  location: "DEMO001A1L1",
  mac_address: "DEMO001A1L1Z1MC2",
};

// Función para incrementar el conteo
const increment = async () => {
  try {
    await api.post('https://ikcount.com/iklab/ikcount/api/counting/command?atoken=dG9ueW1veWE4OTpBUElfS0VZQGVjYWFjODQwMjNiNTdhMjdiOTJiNGM1ZDgwNTVjZTI4MjUzZTY1MzMxYzYwNWFhYjI2NGFkNDMyMGJhZTQxNTM4MmJkMjFiMDE0NGE1YmU4MTI4YzU5NTcwOTllMWEzMzZlNGEyZmQ1YzAxNTQ0MGNjMGQ5ODI2NzEzOTI4ZDcxOklLTEFCMDA1', data1);
  } catch (error) {
    console.error('Error al incrementar:', error);
  }
};

// Función para decrementar el conteo
const decrement = async () => {
  try {
    await api.post('https://ikcount.com/iklab/ikcount/api/counting/command?atoken=dG9ueW1veWE4OTpBUElfS0VZQGVjYWFjODQwMjNiNTdhMjdiOTJiNGM1ZDgwNTVjZTI4MjUzZTY1MzMxYzYwNWFhYjI2NGFkNDMyMGJhZTQxNTM4MmJkMjFiMDE0NGE1YmU4MTI4YzU5NTcwOTllMWEzMzZlNGEyZmQ1YzAxNTQ0MGNjMGQ5ODI2NzEzOTI4ZDcxOklLTEFCMDA1', data2);
  } catch (error) {
    console.error('Error al decrementar:', error);
  }
};

const messageStore = useMessageStore();

// Conexión a Socket.IO para actualizar el conteo en tiempo real
onMounted(() => {
  socket.on('updateCount', (newCount) => {
    messageStore.value = newCount; // Actualiza el valor en tiempo real
  });
});

onUnmounted(() => {
  socket.off('updateCount'); // Desconecta el evento al desmontar el componente
});

// Conexión a Socket.IO para actualizaciones en tiempo real
onMounted(() => {
  socket.on('raw', (data) => {
    messageStore.updateMessage(data.current_aforo); // Actualiza en tiempo real el valor del conteo
  });
});

onUnmounted(() => {
  socket.off('raw'); // Desconecta el evento al desmontar el componente
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

