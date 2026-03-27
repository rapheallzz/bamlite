
import asyncio
from playwright.async_api import async_playwright
import os

async def capture_page(browser, url, name):
    page = await browser.new_page()
    try:
        # Increased timeout and added wait_until networkidle
        await page.goto(f'file://{os.getcwd()}/{url}', wait_until="networkidle", timeout=60000)
        await asyncio.sleep(2) # Extra buffer for GSAP

        # Desktop
        await page.set_viewport_size({"width": 1920, "height": 1080})
        await page.screenshot(path=f'verification/{name}_desktop.png', full_page=True)

        # Mobile
        await page.set_viewport_size({"width": 375, "height": 812})
        await page.screenshot(path=f'verification/{name}_mobile.png', full_page=True)
    except Exception as e:
        print(f"Error capturing {url}: {e}")
    finally:
        await page.close()

async def main():
    if not os.path.exists('verification'):
        os.makedirs('verification')

    async with async_playwright() as p:
        browser = await p.chromium.launch()
        pages = [
            ('index.html', 'home'),
            ('marketplace.html', 'marketplace'),
            ('report.html', 'report'),
            ('about.html', 'about'),
            ('connect.html', 'connect')
        ]

        for url, name in pages:
            print(f"Capturing {name}...")
            await capture_page(browser, url, name)

        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
