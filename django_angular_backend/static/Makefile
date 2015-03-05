
.PHONY: dev-install
dev-install: node_modules

node_modules: package.json
	npm install && touch node_modules

.PHONY: bower-install
bower-install: node_modules/.bin/bower bower_components

.PHONY: bower_npm
node_modules/.bin/bower:
	npm install bower && touch node_modules/.bin/bower

bower_components: bower.json
	node_modules/.bin/bower install && touch bower_components

.PHONY: karma-test
karma-test: dev-install bower-install
	npm test

.PHONY: test
test: karma-test
