import { Component, ElementRef, TemplateRef } from '@angular/core';
import { NativeCustomElement } from './native-custom.element';

import { of, throwError } from 'rxjs';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ColumnMode } from '@swimlane/ngx-datatable';

// Mock data
const userEmailConfiguration: UserEmailConfiguration[] = [
  {
    UserEmailConfigurationId: 1,
    UserId: 1,
    ReportName: 'someReportName',
    ReportId: 1,
    Shops: [
      {
        id: 1,
        name: 'Shop 1',
        softwareId: 1,
      },
      {
        id: 2,
        name: 'Shop 2',
        softwareId: 1,
      },
    ],
    TimeScale: 'DAILY', //Daily, Weekly, Monthly
    IncludeCurrentDayInReport: true,
    DeliveryTime: '{1/1/0001 8:00 am .. but in UTC format}',
    DeliveryDaysOfWeek: ['MONDAY', 'WEDNESDAY', 'FRIDAY'], //TimeScale == DAILY || WEEKLY
    DeliveryDaysOfMonth: 1, //TimeScale == MONTHLY
    Recipients: [
      'email1@oktorocket.com',
      'email2@oktorocket.com',
      'email3@oktorocket.com',
    ],
    isEnabled: true,
    ReportPreferences: {
      '1': true,
      '2': false,
      '3': false,
    }, // TODO, generate more test data
  },
];

const emailReportMeta = [
  {
    ReportId: 1,
    ReportName: 'someReportName',
    TimeScale: 'DAILY', //Daily, Weekly, Monthly
    EmailReportSections: [
      {
        SectionId: 1,
        SectionName: 'Section 1',
        PreviewImageUrl: 'http://someurl.com',
        Description: 'some description',
        ExcludedSoftwareTypes: ['M1', 'Protractor'], //note, this is a UI warning only, not a validation
      },
    ],
  },
];

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  results: any[] = [];
  modalRef?: BsModalRef;
  rows = [
    { name: 'Austin', gender: 'Male', company: 'Swimlane' },
    { name: 'Dany', gender: 'Male', company: 'KFC' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' },
  ];
  columns = [{ prop: 'name' }, { name: 'Gender' }, { name: 'Company' }];
  loadingIndicator = true;
  reorderable = true;

  ColumnMode = ColumnMode;

  constructor(private modalService: BsModalService) {}

  openModal(template: TemplateRef<void>) {
    this.modalRef = this.modalService.show(template);
  }

  //These methods are typically in a service layer, dropping them here for simplicy
  getUserEmailConfiguration = () => {
    if (Math.random() < 0.1) {
      // Simulate a failure 10% of the time
      return throwError(
        new Error('Random failure in getUserEmailConfiguration')
      );
    } else {
      return of(userEmailConfiguration);
    }
  };

  postOrPatchUserEmailConfiguration = (
    request: PostOrPatchUserEmailConfiguration
  ) => {
    if (Math.random() < 0.1) {
      // Simulate a failure 10% of the time
      return throwError(
        new Error('Random failure in postOrPatchUserEmailConfiguration')
      );
    } else {
      return of(userEmailConfiguration[0]);
    }
  };

  getEmailReportMeta = () => {
    if (Math.random() < 0.1) {
      // Simulate a failure 10% of the time
      return throwError(new Error('Random failure in getEmailReportMeta'));
    } else {
      return of(emailReportMeta);
    }
  };
}
