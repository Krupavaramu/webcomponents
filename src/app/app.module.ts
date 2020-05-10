import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector} from '@angular/core';
import { createCustomElement } from '@angular/elements'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GreetComponent } from '../web-components/greet.component';

@NgModule({
  declarations: [
    AppComponent,
    GreetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  entryComponents: [GreetComponent],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(injector: Injector){
    const el = createCustomElement(GreetComponent, { injector });
    customElements.define("app-greet", el);
  }
}
