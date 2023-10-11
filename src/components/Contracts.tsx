import { type Contract, spaceTradersApi } from "@/services/space-traders";
import { contractColumns } from "@/utils/contracts";
import { match } from "ts-pattern";
import { DataTable } from "./ui/data-table";

interface Props {
	filterFn: (contract: Contract) => boolean
}

const activeContracts = (c: Contract) => c.accepted;
const inactiveContracts = (c: Contract) => !c.accepted;

export function Contracts({ filterFn = inactiveContracts }: Props) {
	const query = spaceTradersApi.useGetMyContractsQuery({
		page: 1,
		limit: 20,
	});

	let contracts = query.data?.data ?? [];

	if (filterFn) contracts = contracts.filter(filterFn);

	return match(query)
		.with({ isLoading: true }, () => <p>Loading...</p>)
		.with({ isError: true }, () => <p>Error</p>)
		.otherwise(() => (
			<article className="relative border border-amber-main px-3 py-4">
				<header className="absolute -top-3 left-3 bg-amber-main px-3">
					<h1 className="font-bold uppercase text-black">Contracts</h1>
				</header>
				<section>
					<DataTable columns={contractColumns} data={contracts} />
				</section>
			</article>
		));
}

export function ActiveContracts() {
	return <Contracts filterFn={activeContracts} />
}
