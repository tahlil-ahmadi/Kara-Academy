import { AcademyModule } from './academy.module';

describe('AcademyModule', () => {
  let academyModule: AcademyModule;

  beforeEach(() => {
    academyModule = new AcademyModule();
  });

  it('should create an instance', () => {
    expect(academyModule).toBeTruthy();
  });
});
