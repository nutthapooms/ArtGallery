import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FilterComponent } from './filter/filter.component';
import { SortComponent } from './sort/sort.component';
import { PaginationComponent } from './pagination/pagination.component';
import { GalleryComponent } from './gallery/gallery.component';

import {HttpClientModule} from '@angular/common/http';
import { ArtDetailComponent } from './art-detail/art-detail.component';
import { ImageBackupDirective } from './image-backup.directive'

@NgModule({
  declarations: [AppComponent, HeaderComponent, FilterComponent, SortComponent, PaginationComponent, GalleryComponent, ArtDetailComponent, ImageBackupDirective],
  imports: [BrowserModule, NgbModule, AppRoutingModule,HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
