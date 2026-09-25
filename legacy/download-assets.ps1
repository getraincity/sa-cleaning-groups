# ------------------------------------------------------------------
#  SA Cleaning Group - Webflow backup: asset downloader
#  Run ONCE, while the Webflow project still exists:
#     Right-click > "Run with PowerShell"
#     or:  powershell -ExecutionPolicy Bypass -File .\download-assets.ps1
#
#  What it does:
#   1. Downloads every image / script the pages + CSS use (Webflow CDN)
#      into  site\assets\  and rewrites the HTML/CSS to point there,
#      so the site opens fully offline (double-click site\index.html).
#   2. Downloads the full original Webflow asset library (all uploaded
#      files, full resolution) into  asset-library\
# ------------------------------------------------------------------
$ErrorActionPreference = 'Stop'
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
$root   = Split-Path -Parent $MyInvocation.MyCommand.Path
$site   = Join-Path $root 'site'
$assets = Join-Path $site 'assets'
$lib    = Join-Path $root 'asset-library'
New-Item -ItemType Directory -Force -Path $assets, $lib | Out-Null
$utf8 = New-Object System.Text.UTF8Encoding($false)

function Get-LocalName([string]$url) {
    $u = $url.Split('?')[0]
    $name = [System.Uri]::UnescapeDataString($u.Substring($u.LastIndexOf('/') + 1))
    return ($name -replace '[<>:"/\\|?*]', '_')
}

function Save-Url([string]$url, [string]$dest) {
    if (Test-Path $dest) { return $true }
    try {
        Invoke-WebRequest -Uri $url -OutFile $dest -UseBasicParsing
        return $true
    } catch {
        Write-Warning "FAILED: $url  ($($_.Exception.Message))"
        return $false
    }
}

# ---------- 1. Localise everything the site references ----------
$pattern = 'https://(cdn\.prod\.website-files\.com|d3e54v103j8qbb\.cloudfront\.net)/[^"''\s]+'
$files = Get-ChildItem -Path $site -Recurse -Include *.html, *.css
$urls = @{}
foreach ($f in $files) {
    $text = [IO.File]::ReadAllText($f.FullName, $utf8)
    foreach ($m in [regex]::Matches($text, $pattern)) { $urls[$m.Value] = $true }
}
Write-Host "Found $($urls.Count) referenced files. Downloading..." -ForegroundColor Cyan
$map = @{}
foreach ($url in $urls.Keys) {
    $name = Get-LocalName $url
    if (Save-Url $url (Join-Path $assets $name)) { $map[$url] = $name }
}

foreach ($f in $files) {
    $text = [IO.File]::ReadAllText($f.FullName, $utf8)
    $prefix = if ($f.Extension -eq '.css') { '../assets/' } else { 'assets/' }
    # longest URLs first so srcset variants are not partially replaced
    foreach ($url in ($map.Keys | Sort-Object Length -Descending)) {
        $text = $text.Replace($url, $prefix + $map[$url])
    }
    # local jQuery must not carry SRI/CORS attributes (breaks on file://)
    $text = $text.Replace(' integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"', '')
    [IO.File]::WriteAllText($f.FullName, $text, $utf8)
}
Write-Host "Site localised -> site\assets ($($map.Count) files)" -ForegroundColor Green

