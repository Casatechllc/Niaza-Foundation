<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div 
      v-if="isOpen" 
      class="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-primary/40 backdrop-blur-md border-2 border-secondary"
      @click.self="closeModal"
    >
      <div 
        v-motion
        :initial="{ opacity: 0, scale: 0.9, y: 20 }"
        :enter="{ opacity: 1, scale: 1, y: 0 }"
        class="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl border-2 border-secondary"
      >
        <div class="bg-primary/90 px-8 py-6 border-b border-secondary/20">
          <div class="flex items-center justify-between">
            <h3 class="text-2xl font-bold text-secondary">Support Our Mission</h3>
            <button 
              @click="closeModal" 
              class="rounded-full p-2 text-slate-100 hover:bg-slate-200 hover:text-primary transition-colors"
              aria-label="Close modal"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <p class="mt-2 text-slate-200">
            Your contribution directly funds sustainable housing and dignity for families in the DRC.
          </p>
        </div>

        <div class="p-8">
          <label class="block text-sm font-bold uppercase tracking-wider text-slate-500 mb-4">
            Select an Amount
          </label>
          <div class="grid grid-cols-2 gap-4 mb-8 sm:grid-cols-4">
            <button 
              v-for="amount in amounts" 
              :key="amount" 
              @click="selectAmount(amount)"
              :class="[
                'flex items-center justify-center rounded-xl py-3 font-bold transition-all border-2',
                selectedAmount === amount 
                  ? 'bg-accent border-accent text-primary shadow-lg scale-105' 
                  : 'bg-white border-secondary/20 text-slate-600 hover:border-secondary/70 hover:text-secondary'
              ]"
            >
              ${{ amount }}
            </button>
          </div>

          <div class="mb-8">
            <label for="custom-amount" class="block text-sm font-bold uppercase tracking-wider text-slate-500 mb-2">
              Or Enter Custom Amount
            </label>
            <div class="relative">
              <span class="absolute left-4 top-1/2 -translate-y-1/2 text-xl font-bold text-slate-400">$</span>
              <input 
                type="number" 
                id="custom-amount" 
                v-model.number="customAmount" 
                @input="handleCustomInput"
                placeholder="0.00"
                class="w-full rounded-2xl border-2 border-secondary/20 bg-slate-50 py-4 pl-10 pr-4 text-xl font-bold text-primary focus:border-secondary focus:outline-none focus:ring-0 transition-colors"
              />
            </div>
          </div>

          <button 
            @click="processDonation"
            class="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-accent/80 py-5 text-xl font-bold text-primary shadow-xl transition-all hover:bg-accent  hover:scale-[1.02] active:scale-95"
          >
            <i class="fas fa-heart text-tertiary group-hover:animate-pulse"></i>
            <span>Donate ${{ finalAmount || 0 }}</span>
          </button>
          
          <div class="mt-6 flex items-center justify-center gap-2 text-slate-400 text-sm">
            <i class="fas fa-lock"></i>
            <span>Secure, encrypted transaction</span>
          </div>
        </div>

        <div class="bg-slate-50 px-8 py-4 text-center">
          <p class="text-xs text-slate-400 uppercase tracking-widest font-semibold">
            Nianza Foundation is a registered non-profit
          </p>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, computed, watch } from 'vue';

// Connect to Global State from app.vue
const isOpen = useState('isDonateModalOpen');

const selectedAmount = ref(100);
const customAmount = ref(null);
const amounts = [25, 50, 100, 250];

const finalAmount = computed(() => {
  return customAmount.value > 0 ? customAmount.value : selectedAmount.value;
});

const closeModal = () => {
  isOpen.value = false;
};

// Handle Body Scroll Locking
watch(isOpen, (newVal) => {
  if (process.client) {
    if (newVal) document.body.classList.add('overflow-hidden');
    else document.body.classList.remove('overflow-hidden');
  }
});

const selectAmount = (amount) => {
  selectedAmount.value = amount;
  customAmount.value = null;
};

const handleCustomInput = () => {
  selectedAmount.value = 0;
};

const processDonation = () => {
  if (finalAmount.value <= 0) return alert('Please enter a valid amount');
  
  alert(`Thank you for your donation of $${finalAmount.value}! Redirecting to secure checkout...`);
  closeModal();
};

// Keep exposed for legacy parent calls if necessary
defineExpose({ openModal: () => isOpen.value = true, closeModal });
</script>