<?php
namespace Dhtml\COMPOSER\Helpers;

use Illuminate\View\Factory;

class ViewRenderer
{
    protected $viewFactory;

    public function __construct(Factory $viewFactory)
    {
        $this->viewFactory = $viewFactory;
    }

    public function render(string $view, array $data = []): string
    {
        return $this->viewFactory->make($view, $data)->render();
    }
}
