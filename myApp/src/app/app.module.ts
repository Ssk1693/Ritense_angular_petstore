import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import{FormsModule,ReactiveFormsModule} from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { PetStoreComponent } from './pet-store/pet-store.component';
import { AddPetComponent } from './pet-store/add-pet/add-pet.component';
import { AppRoutingModule } from './app-routing.module';
import {MatTabsModule} from '@angular/material/tabs';

import { HttpClientModule } from '@angular/common/http';
import { StubMatRowDefDirective } from './matRowDef';

const material=[MatTabsModule];

@NgModule({
  declarations: [
    AppComponent,
    PetStoreComponent,
    AddPetComponent,
    StubMatRowDefDirective,
    //TabComponent,
    //TabsComponent
  ],
  imports: [
    BrowserModule,HttpClientModule, MatTabsModule, BrowserAnimationsModule,
    AppRoutingModule,MatToolbarModule,MatFormFieldModule,MatIconModule,FormsModule,ReactiveFormsModule,MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
