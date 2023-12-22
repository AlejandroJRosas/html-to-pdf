import { launch } from 'puppeteer'

export async function convertToPDF (html: string): Promise<Buffer> {
  const browser = await launch({
    headless: 'new'
  })
  const page = await browser.newPage()
  await page.setContent(html, { waitUntil: 'networkidle0' })
  await page.emulateMediaType('screen')

  const pdf = await page.pdf({
    format: 'LETTER',
    printBackground: true,
    margin: {
      top: '30px',
      bottom: '30px',
      left: '50px',
      right: '50px'
    }
  })

  return pdf
}
