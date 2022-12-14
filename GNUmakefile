# PATH=/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin:/usr/X11/bin
SHELL									:= /bin/bash

PWD										?= pwd_unknown
#space:=
#space+=

#v12.22.0/  30-Mar-2021 14:14
#v12.22.1/  06-Apr-2021 19:58
#v12.22.10/ 01-Feb-2022 20:24
#v12.22.11/ 17-Mar-2022 23:30
#v12.22.12/ 05-Apr-2022 12:21
#v12.22.2/  01-Jul-2021 15:37
#v12.22.3/  05-Jul-2021 15:55
#v12.22.4/  29-Jul-2021 16:46
#v12.22.5/  11-Aug-2021 16:30
#v12.22.6/  31-Aug-2021 14:59
#v12.22.7/  12-Oct-2021 15:21
#v12.22.8/  16-Dec-2021 23:40
#v12.22.9/  10-Jan-2022 23:15

NODE_VERSION							:=v12.22.0
export NODE_VERSION
PACKAGE_MANAGER							:=yarn
export PACKAGE_MANAGER
PACKAGE_INSTALL							:=add
export PACKAGE_INSTALL

# CURRENT_PATH := $(subst $(lastword $(notdir $(MAKEFILE_LIST))),,$(subst $(space),\$(space),$(shell realpath '$(strip $(MAKEFILE_LIST))')))
# export CURRENT_PATH

THIS_DIR=$(dir $(abspath $(firstword $(MAKEFILE_LIST))))
export THIS_DIR

TIME									:= $(shell date +%s)
export TIME

# PROJECT_NAME defaults to name of the current directory.
ifeq ($(project),)
PROJECT_NAME							:= $(notdir $(PWD))
else
PROJECT_NAME							:= $(project)
endif
export PROJECT_NAME

ifeq ($(NODE_VERSION),)
NODE_VERSION									:= $(shell node --version)
else
NODE_VERSION									:= $(NODE_VERSION)
endif
export NODE_VERSION

ifeq ($(force),true)
FORCE									:= --force
endif
export FORCE

#GIT CONFIG
GIT_USER_NAME							:= $(shell git config user.name)
export GIT_USER_NAME
GIT_USER_EMAIL							:= $(shell git config user.email)
export GIT_USER_EMAIL
GIT_SERVER								:= https://github.com
export GIT_SERVER
GIT_PROFILE								:= $(shell git config user.name)
export GIT_PROFILE
GIT_BRANCH								:= $(shell git rev-parse --abbrev-ref HEAD)
export GIT_BRANCH
GIT_HASH								:= $(shell git rev-parse --short HEAD)
export GIT_HASH
GIT_PREVIOUS_HASH						:= $(shell git rev-parse --short HEAD^1)
export GIT_PREVIOUS_HASH
GIT_REPO_ORIGIN							:= $(shell git remote get-url origin)
export GIT_REPO_ORIGIN
GIT_REPO_NAME							:= $(PROJECT_NAME)
export GIT_REPO_NAME
GIT_REPO_PATH							:= $(HOME)/$(GIT_REPO_NAME)
export GIT_REPO_PATH

.SILENT:
-:## -
	#NOTE: 2 hashes are detected as 1st column output with color
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?##/ {printf "\033[36m%-15s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

init: clean ## init clean
#	@["$(shell $(SHELL))" == "/bin/zsh"] && zsh --emulate sh
	@cd ./scripts && ./initialize

.PHONY:install
install:## - ./scripts && $(PACKAGE_MANAGER) $(PACKAGE_INSTALL)
	@cd ./scripts && $(PACKAGE_MANAGER) $(PACKAGE_INSTALL)
.PHONY:build
build:## build
	@cd ./scripts && $(PACKAGE_MANAGER) run build
.PHONY:start
start:## start
	@cd ./scripts && $(PACKAGE_MANAGER) run start
rebuild:## rebuild
	@rm -rf $(find . -name package-lock.json)
	@rm -rf $(find . -name yarn.lock)
	@rm -rf $(find . -name node_modules)
	@rm -rf ./scripts/node_modules/electron
	@cd ./scripts && $(PACKAGE_MANAGER) $(PACKAGE_INSTALL) electron@10
	@cd ./scripts && $(PACKAGE_MANAGER) $(PACKAGE_INSTALL) rebuild
burnthemall:## burnthemall - hard reset & build
	@cd ./scripts && $(PACKAGE_MANAGER) $(PACKAGE_INSTALL) burnthemall
