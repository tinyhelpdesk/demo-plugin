"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_plugin_1 = require("@tinyhelpdesk/base-plugin");
class DemoPlugin extends base_plugin_1.TinyHelpdeskPlugin {
    constructor() {
        super();
    }
    init() {
        console.log('DemoPlugin called');
    }
    stop() {
        console.log('DemoPlugin stopped');
    }
}
exports.default = new DemoPlugin();
//# sourceMappingURL=index.js.map