<?php

namespace Dhtml\COMPOSER\Controllers;

use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface;
use Laminas\Diactoros\Response\HtmlResponse;

class PreviewController
{
    public function handle(Request $request): ResponseInterface
    {
        $html = '<html><body><h1>Hello World</h1></body></html>';
        return new HtmlResponse($html);
    }
}
