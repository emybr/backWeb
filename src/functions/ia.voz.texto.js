import { pipeline } from '@xenova/transformers';
import wavefile from 'wavefile';
import fs from 'fs';

const EMBED = 'https://huggingface.co/datasets/Xenova/transformers.js-docs/resolve/main/speaker_embeddings.bin'
const PHRASE = 'Hi midudev, how are you doing today? I hope you are doing well.'
const synthesizer = await pipeline(
'text-to-speech',//espesifica el modelo a usar
'Xenova/speecht5_tts',//se especifica el idioma 
{ quantized: false }
);

const output = await synthesizer(
PHRASE,
{ speaker_embeddings: EMBED }
);

const wav = new wavefile.WaveFile();
wav.fromScratch(1, output.sampling_rate, '32f', output.audio);
fs.writeFileSync('out.wav', wav.toBuffer());