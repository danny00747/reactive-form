import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecapComponent } from './recap/recap.component';
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "@app/shared/shared.module";
import {ButtonModule} from "primeng/button";

const routes: Routes = [
  {path: 'recap', component: RecapComponent},
];

@NgModule({
  declarations: [
    RecapComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    ButtonModule
  ]
})
export class RecapModule { }
