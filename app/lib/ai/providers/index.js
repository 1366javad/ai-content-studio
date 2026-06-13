import { runGemini } from "./gemini";
import { runTavily } from "./tavily";
import { runSerpApi } from "./serpapi";
import { runFlux } from "./flux";
import { runVideo } from "./video";

export async function runProvider(provider, payload) {
  switch (provider) {
    case "gemini":
      return runGemini(payload);

    case "tavily":
      return runTavily(payload);

    case "serpapi":
      return runSerpApi(payload);

    case "flux":
      return runFlux(payload);

    case "video":
      return runVideo(payload);

    default:
      throw new Error(`Unknown provider: ${provider}`);
  }
}
