import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const vw = (size) => (width / guidelineBaseWidth) * size;
const vh = (size) => (height / guidelineBaseHeight) * size;
const size = (size, factor = 0.5) => size + (vh(size) - size) * factor;

export {vw, vh, size }; 