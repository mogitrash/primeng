import { Routes } from '@angular/router';
import { OnboardingComponent } from './features';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'onboarding',
  },
  {
    path: 'onboarding',
    component: OnboardingComponent,
  },
];
