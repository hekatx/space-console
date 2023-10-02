import { emptyApi as api } from "../fixtures/emtpyApi";
export const addTagTypes = [
	"Systems",
	"Factions",
	"Agents",
	"Contracts",
	"Fleet",
] as const;
const injectedRtkApi = api
	.enhanceEndpoints({
		addTagTypes,
	})
	.injectEndpoints({
		endpoints: (build) => ({
			get: build.query<GetApiResponse, GetApiArg>({
				query: () => ({ url: `/` }),
			}),
			register: build.mutation<RegisterApiResponse, RegisterApiArg>({
				query: (queryArg) => ({
					url: `/register`,
					method: "POST",
					body: queryArg.body,
				}),
			}),
			getSystems: build.query<GetSystemsApiResponse, GetSystemsApiArg>({
				query: (queryArg) => ({
					url: `/systems`,
					params: { page: queryArg.page, limit: queryArg.limit },
				}),
				providesTags: ["Systems"],
			}),
			getSystemsBySystemSymbol: build.query<
				GetSystemsBySystemSymbolApiResponse,
				GetSystemsBySystemSymbolApiArg
			>({
				query: (queryArg) => ({ url: `/systems/${queryArg.systemSymbol}` }),
				providesTags: ["Systems"],
			}),
			getSystemsBySystemSymbolWaypoints: build.query<
				GetSystemsBySystemSymbolWaypointsApiResponse,
				GetSystemsBySystemSymbolWaypointsApiArg
			>({
				query: (queryArg) => ({
					url: `/systems/${queryArg.systemSymbol}/waypoints`,
					params: { page: queryArg.page, limit: queryArg.limit },
				}),
				providesTags: ["Systems"],
			}),
			getSystemsBySystemSymbolWaypointsAndWaypointSymbol: build.query<
				GetSystemsBySystemSymbolWaypointsAndWaypointSymbolApiResponse,
				GetSystemsBySystemSymbolWaypointsAndWaypointSymbolApiArg
			>({
				query: (queryArg) => ({
					url: `/systems/${queryArg.systemSymbol}/waypoints/${queryArg.waypointSymbol}`,
				}),
				providesTags: ["Systems"],
			}),
			getSystemsBySystemSymbolWaypointsAndWaypointSymbolMarket: build.query<
				GetSystemsBySystemSymbolWaypointsAndWaypointSymbolMarketApiResponse,
				GetSystemsBySystemSymbolWaypointsAndWaypointSymbolMarketApiArg
			>({
				query: (queryArg) => ({
					url: `/systems/${queryArg.systemSymbol}/waypoints/${queryArg.waypointSymbol}/market`,
				}),
				providesTags: ["Systems"],
			}),
			getSystemsBySystemSymbolWaypointsAndWaypointSymbolShipyard: build.query<
				GetSystemsBySystemSymbolWaypointsAndWaypointSymbolShipyardApiResponse,
				GetSystemsBySystemSymbolWaypointsAndWaypointSymbolShipyardApiArg
			>({
				query: (queryArg) => ({
					url: `/systems/${queryArg.systemSymbol}/waypoints/${queryArg.waypointSymbol}/shipyard`,
				}),
				providesTags: ["Systems"],
			}),
			getSystemsBySystemSymbolWaypointsAndWaypointSymbolJumpGate: build.query<
				GetSystemsBySystemSymbolWaypointsAndWaypointSymbolJumpGateApiResponse,
				GetSystemsBySystemSymbolWaypointsAndWaypointSymbolJumpGateApiArg
			>({
				query: (queryArg) => ({
					url: `/systems/${queryArg.systemSymbol}/waypoints/${queryArg.waypointSymbol}/jump-gate`,
				}),
				providesTags: ["Systems"],
			}),
			getFactions: build.query<GetFactionsApiResponse, GetFactionsApiArg>({
				query: (queryArg) => ({
					url: `/factions`,
					params: { page: queryArg.page, limit: queryArg.limit },
				}),
				providesTags: ["Factions"],
			}),
			getFactionsByFactionSymbol: build.query<
				GetFactionsByFactionSymbolApiResponse,
				GetFactionsByFactionSymbolApiArg
			>({
				query: (queryArg) => ({ url: `/factions/${queryArg.factionSymbol}` }),
				providesTags: ["Factions"],
			}),
			getMyAgent: build.query<GetMyAgentApiResponse, GetMyAgentApiArg>({
				query: () => ({ url: `/my/agent` }),
				providesTags: ["Agents"],
			}),
			getAgents: build.query<GetAgentsApiResponse, GetAgentsApiArg>({
				query: (queryArg) => ({
					url: `/agents`,
					params: { page: queryArg.page, limit: queryArg.limit },
				}),
				providesTags: ["Agents"],
			}),
			getAgentsByAgentSymbol: build.query<
				GetAgentsByAgentSymbolApiResponse,
				GetAgentsByAgentSymbolApiArg
			>({
				query: (queryArg) => ({ url: `/agents/${queryArg.agentSymbol}` }),
				providesTags: ["Agents"],
			}),
			getMyContracts: build.query<
				GetMyContractsApiResponse,
				GetMyContractsApiArg
			>({
				query: (queryArg) => ({
					url: `/my/contracts`,
					params: { page: queryArg.page, limit: queryArg.limit },
				}),
				providesTags: ["Contracts"],
			}),
			getMyContractsByContractId: build.query<
				GetMyContractsByContractIdApiResponse,
				GetMyContractsByContractIdApiArg
			>({
				query: (queryArg) => ({ url: `/my/contracts/${queryArg.contractId}` }),
				providesTags: ["Contracts"],
			}),
			postMyContractsByContractIdAccept: build.mutation<
				PostMyContractsByContractIdAcceptApiResponse,
				PostMyContractsByContractIdAcceptApiArg
			>({
				query: (queryArg) => ({
					url: `/my/contracts/${queryArg.contractId}/accept`,
					method: "POST",
				}),
				invalidatesTags: ["Contracts"],
			}),
			postMyContractsByContractIdDeliver: build.mutation<
				PostMyContractsByContractIdDeliverApiResponse,
				PostMyContractsByContractIdDeliverApiArg
			>({
				query: (queryArg) => ({
					url: `/my/contracts/${queryArg.contractId}/deliver`,
					method: "POST",
					body: queryArg.body,
				}),
				invalidatesTags: ["Contracts"],
			}),
			postMyContractsByContractIdFulfill: build.mutation<
				PostMyContractsByContractIdFulfillApiResponse,
				PostMyContractsByContractIdFulfillApiArg
			>({
				query: (queryArg) => ({
					url: `/my/contracts/${queryArg.contractId}/fulfill`,
					method: "POST",
				}),
				invalidatesTags: ["Contracts"],
			}),
			getMyShips: build.query<GetMyShipsApiResponse, GetMyShipsApiArg>({
				query: (queryArg) => ({
					url: `/my/ships`,
					params: { page: queryArg.page, limit: queryArg.limit },
				}),
				providesTags: ["Fleet"],
			}),
			postMyShips: build.mutation<PostMyShipsApiResponse, PostMyShipsApiArg>({
				query: (queryArg) => ({
					url: `/my/ships`,
					method: "POST",
					body: queryArg.body,
				}),
				invalidatesTags: ["Fleet"],
			}),
			getMyShipsByShipSymbol: build.query<
				GetMyShipsByShipSymbolApiResponse,
				GetMyShipsByShipSymbolApiArg
			>({
				query: (queryArg) => ({ url: `/my/ships/${queryArg.shipSymbol}` }),
				providesTags: ["Fleet"],
			}),
			getMyShipsByShipSymbolCargo: build.query<
				GetMyShipsByShipSymbolCargoApiResponse,
				GetMyShipsByShipSymbolCargoApiArg
			>({
				query: (queryArg) => ({
					url: `/my/ships/${queryArg.shipSymbol}/cargo`,
				}),
				providesTags: ["Fleet"],
			}),
			postMyShipsByShipSymbolOrbit: build.mutation<
				PostMyShipsByShipSymbolOrbitApiResponse,
				PostMyShipsByShipSymbolOrbitApiArg
			>({
				query: (queryArg) => ({
					url: `/my/ships/${queryArg.shipSymbol}/orbit`,
					method: "POST",
				}),
				invalidatesTags: ["Fleet"],
			}),
			postMyShipsByShipSymbolRefine: build.mutation<
				PostMyShipsByShipSymbolRefineApiResponse,
				PostMyShipsByShipSymbolRefineApiArg
			>({
				query: (queryArg) => ({
					url: `/my/ships/${queryArg.shipSymbol}/refine`,
					method: "POST",
					body: queryArg.body,
				}),
				invalidatesTags: ["Fleet"],
			}),
			postMyShipsByShipSymbolChart: build.mutation<
				PostMyShipsByShipSymbolChartApiResponse,
				PostMyShipsByShipSymbolChartApiArg
			>({
				query: (queryArg) => ({
					url: `/my/ships/${queryArg.shipSymbol}/chart`,
					method: "POST",
				}),
				invalidatesTags: ["Fleet"],
			}),
			getMyShipsByShipSymbolCooldown: build.query<
				GetMyShipsByShipSymbolCooldownApiResponse,
				GetMyShipsByShipSymbolCooldownApiArg
			>({
				query: (queryArg) => ({
					url: `/my/ships/${queryArg.shipSymbol}/cooldown`,
				}),
				providesTags: ["Fleet"],
			}),
			postMyShipsByShipSymbolDock: build.mutation<
				PostMyShipsByShipSymbolDockApiResponse,
				PostMyShipsByShipSymbolDockApiArg
			>({
				query: (queryArg) => ({
					url: `/my/ships/${queryArg.shipSymbol}/dock`,
					method: "POST",
				}),
				invalidatesTags: ["Fleet"],
			}),
			postMyShipsByShipSymbolSurvey: build.mutation<
				PostMyShipsByShipSymbolSurveyApiResponse,
				PostMyShipsByShipSymbolSurveyApiArg
			>({
				query: (queryArg) => ({
					url: `/my/ships/${queryArg.shipSymbol}/survey`,
					method: "POST",
				}),
				invalidatesTags: ["Fleet"],
			}),
			postMyShipsByShipSymbolExtract: build.mutation<
				PostMyShipsByShipSymbolExtractApiResponse,
				PostMyShipsByShipSymbolExtractApiArg
			>({
				query: (queryArg) => ({
					url: `/my/ships/${queryArg.shipSymbol}/extract`,
					method: "POST",
					body: queryArg.body,
				}),
				invalidatesTags: ["Fleet"],
			}),
			postMyShipsByShipSymbolExtractSurvey: build.mutation<
				PostMyShipsByShipSymbolExtractSurveyApiResponse,
				PostMyShipsByShipSymbolExtractSurveyApiArg
			>({
				query: (queryArg) => ({
					url: `/my/ships/${queryArg.shipSymbol}/extract/survey`,
					method: "POST",
					body: queryArg.survey,
				}),
				invalidatesTags: ["Fleet"],
			}),
			jettison: build.mutation<JettisonApiResponse, JettisonApiArg>({
				query: (queryArg) => ({
					url: `/my/ships/${queryArg.shipSymbol}/jettison`,
					method: "POST",
					body: queryArg.body,
				}),
				invalidatesTags: ["Fleet"],
			}),
			postMyShipsByShipSymbolJump: build.mutation<
				PostMyShipsByShipSymbolJumpApiResponse,
				PostMyShipsByShipSymbolJumpApiArg
			>({
				query: (queryArg) => ({
					url: `/my/ships/${queryArg.shipSymbol}/jump`,
					method: "POST",
					body: queryArg.body,
				}),
				invalidatesTags: ["Fleet"],
			}),
			postMyShipsByShipSymbolNavigate: build.mutation<
				PostMyShipsByShipSymbolNavigateApiResponse,
				PostMyShipsByShipSymbolNavigateApiArg
			>({
				query: (queryArg) => ({
					url: `/my/ships/${queryArg.shipSymbol}/navigate`,
					method: "POST",
					body: queryArg.body,
				}),
				invalidatesTags: ["Fleet"],
			}),
			patchMyShipsByShipSymbolNav: build.mutation<
				PatchMyShipsByShipSymbolNavApiResponse,
				PatchMyShipsByShipSymbolNavApiArg
			>({
				query: (queryArg) => ({
					url: `/my/ships/${queryArg.shipSymbol}/nav`,
					method: "PATCH",
					body: queryArg.body,
				}),
				invalidatesTags: ["Fleet"],
			}),
			getMyShipsByShipSymbolNav: build.query<
				GetMyShipsByShipSymbolNavApiResponse,
				GetMyShipsByShipSymbolNavApiArg
			>({
				query: (queryArg) => ({ url: `/my/ships/${queryArg.shipSymbol}/nav` }),
				providesTags: ["Fleet"],
			}),
			postMyShipsByShipSymbolWarp: build.mutation<
				PostMyShipsByShipSymbolWarpApiResponse,
				PostMyShipsByShipSymbolWarpApiArg
			>({
				query: (queryArg) => ({
					url: `/my/ships/${queryArg.shipSymbol}/warp`,
					method: "POST",
					body: queryArg.body,
				}),
				invalidatesTags: ["Fleet"],
			}),
			postMyShipsByShipSymbolSell: build.mutation<
				PostMyShipsByShipSymbolSellApiResponse,
				PostMyShipsByShipSymbolSellApiArg
			>({
				query: (queryArg) => ({
					url: `/my/ships/${queryArg.shipSymbol}/sell`,
					method: "POST",
					body: queryArg.body,
				}),
				invalidatesTags: ["Fleet"],
			}),
			postMyShipsByShipSymbolScanSystems: build.mutation<
				PostMyShipsByShipSymbolScanSystemsApiResponse,
				PostMyShipsByShipSymbolScanSystemsApiArg
			>({
				query: (queryArg) => ({
					url: `/my/ships/${queryArg.shipSymbol}/scan/systems`,
					method: "POST",
				}),
				invalidatesTags: ["Fleet"],
			}),
			postMyShipsByShipSymbolScanWaypoints: build.mutation<
				PostMyShipsByShipSymbolScanWaypointsApiResponse,
				PostMyShipsByShipSymbolScanWaypointsApiArg
			>({
				query: (queryArg) => ({
					url: `/my/ships/${queryArg.shipSymbol}/scan/waypoints`,
					method: "POST",
				}),
				invalidatesTags: ["Fleet"],
			}),
			postMyShipsByShipSymbolScanShips: build.mutation<
				PostMyShipsByShipSymbolScanShipsApiResponse,
				PostMyShipsByShipSymbolScanShipsApiArg
			>({
				query: (queryArg) => ({
					url: `/my/ships/${queryArg.shipSymbol}/scan/ships`,
					method: "POST",
				}),
				invalidatesTags: ["Fleet"],
			}),
			postMyShipsByShipSymbolRefuel: build.mutation<
				PostMyShipsByShipSymbolRefuelApiResponse,
				PostMyShipsByShipSymbolRefuelApiArg
			>({
				query: (queryArg) => ({
					url: `/my/ships/${queryArg.shipSymbol}/refuel`,
					method: "POST",
					body: queryArg.body,
				}),
				invalidatesTags: ["Fleet"],
			}),
			postMyShipsByShipSymbolPurchase: build.mutation<
				PostMyShipsByShipSymbolPurchaseApiResponse,
				PostMyShipsByShipSymbolPurchaseApiArg
			>({
				query: (queryArg) => ({
					url: `/my/ships/${queryArg.shipSymbol}/purchase`,
					method: "POST",
					body: queryArg.body,
				}),
				invalidatesTags: ["Fleet"],
			}),
			postMyShipsByShipSymbolTransfer: build.mutation<
				PostMyShipsByShipSymbolTransferApiResponse,
				PostMyShipsByShipSymbolTransferApiArg
			>({
				query: (queryArg) => ({
					url: `/my/ships/${queryArg.shipSymbol}/transfer`,
					method: "POST",
					body: queryArg.body,
				}),
				invalidatesTags: ["Fleet"],
			}),
			negotiateContract: build.mutation<
				NegotiateContractApiResponse,
				NegotiateContractApiArg
			>({
				query: (queryArg) => ({
					url: `/my/ships/${queryArg.shipSymbol}/negotiate/contract`,
					method: "POST",
				}),
				invalidatesTags: ["Fleet"],
			}),
			getMyShipsByShipSymbolMounts: build.query<
				GetMyShipsByShipSymbolMountsApiResponse,
				GetMyShipsByShipSymbolMountsApiArg
			>({
				query: (queryArg) => ({
					url: `/my/ships/${queryArg.shipSymbol}/mounts`,
				}),
				providesTags: ["Fleet"],
			}),
			postMyShipsByShipSymbolMountsInstall: build.mutation<
				PostMyShipsByShipSymbolMountsInstallApiResponse,
				PostMyShipsByShipSymbolMountsInstallApiArg
			>({
				query: (queryArg) => ({
					url: `/my/ships/${queryArg.shipSymbol}/mounts/install`,
					method: "POST",
					body: queryArg.body,
				}),
				invalidatesTags: ["Fleet"],
			}),
			postMyShipsByShipSymbolMountsRemove: build.mutation<
				PostMyShipsByShipSymbolMountsRemoveApiResponse,
				PostMyShipsByShipSymbolMountsRemoveApiArg
			>({
				query: (queryArg) => ({
					url: `/my/ships/${queryArg.shipSymbol}/mounts/remove`,
					method: "POST",
					body: queryArg.body,
				}),
				invalidatesTags: ["Fleet"],
			}),
		}),
		overrideExisting: false,
	});
