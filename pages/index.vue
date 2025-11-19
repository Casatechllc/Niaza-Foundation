<template>
  <div class="nianza-home">
    
    <section class="hero bg-primary-light text-center py-5" data-aos="fade-down">
      <div class="container">
        <img src="/logo.png" alt="Nianza Foundation Logo" class="logo-hero mb-4" />
        <h1 class="display-4 font-weight-bold text-primary">A Call for Partnership: Public Financing for Shelter Development</h1>
        <h2 class="h3 text-secondary mb-0">Building Hope and Dignity for Every Congolese Without a Home</h2>
      </div>
    </section>

    <section class="section-padding" data-aos="fade-up">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <h3 class="mb-4 text-center text-primary">Our Mission: Safe Housing for the DRC's Vulnerable</h3>
            <blockquote class="blockquote text-center border-left-primary p-4 bg-light-grey">
              <p class="mb-0 font-weight-normal">
                Nianza Foundation is a nonprofit organization dedicated to providing safe and sustainable housing solutions for vulnerable populations in the Democratic Republic of the Congo. The foundation is currently leading a project to build homeless shelters aimed at offering temporary housing, essential services, and pathways to stability for individuals and families experiencing homelessness. Through partnerships with local communities, government agencies, and international supporters, Nianza Foundation is working to reduce homelessness and promote dignity, safety, and hope for those in need.
              </p>
            </blockquote>
            <div class="text-center mt-5">
              <NuxtLink to="/about" class="btn btn-secondary me-3">Learn More About Us</NuxtLink>
              <button class="btn btn-cta" @click="$emit('open-donate')">Donate Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-padding bg-light-grey" data-aos="fade-right">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <h2 class="text-primary">An Urgent Challenge: Rebuilding Lives in the DRC</h2>
            <p>
              Across the Democratic Republic of the Congo (DRC), homelessness remains an urgent humanitarian and social challenge. Thousands of families—especially women, children, and people displaced by conflict or poverty—are forced to live without safe shelter. The Nianza Foundation has taken on a vital mission: to build safe, sustainable, and dignified homeless shelters that provide not only a roof, but a pathway to recovery, empowerment, and reintegration into society.
            </p>
            <p class="font-weight-bold mt-4">
              Public funding is essential to make the Nianza Foundation's shelter project viable at scale: it provides the capital for land, basic infrastructure, and staffing that private donations alone rarely cover, unlocks partnerships with local government and services (health, protection, social services), and ensures the shelter is affordable, sustainable, and accountable to the communities it serves.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="section-padding" data-aos="fade-up">
      <div class="container">
        <h2 class="text-center mb-5 text-primary">Scaling Impact: Why Government Support is Essential</h2>
        <div class="row">
          <div class="col-md-6 mb-4">
            <div class="p-4 border rounded shadow-sm h-100 hover-card">
              <h3 class="h4 text-accent"><i class="fas fa-layer-group mr-2"></i> Capital Intensity & Scale</h3>
              <p>Building safe, weather-resistant shelters (land, foundations, walls, water, sanitation, electricity) demands large upfront investments and predictable cash flow that private gifts and ad-hoc fundraising often cannot supply.</p>
            </div>
          </div>
          <div class="col-md-6 mb-4">
            <div class="p-4 border rounded shadow-sm h-100 hover-card">
              <h3 class="h4 text-accent"><i class="fas fa-link mr-2"></i> Linking to Vital Public Services</h3>
              <p>Shelters require connections to essential public infrastructure (water, drainage) and formal linkage to state services (health, security, social work) which are best secured and sustained through government participation.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-padding bg-primary-light" data-aos="fade-left">
      <div class="container">
        <h2 class="text-center mb-5 text-primary">The Ask: Co-funding the Future of Shelter</h2>
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <p class="lead text-center mb-5">
              The Nianza Foundation seeks public financial support of any amount to co-fund the first phase of shelter development in key urban areas such as Kinshasa where the homeless population is very high.
            </p>
            
            <div class="row row-cols-1 row-cols-md-2 g-4">
              
              <div class="col">
                <div class="card h-100 p-3 shadow border-0 hover-card" data-aos="zoom-in">
                  <div class="card-body">
                    <h5 class="card-title text-accent font-weight-bold">
                      <i class="fas fa-hammer mr-2"></i> Capital & Infrastructure
                    </h5>
                    <p class="card-text">
                      Provide capital for land acquisition, site preparation, and infrastructure (water, sanitation, electricity, and drainage).
                    </p>
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="card h-100 p-3 shadow border-0 hover-card" data-aos="zoom-in">
                  <div class="card-body">
                    <h5 class="card-title text-accent font-weight-bold">
                      <i class="fas fa-users-cog mr-2"></i> Staffing & Operations
                    </h5>
                    <p class="card-text">
                      Cover part of the operational and staffing costs for professional social services and health outreach.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="card h-100 p-3 shadow border-0 hover-card" data-aos="zoom-in">
                  <div class="card-body">
                    <h5 class="card-title text-accent-secondary font-weight-bold">
                      <i class="fas fa-leaf mr-2"></i> Long-term Sustainability
                    </h5>
                    <p class="card-text">
                      Enable long-term sustainability through a stable funding base and alignment with national social protection policies.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="card h-100 p-3 shadow border-0 hover-card" data-aos="zoom-in">
                  <div class="card-body">
                    <h5 class="card-title text-accent-secondary font-weight-bold">
                      <i class="fas fa-gavel mr-2"></i> Government Commitment
                    </h5>
                    <p class="card-text">
                      Demonstrate government commitment to tackling homelessness, encouraging greater contributions from international donors, development agencies, and private partners.
                    </p>
                  </div>
                </div>
              </div>

            </div>
            </div>
        </div>
      </div>
    </section>

    <section class="section-padding" data-aos="fade-up">
      <div class="container">
        <div class="row">
          
          <div class="col-md-6 mb-5">
            <h2 class="text-primary"><i class="fas fa-handshake mr-2"></i> Our Commitment to Transparency</h2>
            <ul class="list-unstyled checklist">
              <li class="mb-2"><i class="fas fa-check-circle mr-2 text-accent-secondary"></i> Publish quarterly progress and financial reports;</li>
              <li class="mb-2"><i class="fas fa-check-circle mr-2 text-accent-secondary"></i> Conduct annual independent audits;</li>
              <li class="mb-2"><i class="fas fa-check-circle mr-2 text-accent-secondary"></i> Use performance indicators (number of residents served, transitions to permanent housing, job placements);</li>
              <li class="mb-2"><i class="fas fa-check-circle mr-2 text-accent-secondary"></i> Maintain a joint monitoring committee with government and community representatives.</li>
            </ul>
          </div>
          
          <div class="col-md-6 mb-5">
            <h2 class="text-primary"><i class="fas fa-users mr-2"></i> Laying the Foundation for a National Model</h2>
            <p>
              By supporting this initiative, the government and its partners will not only address an urgent social crisis but also lay the foundation for a national model of homeless care and reintegration. Together, we can transform vulnerable lives and build hope and dignity in the DRC.
            </p>
            <button class="btn btn-cta mt-3" @click="$emit('open-donate')">Support Our Vision Today</button>
          </div>
        </div>
      </div>
    </section>

    <div id="donate-section"></div>

  </div>
