// @ts-check
import { test, expect } from '@playwright/test';
import submitAPIRequest from '../utils/restClient'

test('homepage has Playwright in title and get started link linking to the intro page', async ({ page }) => {
  await page.goto('https://jsonplaceholder.typicode.com/comments');
  await page.waitForSelector('html')
   // UI
  const frontpage =  await page.evaluate(() => {
    // @ts-ignore
    return document.querySelector('html').innerText;
    });
  console.log('UI DATA')
  const expected = JSON.parse(frontpage)

  // API part
  const responseFromAPI = await submitAPIRequest('GET', 'https://jsonplaceholder.typicode.com/comments', '', '')
  expect(responseFromAPI.status).toBe(200)
  const responseData = responseFromAPI.data
  expect(responseData).toEqual(expected) // ASSERT
});
