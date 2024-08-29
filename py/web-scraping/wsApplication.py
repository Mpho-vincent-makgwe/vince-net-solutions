import sys
import json
import os
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from urllib.parse import urljoin, urlparse
import time

# Get the URL from the command-line arguments
page_url = sys.argv[1]

# Extract the base URL from the user-provided page URL
parsed_url = urlparse(page_url)
base_url = f"{parsed_url.scheme}://{parsed_url.netloc}"

# Set up the WebDriver (using the correct path to ChromeDriver)
service = Service('d:\\chromedriver-win32\\chromedriver-win32\\chromedriver.exe')  # Update this path to where your chromedriver.exe is located
driver = webdriver.Chrome(service=service)

# Open the page
driver.get(page_url)

# Allow some time for the page to load
time.sleep(5)  # You may adjust this time depending on your internet speed

# Find all <a> tags with 'Download' text
download_links = driver.find_elements(By.XPATH, "//td[contains(@class, 'DownloadCell')]//a[contains(text(), 'Download')]")

# Extract the full URLs using the dynamic base URL
full_urls = [urljoin(base_url, link.get_attribute('href')) for link in download_links]

# Get the directory where the script is located
script_dir = os.path.dirname(os.path.realpath(__file__))

# Define the file path to save URLs
file_path = os.path.join(script_dir, 'urls.txt')

# Save the links to the file
with open(file_path, 'w') as file:
    for url in full_urls:
        file.write(url + '\n')

# Close the browser
driver.quit()

# Return the URLs in JSON format
print(json.dumps({"urls": full_urls, "file_path": file_path}))
