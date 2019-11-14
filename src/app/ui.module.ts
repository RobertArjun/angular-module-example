import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './ui/header/header.component';
import { FooterComponent } from './ui/footer/footer.component';
import { ContentComponent } from './ui/content/content.component';


@NgModule({
imports: [ CommonModule ],
declarations:[ HeaderComponent, FooterComponent,  ContentComponent],
exports:[ ContentComponent ]
})

export class UiModule{}