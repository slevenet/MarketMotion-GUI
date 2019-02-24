import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BlogComponent} from './blog/blog.component';
import {MarketComponent} from './market/market.component';

const routes: Routes = [
  {path: 'blog', component: BlogComponent},
  {path: 'market', component: MarketComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
