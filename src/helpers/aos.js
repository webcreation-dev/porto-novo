import AOS from 'aos'
import 'aos/dist/aos.css'

export function setupAOS() {
  AOS.init({
    offset: 200,
    delay: 500,
    duration: 1000,
    easing: 'ease',
    once: true,
    anchorPlacement: 'top-bottom',
  });
}
