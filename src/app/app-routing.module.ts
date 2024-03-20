import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AnotherPagePage } from './another-page/another-page.page';
import { AuthenticationService } from './authentication.service';
import { SharedFolder } from './shared-folder/custom-component';
const routes: Routes = [

  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'another-page',
    component: AnotherPagePage,
    canActivate: [AuthenticationService]
  },
  {
    path: 'shared-folder',
    component: SharedFolder,
    canActivate: [AuthenticationService]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

