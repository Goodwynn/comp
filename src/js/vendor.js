import svg4everybody from 'svg4everybody';
import picturefill from 'picturefill';
import viewportUnitsBuggyfill from 'viewport-units-buggyfill';
import objectFitImages from 'object-fit-images/dist/ofi.es-modules.js';
import Swiper, { Navigation, Pagination } from 'swiper';

import bootstrap from 'bootstrap/dist/js/bootstrap.bundle'

// 
window.svg4everybody = svg4everybody;
window.picturefill = picturefill;
window.viewportUnitsBuggyfill = viewportUnitsBuggyfill;
window.objectFitImages = objectFitImages;
Swiper.use([Navigation, Pagination]);
window.Swiper = Swiper;

window.bootstrap = bootstrap