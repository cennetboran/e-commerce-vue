import HomePage from '../components/HomePage';
// import GiftPage from "../components/GiftPage"
// import BirthdayPage from "../components/BirthdayPage"
// import UsPage from "../components/UsPage"
import AboutPage from '../components/AboutPage';
import DesignPage from '../components/DesignPage';

export const routes = [
  {
    path: '',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/AboutPage',
    name: 'AboutPage',
    component: AboutPage,
  },
  {
    path: '/DesignPage',
    name: 'DesignPage',
    component: DesignPage,
  },

  // {
  //     path: '/BirthdayPage',
  //     name: 'BirthdayPage',
  //     component: BirthdayPage
  // },
  // {
  //     path: '/GiftPage',
  //     name: 'GiftPage',
  //     component: GiftPage
  // },
  // {
  //     path: '/UsPage',
  //     name: 'UsPage',
  //     component: UsPage
  // },
];

export default routes;
