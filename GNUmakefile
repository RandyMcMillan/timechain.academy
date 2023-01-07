.ONESHELL:
.SILENT:
command:## 	description
	#NOTE: 2 hashes are detected as 1st column output with color
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?##/ {printf "\033[36m%-15s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

.PHONY: submodules
submodules:##  	git submodule update --init --recursive
	git submodule update --init --recursive
	git submodule foreach 'git fetch origin; git checkout $$(git rev-parse --abbrev-ref HEAD); git reset --hard origin/$$(git rev-parse --abbrev-ref HEAD); git submodule update --recursive; git clean -dfx'

build-resources:## 	make icons in buildResources
	@$(MAKE) -C buildResources

-include website.mk
# vim: set noexpandtab:
# vim: set setfiletype make