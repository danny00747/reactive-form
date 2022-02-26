import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {ConctactWarapperModule} from "@app/conctact-warapper/conctact-warapper.module";

@NgModule({
  declarations: [
    HomeComponent
  ],
    imports: [
        CommonModule,
        ConctactWarapperModule
    ],
})
export class CoreModule { }
