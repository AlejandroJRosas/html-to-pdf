import { launch } from 'puppeteer'

export async function convertToWebp (html: string): Promise<Buffer> {
  const browser = await launch({
    headless: 'new'
  })
  const page = await browser.newPage()
  await page.setContent(html, { waitUntil: 'networkidle0' })
  await page.emulateMediaType('screen')

  const screenshot = await page.screenshot({
    type: 'webp'
  })

  return screenshot
}
