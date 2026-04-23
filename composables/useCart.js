// composables/useCart.js
export const useCart = () => {
  const cart = useState('cart', () => []);
  const isCartOpen = useState('isCartOpen', () => false);

  const addToCart = (item) => {
    // Check if the exact same item (ID + Color + Size) is already in the cart
    const existingItem = cart.value.find(i => 
      i.id === item.id && 
      i.selectedColor.hex === item.selectedColor.hex && 
      i.selectedSize === item.selectedSize
    );

    if (existingItem) {
      // FIX: Add the specific quantity selected from the detail page
      existingItem.quantity += (item.quantity || 1);
    } else {
      // If it's a new item, ensure it starts with the selected quantity
      cart.value.push({ 
        ...item, 
        cartId: Date.now() + Math.random(), 
        quantity: item.quantity || 1 
      });
    }
    isCartOpen.value = true;
  };

  const removeFromCart = (cartId) => {
    cart.value = cart.value.filter(item => item.cartId !== cartId);
  };

  const updateItem = (cartId, updates) => {
    const index = cart.value.findIndex(item => item.cartId === cartId);
    if (index !== -1) {
      cart.value[index] = { ...cart.value[index], ...updates };
    }
  };

  // UPDATED: Total now accounts for quantity
  const cartTotal = computed(() => 
    cart.value.reduce((total, item) => total + (item.price * item.quantity), 0)
  );

  return { cart, isCartOpen, addToCart, removeFromCart, updateItem, cartTotal };
};