export { injectedRtkApi as spaceTradersApi };
export type GetApiResponse = /** status 200 Fetched status successfully. */ {
	status: string;
	version: string;
	resetDate: string;
	description: string;
	stats: {
		agents: number;
		ships: number;
		systems: number;
		waypoints: number;
	};
	leaderboards: {
		mostCredits: {
			agentSymbol: string;
			credits: number;
		}[];
		mostSubmittedCharts: {
			agentSymbol: string;
			chartCount: number;
		}[];
	};
	serverResets: {
		next: string;
		frequency: string;
	};
	announcements: {
		title: string;
		body: string;
	}[];
	links: {
		name: string;
		url: string;
	}[];
};
export type GetApiArg = void;
export type RegisterApiResponse = /** status 201 Succesfully registered. */ {
	data: {
		agent: Agent;
		contract: Contract;
		faction: Faction;
		ship: Ship;
		token: string;
	};
};
export type RegisterApiArg = {
	body: {
		faction: FactionSymbols;
		symbol: string;
		email?: string;
	};
};
export type GetSystemsApiResponse =
  /** status 200 Successfully listed systems. */ {
	data: System[];
	meta: Meta;
};
export type GetSystemsApiArg = {
	/** What entry offset to request */
	page?: number;
	/** How many entries to return per page */
	limit?: number;
};
export type GetSystemsBySystemSymbolApiResponse =
  /** status 200 Successfully fetched the system. */ {
	data: System;
};
export type GetSystemsBySystemSymbolApiArg = {
	/** The system symbol */
	systemSymbol: string;
};
export type GetSystemsBySystemSymbolWaypointsApiResponse =
  /** status 200 Successfully fetched all waypoints in the system. */ {
	data: Waypoint[];
	meta: Meta;
};
export type GetSystemsBySystemSymbolWaypointsApiArg = {
	/** The system symbol */
	systemSymbol: string;
	/** What entry offset to request */
	page?: number;
	/** How many entries to return per page */
	limit?: number;
};
export type GetSystemsBySystemSymbolWaypointsAndWaypointSymbolApiResponse =
  /** status 200 Successfully fetched waypoint. */ {
	data: Waypoint;
};
export type GetSystemsBySystemSymbolWaypointsAndWaypointSymbolApiArg = {
	/** The system symbol */
	systemSymbol: string;
	/** The waypoint symbol */
	waypointSymbol: string;
};
export type GetSystemsBySystemSymbolWaypointsAndWaypointSymbolMarketApiResponse =
  /** status 200 Successfully fetched the market. */ {
	data: Market;
};
export type GetSystemsBySystemSymbolWaypointsAndWaypointSymbolMarketApiArg = {
	/** The system symbol */
	systemSymbol: string;
	/** The waypoint symbol */
	waypointSymbol: string;
};
export type GetSystemsBySystemSymbolWaypointsAndWaypointSymbolShipyardApiResponse =
  /** status 200 Successfully fetched the shipyard. */ {
	data: Shipyard;
};
export type GetSystemsBySystemSymbolWaypointsAndWaypointSymbolShipyardApiArg = {
	/** The system symbol */
	systemSymbol: string;
	/** The waypoint symbol */
	waypointSymbol: string;
};
export type GetSystemsBySystemSymbolWaypointsAndWaypointSymbolJumpGateApiResponse =
  /** status 200 Successfully fetched jump gate. */ {
	data: JumpGate;
};
export type GetSystemsBySystemSymbolWaypointsAndWaypointSymbolJumpGateApiArg = {
	/** The system symbol */
	systemSymbol: string;
	/** The waypoint symbol */
	waypointSymbol: string;
};
export type GetFactionsApiResponse =
  /** status 200 Succesfully fetched factions. */ {
	data: Faction[];
	meta: Meta;
};
export type GetFactionsApiArg = {
	/** What entry offset to request */
	page?: number;
	/** How many entries to return per page */
	limit?: number;
};
export type GetFactionsByFactionSymbolApiResponse =
  /** status 200 Successfully fetched a faction. */ {
	data: Faction;
};
export type GetFactionsByFactionSymbolApiArg = {
	/** The faction symbol */
	factionSymbol: string;
};
export type GetMyAgentApiResponse =
  /** status 200 Successfully fetched agent details. */ {
	data: Agent;
};
export type GetMyAgentApiArg = void;
export type GetAgentsApiResponse =
  /** status 200 Successfully fetched agents details. */ {
	data: Agent[];
	meta: Meta;
};
export type GetAgentsApiArg = {
	/** What entry offset to request */
	page?: number;
	/** How many entries to return per page */
	limit?: number;
};
export type GetAgentsByAgentSymbolApiResponse =
  /** status 200 Successfully fetched agent details. */ {
	data: Agent;
};
export type GetAgentsByAgentSymbolApiArg = {
	/** The agent symbol */
	agentSymbol: string;
};
export type GetMyContractsApiResponse =
  /** status 200 Succesfully listed contracts. */ {
	data: Contract[];
	meta: Meta;
};
export type GetMyContractsApiArg = {
	/** What entry offset to request */
	page?: number;
	/** How many entries to return per page */
	limit?: number;
};
export type GetMyContractsByContractIdApiResponse =
  /** status 200 Successfully fetched contract. */ {
	data: Contract;
};
export type GetMyContractsByContractIdApiArg = {
	/** The contract ID */
	contractId: string;
};
export type PostMyContractsByContractIdAcceptApiResponse =
  /** status 200 Succesfully accepted contract. */ {
	data: {
		agent: Agent;
		contract: Contract;
	};
};
export type PostMyContractsByContractIdAcceptApiArg = {
	/** The contract ID to accept. */
	contractId: string;
};
export type PostMyContractsByContractIdDeliverApiResponse =
  /** status 200 Successfully delivered cargo to contract. */ {
	data: {
		contract: Contract;
		cargo: ShipCargo;
	};
};
export type PostMyContractsByContractIdDeliverApiArg = {
	/** The ID of the contract. */
	contractId: string;
	body: {
		shipSymbol: string;
		tradeSymbol: string;
		units: number;
	};
};
export type PostMyContractsByContractIdFulfillApiResponse =
  /** status 200 Successfully fulfilled a contract. */ {
	data: {
		agent: Agent;
		contract: Contract;
	};
};
export type PostMyContractsByContractIdFulfillApiArg = {
	/** The ID of the contract to fulfill. */
	contractId: string;
};
export type GetMyShipsApiResponse =
  /** status 200 Succesfully listed ships. */ {
	data: Ship[];
	meta: Meta;
};
export type GetMyShipsApiArg = {
	/** What entry offset to request */
	page?: number;
	/** How many entries to return per page */
	limit?: number;
};
export type PostMyShipsApiResponse =
  /** status 201 Purchased ship successfully. */ {
	data: {
		agent: Agent;
		ship: Ship;
		transaction: ShipyardTransaction;
	};
};
export type PostMyShipsApiArg = {
	body: {
		shipType: ShipType;
		waypointSymbol: string;
	};
};
export type GetMyShipsByShipSymbolApiResponse =
  /** status 200 Successfully fetched ship. */ {
	data: Ship;
};
export type GetMyShipsByShipSymbolApiArg = {
	/** The symbol of the ship. */
	shipSymbol: string;
};
export type GetMyShipsByShipSymbolCargoApiResponse =
  /** status 200 Successfully fetched ship's cargo. */ {
	data: ShipCargo;
};
export type GetMyShipsByShipSymbolCargoApiArg = {
	/** The symbol of the ship. */
	shipSymbol: string;
};
export type PostMyShipsByShipSymbolOrbitApiResponse =
  /** status 200 The ship has successfully moved into orbit at its current location. */ {
	data: {
		nav: ShipNav;
	};
};
export type PostMyShipsByShipSymbolOrbitApiArg = {
	/** The symbol of the ship. */
	shipSymbol: string;
};
export type PostMyShipsByShipSymbolRefineApiResponse =
  /** status 201 The ship has successfully refined goods. */ {
	data: {
		cargo: ShipCargo;
		cooldown: Cooldown;
		produced: {
			tradeSymbol: string;
			units: number;
		}[];
		consumed: {
			tradeSymbol: string;
			units: number;
		}[];
	};
};
export type PostMyShipsByShipSymbolRefineApiArg = {
	/** The symbol of the ship. */
	shipSymbol: string;
	body: {
		produce:
		| "IRON"
		| "COPPER"
		| "SILVER"
		| "GOLD"
		| "ALUMINUM"
		| "PLATINUM"
		| "URANITE"
		| "MERITIUM"
		| "FUEL";
	};
};
export type PostMyShipsByShipSymbolChartApiResponse =
  /** status 201 Created */ {
	data: {
		chart: Chart;
		waypoint: Waypoint;
	};
};
export type PostMyShipsByShipSymbolChartApiArg = {
	/** The symbol of the ship. */
	shipSymbol: string;
};
export type GetMyShipsByShipSymbolCooldownApiResponse =
	/** status 200 Succesfully fetched ship's cooldown. */
	| {
		data: Cooldown;
	}
	| /** status 204 No cooldown. */ undefined;
