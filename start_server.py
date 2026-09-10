import http.server
import socketserver
import webbrowser
import os

PORT = 3044

# 更改当前工作目录到脚本所在目录
os.chdir(os.path.dirname(os.path.abspath(__file__)))

Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"服务器运行在 http://localhost:{PORT}")
    print("按 Ctrl+C 停止服务器")

    # 自动打开浏览器
    webbrowser.open(f'http://localhost:{PORT}')

    httpd.serve_forever()