import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './Admin/admin.module';
import { PublicComponent } from './Public/public.component';

const routes: Routes = [
  {path:'',component:PublicComponent},
  {path:'admin',loadChildren:()=>import('./Admin/admin.module').then((m)=>m.AdminModule)},
  {path:'User',loadChildren:()=>import('./Users/users.module').then((m)=>m.UsersModule)}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AdminModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
