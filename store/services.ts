// store/services.ts
import { defineStore } from 'pinia';

export const useServicesStore = defineStore({
  id: 'services',
  state: () => ({
    services: [
      {
        id: 1,
        name: 'Business Photography',
        description: 'High-quality photos for your business.',
        price: '$200/hr'
      },
      {
        id: 2,
        name: 'Portrait Photography',
        description: 'Professional portraits for individuals.',
        price: '$150/hr'
      }
      // Add more services here
    ]
  }),
  actions: {
    // Action functions here
  }
});
