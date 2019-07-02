import { Dictionary } from "../../models/utils";

type Store = Dictionary<string>;

class MockLocalStorage {
  private store: Store;

  constructor(defaultStore: Store) {
    this.store = defaultStore;
  }

  getItem(key: string): string | null {
    return this.store[key];
  }

  setItem(key: string, value: string): void {
    this.store[key] = value;

    return;
  }
}

export default MockLocalStorage;
