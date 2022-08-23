import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccountsModule } from './accounts/accounts.module';

import { AppComponent } from './app.component';
import { OutputComponent } from './output/output.component';
import { WidgetModule } from './widgets/widgets.module';

@NgModule({
  declarations: [AppComponent, OutputComponent],
  imports: [BrowserModule, WidgetModule, AccountsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
