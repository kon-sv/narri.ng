import { Routes } from '@angular/router';
import { HomeView } from './views/home/home.view';
import { NotFoundView } from './views/not-found/not-found.view';
import { HistoryView } from './views/history/history.view';
import { DebugView } from './views/debug/debug.view';

export const routes: Routes = [
  {
    path: "",
    component: HomeView
  },

  {
    path: "history",
    component: HistoryView
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
