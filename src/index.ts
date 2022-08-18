import express from 'express';
import routes from './routes/api/resizeImg';

const app = express();
const port = 3000;

//use the route /api/image
app.use('/api', routes);

//listen to the server on the port and start server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

export default app;