export type GetMyShipsByShipSymbolCooldownApiArg = {
	/** The symbol of the ship. */
	shipSymbol: string;
};
export type PostMyShipsByShipSymbolDockApiResponse =
  /** status 200 The ship has successfully docked at its current location. */ {
	data: {
		nav: ShipNav;
	};
};
export type PostMyShipsByShipSymbolDockApiArg = {
	/** The symbol of the ship. */
	shipSymbol: string;
};
export type PostMyShipsByShipSymbolSurveyApiResponse =
  /** status 201 Surveys has been created. */ {
	data: {
		cooldown: Cooldown;
		surveys: Survey[];
	};
};
export type PostMyShipsByShipSymbolSurveyApiArg = {
	/** The symbol of the ship. */
	shipSymbol: string;
};
export type PostMyShipsByShipSymbolExtractApiResponse =
  /** status 201 Extracted successfully. */ {
	data: {
		cooldown: Cooldown;
		extraction: Extraction;
		cargo: ShipCargo;
	};
};
export type PostMyShipsByShipSymbolExtractApiArg = {
	/** The ship symbol. */
	shipSymbol: string;
	body: {
		survey?: Survey;
	};
};
export type PostMyShipsByShipSymbolExtractSurveyApiResponse =
  /** status 201 Extracted successfully. */ {
	data: {
		cooldown: Cooldown;
		extraction: Extraction;
		cargo: ShipCargo;
	};
};
export type PostMyShipsByShipSymbolExtractSurveyApiArg = {
	/** The ship symbol. */
	shipSymbol: string;
	survey: Survey;
};
export type JettisonApiResponse = /** status 200 Jettison successful. */ {
	data: {
		cargo: ShipCargo;
	};
};
export type JettisonApiArg = {
	/** The ship symbol. */
	shipSymbol: string;
	body: {
		symbol: TradeSymbol;
		units: number;
	};
};
export type PostMyShipsByShipSymbolJumpApiResponse =
  /** status 200 Jump successful. */ {
	data: {
		cooldown: Cooldown;
		nav: ShipNav;
	};
};
export type PostMyShipsByShipSymbolJumpApiArg = {
	/** The ship symbol. */
	shipSymbol: string;
	body: {
		systemSymbol: string;
	};
};
export type PostMyShipsByShipSymbolNavigateApiResponse =
  /** status 200 The successful transit information including the route details and changes to ship fuel. The route includes the expected time of arrival. */ {
	data: {
		fuel: ShipFuel;
		nav: ShipNav;
	};
};
export type PostMyShipsByShipSymbolNavigateApiArg = {
	/** The ship symbol. */
	shipSymbol: string;
	body: {
		waypointSymbol: string;
	};
};
export type PatchMyShipsByShipSymbolNavApiResponse =
  /** status 200 The updated nav data of the ship. */ {
	data: ShipNav;
};
export type PatchMyShipsByShipSymbolNavApiArg = {
	/** The ship symbol. */
	shipSymbol: string;
	body: {
		flightMode?: ShipNavFlightMode;
	};
};
export type GetMyShipsByShipSymbolNavApiResponse =
  /** status 200 The current nav status of the ship. */ {
	data: ShipNav;
};
export type GetMyShipsByShipSymbolNavApiArg = {
	/** The ship symbol. */
	shipSymbol: string;
};
export type PostMyShipsByShipSymbolWarpApiResponse =
  /** status 200 The successful transit information including the route details and changes to ship fuel. The route includes the expected time of arrival. */ {
	data: {
		fuel: ShipFuel;
		nav: ShipNav;
	};
};
export type PostMyShipsByShipSymbolWarpApiArg = {
	/** The ship symbol. */
	shipSymbol: string;
	body: {
		waypointSymbol: string;
	};
};
export type PostMyShipsByShipSymbolSellApiResponse =
  /** status 201 Cargo was successfully sold. */ {
	data: {
		agent: Agent;
		cargo: ShipCargo;
		transaction: MarketTransaction;
	};
};
export type PostMyShipsByShipSymbolSellApiArg = {
	/** Symbol of a ship. */
	shipSymbol: string;
	body: {
		symbol: TradeSymbol;
		units: number;
	};
};
export type PostMyShipsByShipSymbolScanSystemsApiResponse =
  /** status 201 Successfully scanned for nearby systems. */ {
	data: {
		cooldown: Cooldown;
		systems: ScannedSystem[];
	};
};
export type PostMyShipsByShipSymbolScanSystemsApiArg = {
	/** The ship symbol. */
	shipSymbol: string;
};
export type PostMyShipsByShipSymbolScanWaypointsApiResponse =
  /** status 201 Successfully scanned for nearby waypoints. */ {
	data: {
		cooldown: Cooldown;
		waypoints: ScannedWaypoint[];
	};
};
export type PostMyShipsByShipSymbolScanWaypointsApiArg = {
	/** The ship symbol. */
	shipSymbol: string;
};
export type PostMyShipsByShipSymbolScanShipsApiResponse =
  /** status 201 Successfully scanned for nearby ships. */ {
	data: {
		cooldown: Cooldown;
		ships: ScannedShip[];
	};
};
export type PostMyShipsByShipSymbolScanShipsApiArg = {
	/** The ship symbol. */
	shipSymbol: string;
};
export type PostMyShipsByShipSymbolRefuelApiResponse =
  /** status 200 Refueled successfully. */ {
	data: {
		agent: Agent;
		fuel: ShipFuel;
		transaction: MarketTransaction;
	};
};
export type PostMyShipsByShipSymbolRefuelApiArg = {
	/** The ship symbol. */
	shipSymbol: string;
	body: {
		units?: number;
	};
};
export type PostMyShipsByShipSymbolPurchaseApiResponse =
  /** status 201 Purchased goods successfully. */ {
	data: {
		agent: Agent;
		cargo: ShipCargo;
		transaction: MarketTransaction;
	};
};
export type PostMyShipsByShipSymbolPurchaseApiArg = {
	/** The ship's symbol. */
	shipSymbol: string;
	body: {
		symbol: TradeSymbol;
		units: number;
	};
};
export type PostMyShipsByShipSymbolTransferApiResponse =
  /** status 200 Transfer successful. */ {
	data: {
		cargo: ShipCargo;
	};
};
export type PostMyShipsByShipSymbolTransferApiArg = {
	/** The transferring ship's symbol. */
	shipSymbol: string;
	body: {
		tradeSymbol: TradeSymbol;
		units: number;
		shipSymbol: string;
	};
};
export type NegotiateContractApiResponse =
  /** status 201 Successfully negotiated a new contract. */ {
	data: {
		contract: Contract;
	};
};
export type NegotiateContractApiArg = {
	/** The ship's symbol. */
	shipSymbol: string;
};
export type GetMyShipsByShipSymbolMountsApiResponse =
  /** status 200 Got installed mounts. */ {
	data: ShipMount[];
};
export type GetMyShipsByShipSymbolMountsApiArg = {
	/** The ship's symbol. */
	shipSymbol: string;
};
export type PostMyShipsByShipSymbolMountsInstallApiResponse =
  /** status 201 Successfully installed the mount. */ {
	data: {
		agent: Agent;
		mounts: ShipMount[];
		cargo: ShipCargo;
		transaction: ShipModificationTransaction;
	};
};
export type PostMyShipsByShipSymbolMountsInstallApiArg = {
	/** The ship's symbol. */
	shipSymbol: string;
	body: {
		symbol: string;
	};
};
export type PostMyShipsByShipSymbolMountsRemoveApiResponse =
  /** status 201 Successfully removed the mount. */ {
	data: {
		agent: Agent;
		mounts: ShipMount[];
		cargo: ShipCargo;
		transaction: ShipModificationTransaction;
	};
};
export type PostMyShipsByShipSymbolMountsRemoveApiArg = {
	/** The ship's symbol. */
	shipSymbol: string;
	body: {
		symbol: string;
	};
};
export type Agent = {
	accountId?: string;
	symbol: string;
	headquarters: string;
	credits: number;
	startingFaction: string;
	shipCount?: number;
};
export type ContractPayment = {
	onAccepted: number;
	onFulfilled: number;
};
export type ContractDeliverGood = {
	tradeSymbol: string;
	destinationSymbol: string;
	unitsRequired: number;
	unitsFulfilled: number;
};
export type ContractTerms = {
	deadline: string;
	payment: ContractPayment;
	deliver?: ContractDeliverGood[];
};
export type Contract = {
	id: string;
	factionSymbol: string;
	type: "PROCUREMENT" | "TRANSPORT" | "SHUTTLE";
	terms: ContractTerms;
	accepted: boolean;
	fulfilled: boolean;
	expiration: string;
	deadlineToAccept?: string;
};
export type FactionSymbols =
	| "COSMIC"
	| "VOID"
	| "GALACTIC"
	| "QUANTUM"
	| "DOMINION"
	| "ASTRO"
	| "CORSAIRS"
	| "OBSIDIAN"
	| "AEGIS"
	| "UNITED"
	| "SOLITARY"
	| "COBALT"
	| "OMEGA"
	| "ECHO"
	| "LORDS"
	| "CULT"
	| "ANCIENTS"
	| "SHADOW"
	| "ETHEREAL";
