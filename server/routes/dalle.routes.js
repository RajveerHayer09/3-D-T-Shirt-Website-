import express from 'express';
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi} from 'openai';

dotenv.config(); 

const router = express.Router();

const config = new Configuration({
  apiKey: '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',
});

const openai = new OpenAIApi(config);

router.route('/').get((req, res) => {
  res.status(200).json({ message: "Hello from DALL.E ROUTES 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" } )
  
})

router.route('/').post(async (req, res) => {
  try {
    const { prompt } = req.body;

    const response = await openai.Image.create({
      prompt,
      n: 1,
      size: '1024x1024',
      response_format: 'b64_json'
    });

    const image = response.data.data[0].b64_json;

    res.status(200).json({ photo: image });
  } catch (error) {
    console.error(error);
    res.status(520).json({ message: "Something went wrong" })
  }
})

export default router;