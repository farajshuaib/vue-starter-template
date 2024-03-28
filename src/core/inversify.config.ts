import { Container } from "inversify";
import { TYPES } from "./types";
import { HttpClient } from "./network/httpClient";

const myContainer = new Container();

myContainer.bind<HttpClient>(TYPES.HttpClient).to(HttpClient).inSingletonScope();

export { myContainer };
