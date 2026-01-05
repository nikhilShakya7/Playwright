import { test, expect } from '@playwright/test';
test ('Has all the required fields', async({page})=>{
    await page.goto('https://todomvc.com/examples/react/dist/');
    await page.getByText('todos').isVisible()
    await page.getByPlaceholder('What needs to be done?').isVisible
})

test('Todo functions as expected', async ({ page }) => {
  await page.goto('https://todomvc.com/examples/react/dist/');
  await page.getByTestId('text-input').click();
  await page.getByTestId('text-input').fill('Go for a run');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').click();
  await page.getByTestId('text-input').fill('Go to college');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('Play football');
  await page.getByTestId('text-input').press('Enter');
  await page.getByRole('listitem').filter({ hasText: 'Go for a run' }).getByTestId('todo-item-toggle').check();
  await page.getByRole('link', { name: 'Active' }).click();
  await page.getByRole('link', { name: 'Completed' }).click();
  await page.getByRole('link', { name: 'All' }).click();
  await page.getByRole('button', { name: 'Clear completed' }).click();
});



