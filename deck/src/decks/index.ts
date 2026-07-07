import { DeckDef } from "../components/Deck";
import { strategyV5 } from "./strategy-v5";
import { strategyV4 } from "./strategy-v4";
import { strategyV1 } from "./strategy-v1";
import { processV2 } from "./process-v2";
import { processV1 } from "./process-v1";

export const decks: DeckDef[] = [strategyV5, strategyV4, strategyV1, processV2, processV1];
