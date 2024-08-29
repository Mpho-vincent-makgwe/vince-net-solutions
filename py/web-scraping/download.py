import os
import requests

# Define the directory where you want to save the files
download_directory = "downloaded_files"

# Create the directory if it doesn't exist
if not os.path.exists(download_directory):
    os.makedirs(download_directory)

# File containing the URLs to download
url_file = "urls.txt"

# Read the URLs from the file
with open(url_file, "r") as file:
    urls = file.readlines()

# Download each file
for url in urls:
    url = url.strip()
    if url:  # Ensure the line isn't empty
        file_name = os.path.join(download_directory, os.path.basename(url))
        print(f"Downloading {url} to {file_name}...")

        try:
            response = requests.get(url)
            response.raise_for_status()  # Check if the request was successful

            # Write the content to a file
            with open(file_name, "wb") as file:
                file.write(response.content)

            print(f"Downloaded {file_name} successfully.")
        except requests.exceptions.RequestException as e:
            print(f"Failed to download {url}: {e}")

print("All downloads complete.")
