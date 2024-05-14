interface Shop {
  id: number;
  name: string;
  softwareId: number;
}

interface ReportPreferences {
  '1': boolean;
  '2': boolean;
  '3': boolean;
}

interface UserEmailConfiguration {
  UserEmailConfigurationId: number;
  UserId: number;
  ReportName: string;
  ReportId: number;
  Shops: Shop[];
  TimeScale: string; // Consider using a string literal type here, like "DAILY" | "WEEKLY" | "MONTHLY"
  IncludeCurrentDayInReport: boolean;
  DeliveryTime: string; // Consider using a Date type here if the string is always a date
  DeliveryDaysOfWeek: string[]; // Consider using a string literal type here, like "MONDAY" | "TUESDAY" | ...
  DeliveryDaysOfMonth: number;
  Recipients: string[];
  isEnabled: boolean;
  ReportPreferences: ReportPreferences;
}

interface ReportPreferences {
  '1': boolean;
  '2': boolean;
}

interface PostOrPatchUserEmailConfiguration {
  UserEmailConfigurationId: number;
  UserId: number;
  ReportId: number;
  ShopIds: number[];
  IncludeCurrentDayInReport: boolean;
  DeliveryTime: string; // Consider using a Date type here if the string is always a date
  DeliveryDaysOfWeek: string[]; // Consider using a string literal type here, like "MONDAY" | "TUESDAY" | ...
  DeliveryDaysOfMonth: number;
  Recipients: string[];
  isEnabled: boolean;
  ReportPreferences: ReportPreferences;
}

interface EmailReportSection {
  SectionId: number;
  SectionName: string;
  PreviewImageUrl: string;
  Description: string;
  ExcludedSoftwareTypes: string[];
}

interface EmailReportMeta {
  ReportId: number;
  ReportName: string;
  TimeScale: string; // Consider using a string literal type here, like "DAILY" | "WEEKLY" | "MONTHLY"
  EmailReportSections: EmailReportSection[];
}
