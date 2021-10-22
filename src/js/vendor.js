import svg4everybody from 'svg4everybody';
import picturefill from 'picturefill';
import viewportUnitsBuggyfill from 'viewport-units-buggyfill';
import objectFitImages from 'object-fit-images/dist/ofi.es-modules.js';
import Swiper, { Navigation, Pagination, EffectFade  } from 'swiper';
import MicroModal from 'micromodal';

import debounce from 'lodash/debounce';
import throttle from 'lodash/throttle';

import bootstrap from 'bootstrap/dist/js/bootstrap.bundle'

// 
window.svg4everybody = svg4everybody;
window.picturefill = picturefill;
window.viewportUnitsBuggyfill = viewportUnitsBuggyfill;
window.objectFitImages = objectFitImages;
Swiper.use([Navigation, Pagination, EffectFade]);
window.Swiper = Swiper;
window.MicroModal = MicroModal;

window.debounce = debounce;
window.throttle = throttle;

window.bootstrap = bootstrap