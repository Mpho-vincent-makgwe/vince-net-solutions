from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from urllib.parse import urljoin
import time

# Set up the WebDriver (using the correct path to ChromeDriver)
service = Service('d:\\chromedriver-win32\\chromedriver-win32\\chromedriver.exe')  # Update this path to where your chromedriver.exe is located
driver = webdriver.Chrome(service=service)

# URL of the page to scrape
page_url = "https://www.education.gov.za/Curriculum/NationalSeniorCertificate(NSC)Examinations/2023MayJuneExamPapers.aspx"

# Open the page
driver.get(page_url)

# Allow some time for the page to load
time.sleep(5)  # You may adjust this time depending on your internet speed

# Find all <a> tags with 'Download' text
download_links = driver.find_elements(By.XPATH, "//td[contains(@class, 'DownloadCell')]//a[contains(text(), 'Download')]")

# Base URL of the site
base_url = "https://www.education.gov.za"

# Extract the full URLs
full_urls = [urljoin(base_url, link.get_attribute('href')) for link in download_links]

# Save the links to a file
with open('urls.txt', 'w') as file:
    for url in full_urls:
        file.write(url + '\n')

print("Website hacked successfully check your links and papers are saved to urls.txt")

# Close the browser
driver.quit()
