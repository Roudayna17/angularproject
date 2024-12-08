import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './side-nav/side-nav.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ClarityModule } from '@clr/angular';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    
    HeaderComponent,
    FooterComponent,
    SideNavComponent
  ],
  imports: [
    CommonModule,ClarityModule,RouterModule
  ],exports:[
    HeaderComponent,
    FooterComponent,
    SideNavComponent
  ]
})
export class CoreModule { }
