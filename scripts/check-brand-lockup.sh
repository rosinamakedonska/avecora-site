#!/usr/bin/env bash
set -euo pipefail

cd ~/workspace

missing=0

while IFS= read -r -d '' f; do
  if grep -qE 'landing-header|landing-wordmark|<BrandLockup className="mb-7" />' "$f"; then
    continue
  fi

  if grep -q '← Back' "$f"; then
    echo "MISSING BRAND: $f"
    missing=1
  fi
done < <(find artifacts/acora/src/pages -maxdepth 1 -name '*.tsx' -print0)

exit "$missing"
