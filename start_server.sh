#!/usr/bin/env bash
# Khởi động máy chủ web local cho ứng dụng
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"
echo "🚀 Đang khởi động máy chủ tại http://localhost:3000..."
python3 -m http.server 3000 || python -m http.server 3000
