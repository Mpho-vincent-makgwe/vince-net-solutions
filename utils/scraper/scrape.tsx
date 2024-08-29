import puppeteer from 'puppeteer';
import { join } from 'path';
import { mkdir, writeFile } from 'fs/promises';

export default async function scrapeWebsite(url: string): Promise<string[]> {
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--ignore-certificate-errors', '--no-sandbox', '--disable-setuid-sandbox'],
    });
  
    const page = await browser.newPage();
  
    // Ignore SSL errors
    await page.setExtraHTTPHeaders({ 'Accept-Language': 'en-US,en;q=0.9' });
    await page.setRequestInterception(true);
    page.on('request', (request) => {
      if (request.isNavigationRequest() && request.frame() === page.mainFrame()) {
        request.continue({ ignoreHTTPSErrors: true });
      } else {
        request.continue();
      }
    });
  
    await page.goto(url, { waitUntil: 'networkidle2', ignoreHTTPSErrors: true });
  
    // Selectors for various types of links
    const possibleSelectors = [
      "a[href*='download']",
      "a:contains('Download')",
      "a:contains('.pdf')",
      "a:contains('.zip')",
      "a[href$='.pdf']",
      "a[href$='.zip']",
      "a[href$='.mp4']",
      "a[href$='.webm']",
      "a[href$='.avi']",
      "a[href$='.mov']",
      "td a",
      "a[href]",
    ];
  
    let downloadLinks: string[] = [];
  
    for (const selector of possibleSelectors) {
      try {
        const links = await page.$$eval(selector, (elements) =>
          elements.map((element) => {
            const href = (element as HTMLAnchorElement).href;
            return href.startsWith('http') ? href : `https://${href}`;
          })
        );
        downloadLinks.push(...links);
      } catch (error) {
        console.warn(`Failed to scrape with selector ${selector}:`, error);
      }
    }
  
    // Remove duplicates and filter out empty strings
    downloadLinks = Array.from(new Set(downloadLinks.filter(link => link)));
  
    // Save the links into a file named by the URL's host
    const urlHost = new URL(url).hostname;
    const filePath = join(process.cwd(), 'URLs', `${urlHost}.txt`);
    await writeFile(filePath, downloadLinks.join('\n'), 'utf8');
  
    await browser.close();
  
    console.log(`URLs saved to ${filePath}`);
    return downloadLinks;
  }