import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FooterComponent, SidebarComponent, HeaderComponent],
  imports: [CommonModule, RouterModule, MatListModule],
  exports: [HeaderComponent, SidebarComponent, FooterComponent],
})
export class ComponentsModule {}