export type FactionTrait = {
	symbol:
	| "BUREAUCRATIC"
	| "SECRETIVE"
	| "CAPITALISTIC"
	| "INDUSTRIOUS"
	| "PEACEFUL"
	| "DISTRUSTFUL"
	| "WELCOMING"
	| "SMUGGLERS"
	| "SCAVENGERS"
	| "REBELLIOUS"
	| "EXILES"
	| "PIRATES"
	| "RAIDERS"
	| "CLAN"
	| "GUILD"
	| "DOMINION"
	| "FRINGE"
	| "FORSAKEN"
	| "ISOLATED"
	| "LOCALIZED"
	| "ESTABLISHED"
	| "NOTABLE"
	| "DOMINANT"
	| "INESCAPABLE"
	| "INNOVATIVE"
	| "BOLD"
	| "VISIONARY"
	| "CURIOUS"
	| "DARING"
	| "EXPLORATORY"
	| "RESOURCEFUL"
	| "FLEXIBLE"
	| "COOPERATIVE"
	| "UNITED"
	| "STRATEGIC"
	| "INTELLIGENT"
	| "RESEARCH_FOCUSED"
	| "COLLABORATIVE"
	| "PROGRESSIVE"
	| "MILITARISTIC"
	| "TECHNOLOGICALLY_ADVANCED"
	| "AGGRESSIVE"
	| "IMPERIALISTIC"
	| "TREASURE_HUNTERS"
	| "DEXTEROUS"
	| "UNPREDICTABLE"
	| "BRUTAL"
	| "FLEETING"
	| "ADAPTABLE"
	| "SELF_SUFFICIENT"
	| "DEFENSIVE"
	| "PROUD"
	| "DIVERSE"
	| "INDEPENDENT"
	| "SELF_INTERESTED"
	| "FRAGMENTED"
	| "COMMERCIAL"
	| "FREE_MARKETS"
	| "ENTREPRENEURIAL";
	name: string;
	description: string;
};
export type Faction = {
	symbol: FactionSymbols;
	name: string;
	description: string;
	headquarters: string;
	traits: FactionTrait[];
	isRecruiting: boolean;
};
export type ShipRole =
	| "FABRICATOR"
	| "HARVESTER"
	| "HAULER"
	| "INTERCEPTOR"
	| "EXCAVATOR"
	| "TRANSPORT"
	| "REPAIR"
	| "SURVEYOR"
	| "COMMAND"
	| "CARRIER"
	| "PATROL"
	| "SATELLITE"
	| "EXPLORER"
	| "REFINERY";
