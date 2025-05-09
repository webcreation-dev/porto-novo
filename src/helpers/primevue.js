import 'primeicons/primeicons.css'
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import ConfirmationService from 'primevue/confirmationservice'
import ToastService from 'primevue/toastservice';
import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';
import Carousel from 'primevue/carousel';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Select from 'primevue/select';
import Avatar from 'primevue/avatar';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Chart from 'primevue/chart';
import Drawer from 'primevue/drawer';

import { Dialog } from 'primevue'


export function setupPrimeVue(app) {
  app.use(PrimeVue, {
    unstyled: false,
    theme: {
      preset: Aura,
      options: {
        darkModeSelector: false || 'none',
      }
    }
  })
  app.use(ConfirmationService)
  app.use(ToastService)
  app.component('Accordion', Accordion)
  app.component('AccordionPanel', AccordionPanel)
  app.component('AccordionHeader', AccordionHeader)
  app.component('AccordionContent', AccordionContent)
  app.component('Button', Button)
  app.component('Carousel', Carousel)
  app.component('Dialog', Dialog)
  app.component('InputText', InputText)
  app.component('Select', Select)
  app.component('Avatar', Avatar)
  app.component('DataTable', DataTable);
  app.component('Column', Column);
  app.component('Chart', Chart);
  app.component('Drawer', Drawer);
}

