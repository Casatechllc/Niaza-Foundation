<template>
  <div class="nianza-about section-padding">
    <div class="container">
      
      <header class="text-center mb-5" data-aos="fade-down">
        <h1 class="display-4 font-weight-bold text-primary">
          Our Vision: Dignity and Reintegration
        </h1>
        <p class="lead text-dark-grey">
          Building safe, sustainable, and dignified homeless shelters in the Democratic Republic of the Congo (DRC).
        </p>
      </header>
      
      <hr class="my-5">

      <section class="row justify-content-center mb-5">
        <div class="col-lg-10">
          <blockquote class="blockquote p-4 bg-primary-light rounded shadow-sm" data-aos="fade-right">
            <h3 class="text-primary mb-3">Who We Are</h3>
            <p class="mb-0">
              Nianza Foundation is a nonprofit organization dedicated to providing safe and sustainable housing solutions for vulnerable populations in the DRC. We are currently leading a project to build homeless shelters aimed at offering temporary housing, essential services, and pathways to stability for individuals and families experiencing homelessness.
            </p>
            <footer class="blockquote-footer mt-2 text-dark-grey">
              Partnerships with local communities, government agencies, and international supporters are central to our work.
            </footer>
          </blockquote>
        </div>
      </section>

      <section class="founder-profile py-5 bg-light-grey rounded shadow-sm mb-5">
        <div class="row align-items-center">
          <div class="col-md-4 text-center mb-4 mb-md-0" data-aos="fade-right">
            <img src="/founder-image.jpg" alt="NiANSA NDONTONI Charles - Founder" class="founder-img rounded-circle img-fluid shadow-lg" />
          </div>
          <div class="col-md-8" data-aos="fade-left">
            <h2 class="text-primary font-weight-bold mb-3">Meet Our Founder: <span class="text-accent">NiANSA NDONTONI Charles</span></h2>
            <p class="lead text-dark-grey">
              With a profound commitment to social welfare and extensive experience in management and theology, Charles Niansa is the visionary behind the Nianza Foundation.
            </p>
            <ul class="list-unstyled founder-details">
              <li><i class="fas fa-map-marker-alt text-accent mr-2"></i> From: Kinshasa, DR Congo</li>
              <li><i class="fas fa-user-tie text-accent mr-2"></i> Background: Primary Studies, Business Management, Second Cycle in Business & Admin. Management, Advanced Studies & Bachelor's in Pastoral Theology.</li>
              <li><i class="fas fa-hand-holding-heart text-accent mr-2"></i> Mission: Dedicated to providing safe and sustainable housing for vulnerable populations.</li>
              <li><i class="fas fa-award text-accent mr-2"></i> Extra-Professional: Since 1985, Founder of the "Moissonneurs" Youth Group.</li>
            </ul>
            <p class="small text-dark-grey mt-3">
              *Information certified by NiANSA NDONTONI Charles, Kinshasa, December 16, 2019.*
            </p>
          </div>
        </div>
      </section>

      <section class="py-4" data-aos="fade-up">
        <h2 class="text-center text-secondary mb-5">Addressing an Urgent Humanitarian Crisis</h2>
        <div class="row align-items-center">
          <div class="col-md-7">
            <p>
              Homelessness remains an urgent humanitarian and social challenge across the DRC. Thousands of families—especially women, children, and people displaced by conflict or poverty—are forced to live without safe shelter.
            </p>
            <p class="font-weight-bold text-primary">
              Our mission is to provide not just a roof, but a pathway to recovery, empowerment, and reintegration into society, ensuring that every resident has the tools needed to regain independence.
            </p>
          </div>
          <div class="col-md-5 text-center">
            <i class="fas fa-hands-helping fa-6x text-accent" data-aos="zoom-in"></i>
          </div>
        </div>
      </section>

      <hr class="my-5">

      <section class="py-4 bg-light-grey rounded p-4" data-aos="fade-up" data-aos-delay="200">
        <h2 class="text-center text-primary mb-5">Our Model: Viability at Scale</h2>
        <div class="row row-cols-1 row-cols-md-2 g-4">
          
          <div class="col">
            <h4 class="text-accent mb-3"><i class="fas fa-building mr-2"></i> Scale and Capital</h4>
            <p>
              Public funding is essential to making the shelter project viable at scale. It provides the necessary capital for land acquisition, basic infrastructure, and staffing that private donations alone rarely cover.
            </p>
          </div>
          
          <div class="col">
            <h4 class="text-accent-secondary mb-3"><i class="fas fa-handshake mr-2"></i> Partnerships and Sustainability</h4>
            <p>
              Government partnership unlocks essential services (health, protection, social services) and ensures the shelter is affordable, sustainable, and accountable to the communities it serves for the long term.
            </p>
          </div>
        </div>
      </section>
      
      <footer class="text-center mt-5 p-4" data-aos="fade-up">
        <p class="h4 text-primary mb-3">Become a Partner in Building Hope</p>
        <p class="mb-4">
          Your support helps us lay the foundation for a national model of homeless care and reintegration.
        </p>
        <button class="btn btn-cta btn-lg" @click="openDonateModal">
          <i class="fas fa-dollar-sign mr-2"></i> Donate to Our Cause
        </button>
      </footer>
      
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue';

// Use the global function defined in app.vue to open the modal
const openDonateModal = inject('openDonateModal');

// Set the page title
useHead({
  title: 'About Us - Nianza Foundation',
});
</script>

<style scoped>
.nianza-about {
  padding-top: var(--spacing-xl);
  min-height: 80vh; 
}
.blockquote {
    border-left: 8px solid var(--color-primary);
}
.founder-img {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border: 5px solid var(--color-secondary); 
}
.founder-details li {
  margin-bottom: var(--spacing-xs);
  color: var(--dark-grey);
}
.founder-details li i {
  width: 20px; /* Aligns icons visually */
}
</style>