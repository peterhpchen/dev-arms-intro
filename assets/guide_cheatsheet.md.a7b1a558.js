import{_ as c,c as i,b as e,d as l,e as s,a as t,o as d,r as n}from"./app.4eb2f6eb.js";const O=JSON.parse('{"title":"全表","description":"","frontmatter":{},"headers":[{"level":2,"title":"桌面","slug":"桌面","link":"#桌面","children":[{"level":3,"title":"Rectangle","slug":"rectangle","link":"#rectangle","children":[]},{"level":3,"title":"kitty","slug":"kitty","link":"#kitty","children":[]}]},{"level":2,"title":"終端","slug":"終端","link":"#終端","children":[{"level":3,"title":"Homebrew","slug":"homebrew","link":"#homebrew","children":[]},{"level":3,"title":"mas-cli","slug":"mas-cli","link":"#mas-cli","children":[]},{"level":3,"title":"docker","slug":"docker","link":"#docker","children":[]},{"level":3,"title":"tmux","slug":"tmux","link":"#tmux","children":[]},{"level":3,"title":"BAT","slug":"bat","link":"#bat","children":[]},{"level":3,"title":"exa","slug":"exa","link":"#exa","children":[]},{"level":3,"title":"man","slug":"man","link":"#man","children":[]},{"level":3,"title":"curl","slug":"curl","link":"#curl","children":[]},{"level":3,"title":"SDKMAN","slug":"sdkman","link":"#sdkman","children":[]},{"level":3,"title":"pyenv","slug":"pyenv","link":"#pyenv","children":[]},{"level":3,"title":"ssh","slug":"ssh","link":"#ssh","children":[]},{"level":3,"title":"passwd","slug":"passwd","link":"#passwd","children":[]}]},{"level":2,"title":"編輯器","slug":"編輯器","link":"#編輯器","children":[{"level":3,"title":"Neovim","slug":"neovim","link":"#neovim","children":[]}]}],"relativePath":"guide/cheatsheet.md"}'),r={name:"guide/cheatsheet.md"},p=e("h1",{id:"全表",tabindex:"-1"},[l("全表 "),e("a",{class:"header-anchor",href:"#全表","aria-hidden":"true"},"#")],-1),h=e("h2",{id:"桌面",tabindex:"-1"},[l("桌面 "),e("a",{class:"header-anchor",href:"#桌面","aria-hidden":"true"},"#")],-1),u={id:"rectangle",tabindex:"-1"},m=e("a",{class:"header-anchor",href:"#rectangle","aria-hidden":"true"},"#",-1),g=t('<div class="tip custom-block"><p class="custom-block-title">提示</p><p>指令會作用於當前的視窗上。</p></div><ul><li><code>⌃ ⌥ ▲</code> : 將視窗配置於螢幕<strong>上</strong>方 <strong>1/2</strong> 。</li><li><code>⌃ ⌥ ▼</code> : 將視窗配置於螢幕<strong>下</strong>方 <strong>1/2</strong> 。</li><li><code>⌃ ⌥ ◀︎</code> : 將視窗配置於螢幕<strong>左</strong>方 <strong>1/2</strong> ，重複此指令，視窗會跳至左方鄰近螢幕的右方 1/2 ，如果當前為第一台螢幕，則跳至最後一台螢幕。</li><li><code>⌃ ⌥ ▶︎</code> : 將視窗配置於螢幕<strong>右</strong>方 <strong>1/2</strong> ，重複此指令，視窗會跳至右方鄰近螢幕的左方 1/2 ，如果當前為最後一台螢幕，則跳至第一台螢幕。</li><li><code>⌃ ⌥ D</code> : 將視窗配置於螢幕第一個 <strong>1/3</strong> ，重複此指令，視窗會跳至下個 1/3 。</li><li><code>⌃ ⌥ E</code> : 將視窗配置於螢幕第一個 <strong>2/3</strong> ，重複此指令，視窗會跳至下個 2/3 。</li><li><code>⌃ ⌥ ⏎</code> : 將視窗最大化。</li></ul><h3 id="kitty" tabindex="-1">kitty <a class="header-anchor" href="#kitty" aria-hidden="true">#</a></h3>',3),_=e("ul",null,[e("li",null,[e("code",null,"⌘ ="),l(" ：放大字體。")]),e("li",null,[e("code",null,"⌘ -"),l(" ：縮小字體。")]),e("li",null,[e("code",null,"⌘ 0"),l(" ：重設字體。")])],-1),v=e("h2",{id:"終端",tabindex:"-1"},[l("終端 "),e("a",{class:"header-anchor",href:"#終端","aria-hidden":"true"},"#")],-1),y={id:"homebrew",tabindex:"-1"},k=e("a",{class:"header-anchor",href:"#homebrew","aria-hidden":"true"},"#",-1),b=t("<ul><li><code>brew bundle --global --quit</code> ： 依照 <code>~/.Brewfile</code> 的內容安裝套件，並且減少輸出資訊。</li><li><code>brew bundle --file &lt;file&gt;</code> ： 依照 <code>&lt;file&gt;</code> 的內容安裝套件。</li><li><code>brew search &lt;text&gt;|/&lt;regex&gt;/</code> ：以關鍵字或正則表達式搜尋 formula 或 cask 。</li><li><code>brew info [&lt;formula&gt;|&lt;cask&gt; ...]</code> ：列出 formula 或 cask 的資訊。</li><li><code>brew install &lt;formula&gt;|&lt;cask&gt;</code> ：安裝指定的 formula 或 cask 。</li><li><code>brew upgrade [&lt;formula&gt;|&lt;cask&gt; ...]</code> ：更新指定的 formula 或 cask kegs 。如果沒有指定 formula 或 cask ，則更新全部的 formulae 。</li><li><code>brew update</code> ：更新 Homebrew 。</li></ul>",1),x={id:"mas-cli",tabindex:"-1"},f=e("a",{class:"header-anchor",href:"#mas-cli","aria-hidden":"true"},"#",-1),C=e("ul",null,[e("li",null,[e("code",null,"mas search <string>"),l(" ：以關鍵字搜尋應用程式。")]),e("li",null,[e("code",null,"mas info <integer>"),l(" ：列出特定 ID 的應用程式資訊。")]),e("li",null,[e("code",null,"mas install <integer>"),l(" ：安裝特定 ID 的應用程式。")])],-1),A=e("h3",{id:"docker",tabindex:"-1"},[l("docker "),e("a",{class:"header-anchor",href:"#docker","aria-hidden":"true"},"#")],-1),w=e("ul",null,[e("li",null,[e("code",null,"docker compose up"),l(" ：依照當前目錄下的 "),e("code",null,"docker-compose.yml"),l(" 建立 container 。")]),e("li",null,[e("code",null,"docker compose down -v"),l(" ：關閉當前目錄下的 "),e("code",null,"docker-compose.yml"),l(" 所以啟動的 container ，並且刪除 volumes 。")])],-1),D=e("h3",{id:"tmux",tabindex:"-1"},[l("tmux "),e("a",{class:"header-anchor",href:"#tmux","aria-hidden":"true"},"#")],-1),T=t(`<details class="details custom-block"><summary>Configs</summary><details class="details custom-block"><summary>tmux.conf</summary><div class="language-conf"><button title="Copy Code" class="copy"></button><span class="lang">conf</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># List of plugins</span></span>
<span class="line"><span style="color:#A6ACCD;">set -g @plugin &#39;tmux-plugins/tpm&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">set -g @plugin &quot;arcticicestudio/nord-tmux&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">set -g mode-keys vi</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># Initialize TMUX plugin manager (keep this line at the very bottom of tmux.conf)</span></span>
<span class="line"><span style="color:#A6ACCD;">run &#39;~/.config/tmux/plugins/tpm/tpm&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></details></details><ul><li><code>tmux ls</code> ：列出所有 server 中的 sessions 。</li><li><code>tmux attach -t &lt;target-session&gt;</code> ：進入指定的 session 中。</li><li><code>tmux kill-server</code> ：結束 server 並刪除所有 sessions 。</li></ul><div class="tip custom-block"><p class="custom-block-title">提示</p><p>下列指令作用於 tmux 內。</p></div><ul><li><code>&lt;prefix&gt; c</code> ：新增 window 。</li><li><code>&lt;prefix&gt; n</code> ：移動至下一個 window 。</li><li><code>&lt;prefix&gt; p</code> ：移動至上一個 window 。</li><li><code>&lt;prefix&gt; s</code> ：開啟 sessions 選擇功能。</li><li><code>&lt;prefix&gt; d</code> ： detach 目前的 client 。</li><li><code>&lt;prefix&gt; [</code> ：進入 copy 模式，藉以複製字串或觀看歷史紀錄。</li><li><code>&lt;prefix&gt; %</code> ：將此 pane 切割為兩個 panes ，左跟右。</li><li><code>&lt;prefix&gt; &quot;</code> ：將此 pane 切割為兩個 panes ，上跟下。</li></ul><h3 id="bat" tabindex="-1">BAT <a class="header-anchor" href="#bat" aria-hidden="true">#</a></h3>`,5),S=t(`<details class="details custom-block"><summary>Configs</summary><details class="details custom-block"><summary>zshenv.zsh</summary><div class="language-zsh"><button title="Copy Code" class="copy"></button><span class="lang">zsh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">#!/bin/zsh</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">export</span><span style="color:#A6ACCD;"> BAT_CONFIG_PATH</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">$XDG_CONFIG_HOME</span><span style="color:#C3E88D;">/bat/bat.conf</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre></div></details><details class="details custom-block"><summary>zshrc.zsh</summary><div class="language-zsh"><button title="Copy Code" class="copy"></button><span class="lang">zsh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">#!/bin/zsh</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">alias</span><span style="color:#A6ACCD;"> cat</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">bat</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre></div></details></details><ul><li><code>bat [&lt;FILE&gt;]</code> ：顯示檔案的內容。</li></ul><h3 id="exa" tabindex="-1">exa <a class="header-anchor" href="#exa" aria-hidden="true">#</a></h3><details class="details custom-block"><summary>Configs</summary><details class="details custom-block"><summary>zshrc.zsh</summary><div class="language-zsh"><button title="Copy Code" class="copy"></button><span class="lang">zsh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">#!/bin/zsh</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">alias</span><span style="color:#A6ACCD;"> ls</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">exa --icons</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre></div></details></details><ul><li><code>exa</code> ：列出當前目錄下的檔案。</li><li><code>exa -al</code> ：列出當前目錄下包括隱藏與 dot 的所有檔案及其 meta data 。</li><li><code>exa -alT -L 2</code> ：以樹狀結構輸出當前與下層目錄包括隱藏與 dot 的所有檔案及其 meta data 。</li></ul><h3 id="man" tabindex="-1">man <a class="header-anchor" href="#man" aria-hidden="true">#</a></h3><ul><li><code>man [&lt;mansect&gt;] &lt;page&gt;</code> ：開啟 <code>&lt;page&gt;</code> 文件的 <code>&lt;mansect&gt;</code> 章節，如果沒指定 <code>&lt;mansect&gt;</code> ，則開啟第一個匹配的 <code>&lt;page&gt;</code> 文件。</li><li><code>man -aw &lt;page&gt;</code> ：列出所有 <code>&lt;page&gt;</code> 的文件位置。</li><li><code>man -f &lt;keyword&gt;</code> ：以完整單詞的正規表達式搜尋文件標題及描述。</li><li><code>man -k &lt;keyword&gt;</code> ：以部分字元的正規表達式搜尋文件標題及描述。</li></ul><p><strong>less pager</strong></p><ul><li><code>q</code> ：離開。</li><li><code>h</code> ：開啟幫助文件。</li><li><code>j</code> ：向下一行。</li><li><code>k</code> ：向上一行。</li><li><code>u</code> ：向上半頁。</li><li><code>d</code> ：向下半頁。</li><li><code>g</code> ：跳至最上方。</li><li><code>G</code> ：跳至最下方。</li><li><code>/&lt;pattern&gt;</code> ：搜尋 <code>&lt;pattern&gt;</code> 。</li><li><code>n</code> ：向下一個搜尋結果。</li><li><code>N</code> ：向上一個搜尋結果。</li></ul><h3 id="curl" tabindex="-1">curl <a class="header-anchor" href="#curl" aria-hidden="true">#</a></h3><ul><li><code>curl &lt;url&gt; &gt; &lt;file&gt;</code> ：將 <code>&lt;url&gt;</code> 的內容輸出至 <code>&lt;file&gt;</code> 檔案中。</li></ul><h3 id="sdkman" tabindex="-1">SDKMAN <a class="header-anchor" href="#sdkman" aria-hidden="true">#</a></h3>`,12),I=t('<ul><li><code>sdk env</code> ：依照當前目錄的 <code>.sdkmanrc</code> 內容切換至指定的環境。</li></ul><h3 id="pyenv" tabindex="-1">pyenv <a class="header-anchor" href="#pyenv" aria-hidden="true">#</a></h3><ul><li><code>pyenv install</code> ：依照當前目錄下的 <code>.python-version</code> 設定安裝對應的版本。</li><li><code>pyenv virtualenv &lt;virtualenv-name&gt;</code> ：用當前的版本建立 <code>&lt;virtualenv-name&gt;</code> 名稱的 virtual env 。</li><li><code>pyenv activate &lt;virtualenv-name&gt;</code> ：啟動 <code>&lt;virtualenv-name&gt;</code> 。</li><li><code>pyenv deactivate</code> ：關閉當前執行的 virtual env 。</li></ul><h3 id="ssh" tabindex="-1">ssh <a class="header-anchor" href="#ssh" aria-hidden="true">#</a></h3><ul><li><code>ssh &lt;destination&gt;</code> ：使用預設的設定進入 <code>&lt;destination&gt;</code> 中。</li></ul><h3 id="passwd" tabindex="-1">passwd <a class="header-anchor" href="#passwd" aria-hidden="true">#</a></h3><ul><li><code>passwd</code> ：更新當前 User 的密碼。</li></ul><h2 id="編輯器" tabindex="-1">編輯器 <a class="header-anchor" href="#編輯器" aria-hidden="true">#</a></h2><h3 id="neovim" tabindex="-1">Neovim <a class="header-anchor" href="#neovim" aria-hidden="true">#</a></h3>',9),F=t("<ul><li><code>j</code> ：向下移動。</li><li><code>k</code> ：向上移動。</li><li><code>h</code> ：向左移動。</li><li><code>l</code> ：向右移動。</li><li><code>i</code> ：進入 Insert 模式。</li><li><code>o</code> ：向下插入新行，並切換至 Insert 模式。</li><li><code>p</code> ：貼上複製的內容。</li><li><code>dd</code> ：刪除整行。</li><li><code>yy</code> ：複製整行。</li><li><code>x</code> ：刪除字元。</li></ul><p><strong>在 Insert 模式下</strong></p><ul><li><code>ctrl r</code> ：開啟剪貼簿。</li></ul>",3);function E(N,z,V,P,q,R){const o=n("Badge"),a=n("Cover");return d(),i("div",null,[p,h,e("h3",u,[l("Rectangle "),s(o,{text:"macOS"}),l(),m]),s(a,{src:"https://raw.githubusercontent.com/rxhanson/Rectangle/master/Rectangle/Assets.xcassets/AppIcon.appiconset/mac512pts2x.png"}),g,s(a,{src:"https://raw.githubusercontent.com/kovidgoyal/kitty/master/logo/kitty.svg"}),_,v,e("h3",y,[l("Homebrew "),s(o,{text:"macOS"}),l(),k]),s(a,{src:"https://raw.githubusercontent.com/Homebrew/brew.sh/master/assets/img/homebrew.svg"}),b,e("h3",x,[l("mas-cli "),s(o,{text:"macOS"}),l(),f]),s(a,{src:"https://raw.githubusercontent.com/mas-cli/mas/main/mas-cli.png"}),C,A,s(a,{src:"https://www.docker.com/wp-content/uploads/2022/03/horizontal-logo-monochromatic-white.png"}),w,D,s(a,{src:"https://raw.githubusercontent.com/tmux/tmux/master/logo/tmux-logo.svg"}),T,s(a,{src:"https://raw.githubusercontent.com/sharkdp/bat/master/doc/logo-header.svg"}),S,s(a,{src:"https://raw.githubusercontent.com/sdkman/sdkman-website/master/public/img/sdk-man-small-pattern.svg"}),I,s(a,{src:"https://raw.githubusercontent.com/neovim/neovim/master/cmake.packaging/neovim.svg"}),F])}const H=c(r,[["render",E]]);export{O as __pageData,H as default};