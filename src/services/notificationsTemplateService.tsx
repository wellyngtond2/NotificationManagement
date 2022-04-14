import { NotificationTemplatesInterface } from "../interfaces/notificationTemplatesInterface";
import { OperationResponseInterface, } from "../interfaces/operationResponseInterface";
import { api } from "./api";
import { Error, Success } from "../components/Toast";

export const notificationsTemplateService = {
  getAll: async () => {
    try {
      const response = await api.get<OperationResponseInterface<NotificationTemplatesInterface[]>>('/notification-templates');
      return response.data;
    } catch (error) {
      console.log(error,);
      Error({ description: "Fail to get notification templates" });
    }
  },
  create: async (data: NotificationTemplatesInterface) => {
    try {
      const response = await api.post('/notification-templates', data);
      if(response.data.isSuccess) { Success({ description: "Notification template created" }); }
      return response.data;
    } catch (error) {
      console.log(error,);
      Error({ description: "Fail to create notification templates" });
    }
  },
  update: async (id: number, data: NotificationTemplatesInterface) => {
    try {
      const response = await api.put(`/notification-templates/${id}`, data);
      if(response.data.isSuccess) { Success({ description: "Notification template updated" }); }
      return response.data;
    } catch (error) {
      console.log(error,);
      Error({ description: "Fail to update notification templates" });
    }
  }
};
