import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'produts', 
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) 
  },
  { path: 'signals', loadChildren: () => import('./signals/signals.module').then(m => m.SignalsModule) }, 
  { path: '**', redirectTo: 'produts' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
