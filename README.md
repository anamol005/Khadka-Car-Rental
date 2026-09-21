# Here are your Instructions

Khadka Car Rental Website - Run Instructions

1. Open the project in VS Code

Open this folder:

C:\Users\Acer\Desktop\baba website\khadka-car-rental

2. Open the terminal

In VS Code:

Terminal > New Terminal

3. Go to the frontend folder

Run:

cd frontend

If you are not already inside the project folder, use:

cd "C:\Users\Acer\Desktop\baba website\khadka-car-rental\frontend"

4. Install the packages

Because this project has a dependency conflict, use:

npm install --legacy-peer-deps

Do not use only:

npm install

because it may give the ERESOLVE dependency error.

5. Start the website

After installation finishes successfully, run:

npm start

The website should open in your browser.

Usually it will run at:

http://localhost:3000

Every time you want to run the website later

You normally only need:

cd "C:\Users\Acer\Desktop\baba website\khadka-car-rental\frontend"
npm start

You do NOT need to run npm install every time.

If you see this error

'craco' is not recognized as an internal or external command

It usually means the packages were not installed successfully.

Run:

npm install --legacy-peer-deps

Then:

npm start

Quick version

cd "C:\Users\Acer\Desktop\baba website\khadka-car-rental\frontend"
npm install --legacy-peer-deps
npm start

After the first successful installation, next time:

cd "C:\Users\Acer\Desktop\baba website\khadka-car-rental\frontend"
npm start
