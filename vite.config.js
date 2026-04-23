import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import autoprefixer from 'autoprefixer';
import path from 'path';
import fs from 'fs';
import { parseEnv } from 'node:util';
import handlebars from 'handlebars';

const pages = {"fe51eb60-cd78-469a-90df-b680d7a030f5-en":{"outputDir":"./cartera","lang":"en","title":"Blank | Start from scratch","cacheVersion":960,"meta":[{"name":"title","content":"Blank | Start from scratch"},{"itemprop":"name","content":"Blank | Start from scratch"},{"name":"twitter:card","content":"summary"},{"name":"twitter:title","content":"Blank | Start from scratch"},{"property":"og:title","content":"Blank | Start from scratch"},{"property":"og:site_name","content":"ERP YANPO"},{"property":"og:type","content":"website"},{"name":"robots","content":"noindex, nofollow"}],"scripts":{"head":"<style>\nbody { background-color: #FAFAFA }\n</style>\n","body":"Erp Yanpo Cargando...\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://606fc9f7-5f19-4b24-a2fd-6eadd56970c8.weweb-preview.io/cartera/"},{"rel":"alternate","hreflang":"en","href":"https://606fc9f7-5f19-4b24-a2fd-6eadd56970c8.weweb-preview.io/cartera/"}]},"6a9661d1-e38e-4421-9e3b-7c736b4352c8-en":{"outputDir":"./inicio","lang":"en","title":"Blank | Start from scratch","cacheVersion":960,"meta":[{"name":"title","content":"Blank | Start from scratch"},{"itemprop":"name","content":"Blank | Start from scratch"},{"name":"twitter:card","content":"summary"},{"name":"twitter:title","content":"Blank | Start from scratch"},{"property":"og:title","content":"Blank | Start from scratch"},{"property":"og:site_name","content":"ERP YANPO"},{"property":"og:type","content":"website"},{"name":"robots","content":"noindex, nofollow"}],"scripts":{"head":"<style>\nbody { background-color: #FAFAFA }\n</style>\n","body":"Erp Yanpo Cargando...\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://606fc9f7-5f19-4b24-a2fd-6eadd56970c8.weweb-preview.io/inicio/"},{"rel":"alternate","hreflang":"en","href":"https://606fc9f7-5f19-4b24-a2fd-6eadd56970c8.weweb-preview.io/inicio/"}]},"9f9af3b0-fded-4d4d-854b-31e28e8d9fb3-en":{"outputDir":"./","lang":"en","cacheVersion":960,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:site_name","content":"ERP YANPO"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"<style>\nbody { background-color: #FAFAFA }\n</style>\n","body":"Erp Yanpo Cargando...\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://606fc9f7-5f19-4b24-a2fd-6eadd56970c8.weweb-preview.io/"},{"rel":"alternate","hreflang":"en","href":"https://606fc9f7-5f19-4b24-a2fd-6eadd56970c8.weweb-preview.io/"}]},"9516d0fc-7776-4283-8e75-c9dcabde5493-en":{"outputDir":"./inventory","lang":"en","cacheVersion":960,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:site_name","content":"ERP YANPO"},{"property":"og:type","content":"website"},{"name":"robots","content":"noindex, nofollow"}],"scripts":{"head":"<style>\nbody { background-color: #FAFAFA }\n</style>\n","body":"Erp Yanpo Cargando...\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://606fc9f7-5f19-4b24-a2fd-6eadd56970c8.weweb-preview.io/inventory/"},{"rel":"alternate","hreflang":"en","href":"https://606fc9f7-5f19-4b24-a2fd-6eadd56970c8.weweb-preview.io/inventory/"}]},"3feae10c-e4cf-4d4c-9ed8-b0aedbef18ce-en":{"outputDir":"./settings","lang":"en","title":"Blank | Start from scratch","cacheVersion":960,"meta":[{"name":"title","content":"Blank | Start from scratch"},{"itemprop":"name","content":"Blank | Start from scratch"},{"name":"twitter:card","content":"summary"},{"name":"twitter:title","content":"Blank | Start from scratch"},{"property":"og:title","content":"Blank | Start from scratch"},{"property":"og:site_name","content":"ERP YANPO"},{"property":"og:type","content":"website"},{"name":"robots","content":"noindex, nofollow"}],"scripts":{"head":"<style>\nbody { background-color: #FAFAFA }\n</style>\n","body":"Erp Yanpo Cargando...\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://606fc9f7-5f19-4b24-a2fd-6eadd56970c8.weweb-preview.io/settings/"},{"rel":"alternate","hreflang":"en","href":"https://606fc9f7-5f19-4b24-a2fd-6eadd56970c8.weweb-preview.io/settings/"}]},"d55fe13e-261f-4e98-8cbe-4e5db94230c8-en":{"outputDir":"./orders","lang":"en","cacheVersion":960,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:site_name","content":"ERP YANPO"},{"property":"og:type","content":"website"},{"name":"robots","content":"noindex, nofollow"}],"scripts":{"head":"<style>\nbody { background-color: #FAFAFA }\n</style>\n","body":"Erp Yanpo Cargando...\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://606fc9f7-5f19-4b24-a2fd-6eadd56970c8.weweb-preview.io/orders/"},{"rel":"alternate","hreflang":"en","href":"https://606fc9f7-5f19-4b24-a2fd-6eadd56970c8.weweb-preview.io/orders/"}]},"88721e3a-e7b6-49d5-9e9b-d8962a52c846-en":{"outputDir":"./usuarios","lang":"en","cacheVersion":960,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:site_name","content":"ERP YANPO"},{"property":"og:type","content":"website"},{"name":"robots","content":"noindex, nofollow"}],"scripts":{"head":"<style>\nbody { background-color: #FAFAFA }\n</style>\n","body":"Erp Yanpo Cargando...\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://606fc9f7-5f19-4b24-a2fd-6eadd56970c8.weweb-preview.io/usuarios/"},{"rel":"alternate","hreflang":"en","href":"https://606fc9f7-5f19-4b24-a2fd-6eadd56970c8.weweb-preview.io/usuarios/"}]},"2516b0fc-7d8a-4ab9-a64f-306e1aa72ecb-en":{"outputDir":"./garantias","lang":"en","cacheVersion":960,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:site_name","content":"ERP YANPO"},{"property":"og:type","content":"website"},{"name":"robots","content":"noindex, nofollow"}],"scripts":{"head":"<style>\nbody { background-color: #FAFAFA }\n</style>\n","body":"Erp Yanpo Cargando...\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://606fc9f7-5f19-4b24-a2fd-6eadd56970c8.weweb-preview.io/garantias/"},{"rel":"alternate","hreflang":"en","href":"https://606fc9f7-5f19-4b24-a2fd-6eadd56970c8.weweb-preview.io/garantias/"}]},"7980f941-08cb-4699-b46c-79c68e1e5c4e-en":{"outputDir":"./misclientes","lang":"en","title":"Blank | Start from scratch","cacheVersion":960,"meta":[{"name":"title","content":"Blank | Start from scratch"},{"itemprop":"name","content":"Blank | Start from scratch"},{"name":"twitter:card","content":"summary"},{"name":"twitter:title","content":"Blank | Start from scratch"},{"property":"og:title","content":"Blank | Start from scratch"},{"property":"og:site_name","content":"ERP YANPO"},{"property":"og:type","content":"website"},{"name":"robots","content":"noindex, nofollow"}],"scripts":{"head":"<style>\nbody { background-color: #FAFAFA }\n</style>\n","body":"Erp Yanpo Cargando...\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://606fc9f7-5f19-4b24-a2fd-6eadd56970c8.weweb-preview.io/misclientes/"},{"rel":"alternate","hreflang":"en","href":"https://606fc9f7-5f19-4b24-a2fd-6eadd56970c8.weweb-preview.io/misclientes/"}]},"36f43d09-a8b4-47e9-b07b-325f5f1bbb78-en":{"outputDir":"./mis-prospectos","lang":"en","cacheVersion":960,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:site_name","content":"ERP YANPO"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"<style>\nbody { background-color: #FAFAFA }\n</style>\n","body":"Erp Yanpo Cargando...\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://606fc9f7-5f19-4b24-a2fd-6eadd56970c8.weweb-preview.io/mis-prospectos/"},{"rel":"alternate","hreflang":"en","href":"https://606fc9f7-5f19-4b24-a2fd-6eadd56970c8.weweb-preview.io/mis-prospectos/"},{"rel":"alternate","hreflang":"es","href":"https://606fc9f7-5f19-4b24-a2fd-6eadd56970c8.weweb-preview.io/es/mis-prospectos/"}]},"36f43d09-a8b4-47e9-b07b-325f5f1bbb78-es":{"outputDir":"./es/mis-prospectos","lang":"es","cacheVersion":960,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:site_name","content":"ERP YANPO"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"<style>\nbody { background-color: #FAFAFA }\n</style>\n","body":"Erp Yanpo Cargando...\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://606fc9f7-5f19-4b24-a2fd-6eadd56970c8.weweb-preview.io/mis-prospectos/"},{"rel":"alternate","hreflang":"en","href":"https://606fc9f7-5f19-4b24-a2fd-6eadd56970c8.weweb-preview.io/mis-prospectos/"},{"rel":"alternate","hreflang":"es","href":"https://606fc9f7-5f19-4b24-a2fd-6eadd56970c8.weweb-preview.io/es/mis-prospectos/"}]},"8319a412-97e7-45d8-b796-b14ccbd83495-en":{"outputDir":"./kardex-producto","lang":"en","title":"Blank | Start from scratch","cacheVersion":960,"meta":[{"name":"title","content":"Blank | Start from scratch"},{"itemprop":"name","content":"Blank | Start from scratch"},{"name":"twitter:card","content":"summary"},{"name":"twitter:title","content":"Blank | Start from scratch"},{"property":"og:title","content":"Blank | Start from scratch"},{"property":"og:site_name","content":"ERP YANPO"},{"property":"og:type","content":"website"},{"name":"robots","content":"noindex, nofollow"}],"scripts":{"head":"<style>\nbody { background-color: #FAFAFA }\n</style>\n","body":"Erp Yanpo Cargando...\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://606fc9f7-5f19-4b24-a2fd-6eadd56970c8.weweb-preview.io/kardex-producto/"},{"rel":"alternate","hreflang":"en","href":"https://606fc9f7-5f19-4b24-a2fd-6eadd56970c8.weweb-preview.io/kardex-producto/"}]},"af9f1f00-d0ae-4d19-aeea-6aaf9ee517de-en":{"outputDir":"./misclientes-ranking","lang":"en","title":"Blank | Start from scratch","cacheVersion":960,"meta":[{"name":"title","content":"Blank | Start from scratch"},{"itemprop":"name","content":"Blank | Start from scratch"},{"name":"twitter:card","content":"summary"},{"name":"twitter:title","content":"Blank | Start from scratch"},{"property":"og:title","content":"Blank | Start from scratch"},{"property":"og:site_name","content":"ERP YANPO"},{"property":"og:type","content":"website"},{"name":"robots","content":"noindex, nofollow"}],"scripts":{"head":"<style>\nbody { background-color: #FAFAFA }\n</style>\n","body":"Erp Yanpo Cargando...\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://606fc9f7-5f19-4b24-a2fd-6eadd56970c8.weweb-preview.io/misclientes-ranking/"},{"rel":"alternate","hreflang":"en","href":"https://606fc9f7-5f19-4b24-a2fd-6eadd56970c8.weweb-preview.io/misclientes-ranking/"}]},"fef72ccd-fe1a-4736-bee6-82171f5cc12c-en":{"outputDir":"./gestiondeclientes/kpisnotas-misclientes","lang":"en","title":"Blank | Start from scratch","cacheVersion":960,"meta":[{"name":"title","content":"Blank | Start from scratch"},{"itemprop":"name","content":"Blank | Start from scratch"},{"name":"twitter:card","content":"summary"},{"name":"twitter:title","content":"Blank | Start from scratch"},{"property":"og:title","content":"Blank | Start from scratch"},{"property":"og:site_name","content":"ERP YANPO"},{"property":"og:type","content":"website"},{"name":"robots","content":"noindex, nofollow"}],"scripts":{"head":"<style>\nbody { background-color: #FAFAFA }\n</style>\n","body":"Erp Yanpo Cargando...\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://606fc9f7-5f19-4b24-a2fd-6eadd56970c8.weweb-preview.io/gestiondeclientes/kpisnotas-misclientes/"},{"rel":"alternate","hreflang":"en","href":"https://606fc9f7-5f19-4b24-a2fd-6eadd56970c8.weweb-preview.io/gestiondeclientes/kpisnotas-misclientes/"}]}};

// Read the main HTML template
const template = fs.readFileSync(path.resolve(__dirname, 'template.html'), 'utf-8');
const compiledTemplate = handlebars.compile(template);

// Generate an HTML file for each page with its metadata
Object.values(pages).forEach(pageConfig => {
    // Compile the template with page metadata
    const html = compiledTemplate({
        title: pageConfig.title,
        lang: pageConfig.lang,
        meta: pageConfig.meta,
        structuredData: pageConfig.structuredData || null,
        scripts: {
            head: pageConfig.scripts.head,
            body: pageConfig.scripts.body,
        },
        alternateLinks: pageConfig.alternateLinks,
        cacheVersion: pageConfig.cacheVersion,
        baseTag: pageConfig.baseTag,
    });

    // Save output html for each page
    if (!fs.existsSync(pageConfig.outputDir)) {
        fs.mkdirSync(pageConfig.outputDir, { recursive: true });
    }
    fs.writeFileSync(`${pageConfig.outputDir}/index.html`, html);
});

const rolldownOptionsInput = {};
for (const pageName in pages) {
    rolldownOptionsInput[pageName] = path.resolve(__dirname, pages[pageName].outputDir, 'index.html');
}

function getFrontEnvironmentValues(root, mode) {
    const filePath = path.resolve(root, `.env.${mode}`);
    if (!fs.existsSync(filePath)) {
        return {};
    }

    return Object.fromEntries(Object.entries(parseEnv(fs.readFileSync(filePath, 'utf8'))).filter(([key]) => !key.startsWith('VITE_')));
}

export default defineConfig(() => {
    return {
        plugins: [vue()],
        base: "/",
        define: {
            global: 'globalThis',
            __WW_FRONT_ENV_VARIABLES__: JSON.stringify({
                staging: getFrontEnvironmentValues(__dirname, 'staging'),
                production: getFrontEnvironmentValues(__dirname, 'production'),
            }),
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
            },
        },
        css: {
            preprocessorOptions: {
                scss: {
                    api: 'modern-compiler',
                },
            },
            postcss: {
                plugins: [autoprefixer],
            },
        },
        build: {
            chunkSizeWarningLimit: 10000,
            rolldownOptions: {
                input: rolldownOptionsInput,
                onwarn: (entry, next) => {
                    if (entry.loc?.file && /js$/.test(entry.loc.file) && /Use of eval in/.test(entry.message)) return;
                    if (/Use of direct `eval`/.test(entry.message)) return;
                    return next(entry);
                },
            },
        },
        logLevel: 'warn',
    };
});
