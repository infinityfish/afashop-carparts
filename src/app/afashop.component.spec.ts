import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { AfashopAppComponent } from '../app/afashop.component';

beforeEachProviders(() => [AfashopAppComponent]);

describe('App: Afashop', () => {
  it('should create the app',
      inject([AfashopAppComponent], (app: AfashopAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'afashop works!\'',
      inject([AfashopAppComponent], (app: AfashopAppComponent) => {
    expect(app.title).toEqual('afashop works!');
  }));
});
