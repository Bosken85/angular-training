import { CustomFieldsModule } from './custom-fields.module';

describe('CustomFieldsModule', () => {
  let customFieldsModule: CustomFieldsModule;

  beforeEach(() => {
    customFieldsModule = new CustomFieldsModule();
  });

  it('should create an instance', () => {
    expect(customFieldsModule).toBeTruthy();
  });
});
