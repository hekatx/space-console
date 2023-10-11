import Loading from "@/components/loading";
import { spaceTradersApi } from "@/services/space-traders";
import { match } from "ts-pattern";

export function AgentInformation() {
	const query = spaceTradersApi.useGetMyAgentQuery();

	const data = query.data?.data;

	return match(query)
		.with({ isLoading: true }, () => <LoadingAgentInfo />)
		.with({ isError: true }, () => <Error />)
		.otherwise(() => (
			<article className="relative border border-amber-main px-3 py-4">
				<header className="absolute -top-3 left-3 bg-amber-main px-3">
					<h1 className="font-bold uppercase text-black">{data?.symbol}</h1>
				</header>
				<p>Headquarters: {data?.headquarters}</p>
				<p>Credits: {data?.credits}</p>
				<p>Faction: {data?.startingFaction}</p>
				<p>Ship count: {data?.shipCount}</p>
			</article>
		));
}

function Error() {
	return <p>Error!</p>;
}

export function LoadingAgentInfo() {
	return (
		<article className="border border-amber-main px-3 py-4">
			<p>
				Headquarters: <Loading size="medium" type="long" />
			</p>
			<p>
				Credits: <Loading size="medium" type="long" />
			</p>
			<p>
				Faction: <Loading size="medium" type="long" />
			</p>
			<p>
				Ship count: <Loading size="medium" type="long" />
			</p>
		</article>
	);
}
