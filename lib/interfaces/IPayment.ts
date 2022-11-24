import { IInstamojoPayment } from "./IInstamojoPayment";

export interface IPayment extends IInstamojoPayment {
  mode: "workshop" | "consultation" | "on-demand";
  fullfilment: "paid" | "booked" | "closed";
}
