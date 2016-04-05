System.trace = true;

window.mods = function() {
    var modules = Object.keys(System.loads)
        .map(function(moduleName) {
            return System.loads[moduleName];
        });

    function displayName(module) {
        return module
            .replace(System.baseURL, '');
    }

    var moduleDefinitions = modules
        .map(function(module) {
            var name = displayName(module.name);
            return '[' + name + '|' + module.metadata.format + ']';
        });

    var dependencyDefinitions = [];

    modules
        .filter(function(module) {
            return module.deps.length > 0;
        })
        .forEach(function(mod) {
            var name = displayName(mod.name);

            var dependencies = mod.deps
                .map(function(dependency) {
                    return System.normalizeSync(dependency, mod.name, mod.address)
                })
                .map(displayName)
                .map(function(dep) {
                    return '[' + name + ']->[' + dep + ']';
                });

            dependencyDefinitions = dependencyDefinitions.concat(dependencies);
        });

    var definitions = moduleDefinitions.concat(dependencyDefinitions);

    window.open("http://yuml.me/diagram/plain/class/" + definitions);
};
