---
title: "CSS only responsive navigation"
date: 2013-04-21
---

<p>Whilst building a Jquery plugin for responsive navigation I started to play
around with a CSS only version, just to see what's possible and what we
actually need the javascript for. I would say that this is a perfectly feasible
solution for a production website but...it's not plug and play, you have to learn
how to use the code and adapt it to your site. </p>
<!--more-->
<div class="demo-actions">
  <a href="https://github.com/valdelama/responav/tree/css-only/archive/css-only.zip" title="Download from Github">Download <i class="icon-download"></i></a>
  <a href="/demo/css-responav.html" title="View the demo">View the demo <i class="icon-export"></i></a>
  <a href="https://github.com/valdelama/responav/tree/css-only" title="Watch on Github">Watch on Github <i class="icon-github"></i></a>
</div>

<h3>Is CSS only feasible?</h3> <h4>The good</h4> <p>Responsive solutions are modern
solutions by default, check out <a href="http://caniuse.com/css-mediaqueries"
title="Browser support for media queries">browser support for media queries</a>
and you will see that we don't need to worry about old browsers. This is really
important because the solution I propose relies on the <code
class="language-css">:checked</code> pseudo-class which is supported in these
same browsers. The animation of the slide out panel that houses the links for
the responsive menu uses <code class="language-css">transform</code> and <code
class="language-css">transition</code> which are more or less supported in the
same browsers. I say more or less because IE9 is the weak link here considering
that it does support media queries and it does support <code
class="language-css">:checked</code> but it doesn't support transitions. The
majority of your mobile users are probably going to be on webkit but for those
on Windows Phone 7 (and therefore IE9) it might not look so smooth but should be
functional.</p>

<h4>The bad</h4> <p>There are a few features that the Jquery plugin will have
that just can't work in the CSS only solution, or at least I can't figure out a
way to make them work! I won't list all the features of the Jquery plugin I am
working on just yet but there are some issues with the CSS only solution that
will be resolved with a bit of Javascript: </p>

<ul>
<li>There is a delay when
you tap on the show/hide checkbox.</li>
<li>You can't click outside the menu to
hide it.</li>
<li>You have to follow quite a strict HTML structure, placing the
 checkbox before everything else.</li>
</ul>

<p>There a few more advantages of
the Jquery solution but that will be explained in the next article.</p>

<h3>How does it work?</h3> <p>First of all we have a show/hide menu toggle,
which in this case is a checkbox that has been hidden by a font icon placed over
the top using the <code class="language-css">label:after</code> pseudo element.
The toggle is hidden by default and only shown on smaller screens. By using the
<code class="language-css">:checked</code> pseudo class we can change the icon
that is displayed once the checkbox has been clicked, in this case we are going
to turn it into a "close" icon. For this to work the <code
class="language-markup">checkbox</code> must be placed before the <code
class="language-markup">&lt;label&gt;</code> because we are relying on this
sibling selector to change the icon:</p>
<pre>
  <code class="language-css">
.slide-checkbox:checked ~ .slide-toggle:after {
  content: '"';
}
  </code>
</pre>
<p><code class="language-css">.slide-checkbox</code> is the <code class="language-markup">checkbox</code>, <code class="language-css">.slide-toggle</code> is the <code class="language-markup">&lt;label&gt;</code></p>

<p>The cool part is the slide out menu, in fact it's not really the menu that slides out but more the content that slides over to the right, dragging the menu along with it. In the media query the menu is hidden off-canvas using this CSS:</p>

<pre>
  <code class="language-css">
.nav {
  width: 70%;
  position: absolute;
  left: 0;
  top: 0;
  transform: translateX(70%) scale(1);
}
  </code>
</pre>

<p>(This has been shortened for readibility, in the <a
href="/static/demo/responav/css-only/index.html" title="View demo">demo</a>
you'll see the full code with browser prefixes.)</p>

<p>Now, the important part is sliding the content over. To do this I am relying
on the content to be inside a <code class="language-markup">&lt;div
class=&quot;slide&quot;&gt;</code> and to follow the <code
class="language-markup">checkbox</code> in the HTML markup because of this
CSS:</p>

<pre>
  <code class="language-css">
.slide-checkbox:checked ~ .slide {
  transform: translateX(70%) scale(1);
}
  </code>
</pre>

 <p>What this is saying is: "when the .slide-toggle is checked, then any div
with a class of "slide" that is adjacent in the markup should be transformed".
When we slide the div over we also bring the nav into view.</p>

<p>Another important aspect is that everything, including the checkbox, is
wrapped inside <code class="language-markup">&lt;div
class=&quot;outer&quot;&gt;</code> which has <code
class="language-css">overflow: hidden</code> set and this stops scrollbars
appearing once the content slides over.</p>

<p>Here's a breakdown of the necessary HTML structure:</p>

<pre>
  <code class="language-css">
&lt;body&gt;
  &lt;div class=&quot;outer&quot;&gt;
    &lt;input type=&quot;checkbox&quot; id=&quot;slide-checkbox&quot; class=&quot;slide-checkbox&quot; role=&quot;button&quot;&gt;
    &lt;label for=&quot;slide-checkbox&quot; class=&quot;slide-toggle&quot; onclick&gt;&lt;/label&gt;
    &lt;div class=&quot;slide&quot;&gt;
      &lt;ul class=&quot;nav&quot;&gt;
        &lt;!-- menu content here --&gt;
      &lt;/ul&gt;
      &lt;!-- add any content you want in here --&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/body&gt;
  </code>
</pre>

 <p>Something that is pretty flexible is the <code
class="language-markup">.nav</code>, this can be a <code
class="language-markup">&lt;div&gt;</code> instead of a <code
class="language-markup">&lt;ul&gt;</code> and you don't need to be limited to
just putting a menu in there. Also, the nav can be pretty much anywhere inside
the <code class="language-markup">&lt;div class=&quot;slide&quot;&gt;</code>,
even inside other divs.</p>

<p>The best way to see what's going on though is to <a
href="https://github.com/valdelama/responav/tree/css-only/archive/css-only.zip"
title="Download the demo">download</a> the demo and have a look at the CSS
because all the important parts are heavily commented. And, if you're interested
in the Jquery solution when it comes out, which will have a range of
configurable options, then follow on <a href="https://twitter.com/valdelama"
title="Follow on twitter">twitter</a> and/or watch the project on <a
href="https://github.com/valdelama/responav/tree/css-only" title="Watch on
Github">github</a>. Please let me know what you think in the comments.</p>

<div class="demo-actions">
<a href="https://github.com/valdelama/responav/tree/css-only/archive/css-only.zip" title="Download from Github">Download <i class="icon-download"></i></a>
<a href="/demo/css-responav.html" title="View the demo">View the demo <i class="icon-export"></i></a>
<a href="https://github.com/valdelama/responav/tree/css-only"  title="Watch on Github">Watch on Github <i class="icon-github"></i></a> </div>

 <h4>Acknowledgements</h4> <p>Thanks to <a
href="https://twitter.com/mr_springtime" title="Marnu Lombard">Marnu
Lombard</a> for creating a really useful <a
href="https://github.com/valdelama/responav/tree/css-only/pull/1" title="Github
pull request">pull request</a> that made me change from translate3D to
translateX and put the toggle on the <code
class="language-css">label:after</code> instead of the <code
class="language-css">checkbox:after</code>. That really helped browser
compatibility.</p> <p>Thanks to Ben and <a
href="http://terebentina.github.io/sco.js/" title="Dan Caragea Javascript
ninja">Dan "5 mins" Caragea</a> for mobile testing.</p>
