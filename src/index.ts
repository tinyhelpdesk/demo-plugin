import { TinyHelpdeskPlugin } from '@tinyhelpdesk/base-plugin';

class DemoPlugin extends TinyHelpdeskPlugin {
  constructor() {
    super();
  }

  public init(): void {
    console.log('DemoPlugin called');
  }

  public stop(): void {
    console.log('DemoPlugin stopped');
  }
}

export default new DemoPlugin();
