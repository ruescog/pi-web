import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { IndiceComponent } from './indice/indice.component';
import { CircuitoComponent } from './circuito/circuito.component';
import { CclComponent } from './ccl/ccl.component';
import { LogrosComponent } from './logros/logros.component';

const angularMaterial = [
  MatButtonModule,
  MatDividerModule,
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatMenuModule,
  MatBadgeModule,
  MatExpansionModule,
  MatSnackBarModule,
  MatProgressSpinnerModule
];

@NgModule({
  declarations: [
    AppComponent,
    IndiceComponent,
    CircuitoComponent,
    CclComponent,
    LogrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    angularMaterial
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
