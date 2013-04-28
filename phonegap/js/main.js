/*global require FastClick*/
 
require(['app', 
    'fastclick', 
    'tweenmax', 
    'three',
    'raf',
    'hyphenate',
    'signals',
    'balance',
    'iscroll',
    'events/app-event',
    'events/user-event',
    'views/main-view',
    'views/intro-view',
    'views/page-thumb-scroll-view',
    'views/page-thumb',
    'views/toc-view',
    'views/toc-view-button',
    'views/page-container-view',
    'views/page-view',
    'views/article-container-view',
    'views/article-cover-view',
    'views/components/transform-element',
    'views/components/filter-element',
    'views/components/map-element',
    'text!views/pages/article1/cover.html',
    'text!views/pages/article1/page1.html',
    'text!views/pages/article1/page2.html',
    'text!views/pages/article1/page3.html',
    'text!views/pages/article1/page4.html',
    'text!views/pages/article1/page5.html',
    'text!views/pages/article1/page6.html',
    'text!views/pages/article1/page7.html',
    'text!views/pages/article1/page8.html',
    'text!views/pages/article1/page9.html',
    'text!views/pages/article1/page10.html',
    'text!views/pages/article1/page11.html',
    'text!views/pages/article1/page12.html',
    'text!views/pages/article1/content.html',
    'controllers/controller',
    'models/model'], function (App) {
	
    FastClick.attach(document.body);
    App.init();
});