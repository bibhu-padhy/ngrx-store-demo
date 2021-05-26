import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { CounterComponent } from './counter/counter.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { HeaderComponent } from './header/header.component';
import { counterReducer } from './counter/store/counter.reducer';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ count: counterReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
