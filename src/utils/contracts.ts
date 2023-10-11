import { type ContractPayment } from "@/services/space-traders";

export function getTotalPayment(payment: ContractPayment) {
  return payment.onAccepted + payment.onFulfilled;
}
