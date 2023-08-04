import counter from './counter.js';

describe('Items counter function', () => {
  test('Elements count is 0', () => {
    document.body.innerHTML = `
        <section>
            
        </section>
        `;
    const items = document.querySelectorAll('.items');
    expect(counter(items)).toBe(0);
  });
});

describe('Items counter function', () => {
  test('Elements count is 4', () => {
    document.body.innerHTML = `
        <section>
            <div class="items"></div>
            <div class="items"></div>
            <div class="items"></div>
            <div class="items"></div>
        </section>
        `;
    const items = document.querySelectorAll('.items');
    expect(counter(items)).toBe(4);
  });
});
