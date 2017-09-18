import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdCardModule, MdChipsModule,
  MdIconModule, MdInputModule,
  MdMenuModule,
  MdButtonModule, MdCheckboxModule, MdChipList, MdDialogModule,
  MdSlideToggleModule, MdSnackBar, MdSnackBarModule,
} from '@angular/material'
import {TopicTagComponent} from './topic-tag/topic-tag.component'
import {TopicTagListComponent} from './topic-tag-list/topic-tag-list.component'
import {UserTemplateComponent} from '../user-list/user-template/user-template.component';
import {UserInterestsModeViewComponent} from '../user-list/user-template/user-interests-mode-view/user-interests-mode-view.component';
import {SnackBarComponent} from './snackbar/snackbar.component'
import {GeoLocationService} from './geo-location.service'
import {UserGeoLocationsService} from './user-geo-locations.service'
import {RouterModule} from '@angular/router'
import {UserDescriptionsService} from './user-profile/user-descriptions.service'
import {UserTopicsService} from './user-topics.service'

@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
    MdSlideToggleModule,
    MdInputModule,
    MdMenuModule,
    MdCheckboxModule,
    MdIconModule,
    MdChipsModule,
    MdCardModule,
    MdIconModule,
    MdSnackBarModule,
    MdDialogModule,
    RouterModule,
  ],
  declarations: [
    TopicTagComponent,
    TopicTagListComponent,
    UserTemplateComponent,
    UserInterestsModeViewComponent,
    SnackBarComponent,
    // GeolocationService,
  ],
  exports: [
    TopicTagComponent,
    TopicTagListComponent,
    UserTemplateComponent,
    UserInterestsModeViewComponent,
    SnackBarComponent,
    MdInputModule,
  ],
  providers: [
    SnackBarComponent,
    MdSnackBar,
    MdButtonModule,
    GeoLocationService,
    UserGeoLocationsService,
    UserDescriptionsService,
    UserTopicsService,
  ]

})
export class SharedModule { }
