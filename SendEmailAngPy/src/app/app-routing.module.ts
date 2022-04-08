import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SendEmailComponent } from './send-email/send-email.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'send-email',
    component:SendEmailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
