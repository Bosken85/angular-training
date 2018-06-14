import { CorePipesModule } from './core-pipes.module';

describe('CorePipesModule', () => {
  let corePipesModule: CorePipesModule;

  beforeEach(() => {
    corePipesModule = new CorePipesModule();
  });

  it('should create an instance', () => {
    expect(corePipesModule).toBeTruthy();
  });
});
