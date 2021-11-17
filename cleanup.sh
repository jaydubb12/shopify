echo "Deleting /cache"
rm -rfv cache

echo "Deleting packages/api-client/node_modules"
rm -rfv packages/api-client/node_modules

echo "Deleting packages/api-client/ files cache, lib and server"
rm -rfv packages/api-client/cache
rm -rfv packages/api-client/lib
rm -rfv packages/api-client/server


echo "Deleting packages/api-client/node_modules"
rm -rfv packages/composables/node_modules

echo "Deleting packages/composables/ files cache and lib"
rm -rfv packages/composables/cache
rm -rfv packages/composables/lib

echo "Deleting packages/theme/node_modules"
rm -rfv packages/theme/node_modules

echo "Deleting packages/theme/ files .nuxt, _theme"
rm -rfv packages/theme/.nuxt
rm -rfv packages/theme/_theme

echo "Deleting yarn.lock from project"
rm -rfv yarn.lock



echo "Deleting yarn.lock"
rm -rfv node_modules
