import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomHeaderComponent } from './custom-header/custom-header.component';

@NgModule({
  declarations: [
    CustomHeaderComponent
  ],
  exports: [
    CustomHeaderComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class ComponentsModule { }
