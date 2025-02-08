import { Route, Routes } from '@angular/router';
import { HomeView } from './views/home/home.view';
import { NotFoundView } from './views/not-found/not-found.view';
import { HistoryView } from './views/history/history.view';
import { DictionaryView } from './views/dictionary/dictionary.view';

export type ExtendedRoute = Route & { name?: string };
export type ExtendedRoutes = ExtendedRoute[] & Routes;

export const routes: ExtendedRoutes = [
  {
    path: "",
    name: "Home",
    component: HomeView
  },
  {
    path: "history",
    name: "History",
    component: HistoryView
  },
  {
    path: "dictionary",
    name: "Dictionary",
    component: DictionaryView
  },
  {
    path: "debug",
    loadComponent: async () => {
      const c = await import('./views/debug/debug.view');
      return c.DebugView;
    },
  },

  {
    path: "**",
    component: NotFoundView
  },
];
