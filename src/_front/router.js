import { createRouter, createWebHistory } from 'vue-router';

import wwPage from './views/wwPage.vue';

import { initializeData, initializePlugins, onPageUnload } from '@/_common/helpers/data';

let router;
const routes = [];

function scrollBehavior(to) {
    if (to.hash) {
        return {
            el: to.hash,
            behavior: 'smooth',
        };
    } else {
        return { top: 0 };
    }
}

 
/* wwFront:start */
import pluginsSettings from '../../plugins-settings.json';

// eslint-disable-next-line no-undef
window.wwg_designInfo = {"id":"606fc9f7-5f19-4b24-a2fd-6eadd56970c8","homePageId":"9f9af3b0-fded-4d4d-854b-31e28e8d9fb3","authPluginId":"e93a2dfd-9b19-473e-b445-c666fed4e14a","baseTag":null,"defaultTheme":"light","langs":[{"lang":"en","default":true}],"background":{},"workflows":[],"pages":[{"id":"2516b0fc-7d8a-4ab9-a64f-306e1aa72ecb","linkId":"2516b0fc-7d8a-4ab9-a64f-306e1aa72ecb","name":"Gestión de garantías","folder":"Productos/","paths":{"en":"garantias","default":"garantias"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"a17e74a1-9672-46b8-92cc-ee374388e425","sectionTitle":"Header","linkId":"f3b431a9-d5be-4522-a14f-ed81e619a727"},{"uid":"37c3bf0b-e88f-424c-88c9-928cd6369812","sectionTitle":"Sidemenu","linkId":"60e1581e-2cd1-4253-b90a-10887834383c"},{"uid":"2cdde852-1673-491f-8c94-acdc653cf72e","sectionTitle":"Content","linkId":"174f76de-487b-4d70-b295-59dd5636aaa3"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"6a9661d1-e38e-4421-9e3b-7c736b4352c8","linkId":"6a9661d1-e38e-4421-9e3b-7c736b4352c8","name":"Inicio","folder":null,"paths":{"en":"inicio","default":"inicio"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"37c3bf0b-e88f-424c-88c9-928cd6369812","sectionTitle":"Sidemenu","linkId":"60e1581e-2cd1-4253-b90a-10887834383c"},{"uid":"a17e74a1-9672-46b8-92cc-ee374388e425","sectionTitle":"Header","linkId":"f3b431a9-d5be-4522-a14f-ed81e619a727"},{"uid":"9167fe24-2752-4f06-be52-0f98509a438d","sectionTitle":"Welcome Content","linkId":"0303f00a-711a-4f3d-b445-4dab434dcb54"}],"pageUserGroups":[{}],"title":{"en":"Blank | Start from scratch","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"9f9af3b0-fded-4d4d-854b-31e28e8d9fb3","linkId":"9f9af3b0-fded-4d4d-854b-31e28e8d9fb3","name":"Log in","folder":"Usuarios/","paths":{"en":"log_in","default":"log_in"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"54f669bf-5e59-48a3-945b-f6d0298b242b","sectionTitle":"Sign in","linkId":"6e6c6034-7a03-4d90-b22a-07965a537932"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"9516d0fc-7776-4283-8e75-c9dcabde5493","linkId":"9516d0fc-7776-4283-8e75-c9dcabde5493","name":"Inventario","folder":"Productos/","paths":{"en":"inventory","default":"inventory"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"a17e74a1-9672-46b8-92cc-ee374388e425","sectionTitle":"Header","linkId":"f3b431a9-d5be-4522-a14f-ed81e619a727"},{"uid":"37c3bf0b-e88f-424c-88c9-928cd6369812","sectionTitle":"Sidemenu","linkId":"60e1581e-2cd1-4253-b90a-10887834383c"},{"uid":"dd194e6f-e415-4de6-ac72-5e3940da1fce","sectionTitle":"Section","linkId":"53199955-8267-4e6f-8daa-5f74c4a58f77"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"3feae10c-e4cf-4d4c-9ed8-b0aedbef18ce","linkId":"3feae10c-e4cf-4d4c-9ed8-b0aedbef18ce","name":"Configuraciones","folder":"Plataforma/","paths":{"en":"settings","default":"settings"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"37c3bf0b-e88f-424c-88c9-928cd6369812","sectionTitle":"Sidemenu","linkId":"60e1581e-2cd1-4253-b90a-10887834383c"},{"uid":"a17e74a1-9672-46b8-92cc-ee374388e425","sectionTitle":"Header","linkId":"f3b431a9-d5be-4522-a14f-ed81e619a727"},{"uid":"704e8ad6-2d9d-4dcd-9a71-03c0a53cb872","sectionTitle":"Content","linkId":"da50435c-594c-4c49-9959-baa9f60af409"}],"pageUserGroups":[{}],"title":{"en":"Blank | Start from scratch","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"d55fe13e-261f-4e98-8cbe-4e5db94230c8","linkId":"d55fe13e-261f-4e98-8cbe-4e5db94230c8","name":"Pedidos","folder":"Productos/","paths":{"en":"orders","default":"orders"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"a17e74a1-9672-46b8-92cc-ee374388e425","sectionTitle":"Header","linkId":"f3b431a9-d5be-4522-a14f-ed81e619a727"},{"uid":"37c3bf0b-e88f-424c-88c9-928cd6369812","sectionTitle":"Sidemenu","linkId":"60e1581e-2cd1-4253-b90a-10887834383c"},{"uid":"4488f068-e908-4591-8f93-6e820fbe4e92","sectionTitle":"Content","linkId":"d9a2a5c6-0091-404c-8860-cc25b6f6cd78"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"fe51eb60-cd78-469a-90df-b680d7a030f5","linkId":"fe51eb60-cd78-469a-90df-b680d7a030f5","name":"Cartera","folder":"Finanzas/","paths":{"en":"cartera","default":"cartera"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"37c3bf0b-e88f-424c-88c9-928cd6369812","sectionTitle":"Sidemenu","linkId":"60e1581e-2cd1-4253-b90a-10887834383c"},{"uid":"a17e74a1-9672-46b8-92cc-ee374388e425","sectionTitle":"Header","linkId":"f3b431a9-d5be-4522-a14f-ed81e619a727"},{"uid":"dd4a3e79-5342-45e6-8056-f9a2c4322f00","sectionTitle":"Content","linkId":"f68cb9f6-bdea-4e51-a290-ebd9adb35696"}],"pageUserGroups":[{}],"title":{"en":"Blank | Start from scratch","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"88721e3a-e7b6-49d5-9e9b-d8962a52c846","linkId":"88721e3a-e7b6-49d5-9e9b-d8962a52c846","name":"Usuarios","folder":"Usuarios/","paths":{"en":"usuarios","default":"usuarios"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"a17e74a1-9672-46b8-92cc-ee374388e425","sectionTitle":"Header","linkId":"f3b431a9-d5be-4522-a14f-ed81e619a727"},{"uid":"37c3bf0b-e88f-424c-88c9-928cd6369812","sectionTitle":"Sidemenu","linkId":"60e1581e-2cd1-4253-b90a-10887834383c"},{"uid":"b9ded3da-d1ff-4bf4-ac05-f14bf8036609","sectionTitle":"Content","linkId":"cd775f95-aba0-43cf-aab2-89c02b2fe1b4"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"7980f941-08cb-4699-b46c-79c68e1e5c4e","linkId":"7980f941-08cb-4699-b46c-79c68e1e5c4e","name":"Mis clientes - sus últimas compras","folder":"Gestion de clientes/","paths":{"en":"misclientes","default":"misclientes"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"37c3bf0b-e88f-424c-88c9-928cd6369812","sectionTitle":"Sidemenu","linkId":"60e1581e-2cd1-4253-b90a-10887834383c"},{"uid":"a17e74a1-9672-46b8-92cc-ee374388e425","sectionTitle":"Header","linkId":"f3b431a9-d5be-4522-a14f-ed81e619a727"},{"uid":"53b416f7-e8ab-449b-be3a-e7fc9eb826de","sectionTitle":"Content","linkId":"e92ac0c7-5e8b-4ebe-82d9-68a6061fddbb"}],"pageUserGroups":[{}],"title":{"en":"Blank | Start from scratch","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"af9f1f00-d0ae-4d19-aeea-6aaf9ee517de","linkId":"af9f1f00-d0ae-4d19-aeea-6aaf9ee517de","name":"Mis clientes - Ranking","folder":"Gestion de clientes/","paths":{"en":"misclientes-ranking","default":"misclientes-ranking"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"37c3bf0b-e88f-424c-88c9-928cd6369812","sectionTitle":"Sidemenu","linkId":"60e1581e-2cd1-4253-b90a-10887834383c"},{"uid":"a17e74a1-9672-46b8-92cc-ee374388e425","sectionTitle":"Header","linkId":"f3b431a9-d5be-4522-a14f-ed81e619a727"},{"uid":"ae61eda3-e97d-42ba-bc53-5286556aaa20","sectionTitle":"Content","linkId":"82d215ef-67a2-4dd3-b6f0-41e64ca6f057"}],"pageUserGroups":[{}],"title":{"en":"Blank | Start from scratch","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""}],"plugins":[{"id":"66a79c98-70e7-4bc4-8859-20776b024ec2","name":"PWA","namespace":"pwa"},{"id":"69d4a5bb-09a3-4f3d-a94e-667c21c057eb","name":"NPM","namespace":"npm"},{"id":"e93a2dfd-9b19-473e-b445-c666fed4e14a","name":"Auth0","namespace":"auth0"},{"id":"97e7b1ae-f88a-4697-849c-ee56ab49bb48","name":"JavaScript","namespace":"javascript"},{"id":"9c40819b-4a8f-468f-9ba5-4b9699f3361f","name":"Charts","namespace":"chartjs"},{"id":"832d6f7a-42c3-43f1-a3ce-9a678272f811","name":"Date","namespace":"dayjs"},{"id":"2bd1c688-31c5-443e-ae25-59aa5b6431fb","name":"REST API","namespace":"restApi"},{"id":"fdf6b667-9515-4086-87ef-6042fc6f20fb","name":"Google Sheets","namespace":"googleSheets"}]};
// eslint-disable-next-line no-undef
window.wwg_cacheVersion = 350;
// eslint-disable-next-line no-undef
window.wwg_pluginsSettings = pluginsSettings;
// eslint-disable-next-line no-undef
window.wwg_disableManifest = false;

const defaultLang = window.wwg_designInfo.langs.find(({ default: isDefault }) => isDefault) || {};

const registerRoute = (page, lang, forcedPath) => {
    const langSlug = !lang.default || lang.isDefaultPath ? `/${lang.lang}` : '';
    let path =
        forcedPath ||
        (page.id === window.wwg_designInfo.homePageId ? '/' : `/${page.paths[lang.lang] || page.paths.default}`);

    //Replace params
    path = path.replace(/{{([\w]+)\|([^/]+)?}}/g, ':$1');

    routes.push({
        path: langSlug + path,
        component: wwPage,
        name: `page-${page.id}-${lang.lang}`,
        meta: {
            pageId: page.id,
            lang,
            isPrivate: !!page.pageUserGroups?.length,
        },
        async beforeEnter(to, from) {
            if (to.name === from.name) return;
            //Set page lang
            wwLib.wwLang.defaultLang = defaultLang.lang;
            wwLib.$store.dispatch('front/setLang', lang.lang);

            //Init plugins
            await initializePlugins();

            //Check if private page
            if (page.pageUserGroups?.length) {
                // cancel navigation if no plugin
                if (!wwLib.wwAuth.plugin) {
                    return false;
                }

                await wwLib.wwAuth.init();

                // Redirect to not sign in page if not logged
                if (!wwLib.wwAuth.getIsAuthenticated()) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthenticatedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }

                //Check roles are required
                if (
                    page.pageUserGroups.length > 1 &&
                    !wwLib.wwAuth.matchUserGroups(page.pageUserGroups.map(({ userGroup }) => userGroup))
                ) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthorizedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }
            }

            try {
                await import(`@/pages/${page.id.split('_')[0]}.js`);
                await wwLib.wwWebsiteData.fetchPage(page.id);

                //Scroll to section or on top after page change
                if (to.hash) {
                    const targetElement = document.getElementById(to.hash.replace('#', ''));
                    if (targetElement) targetElement.scrollIntoView();
                } else {
                    document.body.scrollTop = document.documentElement.scrollTop = 0;
                }

                return;
            } catch (err) {
                wwLib.$store.dispatch('front/showPageLoadProgress', false);

                if (err.redirectUrl) {
                    return { path: err.redirectUrl || '404' };
                } else {
                    //Any other error: go to target page using window.location
                    window.location = to.fullPath;
                }
            }
        },
    });
};

for (const page of window.wwg_designInfo.pages) {
    for (const lang of window.wwg_designInfo.langs) {
        if (!page.langs.includes(lang.lang)) continue;
        registerRoute(page, lang);
    }
}

const page404 = window.wwg_designInfo.pages.find(page => page.paths.default === '404');
if (page404) {
    for (const lang of window.wwg_designInfo.langs) {
        // Create routes /:lang/:pathMatch(.*)* etc for all langs of the 404 page
        if (!page404.langs.includes(lang.lang)) continue;
        registerRoute(
            page404,
            {
                default: false,
                lang: lang.lang,
            },
            '/:pathMatch(.*)*'
        );
    }
    // Create route /:pathMatch(.*)* using default project lang
    registerRoute(page404, { default: true, isDefaultPath: false, lang: defaultLang.lang }, '/:pathMatch(.*)*');
} else {
    routes.push({
        path: '/:pathMatch(.*)*',
        async beforeEnter() {
            window.location.href = '/404';
        },
    });
}

let routerOptions = {};

const isProd =
    !window.location.host.includes(
        // TODO: add staging2 ?
        '-staging.' + (process.env.WW_ENV === 'staging' ? import.meta.env.VITE_APP_PREVIEW_URL : '')
    ) && !window.location.host.includes(import.meta.env.VITE_APP_PREVIEW_URL);

if (isProd && window.wwg_designInfo.baseTag?.href) {
    let baseTag = window.wwg_designInfo.baseTag.href;
    if (!baseTag.startsWith('/')) {
        baseTag = '/' + baseTag;
    }
    if (!baseTag.endsWith('/')) {
        baseTag += '/';
    }

    routerOptions = {
        base: baseTag,
        history: createWebHistory(baseTag),
        routes,
    };
} else {
    routerOptions = {
        history: createWebHistory(),
        routes,
    };
}

router = createRouter({
    ...routerOptions,
    scrollBehavior,
});

//Trigger on page unload
let isFirstNavigation = true;
router.beforeEach(async (to, from) => {
    if (to.name === from.name) return;
    if (!isFirstNavigation) await onPageUnload();
    isFirstNavigation = false;
    wwLib.globalVariables._navigationId++;
    return;
});

//Init page
router.afterEach((to, from, failure) => {
    wwLib.$store.dispatch('front/showPageLoadProgress', false);
    let fromPath = from.path;
    let toPath = to.path;
    if (!fromPath.endsWith('/')) fromPath = fromPath + '/';
    if (!toPath.endsWith('/')) toPath = toPath + '/';
    if (failure || (from.name && toPath === fromPath)) return;
    initializeData(to);
});
/* wwFront:end */

export default router;
