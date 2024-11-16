import { defineStore } from 'pinia';

export const useMessageStore = defineStore('message', {
  state: () => ({
    message: 'Este es un mensaje global',
  }),
  actions: {
    updateMessage(newMessage) {
      this.message = newMessage;  // Actualizamos el mensaje
    }
  }
});