</template>

<script>
// ... (script remains the same)
export default {
  head: {
    title: 'Home - Nianza Foundation: Building Hope in DRC',
  },
  methods: {
    scrollToDonate() {
      // Simple scroll function to target the hidden anchor (or the section above it)
      const donateSection = document.getElementById('donate-section');
      if (donateSection) {
        donateSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}
</script>

<style scoped>
/* ... (scoped styles remain the same) */
.hero {
  padding-top: var(--spacing-xl);
  padding-bottom: var(--spacing-xl);
}
.logo-hero {
  max-width: 150px;
}
.border-left-primary {
  border-left: 8px solid var(--color-primary);
}
.funding-list span, .checklist li span {
  /* Aligns text with the icon */
  line-height: 1.5; 
}
.fa-chevron-right, .fa-check-circle {
  font-size: var(--font-size-lg);
  flex-shrink: 0; /* Prevents icon from shrinking on small screens */
}

.hover-card, .btn {
  transition: var(--transition-default);
}

/* Hover effect for cards/panels */
.hover-card:hover {
  transform: translateY(-5px); /* Lift the card slightly */
  transition: transform 0.2s ease-out, box-shadow 0.2s ease-out;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15); /* Enhance the shadow */
}

.btn-cta {
    padding: .5rem;
}

/* Hover effect for primary call-to-action buttons (CTA) */
.btn-cta:hover {
  transform: scale(1.02); /* Slight increase in size */
  box-shadow: 0 8px 20px rgba(77, 174, 61, 0.4); /* Stronger shadow with accent color */
}

/* Hover effect for secondary buttons */
.btn-secondary:hover {
  transform: scale(1.02);
  border-color: var(--color-accent);
}
</style>