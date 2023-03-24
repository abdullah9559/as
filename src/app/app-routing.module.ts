import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const routes: Routes = [{ path:'',redirectTo:'home',pathMatch:'full'},
{ path:'home',component:HomeComponent,title:'home'},
{ path:'portfolio',component:PortfolioComponent,title:'portfolio'},
{ path:'about',component:AboutComponent,title:'about'},
{ path:'contact',component:ContactComponent,title:'contact'},
{ path:'**',component:NotfoundComponent,title:'404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
