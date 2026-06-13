import Stripe from 'stripe';

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const siteUrl = config.public.siteUrl || '';
  
  if (!config.stripeSecretKey) {
    console.error('CRITICAL: Stripe Secret Key is missing.');
    throw createError({ statusCode: 500, statusMessage: 'Stripe configuration error.' });
  }

  const stripe = new Stripe(config.stripeSecretKey);

  try {
    const body = await readBody(event);
    let line_items = [];

    // 1. BUILD LINE ITEMS
    if (body.isDonation) {
      line_items = [{
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'General Donation | Nianza Foundation',
            description: 'Direct support for sustainable housing and literacy in the DRC.',
            images: siteUrl ? [`${siteUrl}/logo.png`] : [],
          },
          unit_amount: Math.round(body.amount * 100),
        },
        quantity: 1,
      }];
    } else if (body.cart) {
      line_items = body.cart.map((item) => ({
        price_data: {
          currency: 'usd',
          product_data: {
            name: `${item.name} (${item.selectedColor.colorName} / ${item.selectedSize})`,
            // Only include images if siteUrl is present (absolute path)
            images: siteUrl ? [`${siteUrl}${item.selectedColor.image}`] : [],
          },
          unit_amount: Math.round(item.price * 100),
        },
        quantity: item.quantity || 1,
      }));
    }

    // 2. CREATE THE SESSION (ONLY ONCE)
    const session = await stripe.checkout.sessions.create({
      line_items,
      mode: 'payment',
      success_url: config.public.stripeSuccessUrl,
      cancel_url: config.public.stripeCancelUrl,
      // Change button text to "Donate" for donations
      submit_type: body.isDonation ? 'donate' : 'auto',
      // Only collect shipping address if it's NOT a donation
      shipping_address_collection: !body.isDonation ? {
        allowed_countries: ['US', 'CA'],
      } : undefined,
    });

    return { url: session.url };
    
  } catch (error) {
    console.error('--- STRIPE API ERROR ---');
    console.error(error); 
    throw createError({
      statusCode: 500,
      statusMessage: error.message,
    });
  }
});