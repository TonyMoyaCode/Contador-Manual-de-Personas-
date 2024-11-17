import { defineStore } from 'pinia';

export const useMessageStore = defineStore('message', {
  state: () => ({
    message: 0, // Valor inicial del contador
  }),
  actions: {
    updateMessage(newMessage) {
      this.message = newMessage; // Actualiza el mensaje global
    },
  },
  getters: {
    // Getter para obtener el valor actual del mensaje
    value: (state) => state.message,
  },
});