release:## release - build distribution
	@cd ./scripts && $(PACKAGE_MANAGER) $(PACKAGE_INSTALL) release

help:## help
	@echo ''
	#NOTE: 2 hashes are detected as 1st column output with color
	@sed -n 's/^##ARGS//p' ${MAKEFILE_LIST} | column -t -s ':' |  sed -e 's/^/ /'
	# @sed -n 's/^.PHONY//p' ${MAKEFILE_LIST} | column -t -s ':' |  sed -e 's/^/ /'
	@sed -n 's/^##//p' ${MAKEFILE_LIST} | column -t -s ':' |  sed -e 's/^/ /'
	@sed -n 's/^# //p' ${MAKEFILE_LIST} | column -t -s ':' |  sed -e 's/^/# /'
	@sed -n 's/^## //p' ${MAKEFILE_LIST} | column -t -s ':' |  sed -e 's/^/## /'
	@sed -n 's/^### //p' ${MAKEFILE_LIST} | column -t -s ':' |  sed -e 's/^/### /'
	@echo ""
	@echo ""
	@echo ""
	@echo "Useful Commands:"
	@echo ""
	@echo "make install init build"
	@echo "make start"
	@echo "make release"
	@echo ""
	@echo ""

report:## report					environment args
	@echo ''
	@echo ' TIME=${TIME}	'
	@echo ' CURRENT_PATH=${CURRENT_PATH}	'
	@echo ' THIS_DIR=${THIS_DIR}	'
	@echo ' PROJECT_NAME=${PROJECT_NAME}	'
	@echo ' NODE_VERSION=${NODE_VERSION}	'
	@echo ' GIT_USER_NAME=${GIT_USER_NAME}	'
	@echo ' GIT_USER_EMAIL=${GIT_USER_EMAIL}	'
	@echo ' GIT_SERVER=${GIT_SERVER}	'
	@echo ' GIT_PROFILE=${GIT_PROFILE}	'
	@echo ' GIT_BRANCH=${GIT_BRANCH}	'
	@echo ' GIT_HASH=${GIT_HASH}	'
	@echo ' GIT_PREVIOUS_HASH=${GIT_PREVIOUS_HASH}	'
	@echo ' GIT_REPO_ORIGIN=${GIT_REPO_ORIGIN}	'
	@echo ' GIT_REPO_NAME=${GIT_REPO_NAME}	'
	@echo ' GIT_REPO_PATH=${GIT_REPO_PATH}	'

#.PHONY:
#phony:
#	@sed -n 's/^.PHONY//p' ${MAKEFILE_LIST} | column -t -s ':' |  sed -e 's/^/ /'

.PHONY: command
command: executable ## command		example
	@echo "command sequence here..."

.PHONY: executable
executable: ## executable
	chmod +x ./scripts/initialize
.PHONY: exec
exec: executable ## exec	make shell scripts executable

.PHONY: nvm
.ONESHELL:
nvm: executable ## nvm
	@curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh | bash || git pull -C $(HOME)/.nvm && export NVM_DIR="$(HOME)/.nvm" && [ -s "$(NVM_DIR)/nvm.sh" ] && \. "$(NVM_DIR)/nvm.sh" && [ -s "$(NVM_DIR)/bash_completion" ] && \. "$(NVM_DIR)/bash_completion"  && nvm install $(NODE_VERSION) && nvm use $(NODE_VERSION)

.PHONY: all
all:- executable install init build ## all - executable install init build
	@echo "make release"
	@echo "make start"

.PHONY: submodule submodules
submodule: submodules ## submodule
submodules: ## submodules
	git submodule update --init --recursive
	git submodule foreach 'git fetch origin; git checkout $$(git rev-parse --abbrev-ref HEAD); git reset --hard origin/$$(git rev-parse --abbrev-ref HEAD); git submodule update --recursive; git clean -dfx'

.PHONY: node
node: ## node
	$(MAKE) -f node.mk

clean: ## clean
	rm -rf $(find . -name package-lock.json)
	rm -rf $(find . -name yarn.lock)
	rm -rf $(find ./scripts -name package-lock.json)
	rm -rf $(find ./scripts -name yarn.lock)
	rm -rf $(find ./app     -name package-lock.json)
	rm -rf $(find ./app     -name yarn.lock)
clean-nvm: ## clean-nvm
	@rm -rf ~/.nvm
clean-all: clean clean-nvm ## clean-all
	@rm -rf $(find . -name node_modules)

-include node.mk
# vim: set noexpandtab:
# vim: set setfiletype make