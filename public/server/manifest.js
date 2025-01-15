const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.GlT4d_4L.js","app":"_app/immutable/entry/app.Cy5Lg92o.js","imports":["_app/immutable/entry/start.GlT4d_4L.js","_app/immutable/chunks/entry.Bgqq5U34.js","_app/immutable/chunks/runtime.DVN_sD8T.js","_app/immutable/chunks/index-client.DMKCFNrx.js","_app/immutable/entry/app.Cy5Lg92o.js","_app/immutable/chunks/runtime.DVN_sD8T.js","_app/immutable/chunks/render.BPvd85jp.js","_app/immutable/chunks/disclose-version.D8aVZS6W.js","_app/immutable/chunks/props.COISjanH.js","_app/immutable/chunks/index-client.DMKCFNrx.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-DBR0YZrD.js')),
			__memo(() => import('./chunks/1-B2L3jDpB.js')),
			__memo(() => import('./chunks/2-q1vbvIGJ.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
