import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HeroComponent} from './hero.component';
import {HeroEditorComponent} from './hero.editor.component';
import {InventoryComponent} from './inventory.component';
import {LocationComponent} from './location.component';
import {LocationService} from './location.service';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [
      AppComponent,
      HeroComponent,
      HeroEditorComponent,
      InventoryComponent,
      LocationComponent ],
  bootstrap: [ AppComponent ],
  providers: [ LocationService ]

})
export class AppModule{};

