import { promises as fspromises } from 'fs';
import express from 'express';
import resizeImg from '../../imgResizingFunc';
import { Request, Response } from 'express';

const routes = express.Router();

//Using route to make a get request to /image and send the resize image in the response
routes.get('/image', (req: Request, res: Response) => {
  try {
    const name = req.query.name as string;
    const widthstring = req.query.width as string;
    const heightstring = req.query.height as string;

    const width = parseInt(widthstring);
    const height = parseInt(heightstring);

    resizeImg(name, width, height)
      .then(async (imgPath) => {
        console.log(`imgPath is${imgPath}`);
        //Using file system to read the image file path and return the resized image from the thumbnail folder
        const image = await fspromises.readFile(imgPath).catch((error) => {
          throw error;
        });
        res.end(image);
      })
      .catch((err) => {
        res.send(err.message);
      });
  } catch (error) {
    res.send(error);
  }
});

export default routes;
