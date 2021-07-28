import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessageFormComponent } from './message-form/message-form.component';

const routes: Routes = [
  {
    path: '', component: MessageFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
