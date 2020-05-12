const router = require('express').Router();
const stripe = require('stripe')('sk_test_50Uj4PSLmXZ0L8cIsp6viExa00A7aImksJ');
const { v4: uuidv4 } = require('uuid');


router.post('/payment', (req, res) => {
  const { cart, token } = req.body;
  console.log(cart, token);
  const idempontencyKey = uuidv4();
  return stripe.customers
    .create({
      email: token.email,
      source: token.id,
    }).then((customar) => {
      stripe.charges.create({
        amount: cart.price * 100,
        currency: 'usd',
        receipt_email: token.email,
        description: `purchase of ${cart.title}`,
        shipping: {
          name: token.card.name,
          address: {
            country: token.card.address_country,
          },
        },
      }, { idempontencyKey });
    })
    .then((result) => res.status(200).json(result))
    .catch((err) => console.log(err));
});
module.exports = router;
