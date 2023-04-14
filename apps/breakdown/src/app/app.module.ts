import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { appRoutes } from './app.routes';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes, {
            initialNavigation: 'enabledBlocking',
        }),
        BrowserAnimationsModule,
        StoreModule.forRoot(
            {},
            {
                metaReducers: [],
                runtimeChecks: {
                    strictActionImmutability: true,
                    strictStateImmutability: true,
                },
            }
        ),
        EffectsModule.forRoot([]),
        StoreRouterConnectingModule.forRoot(),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
