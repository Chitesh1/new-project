import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { ChangetextDirective } from './changetext.directive';
import { SqrtPipe } from './app.sqrt';
import {MyserviceService} from './myservice.service';

@NgModule({
  declarations: [
    SqrtPipe,
    AppComponent,
    NewCmpComponent,
    ChangetextDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
         {
            path: 'new-cmp',
            component: NewCmpComponent
         }
      ])
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})

export class AppModule { }
