.ONESHELL:
.SILENT:
command:## 	description
	#NOTE: 2 hashes are detected as 1st column output with color
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?##/ {printf "\033[36m%-15s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)


-include website.mk
# vim: set noexpandtab:
# vim: set setfiletype make