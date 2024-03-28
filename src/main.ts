import 'reflect-metadata';
import { createApp, type App } from "vue";

import RootApp from "./App.vue";
import initializeApp from "./core";

const app: App = createApp(RootApp);


initializeApp(app);
