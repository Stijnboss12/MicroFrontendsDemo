import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/hotelbooking',
    pathMatch: 'full',
  },
  {
    path: 'hotelbooking',
    loadChildren: () =>
      import('./hotelbooking/hotelbooking.module').then(
        (m) => m.HotelBookingModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
