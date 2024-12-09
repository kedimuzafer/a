// vite.config.js
import { sveltekit } from "file:///home/nexus/Masa%C3%BCst%C3%BC/site/qwer/node_modules/.pnpm/@sveltejs+kit@2.5.18_@sveltejs+vite-plugin-svelte@3.1.1_svelte@4.2.18_vite@5.3.3_@types+node@_nh52qkc43ryxlq3mo3ni6kz73e/node_modules/@sveltejs/kit/src/exports/vite/index.js";
import Unocss from "file:///home/nexus/Masa%C3%BCst%C3%BC/site/qwer/node_modules/.pnpm/unocss@0.61.3_postcss@8.4.39_rollup@4.18.0_vite@5.3.3_@types+node@20.14.10_sass@1.77.6_/node_modules/unocss/dist/vite.mjs";
import { presetTypography, presetIcons, presetUno } from "file:///home/nexus/Masa%C3%BCst%C3%BC/site/qwer/node_modules/.pnpm/unocss@0.61.3_postcss@8.4.39_rollup@4.18.0_vite@5.3.3_@types+node@20.14.10_sass@1.77.6_/node_modules/unocss/dist/index.mjs";
import extractorSvelte from "file:///home/nexus/Masa%C3%BCst%C3%BC/site/qwer/node_modules/.pnpm/@unocss+extractor-svelte@0.61.3/node_modules/@unocss/extractor-svelte/dist/index.mjs";
import { presetScrollbar } from "file:///home/nexus/Masa%C3%BCst%C3%BC/site/qwer/node_modules/.pnpm/unocss-preset-scrollbar@0.3.1_unocss@0.61.3_postcss@8.4.39_rollup@4.18.0_vite@5.3.3_@types+node@20.14.10_sass@1.77.6__/node_modules/unocss-preset-scrollbar/dist/index.mjs";
import transformerDirective from "file:///home/nexus/Masa%C3%BCst%C3%BC/site/qwer/node_modules/.pnpm/@unocss+transformer-directives@0.61.3/node_modules/@unocss/transformer-directives/dist/index.mjs";
import transformerVariantGroup from "file:///home/nexus/Masa%C3%BCst%C3%BC/site/qwer/node_modules/.pnpm/@unocss+transformer-variant-group@0.61.3/node_modules/@unocss/transformer-variant-group/dist/index.mjs";
import transformerCompileClass from "file:///home/nexus/Masa%C3%BCst%C3%BC/site/qwer/node_modules/.pnpm/@unocss+transformer-compile-class@0.61.3/node_modules/@unocss/transformer-compile-class/dist/index.mjs";
import { imagetools } from "file:///home/nexus/Masa%C3%BCst%C3%BC/site/qwer/node_modules/.pnpm/vite-imagetools@7.0.2_rollup@4.18.0/node_modules/vite-imagetools/dist/index.js";
import path from "path";
import { partytownVite } from "file:///home/nexus/Masa%C3%BCst%C3%BC/site/qwer/node_modules/.pnpm/@builder.io+partytown@0.10.2/node_modules/@builder.io/partytown/utils/index.mjs";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { defineConfig } from "file:///home/nexus/Masa%C3%BCst%C3%BC/site/qwer/node_modules/.pnpm/vite@5.3.3_@types+node@20.14.10_sass@1.77.6/node_modules/vite/dist/node/index.js";
var __vite_injected_original_dirname = "/home/nexus/Masa\xFCst\xFC/site/qwer";
var __vite_injected_original_import_meta_url = "file:///home/nexus/Masa%C3%BCst%C3%BC/site/qwer/vite.config.js";
var pathMainPkg = fileURLToPath(new URL("package.json", __vite_injected_original_import_meta_url));
var jsonMainPkg = readFileSync(pathMainPkg, "utf8");
var pathQWERPkg = fileURLToPath(new URL("QWER/package.json", __vite_injected_original_import_meta_url));
var jsonQWERPkg = readFileSync(pathQWERPkg, "utf8");
var mainPkg = JSON.parse(jsonMainPkg);
var qwerPkg = JSON.parse(jsonQWERPkg);
var outputFolderPath = Object.keys(process.env).some((key) => key.includes("VERCEL")) ? ".vercel/output/static" : Object.keys(process.env).some((key) => key.includes("NETLIFY")) ? "build" : "static";
var vite_config_default = defineConfig({
  mode: process.env.MODE || "production",
  envPrefix: "QWER_",
  define: {
    __VERSION_MAIN__: mainPkg,
    __VERSION_QWER__: qwerPkg
  },
  plugins: [
    Unocss({
      extractors: [extractorSvelte()],
      presets: [
        presetUno(),
        presetScrollbar(),
        presetIcons(),
        presetTypography({
          cssExtend: {
            ":not(pre) > code::before,:not(pre) > code::after": {
              content: ""
            },
            pre: {
              "border-radius": 0,
              padding: 0,
              margin: 0
            }
          }
        })
      ],
      transformers: [transformerDirective(), transformerVariantGroup(), transformerCompileClass()],
      shortcuts: [
        {
          "title-link": "bg-gradient-to-t from-orange-500 to-orange-500 bg-no-repeat [background-position:0_88%] [background-size:0%_0.1em] focus:![background-size:100%_100%] hover:![background-size:100%_100%] group-hover:[background-size:100%_0.1em] motion-safe:transition-all motion-safe:duration-200"
        },
        [
          /^title-link-(.*)-(.*)-(.*)-(.*)$/,
          ([, f, fc, t, tc]) => `bg-gradient-to-t from-${f}-${fc} to-${t}-${tc} bg-no-repeat [background-position:0_88%] [background-size:0%_0.15em] focus:![background-size:100%_100%] hover:![background-size:100%_100%] group-hover:[background-size:100%_0.15em] motion-safe:transition-all motion-safe:duration-300`
        ]
      ]
    }),
    imagetools(),
    sveltekit(),
    partytownVite({
      dest: path.join(__vite_injected_original_dirname, outputFolderPath, "~partytown")
    })
  ],
  resolve: {
    alias: {
      $QWER: path.resolve(".", "QWER"),
      $generated: path.resolve(".", "src/generated"),
      $stores: path.resolve(".", "src/lib/stores"),
      $i18n: path.resolve(".", "src/i18n"),
      $config: path.resolve(".", "user/config"),
      $assets: path.resolve(".", "user/assets"),
      $custom: path.resolve(".", "user/custom"),
      $static: path.resolve(".", "static")
    }
  },
  server: {
    fs: {
      allow: [".."]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9uZXh1cy9NYXNhXHUwMEZDc3RcdTAwRkMvc2l0ZS9xd2VyXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9uZXh1cy9NYXNhXHUwMEZDc3RcdTAwRkMvc2l0ZS9xd2VyL3ZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL25leHVzL01hc2ElQzMlQkNzdCVDMyVCQy9zaXRlL3F3ZXIvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBzdmVsdGVraXQgfSBmcm9tICdAc3ZlbHRlanMva2l0L3ZpdGUnO1xuaW1wb3J0IFVub2NzcyBmcm9tICd1bm9jc3Mvdml0ZSc7XG5pbXBvcnQgeyBwcmVzZXRUeXBvZ3JhcGh5LCBwcmVzZXRJY29ucywgcHJlc2V0VW5vIH0gZnJvbSAndW5vY3NzJztcbmltcG9ydCBleHRyYWN0b3JTdmVsdGUgZnJvbSAnQHVub2Nzcy9leHRyYWN0b3Itc3ZlbHRlJztcbmltcG9ydCB7IHByZXNldFNjcm9sbGJhciB9IGZyb20gJ3Vub2Nzcy1wcmVzZXQtc2Nyb2xsYmFyJztcbmltcG9ydCB0cmFuc2Zvcm1lckRpcmVjdGl2ZSBmcm9tICdAdW5vY3NzL3RyYW5zZm9ybWVyLWRpcmVjdGl2ZXMnO1xuaW1wb3J0IHRyYW5zZm9ybWVyVmFyaWFudEdyb3VwIGZyb20gJ0B1bm9jc3MvdHJhbnNmb3JtZXItdmFyaWFudC1ncm91cCc7XG5pbXBvcnQgdHJhbnNmb3JtZXJDb21waWxlQ2xhc3MgZnJvbSAnQHVub2Nzcy90cmFuc2Zvcm1lci1jb21waWxlLWNsYXNzJztcbmltcG9ydCB7IGltYWdldG9vbHMgfSBmcm9tICd2aXRlLWltYWdldG9vbHMnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgeyBwYXJ0eXRvd25WaXRlIH0gZnJvbSAnQGJ1aWxkZXIuaW8vcGFydHl0b3duL3V0aWxzJztcbmltcG9ydCB7IHJlYWRGaWxlU3luYyB9IGZyb20gJ2ZzJztcbmltcG9ydCB7IGZpbGVVUkxUb1BhdGggfSBmcm9tICd1cmwnO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5jb25zdCBwYXRoTWFpblBrZyA9IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgncGFja2FnZS5qc29uJywgaW1wb3J0Lm1ldGEudXJsKSk7XG5jb25zdCBqc29uTWFpblBrZyA9IHJlYWRGaWxlU3luYyhwYXRoTWFpblBrZywgJ3V0ZjgnKTtcbmNvbnN0IHBhdGhRV0VSUGtnID0gZmlsZVVSTFRvUGF0aChuZXcgVVJMKCdRV0VSL3BhY2thZ2UuanNvbicsIGltcG9ydC5tZXRhLnVybCkpO1xuY29uc3QganNvblFXRVJQa2cgPSByZWFkRmlsZVN5bmMocGF0aFFXRVJQa2csICd1dGY4Jyk7XG5jb25zdCBtYWluUGtnID0gSlNPTi5wYXJzZShqc29uTWFpblBrZyk7XG5jb25zdCBxd2VyUGtnID0gSlNPTi5wYXJzZShqc29uUVdFUlBrZyk7XG5cbmNvbnN0IG91dHB1dEZvbGRlclBhdGggPSBPYmplY3Qua2V5cyhwcm9jZXNzLmVudikuc29tZSgoa2V5KSA9PiBrZXkuaW5jbHVkZXMoJ1ZFUkNFTCcpKVxuICA/ICcudmVyY2VsL291dHB1dC9zdGF0aWMnXG4gIDogT2JqZWN0LmtleXMocHJvY2Vzcy5lbnYpLnNvbWUoKGtleSkgPT4ga2V5LmluY2x1ZGVzKCdORVRMSUZZJykpXG4gICAgPyAnYnVpbGQnXG4gICAgOiAnc3RhdGljJztcblxuLyoqIEB0eXBlIHtpbXBvcnQoJ3ZpdGUnKS5Vc2VyQ29uZmlnfSAqL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgbW9kZTogcHJvY2Vzcy5lbnYuTU9ERSB8fCAncHJvZHVjdGlvbicsXG4gIGVudlByZWZpeDogJ1FXRVJfJyxcbiAgZGVmaW5lOiB7XG4gICAgX19WRVJTSU9OX01BSU5fXzogbWFpblBrZyxcbiAgICBfX1ZFUlNJT05fUVdFUl9fOiBxd2VyUGtnLFxuICB9LFxuICBwbHVnaW5zOiBbXG4gICAgVW5vY3NzKHtcbiAgICAgIGV4dHJhY3RvcnM6IFtleHRyYWN0b3JTdmVsdGUoKV0sXG4gICAgICBwcmVzZXRzOiBbXG4gICAgICAgIHByZXNldFVubygpLFxuICAgICAgICBwcmVzZXRTY3JvbGxiYXIoKSxcbiAgICAgICAgcHJlc2V0SWNvbnMoKSxcbiAgICAgICAgcHJlc2V0VHlwb2dyYXBoeSh7XG4gICAgICAgICAgY3NzRXh0ZW5kOiB7XG4gICAgICAgICAgICAnOm5vdChwcmUpID4gY29kZTo6YmVmb3JlLDpub3QocHJlKSA+IGNvZGU6OmFmdGVyJzoge1xuICAgICAgICAgICAgICBjb250ZW50OiAnJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcmU6IHtcbiAgICAgICAgICAgICAgJ2JvcmRlci1yYWRpdXMnOiAwLFxuICAgICAgICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICAgICAgICBtYXJnaW46IDAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICAgIHRyYW5zZm9ybWVyczogW3RyYW5zZm9ybWVyRGlyZWN0aXZlKCksIHRyYW5zZm9ybWVyVmFyaWFudEdyb3VwKCksIHRyYW5zZm9ybWVyQ29tcGlsZUNsYXNzKCldLFxuICAgICAgc2hvcnRjdXRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAndGl0bGUtbGluayc6XG4gICAgICAgICAgICAnYmctZ3JhZGllbnQtdG8tdCBmcm9tLW9yYW5nZS01MDAgdG8tb3JhbmdlLTUwMCBiZy1uby1yZXBlYXQgW2JhY2tncm91bmQtcG9zaXRpb246MF84OCVdIFtiYWNrZ3JvdW5kLXNpemU6MCVfMC4xZW1dIGZvY3VzOiFbYmFja2dyb3VuZC1zaXplOjEwMCVfMTAwJV0gaG92ZXI6IVtiYWNrZ3JvdW5kLXNpemU6MTAwJV8xMDAlXSBncm91cC1ob3ZlcjpbYmFja2dyb3VuZC1zaXplOjEwMCVfMC4xZW1dIG1vdGlvbi1zYWZlOnRyYW5zaXRpb24tYWxsIG1vdGlvbi1zYWZlOmR1cmF0aW9uLTIwMCcsXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICAvXnRpdGxlLWxpbmstKC4qKS0oLiopLSguKiktKC4qKSQvLFxuICAgICAgICAgIChbLCBmLCBmYywgdCwgdGNdKSA9PlxuICAgICAgICAgICAgYGJnLWdyYWRpZW50LXRvLXQgZnJvbS0ke2Z9LSR7ZmN9IHRvLSR7dH0tJHt0Y30gYmctbm8tcmVwZWF0IFtiYWNrZ3JvdW5kLXBvc2l0aW9uOjBfODglXSBbYmFja2dyb3VuZC1zaXplOjAlXzAuMTVlbV0gZm9jdXM6IVtiYWNrZ3JvdW5kLXNpemU6MTAwJV8xMDAlXSBob3ZlcjohW2JhY2tncm91bmQtc2l6ZToxMDAlXzEwMCVdIGdyb3VwLWhvdmVyOltiYWNrZ3JvdW5kLXNpemU6MTAwJV8wLjE1ZW1dIG1vdGlvbi1zYWZlOnRyYW5zaXRpb24tYWxsIG1vdGlvbi1zYWZlOmR1cmF0aW9uLTMwMGAsXG4gICAgICAgIF0sXG4gICAgICBdLFxuICAgIH0pLFxuICAgIGltYWdldG9vbHMoKSxcbiAgICBzdmVsdGVraXQoKSxcbiAgICBwYXJ0eXRvd25WaXRlKHtcbiAgICAgIGRlc3Q6IHBhdGguam9pbihfX2Rpcm5hbWUsIG91dHB1dEZvbGRlclBhdGgsICd+cGFydHl0b3duJyksXG4gICAgfSksXG4gIF0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgJFFXRVI6IHBhdGgucmVzb2x2ZSgnLicsICdRV0VSJyksXG4gICAgICAkZ2VuZXJhdGVkOiBwYXRoLnJlc29sdmUoJy4nLCAnc3JjL2dlbmVyYXRlZCcpLFxuICAgICAgJHN0b3JlczogcGF0aC5yZXNvbHZlKCcuJywgJ3NyYy9saWIvc3RvcmVzJyksXG4gICAgICAkaTE4bjogcGF0aC5yZXNvbHZlKCcuJywgJ3NyYy9pMThuJyksXG4gICAgICAkY29uZmlnOiBwYXRoLnJlc29sdmUoJy4nLCAndXNlci9jb25maWcnKSxcbiAgICAgICRhc3NldHM6IHBhdGgucmVzb2x2ZSgnLicsICd1c2VyL2Fzc2V0cycpLFxuICAgICAgJGN1c3RvbTogcGF0aC5yZXNvbHZlKCcuJywgJ3VzZXIvY3VzdG9tJyksXG4gICAgICAkc3RhdGljOiBwYXRoLnJlc29sdmUoJy4nLCAnc3RhdGljJyksXG4gICAgfSxcbiAgfSxcbiAgc2VydmVyOiB7XG4gICAgZnM6IHtcbiAgICAgIGFsbG93OiBbJy4uJ10sXG4gICAgfSxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFzUixTQUFTLGlCQUFpQjtBQUNoVCxPQUFPLFlBQVk7QUFDbkIsU0FBUyxrQkFBa0IsYUFBYSxpQkFBaUI7QUFDekQsT0FBTyxxQkFBcUI7QUFDNUIsU0FBUyx1QkFBdUI7QUFDaEMsT0FBTywwQkFBMEI7QUFDakMsT0FBTyw2QkFBNkI7QUFDcEMsT0FBTyw2QkFBNkI7QUFDcEMsU0FBUyxrQkFBa0I7QUFDM0IsT0FBTyxVQUFVO0FBQ2pCLFNBQVMscUJBQXFCO0FBQzlCLFNBQVMsb0JBQW9CO0FBQzdCLFNBQVMscUJBQXFCO0FBQzlCLFNBQVMsb0JBQW9CO0FBYjdCLElBQU0sbUNBQW1DO0FBQTJILElBQU0sMkNBQTJDO0FBY3JOLElBQU0sY0FBYyxjQUFjLElBQUksSUFBSSxnQkFBZ0Isd0NBQWUsQ0FBQztBQUMxRSxJQUFNLGNBQWMsYUFBYSxhQUFhLE1BQU07QUFDcEQsSUFBTSxjQUFjLGNBQWMsSUFBSSxJQUFJLHFCQUFxQix3Q0FBZSxDQUFDO0FBQy9FLElBQU0sY0FBYyxhQUFhLGFBQWEsTUFBTTtBQUNwRCxJQUFNLFVBQVUsS0FBSyxNQUFNLFdBQVc7QUFDdEMsSUFBTSxVQUFVLEtBQUssTUFBTSxXQUFXO0FBRXRDLElBQU0sbUJBQW1CLE9BQU8sS0FBSyxRQUFRLEdBQUcsRUFBRSxLQUFLLENBQUMsUUFBUSxJQUFJLFNBQVMsUUFBUSxDQUFDLElBQ2xGLDBCQUNBLE9BQU8sS0FBSyxRQUFRLEdBQUcsRUFBRSxLQUFLLENBQUMsUUFBUSxJQUFJLFNBQVMsU0FBUyxDQUFDLElBQzVELFVBQ0E7QUFHTixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixNQUFNLFFBQVEsSUFBSSxRQUFRO0FBQUEsRUFDMUIsV0FBVztBQUFBLEVBQ1gsUUFBUTtBQUFBLElBQ04sa0JBQWtCO0FBQUEsSUFDbEIsa0JBQWtCO0FBQUEsRUFDcEI7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQztBQUFBLE1BQzlCLFNBQVM7QUFBQSxRQUNQLFVBQVU7QUFBQSxRQUNWLGdCQUFnQjtBQUFBLFFBQ2hCLFlBQVk7QUFBQSxRQUNaLGlCQUFpQjtBQUFBLFVBQ2YsV0FBVztBQUFBLFlBQ1Qsb0RBQW9EO0FBQUEsY0FDbEQsU0FBUztBQUFBLFlBQ1g7QUFBQSxZQUNBLEtBQUs7QUFBQSxjQUNILGlCQUFpQjtBQUFBLGNBQ2pCLFNBQVM7QUFBQSxjQUNULFFBQVE7QUFBQSxZQUNWO0FBQUEsVUFDRjtBQUFBLFFBQ0YsQ0FBQztBQUFBLE1BQ0g7QUFBQSxNQUNBLGNBQWMsQ0FBQyxxQkFBcUIsR0FBRyx3QkFBd0IsR0FBRyx3QkFBd0IsQ0FBQztBQUFBLE1BQzNGLFdBQVc7QUFBQSxRQUNUO0FBQUEsVUFDRSxjQUNFO0FBQUEsUUFDSjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQSxDQUFDLENBQUMsRUFBRSxHQUFHLElBQUksR0FBRyxFQUFFLE1BQ2QseUJBQXlCLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJLEVBQUU7QUFBQSxRQUNsRDtBQUFBLE1BQ0Y7QUFBQSxJQUNGLENBQUM7QUFBQSxJQUNELFdBQVc7QUFBQSxJQUNYLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxNQUNaLE1BQU0sS0FBSyxLQUFLLGtDQUFXLGtCQUFrQixZQUFZO0FBQUEsSUFDM0QsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLE9BQU8sS0FBSyxRQUFRLEtBQUssTUFBTTtBQUFBLE1BQy9CLFlBQVksS0FBSyxRQUFRLEtBQUssZUFBZTtBQUFBLE1BQzdDLFNBQVMsS0FBSyxRQUFRLEtBQUssZ0JBQWdCO0FBQUEsTUFDM0MsT0FBTyxLQUFLLFFBQVEsS0FBSyxVQUFVO0FBQUEsTUFDbkMsU0FBUyxLQUFLLFFBQVEsS0FBSyxhQUFhO0FBQUEsTUFDeEMsU0FBUyxLQUFLLFFBQVEsS0FBSyxhQUFhO0FBQUEsTUFDeEMsU0FBUyxLQUFLLFFBQVEsS0FBSyxhQUFhO0FBQUEsTUFDeEMsU0FBUyxLQUFLLFFBQVEsS0FBSyxRQUFRO0FBQUEsSUFDckM7QUFBQSxFQUNGO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixJQUFJO0FBQUEsTUFDRixPQUFPLENBQUMsSUFBSTtBQUFBLElBQ2Q7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
