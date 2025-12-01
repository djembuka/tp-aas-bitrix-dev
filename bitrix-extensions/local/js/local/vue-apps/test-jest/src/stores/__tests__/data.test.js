import { dataStore } from '../data.js';

describe('dataStore', () => {
  let store;

  beforeEach(() => {
    // Создаем новый экземпляр store для каждого теста
    store = dataStore.actions;
    // Инициализируем состояние
    store.state = dataStore.state();
  });

  describe('changeProp', () => {
    it('should change a property value correctly', () => {
      // Проверяем начальное состояние
      expect(store.state.loading).toBe(false);
      expect(store.state.error).toBe('');

      // Тестируем изменение свойства loading
      store.changeProp.call(store.state, 'loading', true);
      expect(store.state.loading).toBe(true);

      // Тестируем изменение свойства error
      store.changeProp.call(store.state, 'error', 'Test error message');
      expect(store.state.error).toBe('Test error message');

      // Тестируем изменение свойства uuid
      store.changeProp.call(store.state, 'uuid', 'test-uuid-123');
      expect(store.state.uuid).toBe('test-uuid-123');
    });

    it('should handle different data types', () => {
      // Тестируем с числом
      store.changeProp.call(store.state, 'loading', 1);
      expect(store.state.loading).toBe(1);

      // Тестируем с объектом
      const testObject = { key: 'value' };
      store.changeProp.call(store.state, 'customData', testObject);
      expect(store.state.customData).toEqual(testObject);

      // Тестируем с null
      store.changeProp.call(store.state, 'error', null);
      expect(store.state.error).toBe(null);
    });
  });
});
