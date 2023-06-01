import logo1 from '../assets/logos/vimo-digital.png';
import logo2 from '../assets/logos/prevail-legal-marketing.png';
import logo3 from '../assets/logos/telos-tennis.png';
import logo4 from '../assets/logos/the-modern-groom.png';
import logo5 from '../assets/logos/haci-mechanical.png';
import logo6 from '../assets/logos/whittingham-creations.png';
import logo7 from '../assets/logos/shortcut-buddy.png';
import logo8 from '../assets/logos/better-phas-journal.jpg';
import logo9 from '../assets/logos/codepen.png';
import logo10 from '../assets/logos/homebridge-financial.png';

import vimo1 from '../assets/slides/vimo/overview.mp4';
import prevail1 from '../assets/slides/prevail/overview.mp4';
import tmg1 from '../assets/slides/tmg/overview.mp4';
import haci1 from '../assets/slides/haci/overview.mp4';
import wc1 from '../assets/slides/wc/overview.mp4';
import tt1 from '../assets/slides/tt/overview.mp4';
import hb1 from '../assets/slides/hb/overview.mp4';
import sb1 from '../assets/slides/sb/overview.mp4';
import bpj1 from '../assets/slides/bpj/overview.mp4';
import cp1 from '../assets/slides/cp/overview.mp4';

const PortfolioData = [
  {
    id: 1,
    url: 'https://vimodigital.com/',
    src: logo1,
    title: 'Vimo Digital',
    description: 'Custom WordPress Theme',
    assets: { video: vimo1 },
  },
  {
    id: 2,
    url: 'https://www.growwithprevail.com/',
    src: logo2,
    title: 'Prevail Legal Marketing',
    description: 'Custom WordPress Theme',
    assets: { video: prevail1 },
  },
  {
    id: 3,
    url: 'https://themoderngroom.com/suit-builder/',
    src: logo4,
    title: 'The Modern Groom',
    description: 'Custom Vue.js Application',
    assets: { video: tmg1 },
  },
  {
    id: 4,
    url: 'http://hacimechanical.com/',
    src: logo5,
    title: 'Haci Mechanical',
    description: 'Custom WordPress Theme',
    assets: { video: haci1 },
  },
  {
    id: 5,
    url: 'http://whittinghamcreations.com/',
    src: logo6,
    title: 'Whittingham Creations',
    description: 'Custom Parallax Website',
    assets: { video: wc1 },
  },
  {
    id: 6,
    url: 'https://telostennis.com/',
    src: logo3,
    title: 'Telos Tennis',
    description: 'Custom WordPress Theme',
    assets: { video: tt1 },
  },
  {
    id: 7,
    url: 'https://redlinemarketingco.com/hb/lookalike/',
    src: logo10,
    title: 'Homebridge Financial',
    description: 'Custom Landing Page',
    assets: { video: hb1 },
  },
  {
    id: 8,
    url: 'https://shortcut-buddy.netlify.app/',
    git: 'https://github.com/ryne/shortcut-buddy',
    src: logo7,
    title: 'Shortcut Buddy',
    description: 'Custom React Application',
    assets: { video: sb1 },
  },
  {
    id: 9,
    url: 'https://better-phasmophobia-journal.netlify.app/',
    git: 'https://github.com/The-Zen-Garden/better-phasmophobia-journal',
    src: logo8,
    title: 'Better Phasmophobia Journal',
    description: 'Custom React Application',
    assets: { video: bpj1 },
  },
  {
    id: 10,
    url: 'https://codepen.io/ryne',
    src: logo9,
    title: 'CodePen.io',
    description: 'CodePen.io Playground Snippets',
    assets: { video: cp1 },
  },
];

export default PortfolioData;
