import { launch } from 'puppeteer'

export async function convertToPDF (html: string): Promise<Buffer> {
  const browser = await launch({
    headless: 'new'
  })
  const page = await browser.newPage()
  await page.setContent(html, { waitUntil: 'domcontentloaded' })
  await page.emulateMediaType('screen')

  const pdf = await page.pdf({
    format: 'LETTER',
    printBackground: true
  })

  return pdf
}