# ---------- 2. Full original asset library ----------
$library = @(
 '66eb0907068dd7c426c10d58_rs%3Dw_984%2Ch_984%20(3).webp',
 '66eb0907b23523ce93b84965_rs%3Dw_984%2Ch_984%20(2).webp',
 '66eb090785c712f02b2c3b75_rs%3Dw_984%2Ch_984%20(1).webp',
 '66eb0907bedc0f7b673645fd_rs%3Dw_984%2Ch_984.webp',
 '66eb0907442209acc664a249_rs%3Dw_1160%2Ch_1547.webp',
 '66eb09074409fb8feda19bd9_rs%3Dw_984%2Ch_649.webp',
 '66ead567d491dff10697cc87_IMG-20240821-WA0042.jpg',
 '66ead566723cca3462ecde3a_WhatsApp%20Image%202024-07-29%20at%2021.37.15.jpeg',
 '66ead56668d1b0b8e4a4db94_IMG-20240821-WA0034.jpg',
 '66ead566059005a6e9217600_WhatsApp%20Image%202024-07-29%20at%2021.37.01%20(1).jpeg',
 '66ead5665ae1829adb74180a_IMG-20240821-WA0035.jpg',
 '66ead557d2a4ec5c7b488927_IMG-20240821-WA0043.jpg',
 '66ead556925d75303e48c5ad_WhatsApp%20Image%202024-07-29%20at%2021.37.01.jpeg',
 '66ead5566d4ef6a930535d36_WhatsApp%20Image%202024-07-29%20at%2021.37.01%20(2).jpeg',
 '66ead555c43f63a11f15f5ad_IMG-20240821-WA0041.jpg',
 '66e6c239f029eb04fb02be24_phone-modern-svgrepo-com.svg',
 '66e6c1b92634b32926ce052f_email-1573-svgrepo-com.svg',
 '66e6c1a6848a846c188af331_email-1-svgrepo-com.svg',
 '66e6be7879d272800df268e5_stephen-phillips-hostreviews-co-uk-3Mhgvrk4tjM-unsplash%20(1).jpg',
 '66e20334e3a4ee062b3434f4_Untitled%20design%20(80).png',
 '66e203064832548321886277_Untitled%20(40%20x%2040%20px)%20(3).png',
 '66e200a6394ddc494266a39e_Whyte%20plumbing.png',
 '66e200a6394ddc494266a38d_5.png',
 '66e200a6394ddc494266a366_3.png',
 '66e200a5394ddc494266a340_2.png',
 '66e200a5394ddc494266a30b_1.png',
 '66e1fa7eb6b3f0dd057e8e10_Group%20162769.png',
 '66e1f91fb6b3f0dd057d63fa_Untitled%20design%20(5).jpg',
 '66e1f853d7522a20b8ef3532_Benefits-of-Car-Interior-Detailing-1140x445.jpg',
 '66e1f4ccae55f07a83acbf47_IMG-20240821-WA0100.jpg',
 '66e1ef22656dfe812b264534_WhatsApp%20Image%202024-07-29%20at%2021.35.12.jpeg',
 '66e1e85189013c54847100da_%E2%80%9C.svg',
 '66e1e7d04b885ba954f461ac_Stars.png',
 '66e1e77309bdf7be60855eed_Image.png',
 '66e1e25949562ee89eb87ced_Background%20(1).png',
 '66e1d7e05cd3dac09b2320d1_S%26A%20Cleaning%20Group.png',
 '66e1a3d45697a2a26b07b16e_image.jpg',
 '66e1a33cd336f8338dc32c37_pet.svg',
 '66e1a31fac8a43aa39d5be9b_group.svg',
 '66e1a23354f582f6758e3cb4_leaf.svg',
 '66e19e2154f582f6758a2fa6_checked%20(2).svg',
 '66e19b5fd546081a57b50bcc_Group%20162769.png',
 '66e06631bcfab719a9332454_instagram.svg',
 '66e06631abc556f2ac04fb3d_twitter%20(2).svg',
 '66e06631f4baba95a1d10ec8_linkedin%20(2).svg',
 '66e063ca80d17b8adc466702_Background.png',
 '66e061c95d9115d20dbf276a_item.svg',
 '66e06146e480620720e9323d_team.png',
 '66e060b6f45a592cbbd65916_Vector%20(1).svg',
 '66e05e522dd3486e3cb4f38b_Rectangle%201069.png',
 '66e05b0e39182435b0ae396a_image_02%201.png',
 '66e0595be5e47e8f8338c68f_sacleaning-logo.svg'
)
$base = 'https://cdn.prod.website-files.com/66db22c5d9cc6c931e7f70bb/'
$ok = 0
foreach ($file in $library) {
    $url = $base + $file
    if (Save-Url $url (Join-Path $lib (Get-LocalName $url))) { $ok++ }
}
Write-Host "Asset library: $ok / $($library.Count) originals saved -> asset-library\" -ForegroundColor Green
Write-Host "Done. Open site\index.html to view the site offline." -ForegroundColor Cyan
Read-Host "Press Enter to close"
