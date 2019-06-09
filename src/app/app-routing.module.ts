import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { RecorditFormComponent } from './components/recordit-form/recordit-form.component';

const routes: Routes = [
  { 
    path: 'form',
    component: SignupFormComponent
  },
  {
    path: 'recordit',
    component: RecorditFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
