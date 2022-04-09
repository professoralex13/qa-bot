import { Client, Intents } from "discord.js";
import intents from "./config/IntentOptions";
import 'dotenv/config';
import validateEnv from "./utils/validateEnv";
import onInteraction from "./events/onInteraction";
import {onReady} from "./events/onReady";

(async () => {
    if (!validateEnv()) return;

    const BOT = new Client({ intents });

    BOT.on("ready", async () => await onReady(BOT));

    await BOT.login(process.env.BOT_TOKEN);

    BOT.on(
        "interactionCreate",
        async (interaction) => await onInteraction(interaction)
    );
})();
