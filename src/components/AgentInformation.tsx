import Loading from "@/components/loading";
import { spaceTradersApi } from "@/services/space-traders";
import { match } from "ts-pattern";

export function AgentInformation() {
  const query = spaceTradersApi.useGetMyAgentQuery();

  const data = query.data?.data;

  return match(query)
    .with({ isLoading: true }, () => <LoadingAgentInformation />)
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
  return (
    <article className="relative border border-amber-main px-3 py-4">
      <header className="absolute -top-3 left-3 bg-amber-main px-3">
        <h1 className="font-bold uppercase text-black">AGENT MISSING</h1>
      </header>
      <p>An error has occured while fetching your agents data</p>
    </article>
  );
}

export function LoadingAgentInformation() {
  return (
    <article className="border border-amber-main px-3 py-4">
      <p className="flex items-center gap-2">
        Headquarters: <Loading size="small" type="long" />
      </p>
      <p className="flex items-center gap-2">
        Credits: <Loading size="small" type="long" />
      </p>
      <p className="flex items-center gap-2">
        Faction: <Loading size="small" type="long" />
      </p>
      <p className="flex items-center gap-2">
        Ship count: <Loading size="small" type="long" />
      </p>
    </article>
  );
}
