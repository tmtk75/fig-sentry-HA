docker_host=`boot2docker ip 2>/dev/null`

run: node_modules/raven
	node main.js $(docker_host):9000

node_modules/raven:
	npm install

open:
	open http://$(docker_host):9000

