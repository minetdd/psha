#!/bin/sh
cd /volume1/web/psha
git reset --hard
git pull origin main

# Build your site (example for React)
npm install
npm run build

# Move built files to the public directory
cp -r build/* /volume1/web/psha/public/