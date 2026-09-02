import { TestBed } from '@angular/core/testing';

import { THEME_STORAGE, ThemeStorageService } from './theme-storage.service';

function createStorage(overrides: Partial<Storage> = {}): Storage {
  return {
    length: 0,
    clear: vi.fn(),
    getItem: vi.fn(() => null),
    key: vi.fn(() => null),
    removeItem: vi.fn(),
    setItem: vi.fn(),
    ...overrides,
  };
}

describe('ThemeStorageService', () => {
  function createService(storage: Storage): ThemeStorageService {
    TestBed.configureTestingModule({
      providers: [{ provide: THEME_STORAGE, useValue: storage }],
    });

    return TestBed.inject(ThemeStorageService);
  }

  afterEach(() => TestBed.resetTestingModule());

  it('should return stored theme preferences', () => {
    const storage = createStorage({ getItem: vi.fn(() => 'dark') });

    expect(createService(storage).readPreference()).toBe('dark');
    expect(storage.getItem).toHaveBeenCalledWith('portfolio-theme');
  });

  it('should fall back to system for an invalid stored value', () => {
    const storage = createStorage({ getItem: vi.fn(() => 'blue') });

    expect(createService(storage).readPreference()).toBe('system');
  });

  it('should fall back to system when reading storage throws', () => {
    const storage = createStorage({
      getItem: vi.fn(() => {
        throw new Error('Storage unavailable');
      }),
    });

    const service = createService(storage);

    expect(() => service.readPreference()).not.toThrow();
    expect(service.readPreference()).toBe('system');
  });

  it('should ignore storage write failures', () => {
    const storage = createStorage({
      setItem: vi.fn(() => {
        throw new Error('Storage unavailable');
      }),
    });
    const service = createService(storage);

    expect(() => service.writePreference('light')).not.toThrow();
  });
});
