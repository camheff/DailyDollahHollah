import puppeteer from 'puppeteer-extra';
import RecaptchaPlugin from 'puppeteer-extra-plugin-recaptcha';
//import { createCursor, getRandomPagePoint, installMouseHelper } from "ghost-cursor";
import ghostCursor from 'ghost-cursor';
// Destructure to get the functions
const { createCursor, getRandomPagePoint, installMouseHelper } = ghostCursor;

import axios from 'axios';
import logger from './utils/logger.js';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { getRandomDelay, randomDelay } from './utils/utilFunctions.js';

dotenv.config();

const clickOptions = {
    waitForClick: 500, // Specific to ClickOptions
    waitForSelector: 1000, // From MoveOptions, but applicable here
    maxTries: 3, // From MoveOptions, but applicable here
};

async function mainCollector() {
    logger.trace('Entering mainAutomated');
    logger.debug('Attempting to grab webSocketDebuggerUrl');
    const response = await axios.get('http://127.0.0.1:9222/json/version');
    const webSocketDebuggerUrl = response.data.webSocketDebuggerUrl;
    if (!webSocketDebuggerUrl) {
        throw new Error('webSocketDebuggerUrl not found');
    }
    logger.debug('Successfully got the webSocketDebuggerUrl');

    logger.info('Connecting to browser');
    const browser = await puppeteer.connect({
        browserWSEndpoint: webSocketDebuggerUrl,
        defaultViewport: null,
        slowMo: 15,
    });
    let page = await browser.newPage();
    logger.info('Connected to browser');

    logger.warn('Creating cursor');
    cursor = await createCursor(page, await getRandomPagePoint(page), false);
    await installMouseHelper(page);

    if (process.env.LUCKYLAND_USERNAME) {
        logger.info('Collecting for ');
        await randomDelay();

        // Page Goto

        // Check if Login Needed

        // Navigation Code

        // Code Collection Code
    }
    if (process.env.CHUMBA_USERNAME) {
        logger.info('Collecting for ');
        await randomDelay();

        // Page Goto

        // Check if Login Needed

        // Navigation Code

        // Code Collection Code
    }
    if (process.env.STAKE_USERNAME) {
        logger.info('Collecting for  Stake');
        await randomDelay();

        // Page Goto
        await page.goto('https://www.stake.us/');
        await randomDelay();

        // Check if Login Needed
        // TODO

        // Code Collection Code
        await cursor.click("//button[@data-test='wallet']", clickOptions);

        await cursor.click(
            "//button[@data-test='wallet-nav-dailyBonus']",
            clickOptions
        );

        await cursor.click(
            "//button[@data-test='wallet-nav-dailyBonus']",
            clickOptions
        );
        logger.info('Collected for Stake');
    }
    if (process.env.PULSZ_USERNAME) {
        logger.info('Collecting for Pulsz');
        await randomDelay();

        // Page Goto
        await page.goto('https://www.pulsz.com/home');
        await randomDelay();

        // Check if Login Needed

        // Navigation Code

        // Code Collection Code
    }
    if (process.env.GLOBALPOKER_USERNAME) {
        logger.info('Collecting for Global Poker');
        await randomDelay();

        // Page Goto
        await page.goto('https://play.globalpoker.com//');
        await randomDelay();

        // Check if Login Needed

        // Navigation Code

        // Code Collection Code
    }
    if (process.env.MCLUCK_USERNAME) {
        logger.info('Collecting for ');
        await randomDelay();

        // Page Goto
        await page.goto('https://www.mcluck.com/gold-coins');
        await randomDelay();

        // Check if Login Needed

        // Navigation Code

        // Code Collection Code
    }
    if (process.env.HIGHFIVE_USERNAME) {
        logger.info('Collecting for High5');
        await randomDelay();

        // Page Goto
        await page.goto('https://fun.high5casino.com/gc/');
        await randomDelay();

        // Check if Login Needed

        // Navigation Code

        // Code Collection Code
        await cursor.click(
            "//button[@class='sweeps-claim-center-button sweeps-top-bar-button']",
            clickOptions
        );

        await cursor.click(
            "//div[@class='sweeps-claim-center-section sweeps-claim-center-daily-bonus ']//div[@class='sweeps-claim-center-section-footer']",
            clickOptions
        );

        await cursor.click(
            "//div[contains(@class,'sweeps-claim-center-section sweeps-claim-center-bonus-harvest')]//div[contains(@class,'sweeps-claim-center-section-claim')][normalize-space()='Claim']",
            clickOptions
        );
        logger.info('Collected for High5');
    }
    if (process.env.GOLDENHEARTS_USERNAME) {
        logger.info('Collecting for ');
        await randomDelay();

        // Page Goto

        // Check if Login Needed

        // Navigation Code

        // Code Collection Code
    }
}
