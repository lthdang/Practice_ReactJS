// layouts
import { HeaderOnly } from '~/components/Layout';

// routes config
import routersConfig from '~/config/routes';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

// Public routes
const publicRoutes = [
  { path: routersConfig.home, component: Home },
  { path: routersConfig.following, component: Following },
  { path: routersConfig.profile, component: Profile },
  { path: routersConfig.upload, component: Upload, layout: HeaderOnly },
  { path: routersConfig.search, component: Search, layout: null },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
