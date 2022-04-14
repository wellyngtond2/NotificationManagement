export interface NotificationTemplatesInterface {
  id: number,
  title: string;
  content: string,
  notificationTemplateType: NotificationTemplateType
}

export enum NotificationTemplateType {
  Email = 1,
  SMS = 2,
}