.PHONY:
website:website-build website-serve## 	website-build website-serve
website-clear:## 	pushd website && yarn run clear
	@pushd website && yarn run clear
website-build:## 	website-build
	@yarn run website:build
website-serve:## 	website-serve
	@killall -9 node 2>/dev/null || echo
	@pushd website && npm run serve &
# vim: set noexpandtab:
# vim: set setfiletype make