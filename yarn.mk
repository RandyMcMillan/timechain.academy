yarn-run-build:## 	yarn run build
	@$(PACKAGE_MANAGER) run build
yarn-run-compile:## 	yarn run compile
	@$(PACKAGE_MANAGER) run compile
yarn-run-test:## 	yarn run test
	@$(PACKAGE_MANAGER) run test
yarn-run-typecheck:## 	yarn run typecheck
	@$(PACKAGE_MANAGER) run typecheck
yarn-run-watch:## 	yarn run watch
	@$(PACKAGE_MANAGER) run watch
yarn-run-website-build:
	@$(PACKAGE_MANAGER) run website:build
yarn-run-website-dev:
	@$(PACKAGE_MANAGER) run website:dev
# vim: set noexpandtab:
# vim: set setfiletype make
