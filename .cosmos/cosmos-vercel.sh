echo '-| Scorado Cosmos |-'

cd .cosmos
npm install
npm run cosmos-export
cp -a ./public/. ../public
npm run build