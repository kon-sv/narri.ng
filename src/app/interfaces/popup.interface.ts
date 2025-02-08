import { NotificationTypeEnum } from "../enums/notification-type.enum"


export interface Popup {
  timestamp: EpochTimeStamp,
  content: string,
  duration: number
  type: NotificationTypeEnum
}
