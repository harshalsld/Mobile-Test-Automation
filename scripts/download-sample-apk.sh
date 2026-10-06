#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
APK_DIR="${ROOT}/apps/sample"
APK_PATH="${APK_DIR}/ApiDemos-debug.apk"
URL="https://github.com/appium/android-apidemos/releases/download/v3.1.0/ApiDemos-debug.apk"

mkdir -p "${APK_DIR}"

if [[ -f "${APK_PATH}" && -s "${APK_PATH}" ]]; then
  echo "Sample APK already present: ${APK_PATH}"
  exit 0
fi

echo "Downloading ApiDemos sample APK..."
curl -fsSL -o "${APK_PATH}" "${URL}"
echo "Saved ${APK_PATH} ($(du -h "${APK_PATH}" | cut -f1))"
