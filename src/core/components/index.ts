
import type { App } from "vue";
import Button from "./Button.vue"

function initGlobalComponents(app: App) {
    app.component('Button', Button)
}

export default initGlobalComponents;
