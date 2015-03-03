
.PHONY: dev-install
dev-install: node_modules

node_modules: package.json
	npm install && touch node_modules

.PHONY: bower-install
bower-install: bower_components

bower_components: bower.json
	bower install && touch bower_components

.PHONY: karma-test
karma-test: dev-install bower-install
	npm test

.PHONY: test
test: karma-test
