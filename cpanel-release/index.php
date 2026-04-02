<?php
$origin = 'https://34motokuryeistanbul.vercel.app';
$requestUri = $_SERVER['REQUEST_URI'] ?? '/';
$targetUrl = $origin . $requestUri;
$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';

$proxyHeaders = [];
foreach (['HTTP_ACCEPT', 'HTTP_ACCEPT_LANGUAGE', 'HTTP_USER_AGENT'] as $headerKey) {
    if (!empty($_SERVER[$headerKey])) {
        $name = str_replace(' ', '-', ucwords(strtolower(str_replace('_', ' ', substr($headerKey, 5)))));
        $proxyHeaders[] = $name . ': ' . $_SERVER[$headerKey];
    }
}

$body = file_get_contents('php://input');
$statusCode = 502;
$contentType = 'text/plain; charset=utf-8';
$responseBody = 'Upstream request failed.';

if (function_exists('curl_init')) {
    $headerLines = [];
    $ch = curl_init($targetUrl);
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, $method);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HEADER, false);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, true);
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 2);
    curl_setopt($ch, CURLOPT_TIMEOUT, 60);
    if ($method === 'HEAD') {
        curl_setopt($ch, CURLOPT_NOBODY, true);
    } elseif ($body !== false && $body !== '') {
        curl_setopt($ch, CURLOPT_POSTFIELDS, $body);
    }
    if (!empty($proxyHeaders)) {
        curl_setopt($ch, CURLOPT_HTTPHEADER, $proxyHeaders);
    }
    curl_setopt($ch, CURLOPT_HEADERFUNCTION, static function ($curl, $header) use (&$headerLines) {
        $length = strlen($header);
        $trimmed = trim($header);
        if ($trimmed !== '') {
            $headerLines[] = $trimmed;
        }
        return $length;
    });

    $result = curl_exec($ch);
    $curlError = curl_error($ch);
    $statusCode = (int) curl_getinfo($ch, CURLINFO_RESPONSE_CODE);
    $detectedContentType = curl_getinfo($ch, CURLINFO_CONTENT_TYPE);
    curl_close($ch);

    if ($result !== false || $method === 'HEAD') {
        $responseBody = $method === 'HEAD' ? '' : (string) $result;
        if (!empty($detectedContentType)) {
            $contentType = $detectedContentType;
        }
        foreach ($headerLines as $line) {
            if (stripos($line, 'content-type:') === 0) {
                $contentType = trim(substr($line, strlen('content-type:')));
                break;
            }
        }
    } elseif ($curlError !== '') {
        $responseBody = $curlError;
    }
} else {
    $context = stream_context_create([
        'http' => [
            'method' => $method,
            'header' => implode("\r\n", $proxyHeaders),
            'content' => ($body !== false ? $body : ''),
            'ignore_errors' => true,
            'timeout' => 60
        ]
    ]);
    $result = @file_get_contents($targetUrl, false, $context);
    if ($result !== false || $method === 'HEAD') {
        $responseBody = $method === 'HEAD' ? '' : (string) $result;
        if (!empty($http_response_header)) {
            foreach ($http_response_header as $line) {
                if (preg_match('#HTTP/\S+\s+(\d{3})#', $line, $matches)) {
                    $statusCode = (int) $matches[1];
                }
                if (stripos($line, 'Content-Type:') === 0) {
                    $contentType = trim(substr($line, strlen('Content-Type:')));
                }
            }
        }
    }
}

http_response_code($statusCode > 0 ? $statusCode : 502);
header('Content-Type: ' . $contentType);
echo $responseBody;
