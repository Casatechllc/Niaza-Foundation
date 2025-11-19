<template>
  <div class="nianza-merch section-padding">
    <div class="container">
      
      <div class="alert alert-warning text-center mb-5" data-aos="fade-down">
        <i class="fas fa-exclamation-triangle mr-2"></i> 
        **NOTE:** This merchandise catalog uses sample data for demonstration. Products are not currently available for purchase.
      </div>
      
      <header class="text-center mb-5" data-aos="fade-down">
        <h1 class="display-4 font-weight-bold text-primary">
          <i class="fas fa-tshirt mr-3"></i> Merchandise for Awareness
        </h1>
        <p class="lead text-dark-grey">
          Show your support for dignified housing in the DRC. Every purchase helps us spread the word about our mission.
        </p>
      </header>

      <section class="mb-5">
        <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
          <div v-for="item in merchItems" :key="item.id" class="col" data-aos="fade-up">
            <div class="product-card card h-100 shadow hover-card">
              <img :src="item.imageUrl" :alt="item.name" class="card-img-top product-image" onerror="this.onerror=null;this.src='https://placehold.co/400x300/f4f4f4/333333?text=Nianza+Merch';" />

              <div class="card-body text-center">
                <h5 class="card-title text-primary font-weight-bold">{{ item.name }}</h5>
                <p class="card-text text-dark-grey small">{{ item.description }}</p>
                <p class="h4 text-accent mb-3">${{ item.price.toFixed(2) }}</p>
                
                <button class="btn btn-primary w-100" disabled>
                  <i class="fas fa-shopping-cart mr-2"></i> Purchase (Coming Soon)
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <footer class="text-center mt-5 p-4 bg-primary-light rounded" data-aos="fade-up">
        <p class="h4 text-primary mb-3">Can't wait? Donate today and spread awareness!</p>
        <button class="btn btn-cta btn-lg" @click="openDonateModal">
          <i class="fas fa-dollar-sign mr-2"></i> Donate Now
        </button>
      </footer>

    </div>
  </div>
</template>

<script setup>
import { ref, inject } from 'vue';

// --- MODULAR DATA START (WILL BE MOVED LATER) ---

// Placeholder Merch Data (remains the temporary data source)
const merchItems = ref([
  { id: 1, name: 'Nianza Logo T-Shirt', price: 24.99, description: 'Classic cotton tee with the Nianza Foundation tree logo.', imageUrl: 'https://placehold.co/400x300/001C4E/4DAE3D?text=T-Shirt' },
  { id: 2, name: 'DRC Hope Bracelet', price: 9.99, description: 'Adjustable paracord bracelet, 100% of profit goes to shelter.', imageUrl: 'https://placehold.co/400x300/0082C0/FFFFFF?text=Bracelet' },
  { id: 3, name: 'Foundation Mug', price: 14.50, description: 'Ceramic mug for your morning coffee. Durable and dishwasher safe.', imageUrl: 'https://placehold.co/400x300/15623E/FFFFFF?text=Mug' },
  { id: 4, name: 'Shelter Builder Cap', price: 29.99, description: 'High-quality embroidered cap for sunny days.', imageUrl: 'https://placehold.co/400x300/4DAE3D/001C4E?text=Cap' },
  { id: 5, name: 'Kinshasa Solidarity Sticker', price: 4.00, description: 'Waterproof vinyl sticker for laptops and water bottles.', imageUrl: 'https://placehold.co/400x300/001C4E/0082C0?text=Sticker' },
]);

// --- MODULAR DATA END ---

// Inject the global modal function
const openDonateModal = inject('openDonateModal');

// Set the page title
useHead({
  title: 'Merch - Nianza Foundation',
});
</script>

<style scoped>
.nianza-merch {
  padding-top: var(--spacing-xl);
  min-height: 70vh; /* Ensure content pushes the footer down */
}

.product-image {
  height: 250px;
  object-fit: cover;
  border-bottom: 1px solid var(--light-grey);
}

.product-card {
  border-radius: var(--border-radius);
  transition: var(--transition-default);
}
.alert-warning {
    background-color: #fff3cd; 
    border-color: #ffc107;
    color: #856404;
}
</style>