#!/usr/bin/env bash
set -euo pipefail

echo "=== iOS simulators (available) ==="
xcrun simctl list devices available 2>/dev/null || echo "xcrun not available (Xcode required for iOS)"

echo ""
echo "=== iOS device types ==="
xcrun simctl list devicetypes 2>/dev/null | head -n 40 || true

echo ""
echo "=== Android AVDs ==="
if command -v emulator >/dev/null 2>&1; then
  emulator -list-avds
elif [[ -n "${ANDROID_HOME:-}" && -x "${ANDROID_HOME}/emulator/emulator" ]]; then
  "${ANDROID_HOME}/emulator/emulator" -list-avds
elif [[ -n "${ANDROID_SDK_ROOT:-}" && -x "${ANDROID_SDK_ROOT}/emulator/emulator" ]]; then
  "${ANDROID_SDK_ROOT}/emulator/emulator" -list-avds
else
  echo "emulator not found; set ANDROID_HOME or add SDK emulator to PATH"
fi

echo ""
echo "=== adb devices ==="
if command -v adb >/dev/null 2>&1; then
  adb devices
else
  echo "adb not found"
fi
