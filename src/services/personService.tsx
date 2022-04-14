import { NotificationsInterface } from "../interfaces/notificationsInterface";
import { OperationResponseInterface } from "../interfaces/operationResponseInterface";
import { PersonInterface } from "../interfaces/personInterface";
import { api } from "./api";

export const personService = {
  getAll: async () => {
    const response = await api.get<OperationResponseInterface<PersonInterface[]>>('/person');
    return response.data;
  },
};
