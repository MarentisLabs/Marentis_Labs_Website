source "https://rubygems.org"

# ── Jekyll ─────────────────────────────────────────────────────────────────
# Use Jekyll directly rather than the github-pages meta-gem.
# github-pages locks you to old dependency versions that conflict with Ruby 3.4.
# GitHub Actions uses its own environment — this Gemfile is for local preview only.
gem "jekyll", "~> 3.9"

# ── Plugins ────────────────────────────────────────────────────────────────
group :jekyll_plugins do
  gem "jekyll-seo-tag"
  gem "jekyll-sitemap"
  gem "jekyll-feed"
end

# ── Liquid fix ─────────────────────────────────────────────────────────────
# Liquid 4.0.3 calls Object#tainted? which was removed in Ruby 3.2.
# 4.0.4 patches this. Must be pinned explicitly.
gem "liquid", ">= 4.0.4"

# ── Local server ───────────────────────────────────────────────────────────
# webrick was removed from Ruby stdlib in 3.0 — Jekyll needs it to serve locally.
gem "webrick"

# ── Ruby 3.4 stdlib gems ───────────────────────────────────────────────────
# These were removed from Ruby's default bundle in 3.4 but Jekyll still needs them.
gem "csv"
gem "base64"
gem "bigdecimal"
gem "logger"
gem "kramdown-parser-gfm"

# ── Windows compatibility ──────────────────────────────────────────────────
platforms :mingw, :x64_mingw, :mswin do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end
