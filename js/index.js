import Highway from '@dogstudio/highway';
import Fade from './transition';

console.log("index run");

const H = new Highway.Core({
    // home: Fade,
    // about: Slice    
    transtions: {
        default: Fade
    }
})