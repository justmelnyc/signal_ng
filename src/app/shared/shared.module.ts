import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { FileUploaderComponent } from './components/file-uploader/file-uploader.component';
import { NotificationComponent } from './components/notification/notification.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    DatePickerComponent,
    FileUploaderComponent,
    NotificationComponent
  ],
  declarations: [
    DatePickerComponent,
    FileUploaderComponent,
    NotificationComponent
  ]
})
export class SharedModule { }
