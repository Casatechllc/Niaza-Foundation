<template>
  <div class="min-h-screen bg-white py-24 px-6 lg:px-8">
    <div class="mx-auto max-w-3xl">
      <h2 class="text-secondary font-black uppercase tracking-[0.4em] text-xs mb-4">Foundation Governance</h2>
      <h1 class="text-5xl font-black text-primary uppercase italic mb-12">Privacy Policy</h1>

      <div class="prose prose-slate prose-lg max-w-none space-y-8 text-slate-600 leading-relaxed">
        <section>
          <h3 class="text-xl font-black text-primary uppercase tracking-widest">01. Data Collection</h3>
          <p>
            The Nianza Foundation only collects information necessary to process your support. 
            When you purchase from our collection, we collect your name, email, and shipping address. 
            All payment information is handled securely by **Stripe**; we never store your credit card details on our servers.
          </p>
        </section>

        <section>
          <h3 class="text-xl font-black text-primary uppercase tracking-widest">02. Local Storage</h3>
          <p>
            We use **Local Storage** to maintain your shopping cart selections as you navigate the site. 
            This is a functional requirement to ensure your selected items are preserved until checkout. 
            This data is stored only on your device and is not used for tracking or advertising.
          </p>
        </section>

        <section>
          <h3 class="text-xl font-black text-primary uppercase tracking-widest">03. Use of Information</h3>
          <p>
            Your information is used exclusively to fulfill your order and provide updates on your support's impact. 
            We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties.
          </p>
        </section>

        <section>
          <h3 class="text-xl font-black text-primary uppercase tracking-widest">04. Contact</h3>
          <p>
            For questions regarding this policy or your data, please contact us at 
            <a href="mailto:info@nianzafoundation.org" class="text-secondary font-bold underline">info@nianzafoundation.org</a>.
          </p>
        </section>
      </div>

      <div class="mt-16 pt-8 border-t border-slate-100">
        <NuxtLink to="/merch" class="text-primary font-black uppercase tracking-widest text-sm hover:text-secondary transition-colors">
          <i class="fas fa-arrow-left mr-2"></i> Return to Collection
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Privacy Policy | Nianza Foundation',
  meta: [{ name: 'robots', content: 'noindex' }]
});
</script>