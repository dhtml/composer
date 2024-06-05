<?php

use Dhtml\COMPOSER\ExtendServiceProvider;
use Flarum\Extend;
use Dhtml\COMPOSER\Controllers\PreviewController;

return [
    (new Extend\Frontend('forum'))
        ->css(__DIR__.'/resources/less/forum.less')
        ->js(__DIR__.'/js/dist/forum.js'),

    (new Extend\Routes('forum'))
        ->get('/preview', 'composer.preview', PreviewController::class),

    (new Extend\ServiceProvider())
        ->register(ExtendServiceProvider::class),

    (new Extend\View())
        ->namespace('dhtml-composer', __DIR__.'/resources/views'),
];
