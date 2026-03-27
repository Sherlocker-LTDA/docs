FROM node:20-alpine
WORKDIR /app
RUN apk add --no-cache nginx
RUN npm install -g mintlify@4.2.426
# Remove the local preview banner injected by mintlify dev
RUN find $(npm root -g)/mintlify -type f -name "*.js" -exec \
    sed -i 's/isLocalPreview\s*=\s*true/isLocalPreview=false/g; s/"isLocal"\s*:\s*true/"isLocal":false/g' {} \; 2>/dev/null || true
COPY . .
COPY nginx.conf /etc/nginx/http.d/default.conf
EXPOSE 3200
# nginx on :3200 proxies to mintlify dev on :3201, rewriting X-Forwarded-Proto
# to http so Next.js does not issue HTTPS redirects behind Cloudflare SSL Flexible
CMD ["sh", "-c", "mintlify dev --port 3201 --host 127.0.0.1 & nginx -g 'daemon off;'"]
