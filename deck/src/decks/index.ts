import { DeckDef } from "../components/Deck";
import { strategyV6 } from "./strategy-v6";
import { strategyV5 } from "./strategy-v5";
import { strategyV4 } from "./strategy-v4";
import { strategyV1 } from "./strategy-v1";
import { processV2 } from "./process-v2";
import { processV1 } from "./process-v1";

export const decks: DeckDef[] = [strategyV6, strategyV5, strategyV4, strategyV1, processV2, processV1];
