export   interface NotificationsInterface {
  id?: number,
  title: string;
  personId?: number,
  templateId?: number,
  content: string,
  wasSent: boolean;
}

export   interface NotificationsResponseInterface {
  id: number,
  title: string;
  person?: IdentityName,
  notificationTemplate?: IdentityName,
  content: string,
  wasSent: boolean;
}

interface IdentityName{
  id: number,
  name: string,
}