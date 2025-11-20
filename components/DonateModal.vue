<template>
  <!-- Modal Backdrop (Clicking here closes the modal) -->
  <div v-if="isOpen" class="modal-backdrop" @click.self="closeModal" @keydown.esc="closeModal">
    
    <!-- Modal Content -->
    <div class="modal-content-wrapper" data-aos="zoom-in" data-aos-duration="300" >
      <div class="modal-content-body">
        
        <div class="d-flex justify-content-between align-items-start mb-4">
          <h3 class="modal-title text-primary">Support Nianza Foundation</h3>
          <button @click="closeModal" type="button" class="close-btn" aria-label="Close">
            <i class="fas fa-times"></i>
          </button>
        </div>

        <p class="lead text-center mb-4">
          Your donation helps build safe, dignified shelters in the DRC.
        </p>

        <!-- Donation Amount Options -->
        <div class="donation-options mb-4">
          <button 
            v-for="amount in amounts" 
            :key="amount" 
            @click="selectAmount(amount)"
            :class="['btn', 'btn-amount', { 'btn-selected': selectedAmount === amount }]"
          >
            ${{ amount }}
          </button>
        </div>

        <!-- Custom Amount Input -->
        <div class="form-group mb-4">
          <label for="custom-amount" class="form-label">Or Enter Custom Amount ($)</label>
          <input 
            type="number" 
            id="custom-amount" 
            class="form-control" 
            v-model.number="customAmount" 
            placeholder="e.g., 150"
            @input="handleCustomInput"
          >
        </div>

        <!-- Checkout Button (Placeholder) -->
        <button class="btn btn-cta btn-lg w-100" @click="processDonation">
          <i class="fas fa-lock mr-2"></i> Donate ${{ finalAmount }}
        </button>
        
        <p class="mt-3 small text-center text-dark-grey">Secure payment integration coming soon.</p>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const isOpen = ref(false);
const selectedAmount = ref(50);
const customAmount = ref(null);
const amounts = ref([25, 50, 100, 250]);

// Computed property to determine the final amount shown in the button
const finalAmount = computed(() => {
  return customAmount.value > 0 ? customAmount.value : selectedAmount.value;
});

const openModal = () => {
  isOpen.value = true;
  document.body.classList.add('modal-open'); // Prevent body scroll
};

const closeModal = () => {
  isOpen.value = false;
  document.body.classList.remove('modal-open');
};

const selectAmount = (amount) => {
  selectedAmount.value = amount;
  customAmount.value = null; // Clear custom amount when pre-set is chosen
};

const handleCustomInput = () => {
  selectedAmount.value = 0; // Clear selected amount when custom is entered
};

const processDonation = () => {
  alert(`Processing donation of $${finalAmount.value}. Thank you!`);
  // Here is where payment gateway integration logic would go (e.g., Stripe/PayPal API call)
  closeModal();
};

// Expose the open/close methods globally so they can be called from Navbar/Footer
defineExpose({
  openModal,
  closeModal
});
</script>

<style scoped>
/* Backdrop - Blurs the content behind the modal */
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4); /* Dark semi-transparent overlay */
  backdrop-filter: blur(5px); /* The required blur effect */
  z-index: 2000; /* Ensure it is above the navbar (z-index 1030) */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  padding: var(--spacing-lg);
}

/* Modal Content Styling */
.modal-content-wrapper {
  background-color: var(--color-background);
  border-radius: var(--border-radius);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  max-width: 500px;
  width: 95%;
  position: relative;
}

.modal-content-body {
  padding: var(--spacing-xl);
}

.modal-title {
  color: var(--color-primary);
  margin-bottom: 0;
  font-weight: var(--font-weight-bold);
}

.close-btn {
  background: none;
  border: none;
  font-size: var(--font-size-xl);
  color: var(--dark-grey);
  cursor: pointer;
  padding: 0;
  transition: var(--transition-color);
}

.close-btn:hover {
  color: var(--color-accent);
}

/* Donation Options Grid */
.donation-options {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-md);
}

.btn-amount {
  background-color: var(--light-grey);
  color: var(--dark-grey);
  padding: var(--spacing-sm);
  border: 1px solid var(--light-grey);
  border-radius: var(--border-radius);
  font-weight: var(--font-weight-bold);
  transition: var(--transition-default);
}

.btn-amount:hover {
  background-color: var(--color-secondary);
  color: var(--color-text-light);
}

.btn-selected {
  background-color: var(--color-primary) !important;
  color: var(--color-text-light) !important;
  border-color: var(--color-primary) !important;
  box-shadow: var(--box-shadow);
}

.form-label {
  font-weight: var(--font-weight-bold);
  color: var(--dark-grey);
  margin-bottom: var(--spacing-sm);
}
</style>