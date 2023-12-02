import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';

import { EXTENSION_MODULES } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS_PROVIDERS } from './core/interceptors';
import { CustomRouterStateSerializer } from './core/utils';
import { sharedFeatureKey, sharedReducer } from './shared/store';
import { routerFeatureKey } from './shared/store/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({
      [routerFeatureKey]: routerReducer,
      [sharedFeatureKey]: sharedReducer,
    }),
    StoreRouterConnectingModule.forRoot({
      serializer: CustomRouterStateSerializer,
    }),
    EffectsModule.forRoot([]),
    EXTENSION_MODULES,
    MatProgressSpinnerModule,
    MatToolbarModule,
  ],
  providers: [...HTTP_INTERCEPTORS_PROVIDERS],
  bootstrap: [AppComponent],
})
export class AppModule {}
