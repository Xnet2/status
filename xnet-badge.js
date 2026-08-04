/*!
 * Xnet Badge — לוגו קטן שמתרחב לחלונית עם קישור לבלוג בעת ריחוף עכבר.
 * הטמעה: להדביק ממש לפני </body> בכל אתר:
 *   <script src="https://xnet2.github.io/status/xnet-badge.js"></script>
 */
(function () {
  var BLOG_URL = "https://xnet2.github.io/";
  var LOGO_URL = "https://raw.githubusercontent.com/Xnet2/GOOGLE-MY/refs/heads/main/image-removebg-preview%20(2).png";

  var style = document.createElement("style");
  style.textContent =
    '.xnet-badge{position:fixed;bottom:18px;left:18px;z-index:999999;' +
    'display:flex;align-items:center;height:44px;width:44px;overflow:hidden;' +
    'direction:rtl;background:#17181d;border:1px solid rgba(255,255,255,.1);' +
    'border-radius:100px;text-decoration:none;box-shadow:0 14px 30px -12px rgba(0,0,0,.45);' +
    'transition:width .28s cubic-bezier(.2,.9,.3,1), box-shadow .2s ease, transform .2s ease;}' +
    '.xnet-badge:hover{width:178px;box-shadow:0 18px 36px -12px rgba(0,0,0,.55);transform:translateY(-2px);}' +
    '.xnet-badge .xnet-logo-wrap{width:44px;height:44px;flex:0 0 44px;' +
    'display:flex;align-items:center;justify-content:center;' +
    'background:#fff;border-radius:50%;}' +
    '.xnet-badge .xnet-logo-wrap img{width:38px;height:38px;object-fit:cover;border-radius:50%;}' +
    '.xnet-badge .xnet-text{white-space:nowrap;opacity:0;flex:1;min-width:0;' +
    'text-align:center;padding:0 10px;font-family:Assistant,system-ui,sans-serif;' +
    'font-size:12.5px;font-weight:700;color:#fff;' +
    'transition:opacity .18s ease .05s;}' +
    '.xnet-badge:hover .xnet-text{opacity:1;}' +
    '.xnet-badge .xnet-text small{display:block;font-weight:500;color:#9a9ca6;font-size:10.5px;margin-top:1px;}' +
    '@media (max-width:480px){.xnet-badge{bottom:12px;left:12px;}}';
  document.head.appendChild(style);

  var badge = document.createElement("a");
  badge.className = "xnet-badge";
  badge.href = BLOG_URL;
  badge.target = "_blank";
  badge.rel = "noopener";
  badge.setAttribute("aria-label", "פותח על ידי Xnet — מעבר לבלוג");
  badge.innerHTML =
    '<span class="xnet-logo-wrap"><img src="' + LOGO_URL + '" alt="Xnet"></span>' +
    '<span class="xnet-text">נבנה ע״י Xnet<small>לחצו למעבר לדף הבית</small></span>';


  function mount() {
    if (!document.body.contains(badge)) {
      document.body.appendChild(badge);
    }
  }
  if (document.body) {
    mount();
  } else {
    document.addEventListener("DOMContentLoaded", mount);
  }
})();
