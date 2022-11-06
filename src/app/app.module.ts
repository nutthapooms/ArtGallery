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

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ArtDetailComponent } from './art-detail/art-detail.component';
import { ImageBackupDirective } from './image-backup.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { LoadingInterceptor } from './loading.interceptor';
import { DateRangePipe, DateEndPipe } from './date-range.pipe';
import { ApiCallService } from './api-call.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilterComponent,
    SortComponent,
    PaginationComponent,
    GalleryComponent,
    ArtDetailComponent,
    ImageBackupDirective,
    ProgressSpinnerComponent,
    DateRangePipe,
    DateEndPipe,
    
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [
    ApiCallService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
