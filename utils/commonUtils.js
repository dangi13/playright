
import { test } from '@playwright/test';

export async function logStep (stepDescription) {
    await test.step(stepDescription, async ()=>{})
}