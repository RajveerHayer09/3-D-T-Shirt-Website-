import { proxy } from 'valtio';

const state = proxy({
  intro: true, // flag for are we at home page or not
  color: '#EFBD48',
  isLogoTexture: true, // logo displaying on shirt or not
  isFullTexture: false, // 
  logoDecal: './threejs.png', // logo we want to upload
  fullDecal: './threejs.png',
});

export default state;