import { Action } from ".";
import { _ } from "../../locale";

export const exampleAction: Action = async (bot) => {
  bot.start(async (ctx) => {
    await ctx.reply(_("example_message"));
  });
};
