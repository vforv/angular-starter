import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducerStore } from './reducers/reducer';
import { LoadUserEffects } from './effects/effect';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  imports: [
    StoreModule.forRoot({ appState: reducerStore }),
    EffectsModule.forRoot([LoadUserEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25 //  Retains last 25 states
    })
  ],
  exports: [
  ]
})

export class NgrxModule { }
