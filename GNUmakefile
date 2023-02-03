NODE_VERSION                           :=v13.14.0
export NODE_VERSION
NODE_ALIAS                             :=v12.22.12
#NODE_ALIAS                            :=v14.21.2
export NODE_ALIAS
default:
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?##/ {printf "\033[36m%-15s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)
help:## print verbose help
	@echo 'make [COMMAND] [EXTRA_ARGUMENTS]	'
	@echo ''
	@sed -n 's/^## //p' ${MAKEFILE_LIST} | column -t -s ':' |  sed -e 's/^/ /'
	@echo ""
	@echo "Useful Commands:"
	@echo ""
report:## ENV ARGS
	@echo '[NODE JS]:	'
	@echo '	NODE_VERSION=${NODE_VERSION}	'
	@echo '	NODE_ALIAS=${NODE_ALIAS}	'

.PHONY: scripts app

scripts:## pushd scripts && npm install -G --force && popd
	@pushd scripts && npm install -G --force && popd
.PHONY:
app:## pushd app && npm install -G --force && popd
	@pushd app && npm install -G --force && popd
converter:## pushd app/bg/dat/converter && npm install -G --force && popd
	@pushd app/bg/dat/converter && npm install -G --force&& popd
burnthemall:## pushd scripts && npm run burnthemall && popd
	@pushd scripts && npm run burnthemall && popd
.PHONY: nvm
.ONESHELL:
## nvm	verbose help
nvm:## install node virtual machine
	@curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh | bash || git pull -C $(HOME)/.nvm && export NVM_DIR="$(HOME)/.nvm" && [ -s "$(NVM_DIR)/nvm.sh" ] && \. "$(NVM_DIR)/nvm.sh" && [ -s "$(NVM_DIR)/bash_completion" ] && \. "$(NVM_DIR)/bash_completion"  && nvm install $(NODE_VERSION) && nvm use $(NODE_VERSION)
	@source ~/.bashrc && nvm alias $(NODE_ALIAS) $(NODE_VERSION)

# vim: set noexpandtab:
# vim: set setfiletype make
