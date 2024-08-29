import puppeteer from 'puppeteer';
import { join } from 'path';
import { writeFile } from 'fs/promises';

export default async function scrapeWebsite(url: string): Promise<string[]> {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto(url, { waitUntil: 'networkidle2' });

  // Selectors for various types of links
  const possibleSelectors = [
    "a[href*='download']", // Links containing 'download' in href
    "a:contains('Download')", // Links containing 'Download'
    "a:contains('.pdf')", // Links containing '.pdf'
    "a:contains('.zip')", // Links containing '.zip'
    "a[href$='.pdf']", // Links ending with '.pdf'
    "a[href$='.zip']", // Links ending with '.zip'
    "a[href$='.mp4']", // Links ending with '.mp4'
    "a[href$='.webm']", // Links ending with '.webm'
    "a[href$='.avi']", // Links ending with '.avi'
    "a[href$='.mov']", // Links ending with '.mov'
    "td a", // Any anchor within a table cell
    "a[href]" // Any anchor with an href attribute
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

  const filePath = join(process.cwd(), 'urls.txt');
  await writeFile(filePath, downloadLinks.join('\n'), 'utf8');

  await browser.close();

  console.log("URLs saved to urls.txt");
  return downloadLinks;
}
