import { AgentInformation } from "@/components/AgentInformation";
import { ActiveContracts, Contracts } from "@/components/Contracts";

export default function Home() {
  return (
    <section className="grid gap-5">
      <AgentInformation />
      <ActiveContracts />
      <Contracts />
    </section>
  );
}
