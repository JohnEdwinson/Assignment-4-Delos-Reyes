import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MyCustomPageWithId } from './my-custom-page/custom-page-with-id/custom-page-with-id';
import { AnotherPagePage } from './another-page/another-page.page';
import { AuthenticationService } from './authentication.service';
import { SharedFolder } from './shared-folder/custom-component';
const routes: Routes = [

  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'my-custom-page',
    loadChildren: () => import('./my-custom-page/my-custom.module').then( m => m.MyCustomPageModule)
  },
  {
    path: 'my-custom-page/:id', 
    component: MyCustomPageWithId
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
