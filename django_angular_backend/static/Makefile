
.PHONY: dev-install
dev-install:
	npm install

.PHONY: bower-install
bower-install:
	bower install

.PHONY: karma-test
karma-test: dev-install bower-install
	npm test

.PHONY: test
test: karma-test
