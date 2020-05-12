const ProductsRoutes = require('./productRoutes/productsRoutes');
const AdminRoutes = require('./adminRoutes/adminRoute');
const ContactRoute = require('./contactRoute/contactRoute');
const UserRoutes = require('./userRoutes/userRoute');
const PaymentRoutes = require('./paymentRoute/paymentRoute');

const routes = [
  {
    path: '/api',
    handler: ProductsRoutes,
  },
  {
    path: '/api',
    handler: AdminRoutes,
  },
  {
    path: '/api',
    handler: ContactRoute,
  },
  {
    path: '/api',
    handler: UserRoutes,
  },
  {
    path: '/api',
    handler: PaymentRoutes,
  },
];

module.exports = (app) => {
  routes.forEach((r) => {
    if (r.path == '/') {
      app.get(r.path, r.handler);
    } else {
      app.use(r.path, r.handler);
    }
  });
};
