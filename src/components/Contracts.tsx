import { spaceTradersApi } from "@/services/space-traders";
import { getTotalPayment } from "@/utils/contracts";
import { match } from "ts-pattern";

export function ActiveContracts() {
	const query = spaceTradersApi.useGetMyContractsQuery({
		page: 1,
		limit: 20,
	});

	const contracts = query.data?.data ?? [];
	const activeContracts = contracts.filter(contract => contract.accepted);
	const isEmpty = contracts.length === 0;

	return match(query)
		.with({ isLoading: true }, () => <p>Loading...</p>)
		.with({ isError: true }, () => <p>Error</p>)
		.otherwise(() => (
			<article className="relative border border-amber-main px-3 py-4">
				<header className="absolute -top-3 left-3 bg-amber-main px-3">
					<h1 className="font-bold uppercase text-black">Active contracts</h1>
				</header>
				<section>
					{activeContracts.map((contract) => (
						<article key={contract.id}>
							<p>{contract.type}</p>
							<p>{contract.terms.deadline}</p>
							<p>{contract.expiration}</p>
							<p>{contract.factionSymbol}</p>
						</article>
					))}
				</section>
			</article>
		));
}

export function Contracts() {
	const query = spaceTradersApi.useGetMyContractsQuery({
		page: 1,
		limit: 20,
	});
	const [acceptContract] = spaceTradersApi.usePostMyContractsByContractIdAcceptMutation();

	const contracts = query.data?.data ?? [];
	const isEmpty = contracts.length === 0;

	return match(query)
		.with({ isLoading: true }, () => <p>Loading...</p>)
		.with({ isError: true }, () => <p>Error</p>)
		.otherwise(() => (
			<article className="relative border border-amber-main px-3 py-4">
				<header className="absolute -top-3 left-3 bg-amber-main px-3">
					<h1 className="font-bold uppercase text-black">Contracts</h1>
				</header>
				<section>
					<article className="flex gap-3">
						<p>Type</p>
						<p>Faction</p>
						<p>Payment</p>
						<p>Available until</p>
					</article>
					{contracts.map((contract) => (
						<article key={contract.id} className="flex">
							<p>{contract.type}</p>
							<p>{contract.factionSymbol}</p>
							<p>{getTotalPayment(contract.terms.payment)}</p>
							<p>{contract.deadlineToAccept}</p>
							<button onClick={() => { void acceptContract({ contractId: contract.id }) }}>Accept</button>
						</article>
					))}
				</section>
			</article>
		));
}
