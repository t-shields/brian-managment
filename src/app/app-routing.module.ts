import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { CdComponent } from './cd/cd.component';
import { ItineraryComponent } from './itinerary/itinerary.component';

const routes: Routes = [
  {
    path: '',
    component: NavigationComponent,
    children: [
      {
        path: '',
        redirectTo: '/cd',
        pathMatch: 'full',
      },
      {
        path: 'cd',
        component: CdComponent,
      }
      {
        path: '/itinerary',
        component: ItineraryComponent,
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
