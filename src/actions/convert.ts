import { launch } from 'puppeteer'

export async function convertToPDF (html: string): Promise<Buffer> {
  const browser = await launch({
    headless: 'new'
  })
  const page = await browser.newPage()
  await page.setContent(html, { waitUntil: 'domcontentloaded' })
  await page.emulateMediaType('screen')

  const pdf = await page.pdf({
    margin: { top: '100px', right: '50px', bottom: '100px', left: '50px' },
    printBackground: true,
    format: 'A4'
  })

  return pdf
}
