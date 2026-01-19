<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2685.3">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica; min-height: 14.0px}
  </style>
</head>
<body>
<p class="p1">// Scroll to Top Button</p>
<p class="p1">const scrollBtn = document.getElementById("scrollTopBtn");</p>
<p class="p2"><br></p>
<p class="p1">window.addEventListener("scroll", () =&gt; {</p>
<p class="p1"><span class="Apple-converted-space">  </span>if (window.scrollY &gt; 300) {</p>
<p class="p1"><span class="Apple-converted-space">    </span>scrollBtn.style.display = "block";</p>
<p class="p1"><span class="Apple-converted-space">  </span>} else {</p>
<p class="p1"><span class="Apple-converted-space">    </span>scrollBtn.style.display = "none";</p>
<p class="p1"><span class="Apple-converted-space">  </span>}</p>
<p class="p1">});</p>
<p class="p2"><br></p>
<p class="p1">scrollBtn.addEventListener("click", () =&gt; {</p>
<p class="p1"><span class="Apple-converted-space">  </span>window.scrollTo({ top: 0, behavior: "smooth" });</p>
<p class="p1">});</p>
<p class="p2"><br></p>
<p class="p1">// Dark Mode Toggle</p>
<p class="p1">const themeToggle = document.getElementById("themeToggle");</p>
<p class="p1">const body = document.body;</p>
<p class="p2"><br></p>
<p class="p1">// Load saved theme</p>
<p class="p1">if (localStorage.getItem("theme") === "dark") {</p>
<p class="p1"><span class="Apple-converted-space">  </span>body.classList.add("dark");</p>
<p class="p1"><span class="Apple-converted-space">  </span>themeToggle.textContent = "☀️";</p>
<p class="p1">}</p>
<p class="p2"><br></p>
<p class="p1">themeToggle.addEventListener("click", () =&gt; {</p>
<p class="p1"><span class="Apple-converted-space">  </span>body.classList.toggle("dark");</p>
<p class="p1"><span class="Apple-converted-space">  </span>const isDark = body.classList.contains("dark");</p>
<p class="p1"><span class="Apple-converted-space">  </span>themeToggle.textContent = isDark ? "☀️" : "🌙";</p>
<p class="p1"><span class="Apple-converted-space">  </span>localStorage.setItem("theme", isDark ? "dark" : "light");</p>
<p class="p1">});</p>
<p class="p2"><br></p>
<p class="p1">// Fade-in on scroll</p>
<p class="p1">const fadeElements = document.querySelectorAll(".fade-in");</p>
<p class="p2"><br></p>
<p class="p1">const observer = new IntersectionObserver(</p>
<p class="p1"><span class="Apple-converted-space">  </span>entries =&gt; {</p>
<p class="p1"><span class="Apple-converted-space">    </span>entries.forEach(entry =&gt; {</p>
<p class="p1"><span class="Apple-converted-space">      </span>if (entry.isIntersecting) {</p>
<p class="p1"><span class="Apple-converted-space">        </span>entry.target.classList.add("visible");</p>
<p class="p1"><span class="Apple-converted-space">        </span>observer.unobserve(entry.target);</p>
<p class="p1"><span class="Apple-converted-space">      </span>}</p>
<p class="p1"><span class="Apple-converted-space">    </span>});</p>
<p class="p1"><span class="Apple-converted-space">  </span>},</p>
<p class="p1"><span class="Apple-converted-space">  </span>{ threshold: 0.2 }</p>
<p class="p1">);</p>
<p class="p2"><br></p>
<p class="p1">fadeElements.forEach(el =&gt; observer.observe(el));</p>
</body>
</html>
