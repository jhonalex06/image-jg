import { Jimp } from "jimp";

const inputPath = './input.jpeg';
const outputPath = './output.jpg';

const image = await Jimp.read(inputPath);
image.greyscale();
await image.write(outputPath);