export type ShipRegistration = {
	name: string;
	factionSymbol: string;
	role: ShipRole;
};
export type WaypointType =
	| "PLANET"
	| "GAS_GIANT"
	| "MOON"
	| "ORBITAL_STATION"
	| "JUMP_GATE"
	| "ASTEROID_FIELD"
	| "NEBULA"
	| "DEBRIS_FIELD"
	| "GRAVITY_WELL";
export type ShipNavRouteWaypoint = {
	symbol: string;
	type: WaypointType;
	systemSymbol: string;
	x: number;
	y: number;
};
export type ShipNavRoute = {
	destination: ShipNavRouteWaypoint;
	departure: ShipNavRouteWaypoint;
	origin: ShipNavRouteWaypoint;
	departureTime: string;
	arrival: string;
};
export type ShipNavStatus = "IN_TRANSIT" | "IN_ORBIT" | "DOCKED";
export type ShipNavFlightMode = "DRIFT" | "STEALTH" | "CRUISE" | "BURN";
export type ShipNav = {
	systemSymbol: string;
	waypointSymbol: string;
	route: ShipNavRoute;
	status: ShipNavStatus;
	flightMode: ShipNavFlightMode;
};
export type ShipCrew = {
	current: number;
	required: number;
	capacity: number;
	rotation: "STRICT" | "RELAXED";
	morale: number;
	wages: number;
};
export type ShipCondition = number;
export type ShipRequirements = {
	power?: number;
	crew?: number;
	slots?: number;
};
export type ShipFrame = {
	symbol:
	| "FRAME_PROBE"
	| "FRAME_DRONE"
	| "FRAME_INTERCEPTOR"
	| "FRAME_RACER"
	| "FRAME_FIGHTER"
	| "FRAME_FRIGATE"
	| "FRAME_SHUTTLE"
	| "FRAME_EXPLORER"
	| "FRAME_MINER"
	| "FRAME_LIGHT_FREIGHTER"
	| "FRAME_HEAVY_FREIGHTER"
	| "FRAME_TRANSPORT"
	| "FRAME_DESTROYER"
	| "FRAME_CRUISER"
	| "FRAME_CARRIER";
	name: string;
	description: string;
	condition?: ShipCondition;
	moduleSlots: number;
	mountingPoints: number;
	fuelCapacity: number;
	requirements: ShipRequirements;
};
export type ShipReactor = {
	symbol:
	| "REACTOR_SOLAR_I"
	| "REACTOR_FUSION_I"
	| "REACTOR_FISSION_I"
	| "REACTOR_CHEMICAL_I"
	| "REACTOR_ANTIMATTER_I";
	name: string;
	description: string;
	condition?: ShipCondition;
	powerOutput: number;
	requirements: ShipRequirements;
};
export type ShipEngine = {
	symbol:
	| "ENGINE_IMPULSE_DRIVE_I"
	| "ENGINE_ION_DRIVE_I"
	| "ENGINE_ION_DRIVE_II"
	| "ENGINE_HYPER_DRIVE_I";
	name: string;
	description: string;
	condition?: ShipCondition;
	speed: number;
	requirements: ShipRequirements;
};
export type Cooldown = {
	shipSymbol: string;
	totalSeconds: number;
	remainingSeconds: number;
	expiration?: string;
};
export type ShipModule = {
	symbol:
	| "MODULE_MINERAL_PROCESSOR_I"
	| "MODULE_CARGO_HOLD_I"
	| "MODULE_CREW_QUARTERS_I"
	| "MODULE_ENVOY_QUARTERS_I"
	| "MODULE_PASSENGER_CABIN_I"
	| "MODULE_MICRO_REFINERY_I"
	| "MODULE_ORE_REFINERY_I"
	| "MODULE_FUEL_REFINERY_I"
	| "MODULE_SCIENCE_LAB_I"
	| "MODULE_JUMP_DRIVE_I"
	| "MODULE_JUMP_DRIVE_II"
	| "MODULE_JUMP_DRIVE_III"
	| "MODULE_WARP_DRIVE_I"
	| "MODULE_WARP_DRIVE_II"
	| "MODULE_WARP_DRIVE_III"
	| "MODULE_SHIELD_GENERATOR_I"
	| "MODULE_SHIELD_GENERATOR_II";
	capacity?: number;
	range?: number;
	name: string;
	description: string;
	requirements: ShipRequirements;
};
export type ShipMount = {
	symbol:
	| "MOUNT_GAS_SIPHON_I"
	| "MOUNT_GAS_SIPHON_II"
	| "MOUNT_GAS_SIPHON_III"
	| "MOUNT_SURVEYOR_I"
	| "MOUNT_SURVEYOR_II"
	| "MOUNT_SURVEYOR_III"
	| "MOUNT_SENSOR_ARRAY_I"
	| "MOUNT_SENSOR_ARRAY_II"
	| "MOUNT_SENSOR_ARRAY_III"
	| "MOUNT_MINING_LASER_I"
	| "MOUNT_MINING_LASER_II"
	| "MOUNT_MINING_LASER_III"
	| "MOUNT_LASER_CANNON_I"
	| "MOUNT_MISSILE_LAUNCHER_I"
	| "MOUNT_TURRET_I";
	name: string;
	description?: string;
	strength?: number;
	deposits?: (
		| "QUARTZ_SAND"
		| "SILICON_CRYSTALS"
		| "PRECIOUS_STONES"
		| "ICE_WATER"
		| "AMMONIA_ICE"
		| "IRON_ORE"
		| "COPPER_ORE"
		| "SILVER_ORE"
		| "ALUMINUM_ORE"
		| "GOLD_ORE"
		| "PLATINUM_ORE"
		| "DIAMONDS"
		| "URANITE_ORE"
		| "MERITIUM_ORE"
	)[];
	requirements: ShipRequirements;
};
export type ShipCargoItem = {
	symbol: string;
	name: string;
	description: string;
	units: number;
};
export type ShipCargo = {
	capacity: number;
	units: number;
	inventory: ShipCargoItem[];
};
export type ShipFuel = {
	current: number;
	capacity: number;
	consumed?: {
		amount: number;
		timestamp: string;
	};
};
export type Ship = {
	symbol: string;
	registration: ShipRegistration;
	nav: ShipNav;
	crew: ShipCrew;
	frame: ShipFrame;
	reactor: ShipReactor;
	engine: ShipEngine;
	cooldown: Cooldown;
	modules: ShipModule[];
	mounts: ShipMount[];
	cargo: ShipCargo;
	fuel: ShipFuel;
};
export type SystemType =
	| "NEUTRON_STAR"
	| "RED_STAR"
	| "ORANGE_STAR"
	| "BLUE_STAR"
	| "YOUNG_STAR"
	| "WHITE_DWARF"
	| "BLACK_HOLE"
	| "HYPERGIANT"
	| "NEBULA"
	| "UNSTABLE";
