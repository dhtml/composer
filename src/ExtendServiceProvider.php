<?php

namespace Dhtml\COMPOSER;

use Illuminate\Support\ServiceProvider;
use Dhtml\Composer\Helpers\ViewRenderer;
use Illuminate\View\Factory;

class ExtendServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->singleton(ViewRenderer::class, function ($app) {
            return new ViewRenderer($app->make(Factory::class));
        });
    }

    public function boot()
    {
        // Any boot logic if necessary
    }
}
