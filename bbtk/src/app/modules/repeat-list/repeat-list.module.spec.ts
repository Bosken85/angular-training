import { RepeatListModule } from './repeat-list.module';

describe('RepeatListModule', () => {
  let repeatListModule: RepeatListModule;

  beforeEach(() => {
    repeatListModule = new RepeatListModule();
  });

  it('should create an instance', () => {
    expect(repeatListModule).toBeTruthy();
  });
});