export type WaypointOrbital = {
	symbol: string;
};
export type SystemWaypoint = {
	symbol: string;
	type: WaypointType;
	x: number;
	y: number;
	orbitals: WaypointOrbital[];
	orbits?: string;
};
export type SystemFaction = {
	symbol: FactionSymbols;
};
export type System = {
	symbol: string;
	sectorSymbol: string;
	type: SystemType;
	x: number;
	y: number;
	waypoints: SystemWaypoint[];
	factions: SystemFaction[];
};
export type Meta = {
	total: number;
	page: number;
	limit: number;
};
export type WaypointFaction = {
	symbol: FactionSymbols;
};
export type WaypointTrait = {
	symbol:
	| "UNCHARTED"
	| "MARKETPLACE"
	| "SHIPYARD"
	| "OUTPOST"
	| "SCATTERED_SETTLEMENTS"
	| "SPRAWLING_CITIES"
	| "MEGA_STRUCTURES"
	| "OVERCROWDED"
	| "HIGH_TECH"
	| "CORRUPT"
	| "BUREAUCRATIC"
	| "TRADING_HUB"
	| "INDUSTRIAL"
	| "BLACK_MARKET"
	| "RESEARCH_FACILITY"
	| "MILITARY_BASE"
	| "SURVEILLANCE_OUTPOST"
	| "EXPLORATION_OUTPOST"
	| "MINERAL_DEPOSITS"
	| "COMMON_METAL_DEPOSITS"
	| "PRECIOUS_METAL_DEPOSITS"
	| "RARE_METAL_DEPOSITS"
	| "METHANE_POOLS"
	| "ICE_CRYSTALS"
	| "EXPLOSIVE_GASES"
	| "STRONG_MAGNETOSPHERE"
	| "VIBRANT_AURORAS"
	| "SALT_FLATS"
	| "CANYONS"
	| "PERPETUAL_DAYLIGHT"
	| "PERPETUAL_OVERCAST"
	| "DRY_SEABEDS"
	| "MAGMA_SEAS"
	| "SUPERVOLCANOES"
	| "ASH_CLOUDS"
	| "VAST_RUINS"
	| "MUTATED_FLORA"
	| "TERRAFORMED"
	| "EXTREME_TEMPERATURES"
	| "EXTREME_PRESSURE"
	| "DIVERSE_LIFE"
	| "SCARCE_LIFE"
	| "FOSSILS"
	| "WEAK_GRAVITY"
	| "STRONG_GRAVITY"
	| "CRUSHING_GRAVITY"
	| "TOXIC_ATMOSPHERE"
	| "CORROSIVE_ATMOSPHERE"
	| "BREATHABLE_ATMOSPHERE"
	| "JOVIAN"
	| "ROCKY"
	| "VOLCANIC"
	| "FROZEN"
	| "SWAMP"
	| "BARREN"
	| "TEMPERATE"
	| "JUNGLE"
	| "OCEAN"
	| "STRIPPED";
	name: string;
	description: string;
};
export type Chart = {
	waypointSymbol?: string;
	submittedBy?: string;
	submittedOn?: string;
};
export type Waypoint = {
	symbol: string;
	type: WaypointType;
	systemSymbol: string;
	x: number;
	y: number;
	orbitals: WaypointOrbital[];
	orbits?: string;
	faction?: WaypointFaction;
	traits: WaypointTrait[];
	chart?: Chart;
};
export type TradeSymbol =
	| "PRECIOUS_STONES"
	| "QUARTZ_SAND"
	| "SILICON_CRYSTALS"
	| "AMMONIA_ICE"
	| "LIQUID_HYDROGEN"
	| "LIQUID_NITROGEN"
	| "ICE_WATER"
	| "EXOTIC_MATTER"
	| "ADVANCED_CIRCUITRY"
	| "GRAVITON_EMITTERS"
	| "IRON"
	| "IRON_ORE"
	| "COPPER"
	| "COPPER_ORE"
	| "ALUMINUM"
	| "ALUMINUM_ORE"
	| "SILVER"
	| "SILVER_ORE"
	| "GOLD"
	| "GOLD_ORE"
	| "PLATINUM"
	| "PLATINUM_ORE"
	| "DIAMONDS"
	| "URANITE"
	| "URANITE_ORE"
	| "MERITIUM"
	| "MERITIUM_ORE"
	| "HYDROCARBON"
	| "ANTIMATTER"
	| "FERTILIZERS"
	| "FABRICS"
	| "FOOD"
	| "JEWELRY"
	| "MACHINERY"
	| "FIREARMS"
	| "ASSAULT_RIFLES"
	| "MILITARY_EQUIPMENT"
	| "EXPLOSIVES"
	| "LAB_INSTRUMENTS"
	| "AMMUNITION"
	| "ELECTRONICS"
	| "SHIP_PLATING"
	| "EQUIPMENT"
	| "FUEL"
	| "MEDICINE"
	| "DRUGS"
	| "CLOTHING"
	| "MICROPROCESSORS"
	| "PLASTICS"
	| "POLYNUCLEOTIDES"
	| "BIOCOMPOSITES"
	| "NANOBOTS"
	| "AI_MAINFRAMES"
	| "QUANTUM_DRIVES"
	| "ROBOTIC_DRONES"
	| "CYBER_IMPLANTS"
	| "GENE_THERAPEUTICS"
	| "NEURAL_CHIPS"
	| "MOOD_REGULATORS"
	| "VIRAL_AGENTS"
	| "MICRO_FUSION_GENERATORS"
	| "SUPERGRAINS"
	| "LASER_RIFLES"
	| "HOLOGRAPHICS"
	| "SHIP_SALVAGE"
	| "RELIC_TECH"
	| "NOVEL_LIFEFORMS"
	| "BOTANICAL_SPECIMENS"
	| "CULTURAL_ARTIFACTS"
	| "REACTOR_SOLAR_I"
	| "REACTOR_FUSION_I"
	| "REACTOR_FISSION_I"
	| "REACTOR_CHEMICAL_I"
	| "REACTOR_ANTIMATTER_I"
	| "ENGINE_IMPULSE_DRIVE_I"
	| "ENGINE_ION_DRIVE_I"
	| "ENGINE_ION_DRIVE_II"
	| "ENGINE_HYPER_DRIVE_I"
	| "MODULE_MINERAL_PROCESSOR_I"
	| "MODULE_CARGO_HOLD_I"
	| "MODULE_CREW_QUARTERS_I"
	| "MODULE_ENVOY_QUARTERS_I"
	| "MODULE_PASSENGER_CABIN_I"
	| "MODULE_MICRO_REFINERY_I"
	| "MODULE_ORE_REFINERY_I"
	| "MODULE_FUEL_REFINERY_I"
	| "MODULE_SCIENCE_LAB_I"
	| "MODULE_JUMP_DRIVE_I"
	| "MODULE_JUMP_DRIVE_II"
	| "MODULE_JUMP_DRIVE_III"
	| "MODULE_WARP_DRIVE_I"
	| "MODULE_WARP_DRIVE_II"
	| "MODULE_WARP_DRIVE_III"
	| "MODULE_SHIELD_GENERATOR_I"
	| "MODULE_SHIELD_GENERATOR_II"
	| "MOUNT_GAS_SIPHON_I"
	| "MOUNT_GAS_SIPHON_II"
	| "MOUNT_GAS_SIPHON_III"
	| "MOUNT_SURVEYOR_I"
	| "MOUNT_SURVEYOR_II"
	| "MOUNT_SURVEYOR_III"
	| "MOUNT_SENSOR_ARRAY_I"
	| "MOUNT_SENSOR_ARRAY_II"
	| "MOUNT_SENSOR_ARRAY_III"
	| "MOUNT_MINING_LASER_I"
	| "MOUNT_MINING_LASER_II"
	| "MOUNT_MINING_LASER_III"
	| "MOUNT_LASER_CANNON_I"
	| "MOUNT_MISSILE_LAUNCHER_I"
	| "MOUNT_TURRET_I";
