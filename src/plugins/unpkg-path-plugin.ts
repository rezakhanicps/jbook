import * as esbuild from "esbuild-wasm";
import axios from "axios";
export const unpkgPathPlugin = () => {
    return {
        name: "unpkg-path-plugin",
        setup(build: esbuild.PluginBuild) {
            build.onResolve({ filter: /.*/ }, async (args: any) => {
                console.log("onResole", args);
                if (args.path === "index.js") {
                    return { path: args.path, namespace: "a" };
                }

                return {
                    namespace: "a",
                    path: `https://unpkg.com/${args.path}`,
                };
            });
            build.onLoad({ filter: /.*/ }, async (args: any) => {
                console.log("onLoad", args);
                if (args.path === "index.js") {
                    return {
                        loader: "jsx",
                        contents: `
                            import message from 'tiny-test-pkg';
                            console.log(message);
            `,
                    };
                }
                const { data } = await axios.get(args.path);
                // console.log(data)
                return {
                    loader: "jsx",
                    contents: data,
                };
            });
        },
    };
};
