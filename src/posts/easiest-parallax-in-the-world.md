---
title: "Easiest parallax in the world"
date: 2013-06-10
---
<p>Almost no CSS and a couple of lines of Jquery are all you need for this
extremely simple parallax demo. This is not really something I would recommend
to use on a production site but it's a very good way to start to understand how
you can write your own parallax.</p>
<!--more-->
<p>Warning: the demo is very basic and that's on purpose, the idea here is to
really understand exactly what's going on so I have kept the code to an absolute
minimum. This means that looking through the source code shouldn't be confusing
for anyone.</p>

<p>With the warning over <a href="/demo/parallax.html" title="Check
out the parallax demo">check out the demo</a>.

<p> In the demo the black and white Pulp Fiction poster moves upwards at half
the speed at which you scroll. All the code to understand how that happens is in
the source code of the file and it's only a couple of lines but I'm going to run
through it here anyway: </p>

<pre>
  <code class="language-javascript">
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  $(&quot;.parallax&quot;).css(&quot;transform&quot;,&quot;translateY(&quot; +  (scroll/2)  + &quot;px)&quot;);
});
  </code>
</pre>

<p>What's going on here? To translate it into normal speak line by line:</p>
<ol> <li>When the user scrolls the window</li> <li>Check how many px from the
top have been scrolled, store this data in an object called "scroll"</li>
<li>Apply inline CSS to the element with the class "parallax" so that it has a
translateY value of half the amount of pixels scrolled </li> </ol>

<p>The key is what's being done in line 3, basically pushing the Pulp Fiction
image down the screen at half the speed that the scroll is pulling it up the
screen, creating this parallax effect. </p>

<p>There isn't really any important CSS going on here, I gave the div below the
image <code class="language-css">position:relative</code> just to make sure that
it stayed above the image. If you had more elements on the page you might want
to explicitly assign a z-index.</p>
