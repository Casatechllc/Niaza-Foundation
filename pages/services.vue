<template>
  <div class="nianza-services section-padding">
    <div class="container">
      
      <header class="text-center mb-5" data-aos="fade-down">
        <h1 class="display-4 font-weight-bold text-primary">
          <i class="fas fa-hand-holding-heart mr-3"></i> Our Core Services
        </h1>
        <p class="lead text-dark-grey">
          We provide a comprehensive pathway to stability, dignity, and independence for vulnerable populations in the DRC.
        </p>
      </header>
      
      <hr>

      <section class="mb-5 py-4" data-aos="fade-up">
        <h2 class="text-center text-secondary mb-5">Dignified Shelter & Basic Needs</h2>
        <div class="row row-cols-1 row-cols-md-3 g-4">

          <div class="col">
            <div class="service-card card h-100 p-3 shadow-sm hover-card">
              <div class="card-body text-center">
                <i class="fas fa-home fa-3x text-accent mb-3"></i>
                <h5 class="card-title text-primary font-weight-bold">Temporary Safe Housing</h5>
                <p class="card-text small">
                  Providing secure, weather-resistant shelter units for individuals and families, ensuring immediate relief from street living and exposure to the elements.
                </p>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="service-card card h-100 p-3 shadow-sm hover-card">
              <div class="card-body text-center">
                <i class="fas fa-faucet fa-3x text-accent-secondary mb-3"></i>
                <h5 class="card-title text-primary font-weight-bold">Essential Infrastructure</h5>
                <p class="card-text small">
                  Access to clean, potable water, sanitation facilities, drainage, and reliable electricity, upholding a standard of basic human dignity and health.
                </p>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="service-card card h-100 p-3 shadow-sm hover-card">
              <div class="card-body text-center">
                <i class="fas fa-utensils fa-3x text-accent mb-3"></i>
                <h5 class="card-title text-primary font-weight-bold">Food and Resource Provision</h5>
                <p class="card-text small">
                  Coordinating with partners to provide meals and basic non-food items (clothing, hygiene kits) upon entry to ensure immediate stability and comfort.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <hr>

      <section class="mb-5 py-4" data-aos="fade-up" data-aos-delay="200">
        <h2 class="text-center text-secondary mb-5">Pathways to Stability & Reintegration</h2>
        <div class="row row-cols-1 row-cols-md-4 g-4">

            <div class="col">
                <div class="service-card card h-100 p-3 shadow-sm hover-card">
                    <div class="card-body text-center">
                    <i class="fas fa-clinic-medical fa-2x text-primary mb-3"></i>
                    <h5 class="card-title text-primary font-weight-bold small">Health Outreach</h5>
                    <p class="card-text micro-text">
                        On-site health checks, medical referrals, and professional social services to address urgent physical and mental health needs.
                    </p>
                    </div>
                </div>
            </div>

            <div class="col">
                <div class="service-card card h-100 p-3 shadow-sm hover-card">
                    <div class="card-body text-center">
                    <i class="fas fa-user-friends fa-2x text-primary mb-3"></i>
                    <h5 class="card-title text-primary font-weight-bold small">Case Management</h5>
                    <p class="card-text micro-text">
                        Personalized social work and case management to develop individual stability plans, focusing on recovery and empowerment.
                    </p>
                    </div>
                </div>
            </div>

            <div class="col">
                <div class="service-card card h-100 p-3 shadow-sm hover-card">
                <div class="card-body text-center">
                    <i class="fas fa-user-tie fa-2x text-primary mb-3"></i>
                    <h5 class="card-title text-primary font-weight-bold small">Job Placement</h5>
                    <p class="card-text micro-text">
                    Vocational training partnerships and job placement assistance to ensure residents gain skills needed for long-term economic independence.
                    </p>
                </div>
                </div>
            </div>
          
          <div class="col">
            <div class="service-card card h-100 p-3 shadow-sm hover-card">
              <div class="card-body text-center">
                <i class="fas fa-building fa-2x text-primary mb-3"></i>
                <h5 class="card-title text-primary font-weight-bold small">Housing Transition</h5>
                <p class="card-text micro-text">
                  Supportive services focused on transitioning residents from temporary shelter into permanent, sustainable housing solutions.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
      
      <footer class="text-center mt-5 p-4 bg-bg-primary rounded" data-aos="fade-up">
        <p class="h4 text-primary mb-3">Help Us Expand Our Reach</p>
        <p class="mb-4">Public funding is vital to link these services with government resources and ensure long-term, predictable care.</p>
        <button class="btn btn-cta btn-lg" @click="openDonateModal">
          <i class="fas fa-dollar-sign mr-2"></i> Fund Our Services
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
  title: 'Services - Nianza Foundation',
});
</script>

<style scoped>
/* Ensure the page content has top padding */
.nianza-services {
  padding-top: var(--spacing-xl);
}

/* Base style for the service cards */
.service-card {
  border: 1px solid var(--light-grey);
}

/* Tighter spacing for the smaller cards in Section 2 */
.micro-text {
  font-size: 0.85rem; 
}
</style>