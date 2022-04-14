import { NotificationsInterface, NotificationsResponseInterface } from "../interfaces/notificationsInterface";
import { NotificationsTotals } from "../interfaces/notificationsTotals";
import { OperationResponseInterface } from "../interfaces/operationResponseInterface";
import { api } from "./api";
import { Error } from "../components/Toast";

export const notificationsService = {
  getAll: async () => {
    try {
      const response = await api.get<OperationResponseInterface<NotificationsResponseInterface[]>>(
        "/notifications"
      );
      return response.data;
    } catch (error) {
      console.log(error,);
      Error({ description: "Fail to get notification" });
    }
  },
  getTotals: async () => {
    try {
      const response = await api.get<OperationResponseInterface<NotificationsTotals>>(
        "/notifications/get-totals"
      );
      return response.data;
    } catch (error) {
      console.log(error,);
      Error({ description: "Fail to get notification totals" });
    }
  },
  create: async (data: NotificationsInterface) => {
    try {
      const response = await api.post("/notifications", data);
      return response.data;
    } catch (error) {
      console.log(error,);
      Error({ description: "Fail to create notification" });
    }
  },
  update: async (id: number, data: NotificationsInterface) => {
    try {
      const response = await api.put(`/notifications/${id}`, data);
      return response.data;
    } catch (error) {
      console.log(error,);
      Error({ description: "Fail to update notification" });
    }
  }
};
