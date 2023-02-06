NODE_VERSION                           :=v16.14.2
export NODE_VERSION
NODE_ALIAS                             :=v16.0.0
export NODE_ALIAS
PACKAGE_MANAGER                        :=$(shell which npm)
export PACKAGE_MANAGER
PACKAGE_INSTALL                        :=install
export PACKAGE_INSTALL

.SILENT:
command:## 	description
	#NOTE: 2 hashes are detected as 1st column output with color
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?##/ {printf "\033[36m%-15s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

submodules:##  	git submodule update --init --recursive
	git submodule update --init --recursive
	git submodule foreach 'git fetch origin; git checkout $$(git rev-parse --abbrev-ref HEAD); git reset --hard origin/$$(git rev-parse --abbrev-ref HEAD); git submodule update --recursive; git clean -dfx'

build-resources:## 	make icons in buildResources
	@$(MAKE) -C buildResources

.ONESHELL:
nvm:## 	nvm
	@curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh | bash || git pull -C $(HOME)/.nvm && export NVM_DIR="$(HOME)/.nvm" && [ -s "$(NVM_DIR)/nvm.sh" ] && \. "$(NVM_DIR)/nvm.sh" && [ -s "$(NVM_DIR)/bash_completion" ] && \. "$(NVM_DIR)/bash_completion"  && nvm install $(NODE_VERSION) && nvm use $(NODE_VERSION)
	@source ~/.bashrc && nvm alias $(NODE_ALIAS) $(NODE_VERSION)
nvm-clean:## 	nvm-clean
	@rm -rf $(HOME)/.nvm

-include yarn.mk
-include website.mk

# vim: set noexpandtab:
# vim: set setfiletype make