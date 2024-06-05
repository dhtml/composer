<?php

namespace Dhtml\COMPOSER\Controllers;

use Dhtml\COMPOSER\Helpers\ViewRenderer;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface;
use Laminas\Diactoros\Response\HtmlResponse;
use Psr\Http\Server\RequestHandlerInterface;
use Illuminate\Contracts\View\Factory;

class PreviewController implements RequestHandlerInterface
{
    protected $viewRenderer;

    /**
     * @var Factory
     */
    protected $view;

    public function __construct(ViewRenderer $viewRenderer, Factory $view)
    {
        $this->viewRenderer = $viewRenderer;
        $this->view = $view;
    }

    public function handle(Request $request): Response
    {
        $title = 'Hello, world!';
        $content = 'This is the content of the page.';

        $html = $this->view->make('dhtml-composer::content.preview',compact('title', 'content'))->render();

        //$html = $this->viewRenderer->render('dhtml-composer::content.preview', compact('title', 'content'));

        return new HtmlResponse($html);
    }

    public function process(Request $request, RequestHandlerInterface $handler): Response
    {
        return $this->handle($request);
    }

    public function handle_old(Request $request): ResponseInterface
    {
        $html = '<html><body><h1>Hello World</h1></body></html>';
        return new HtmlResponse($html);
    }
}
