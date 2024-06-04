<?php
namespace Dhtml\CustomPreview;

class File
{
    public function human_filesize(string $bytes, int $decimals = 0): string
    {
        $size = ['B', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        $factor = floor((strlen($bytes) - 1) / 3);

        return sprintf("%.{$decimals}f", (int) $bytes / pow(1024, $factor)).@$size[$factor];
    }
}
