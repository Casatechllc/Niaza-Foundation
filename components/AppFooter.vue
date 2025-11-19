<template>
  <footer class="footer mt-auto py-5" :style="{ backgroundColor: 'var(--color-primary)' }">
    <div class="container text-light">
      <div class="row align-items-center">
        
        <div class="col-md-5 mb-4 mb-md-0">
          <div class="d-flex align-items-center mb-3">
            <img src="/logo.png" alt="Nianza Foundation Logo" class="footer-logo me-3" />
            <h4 class="mb-0 text-light">Nianza Foundation</h4>
          </div>
          <p class="small text-light-grey">
            Building hope and dignity for every Congolese without a home. Providing safe shelter, empowerment, and a pathway to reintegration.
          </p>
        </div>

        <div class="col-md-4 mb-4 mb-md-0 text-center">
      <h5 class="mb-3 text-secondary">Join Our Mission</h5>
      <button class="btn btn-cta btn-lg shadow-lg" @click="openDonateModal">
        <i class="fas fa-hand-holding-heart mr-2"></i> Donate Now
      </button>
    </div>

        <div class="col-md-3 text-md-right text-center">
          <h5 class="mb-3 text-secondary">Contact Us</h5>
          <ul class="list-unstyled small text-light-grey">
            <li><i class="fas fa-map-marker-alt mr-2"></i> Kinshasa, DRC</li>
            <li><i class="fas fa-envelope mr-2"></i> info@nianzafoundation.org</li>
          </ul>
        </div>
      </div>

      <hr :style="{ borderColor: 'rgba(255, 255, 255, 0.2)' }" class="my-4">

      <div class="row small">
        <div class="col-12 text-center text-light-grey">
          <p class="mb-1">
            Powered by 
            <a href="https://casatechllc.com" target="_blank" class="footer-link">
              <span class="text-casatech-highlight">Casatech LLC</span>
            </a>
          </p>
          <p class="mb-0">&copy; {{ new Date().getFullYear() }} Nianza Foundation. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const openDonateModal = inject('openDonateModal');
</script>

<style scoped>
.footer {
  /* Ensure the footer takes the full width and contrast is good */
  color: var(--color-text-light); 
}

.footer-logo {
  height: 40px; 
}

.text-light-grey {
  color: #cccccc !important;
}

.footer-link {
  color: #cccccc !important; /* Default color for the whole link (Powered by) */
  text-decoration: none;
  font-weight: var(--font-weight-normal);
  transition: var(--transition-color);
}

/* New style to highlight "Casatech LLC" specifically */
.text-casatech-highlight {
  /* Use the Bright Sky Blue color for a strong accent */
  color: var(--color-secondary) !important; 
  font-weight: var(--font-weight-bold);
  transition: var(--transition-color);
}

/* Ensure the hover still works on the entire link */
.footer-link:hover .text-casatech-highlight {
  color: var(--color-accent-secondary) !important; /* Use Vibrant Green on hover */
  text-decoration: underline;
}

/* Customizing the donate button in the footer for visual prominence */
.btn-lg {
  padding: 1rem 2rem;
  font-size: 1.1rem;
}

/* Ensuring Font Awesome icons are styled */
.list-unstyled li i {
  color: var(--color-accent);
}
</style>