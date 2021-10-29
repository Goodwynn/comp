import svg4everybody from 'svg4everybody';
import picturefill from 'picturefill';
import viewportUnitsBuggyfill from 'viewport-units-buggyfill';
import objectFitImages from 'object-fit-images/dist/ofi.es-modules.js';
import Swiper, { Navigation, Pagination, EffectFade, Thumbs, Mousewheel } from 'swiper';
import MicroModal from 'micromodal';
import customSelect from 'custom-select';
import noUiSlider from 'nouislider';

import debounce from 'lodash/debounce';
import throttle from 'lodash/throttle';

import bootstrap from 'bootstrap/dist/js/bootstrap.bundle'

// 
window.svg4everybody = svg4everybody;
window.picturefill = picturefill;
window.viewportUnitsBuggyfill = viewportUnitsBuggyfill;
window.objectFitImages = objectFitImages;
Swiper.use([Navigation, Pagination, EffectFade, Thumbs, Mousewheel]);
window.Swiper = Swiper;
window.MicroModal = MicroModal;
window.customSelect = customSelect;
window.noUiSlider = noUiSlider

window.debounce = debounce;
window.throttle = throttle;

window.bootstrap = bootstrap