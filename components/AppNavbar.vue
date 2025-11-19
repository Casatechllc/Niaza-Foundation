<template>
  <nav ref="navbarRef" class="navbar navbar-expand-lg navbar-dark fixed-top" :style="{ backgroundColor: 'var(--color-primary)' }">
    <div class="container-fluid container-xl">
      
      <NuxtLink class="navbar-brand d-flex align-items-center" to="/">
        <img src="/logo.png" alt="Nianza Foundation Logo" class="navbar-logo me-2" />
        <span class="font-weight-bold">Nianza Foundation</span>
      </NuxtLink>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div ref="collapseRef" class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <NuxtLink class="nav-link" active-class="active" to="/" @click="closeMenu">Home</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" active-class="active" to="/about" @click="closeMenu">About Us</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" active-class="active" to="/services" @click="closeMenu">Services</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" active-class="active" to="/merch" @click="closeMenu">Merch</NuxtLink>
          </li>
        </ul>
        
        <div class="d-flex">
          <button class="btn btn-cta" @click="$emit('open-donate')">
            <i class="fas fa-heart mr-2"></i> Donate Now
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

// References to DOM elements
const navbarRef = ref(null)
const collapseRef = ref(null)

// Function to close the Bootstrap menu
const closeMenu = () => {
  // Check if window exists (client-side) and if bootstrap is loaded
  if (typeof window !== 'undefined' && window.bootstrap && collapseRef.value) {
    
    // Only attempt to hide if the menu is actually open (has class 'show')
    if (collapseRef.value.classList.contains('show')) {
      // Get the existing Bootstrap Collapse instance or create a new one
      const bsCollapse = window.bootstrap.Collapse.getInstance(collapseRef.value) || new window.bootstrap.Collapse(collapseRef.value)
      bsCollapse.hide()
    }
  }
}

// Event Listener: Detect clicks outside the navbar
const handleClickOutside = (event) => {
  // If navbarRef exists AND the clicked element is NOT inside the navbar
  if (navbarRef.value && !navbarRef.value.contains(event.target)) {
    closeMenu()
  }
}

// Add listeners when component mounts
onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

// Clean up listeners when component is removed
onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.navbar {
  /* Use z-index to ensure the fixed navbar stays on top of page content */
  z-index: 1030;
  box-shadow: var(--primary-shadow);
  /* Apply smooth color transition on hover/focus if needed, though background is fixed */
  transition: var(--transition-default); 
}

.navbar-logo {
  height: 30px; /* Adjust size for navbar */
  margin-right: var(--spacing-sm);
}

/* Customizing the appearance of the navigation links */
.nav-link {
  color: var(--color-text-light) !important;
  font-weight: var(--font-weight-normal);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin: 0 var(--spacing-sm);
  transition: var(--transition-color);
}

.nav-link:hover {
  color: var(--color-secondary) !important; /* Secondary color on hover */
}

.nav-link.active {
  color: var(--color-accent-secondary) !important; /* Vibrant green for active link */
  border-bottom: 2px solid var(--color-accent-secondary);
  padding-bottom: 5px;
}

/* Ensure the CTA button uses the defined brand styling */
.btn-cta {
    /* Padding adjustments for the button in the navbar */
    padding: var(--spacing-sm) var(--spacing-md);
    font-size: var(--font-size-base);
}
</style>