export type TradeGood = {
	symbol: TradeSymbol;
	name: string;
	description: string;
};
export type MarketTransaction = {
	waypointSymbol: string;
	shipSymbol: string;
	tradeSymbol: string;
	type: "PURCHASE" | "SELL";
	units: number;
	pricePerUnit: number;
	totalPrice: number;
	timestamp: string;
};
export type MarketTradeGood = {
	symbol: string;
	tradeVolume: number;
	supply: "SCARCE" | "LIMITED" | "MODERATE" | "ABUNDANT";
	purchasePrice: number;
	sellPrice: number;
};
export type Market = {
	symbol: string;
	exports: TradeGood[];
	imports: TradeGood[];
	exchange: TradeGood[];
	transactions?: MarketTransaction[];
	tradeGoods?: MarketTradeGood[];
};
export type ShipType =
	| "SHIP_PROBE"
	| "SHIP_MINING_DRONE"
	| "SHIP_INTERCEPTOR"
	| "SHIP_LIGHT_HAULER"
	| "SHIP_COMMAND_FRIGATE"
	| "SHIP_EXPLORER"
	| "SHIP_HEAVY_FREIGHTER"
	| "SHIP_LIGHT_SHUTTLE"
	| "SHIP_ORE_HOUND"
	| "SHIP_REFINING_FREIGHTER";
