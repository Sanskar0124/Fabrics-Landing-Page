echo "Switching to branch master"
git checkout master

echo "Building app..."
npm run build

echo "Deploying files to server..."
scp -r dist/* root@159.223.201.173:/var/www/landing_page/

echo "Done!"