import { type Contract, type ContractPayment } from "@/services/space-traders";
import { type ColumnDef } from "@tanstack/react-table";

export function getTotalPayment(payment: ContractPayment) {
  return payment.onAccepted + payment.onFulfilled;
}

export const contractColumns: ColumnDef<Contract>[] = [
  {
    accessorKey: "factionSymbol",
    header: "Faction",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorFn: (column) =>
      column.terms.deliver?.map((good) => good.destinationSymbol).join(", "),
    header: "Destinations",
  },
  {
    accessorFn: (column) => getTotalPayment(column.terms.payment),
    header: "Total compensation",
  },
  {
    accessorKey: "deadlineToAccept",
    header: "Available",
  },
];
