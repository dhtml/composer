<?php
namespace Dhtml\COMPOSER;

use Dhtml\COMPOSER\Controllers\PreviewController;
use Flarum\Extend;

return [
    (new Extend\Frontend('forum'))
        ->css(__DIR__.'/resources/less/forum.less')
        ->js(__DIR__.'/js/dist/forum.js')
        ->route('/preview-composer', 'composer.preview-composer', PreviewController::class),

    (new Extend\View())
         ->namespace('dhtml-composer', __DIR__.'/resources/views'),
];
