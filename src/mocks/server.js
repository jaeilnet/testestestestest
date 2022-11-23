import { setupServer } from "msw/node";
import { handles } from "./handler";

export const server = setupServer(...handles);
