<template>
  <div class="relative z-[200]">
    <button 
      @click="isCartOpen = !isCartOpen"
      class="fixed bottom-8 right-8 h-16 w-16 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-secondary hover:text-black transition-all active:scale-95"
    >
      <div class="relative">
        <i class="fas fa-shopping-bag text-xl"></i>
        <span v-if="cart.length > 0" class="absolute -top-2 -right-2 bg-secondary text-black text-[10px] font-black h-5 w-5 rounded-full flex items-center justify-center border-2 border-primary">
          {{ cart.length }}
        </span>
      </div>
    </button>

    <transition name="fade">
      <div v-if="isCartOpen" @click="isCartOpen = false" class="fixed inset-0 bg-black/60 backdrop-blur-sm"></div>
    </transition>

    <transition name="slide">
      <div v-if="isCartOpen" class="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col">
        
        <div class="p-6 border-b flex justify-between items-center bg-primary text-white">
          <h2 class="text-xl font-black uppercase italic tracking-widest">Your Support</h2>
          <button @click="isCartOpen = false" class="text-white/60 hover:text-white transition-colors">
            <i class="fas fa-times text-xl"></i>
          </button>
        </div>

        <div class="flex-1 overflow-y-auto p-6 space-y-6">
          <div v-if="cart.length === 0" class="h-full flex flex-col items-center justify-center text-center space-y-6">
            <div class="h-20 w-20 bg-slate-100 rounded-full flex items-center justify-center">
              <i class="fas fa-ghost text-3xl text-slate-300"></i>
            </div>
            <p class="text-slate-500 italic">Your cart is as empty as a dry riverbed.</p>
            <NuxtLink 
              to="/merch" 
              @click="isCartOpen = false"
              class="bg-secondary text-black font-black uppercase text-xs tracking-widest px-8 py-4 rounded-xl"
            >
              View Merch Page
            </NuxtLink>
          </div>

          <div v-for="item in cart" :key="item.cartId" class="flex gap-4 bg-slate-50 p-4 rounded-2xl relative group">
            <img :src="item.selectedColor.image" class="h-24 w-20 object-cover rounded-xl bg-white shadow-sm" />
            
            <div class="flex-1">
              <div class="flex justify-between">
                <h4 class="font-bold text-primary uppercase text-sm">{{ item.name }}</h4>
                <button @click="removeFromCart(item.cartId)" class="text-slate-300 hover:text-red-500 transition-colors">
                  <i class="fas fa-trash-alt text-xs"></i>
                </button>
              </div>
                <div class="flex justify-between items-center mt-1">
                    <p class="text-secondary font-bold text-sm">${{ item.price * item.quantity }}</p>
                    
                    <div class="flex items-center bg-white border border-slate-200 rounded-lg overflow-hidden">
                    <button 
                        @click="updateItem(item.cartId, { quantity: Math.max(1, item.quantity - 1) })"
                        class="px-2 py-1 hover:bg-slate-100 text-slate-500 transition-colors"
                    >
                        <i class="fas fa-minus text-[10px]"></i>
                    </button>
                    <span class="px-3 text-xs font-black text-primary border-x border-slate-100">
                        {{ item.quantity }}
                    </span>
                    <button 
                        @click="updateItem(item.cartId, { quantity: item.quantity + 1 })"
                        class="px-2 py-1 hover:bg-slate-100 text-slate-500 transition-colors"
                    >
                        <i class="fas fa-plus text-[10px]"></i>
                    </button>
                    </div>
                </div>

              <div class="mt-4 grid grid-cols-2 gap-2">
                <select 
                  :value="item.selectedColor.colorName"
                  @change="(e) => updateColor(item, e.target.value)"
                  class="bg-white border border-slate-200 text-[10px] font-bold p-2 rounded-lg uppercase"
                >
                  <option v-for="c in item.colors" :key="c.colorName" :value="c.colorName">{{ c.colorName }}</option>
                </select>

                <select 
                  v-model="item.selectedSize"
                  class="bg-white border border-slate-200 text-[10px] font-bold p-2 rounded-lg uppercase"
                >
                  <option v-for="s in ['S', 'M', 'L', 'XL', '2XL']" :key="s" :value="s">{{ s }}</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div v-if="cart.length > 0" class="p-8 border-t bg-slate-50 space-y-4">
          <div class="flex justify-between items-center">
            <span class="text-slate-500 font-bold uppercase text-xs tracking-widest">Subtotal</span>
            <span class="text-2xl font-black text-primary">${{ cartTotal }}</span>
          </div>
          <button class="w-full bg-primary text-white py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-secondary hover:text-black transition-all">
            Secure Checkout
          </button>
          <p class="text-[10px] text-center text-slate-400 italic">Every purchase powers foundational literacy and housing.</p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
const { cart, isCartOpen, removeFromCart, updateItem, cartTotal } = useCart();

const updateColor = (item, colorName) => {
  const newColor = item.colors.find(c => c.colorName === colorName);
  updateItem(item.cartId, { selectedColor: newColor });
};
</script>

<style scoped>
.slide-enter-active, .slide-leave-active { transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1); }
.slide-enter-from, .slide-leave-to { transform: translateX(100%); }

.fade-enter-active, .fade-leave-active { transition: opacity 0.5s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>