export type ShipyardTransaction = {
	waypointSymbol: string;
	shipSymbol: string;
	price: number;
	agentSymbol: string;
	timestamp: string;
};
export type ShipyardShip = {
	type?: ShipType;
	name: string;
	description: string;
	purchasePrice: number;
	frame: ShipFrame;
	reactor: ShipReactor;
	engine: ShipEngine;
	modules: ShipModule[];
	mounts: ShipMount[];
	crew: {
		required: number;
		capacity: number;
	};
};
export type Shipyard = {
	symbol: string;
	shipTypes: {
		type?: ShipType;
	}[];
	transactions?: ShipyardTransaction[];
	ships?: ShipyardShip[];
	modificationsFee: number;
};
export type ConnectedSystem = {
	symbol: string;
	sectorSymbol: string;
	type: SystemType;
	factionSymbol?: string;
	x: number;
	y: number;
	distance: number;
};
export type JumpGate = {
	jumpRange: number;
	factionSymbol?: string;
	connectedSystems: ConnectedSystem[];
};
export type SurveyDeposit = {
	symbol: string;
};
export type Survey = {
	signature: string;
	symbol: string;
	deposits: SurveyDeposit[];
	expiration: string;
	size: "SMALL" | "MODERATE" | "LARGE";
};
export type ExtractionYield = {
	symbol: TradeSymbol;
	units: number;
};
export type Extraction = {
	shipSymbol: string;
	yield: ExtractionYield;
};
export type ScannedSystem = {
	symbol: string;
	sectorSymbol: string;
	type: SystemType;
	x: number;
	y: number;
	distance: number;
};
export type ScannedWaypoint = {
	symbol: string;
	type: WaypointType;
	systemSymbol: string;
	x: number;
	y: number;
	orbitals: WaypointOrbital[];
	faction?: WaypointFaction;
	traits: WaypointTrait[];
	chart?: Chart;
};
export type ScannedShip = {
	symbol: string;
	registration: ShipRegistration;
	nav: ShipNav;
	frame?: {
		symbol: string;
	};
	reactor?: {
		symbol: string;
	};
	engine: {
		symbol: string;
	};
	mounts?: {
		symbol: string;
	}[];
};
export type ShipModificationTransaction = {
	waypointSymbol: string;
	shipSymbol: string;
	tradeSymbol: string;
	totalPrice: number;
	timestamp: string;
};
export const {
	useGetQuery,
	useRegisterMutation,
	useGetSystemsQuery,
	useGetSystemsBySystemSymbolQuery,
	useGetSystemsBySystemSymbolWaypointsQuery,
	useGetSystemsBySystemSymbolWaypointsAndWaypointSymbolQuery,
	useGetSystemsBySystemSymbolWaypointsAndWaypointSymbolMarketQuery,
	useGetSystemsBySystemSymbolWaypointsAndWaypointSymbolShipyardQuery,
	useGetSystemsBySystemSymbolWaypointsAndWaypointSymbolJumpGateQuery,
	useGetFactionsQuery,
	useGetFactionsByFactionSymbolQuery,
	useGetMyAgentQuery,
	useGetAgentsQuery,
	useGetAgentsByAgentSymbolQuery,
	useGetMyContractsQuery,
	useGetMyContractsByContractIdQuery,
	usePostMyContractsByContractIdAcceptMutation,
	usePostMyContractsByContractIdDeliverMutation,
	usePostMyContractsByContractIdFulfillMutation,
	useGetMyShipsQuery,
	usePostMyShipsMutation,
	useGetMyShipsByShipSymbolQuery,
	useGetMyShipsByShipSymbolCargoQuery,
	usePostMyShipsByShipSymbolOrbitMutation,
	usePostMyShipsByShipSymbolRefineMutation,
	usePostMyShipsByShipSymbolChartMutation,
	useGetMyShipsByShipSymbolCooldownQuery,
	usePostMyShipsByShipSymbolDockMutation,
	usePostMyShipsByShipSymbolSurveyMutation,
	usePostMyShipsByShipSymbolExtractMutation,
	usePostMyShipsByShipSymbolExtractSurveyMutation,
	useJettisonMutation,
	usePostMyShipsByShipSymbolJumpMutation,
	usePostMyShipsByShipSymbolNavigateMutation,
	usePatchMyShipsByShipSymbolNavMutation,
	useGetMyShipsByShipSymbolNavQuery,
	usePostMyShipsByShipSymbolWarpMutation,
	usePostMyShipsByShipSymbolSellMutation,
	usePostMyShipsByShipSymbolScanSystemsMutation,
	usePostMyShipsByShipSymbolScanWaypointsMutation,
	usePostMyShipsByShipSymbolScanShipsMutation,
	usePostMyShipsByShipSymbolRefuelMutation,
	usePostMyShipsByShipSymbolPurchaseMutation,
	usePostMyShipsByShipSymbolTransferMutation,
	useNegotiateContractMutation,
	useGetMyShipsByShipSymbolMountsQuery,
	usePostMyShipsByShipSymbolMountsInstallMutation,
	usePostMyShipsByShipSymbolMountsRemoveMutation,
} = injectedRtkApi;
