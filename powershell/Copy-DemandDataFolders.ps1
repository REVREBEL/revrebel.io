# Save as: C:\Scripts\Copy-DemandDataFolders.ps1
# Example dry run:
#   pwsh -File "C:\Scripts\Copy-DemandDataFolders.ps1" -MatchString "DemandData 202508" -WhatIf
# Real copy:
#   pwsh -File "C:\Scripts\Copy-DemandDataFolders.ps1" -MatchString "DemandData 202508"

[CmdletBinding(SupportsShouldProcess = $true)]
param(
  [Parameter(Mandatory = $true)]
  [string]$MatchString,

  # SEARCH HERE (Aparium Datastore root)
  [string]$SourceRoot = "C:\Users\admin\OneDrive - Aparium Hotel Group\Demand Reporting - Demand Datastore",

  # COPY TO HERE (REVREBEL intake)
  [string]$DestinationRoot = "C:\Users\admin\OneDrive - REVREBEL\Demand Reporting - Documents\_intake",

  # If a folder with the same name already exists at destination:
  [ValidateSet("Skip","Overwrite","CopyWithSuffix")]
  [string]$OnConflict = "Skip",

  # Match mode: "Name" = only leaf folder name, "FullPath" = anywhere in the path
  [ValidateSet("Name","FullPath")]
  [string]$MatchMode = "Name"
)

# Ensure destination exists
if (-not (Test-Path -LiteralPath $DestinationRoot)) {
  if ($PSCmdlet.ShouldProcess($DestinationRoot, "Create destination folder")) {
    New-Item -ItemType Directory -Path $DestinationRoot -Force | Out-Null
  }
}

Write-Host "Searching under: " -NoNewline; Write-Host $SourceRoot -ForegroundColor Cyan
Write-Host "Match string:   " -NoNewline; Write-Host $MatchString -ForegroundColor Yellow
Write-Host "Destination:    " -NoNewline; Write-Host $DestinationRoot -ForegroundColor Green
Write-Host ""

# Find matching directories, excluding any named "_database"
$allDirs = Get-ChildItem -LiteralPath $SourceRoot -Directory -Recurse -ErrorAction SilentlyContinue |
           Where-Object { $_.Name -ne "_database" }

$matches = if ($MatchMode -eq 'FullPath') {
  $allDirs | Where-Object { $_.FullName -like "*$MatchString*" }
} else {
  $allDirs | Where-Object { $_.Name -like "*$MatchString*" }
}

if (-not $matches) { Write-Warning "No matching folders found."; return }

$Copied = 0; $Skipped = 0; $Overwritten = 0

foreach ($dir in $matches) {
  $target = Join-Path -Path $DestinationRoot -ChildPath $dir.Name

  if (Test-Path -LiteralPath $target) {
    switch ($OnConflict) {
      "Skip" {
        Write-Host "Skip (exists): $($dir.Name)" -ForegroundColor DarkYellow
        $Skipped++; continue
      }
      "Overwrite" {
        if ($PSCmdlet.ShouldProcess($target, "Remove existing before copy")) {
          Remove-Item -LiteralPath $target -Recurse -Force -ErrorAction SilentlyContinue
          $Overwritten++
        } else { continue }
      }
      "CopyWithSuffix" {
        $i = 2
        while (Test-Path -LiteralPath $target) {
          $target = Join-Path $DestinationRoot ($dir.Name + " ($i)")
          $i++
        }
      }
    }
  }

  if ($PSCmdlet.ShouldProcess($dir.FullName, "Copy to $target")) {
    try {
      Copy-Item -LiteralPath $dir.FullName -Destination $target -Recurse -Force -ErrorAction Stop
      Write-Host "Copied: $($dir.FullName)  ->  $target" -ForegroundColor Green
      $Copied++
    } catch {
      Write-Warning "Failed to copy '$($dir.FullName)': $($_.Exception.Message)"
      $Skipped++
    }
  }
}

Write-Host ""
Write-Host "Done. Summary:" -ForegroundColor Cyan
Write-Host ("  Copied      : {0}" -f $Copied)
Write-Host ("  Overwrote   : {0}" -f $Overwritten)
Write-Host ("  Skipped     : {0}" -f $Skipped)
