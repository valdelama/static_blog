---
title: "MOSTO: A lightweight framework for forms"
date: 2013-02-08
head_extras: |
  <link href="/css/standalone/forms.css" rel="stylesheet">
  <style>
  form {
    font: 13px/18px Arial, Helvetica, Geneva, sans-serif;
  }
  </style>
footer_extras: |
  <script type="text/javascript" src="/js/standalone/sco.tab.js"></script>
  <script>
    $(function() {
      $('[data-trigger="tab"]').scotab();
    });
  </script>
---

<p>Forms aren't much fun to build, I think most web designers find them pretty tedious to design and code. For that reason I wanted to make this framework which should suit most situations where you need a form on your site.</p>
<!--more-->
<div class="demo-actions">
  <a href="https://github.com/valdelama/mosto/archive/master.zip" title="Download from Github">Download</a>
  <a href="/demo/mosto-form-demo.html" title="View the demo">View the demo</a>
  <a href="https://github.com/valdelama/mosto" title="Watch on Github">Watch on Github</a>
</div>

<h4>Why not just use a framework like Bootstrap or Foundation?</h4>
<p>I think both <a href="http://twitter.github.com/bootstrap/">Bootstrap</a> and <a href="http://foundation.zurb.com/">Foundation</a> are awesome frameworks but when it comes to forms I like to wrap the <code class="language-markup">&lt;input&gt;</code> in a <code class="language-markup">&lt;label&gt;</code>, and by doing that you can reduce structural HTML. It also means you forget about the <code class="language-markup">for=""</code> attribute because wrapping the <code class="language-markup">&lt;input&gt;</code> with the <code class="language-markup">&lt;label&gt;</code> gives you implicit association. End result is less code to write and easier maintenance.</p>
<p>Apart from using less HTML, I also wanted a framework with less CSS and more emphasis on using this as your basic starter kit from which you can extend and embellish per site. However, if you're not that worried about the size of your HTML and CSS files and you would prefer to just have an all-in-one solution, then you're probably better of with something like <a href="http://twitter.github.com/bootstrap/">Bootstrap</a> or <a href="http://foundation.zurb.com/">Foundation</a>. If you want flexible forms with very minimal markup, then read on.</p>
<h3 class="section first">1. Stacked forms</h3>
<p>The simplest, most basic form has the input below the label and the help text below the input. This layout will be referred to as "stacked".</p>
<strong>Code structure overview:</strong>
<pre>
  <code class="language-markup">
&lt;form&gt;
  &lt;label&gt;
    Label text
    &lt;input&gt;
  &lt;/label&gt;
&lt;/form&gt;
  </code>
</pre>
<ul class="nav horizontal tabs" data-trigger="tab" data-content=".tab-content">
  <li><a href="#">Demo</a></li>
  <li><a href="#">Code</a></li>
</ul>
<div class="tab-content">
  <div class="code_example">
    <form>
      <label>
        Name
        <input type="text" placeholder="Name" tabindex="1">
      </label>
      <label>
        Email address
        <input type="email" placeholder="Email address" tabindex="1">
      </label>
      <label>
        Favourite beer?
        <select tabindex="1">
          <option>Heineken</option>
          <option>Carlsberg</option>
          <option>Stella Artois</option>
          <option>Cronenberg</option>
          <option>Guiness</option>
          <option>Amstel</option>
          <option>Corona</option>
        </select>
      </label>
    </form>
  </div>
  <div>
<pre>
  <code class="language-markup">
&lt;form&gt;
  &lt;label&gt;
    Name
    &lt;input type=&quot;text&quot; placeholder=&quot;Name&quot; tabindex=&quot;1&quot;&gt;
  &lt;/label&gt;
  &lt;label&gt;
    Email address
    &lt;input type=&quot;email&quot; placeholder=&quot;Email address&quot; tabindex=&quot;1&quot;&gt;
  &lt;/label&gt;
  &lt;label&gt;
    Favourite beer?
    &lt;select tabindex=&quot;1&quot;&gt;
      &lt;option&gt;Heineken&lt;/option&gt;
      &lt;option&gt;Carlsberg&lt;/option&gt;
      &lt;option&gt;Stella Artois&lt;/option&gt;
      &lt;option&gt;Cronenberg&lt;/option&gt;
      &lt;option&gt;Guiness&lt;/option&gt;
      &lt;option&gt;Amstel&lt;/option&gt;
      &lt;option&gt;Corona&lt;/option&gt;
    &lt;/select&gt;
  &lt;/label&gt;
&lt;/form&gt;
  </code>
</pre>
  </div>
</div>
<p><strong>What's so great about this?</strong> There is no extra markup, all the HTML used is the minimum requirement for building a form.</p>
<h4 class="sub_section">1.1 Radios and checkboxes</h4>
<p>Once we start to add collections of radio options or checkboxes, then we need a wrapper <code class="language-markup">&lt;div class=&quot;label-group&quot;&gt;</code> to go around them all.</p>
<ul class="nav horizontal tabs" data-trigger="tab" data-content=".tab-content2">
  <li><a href="#">Demo</a></li>
  <li><a href="#">Code</a></li>
</ul>
<div class="tab-content2">
  <div class="code_example">
    <form>
      <div class="label-group">
        Which is better?
        <label>
          <input type="radio" name="cartoons" value="simpsons" tabindex="1">The Simpsons
        </label>
        <label>
          <input type="radio" name="cartoons" value="family_guy">Family Guy
        </label>
        <label>
          <input type="radio" name="cartoons" value="southpark">Southpark
        </label>
      </div>
      <div class="label-group">
        Who's the boss?
        <label>
          <input type="checkbox" name="invite" value="homer">Homer Simpson
        </label>
        <label>
          <input type="checkbox" name="invite" value="peter">Peter Griffin
        </label>
        <label>
          <input type="checkbox" name="invite" value="frank">Frank the Tank
        </label>
      </div>
    </form>
  </div>
  <div>
<pre>
  <code class="language-markup">
&lt;form&gt;
  &lt;div class=&quot;label-group&quot;&gt;
    Which is better?
    &lt;label&gt;
      &lt;input type=&quot;radio&quot; name=&quot;cartoons&quot; value=&quot;simpsons&quot; tabindex=&quot;1&quot;&gt;The Simpsons
    &lt;/label&gt;
    &lt;label&gt;
      &lt;input type=&quot;radio&quot; name=&quot;cartoons&quot; value=&quot;family_guy&quot;&gt;Family Guy
    &lt;/label&gt;
    &lt;label&gt;
      &lt;input type=&quot;radio&quot; name=&quot;cartoons&quot; value=&quot;southpark&quot;&gt;Southpark
    &lt;/label&gt;
  &lt;/div&gt;
  &lt;div class=&quot;label-group&quot;&gt;
    Who's the boss?
    &lt;label&gt;
      &lt;input type=&quot;checkbox&quot; name=&quot;invite&quot; value=&quot;homer&quot; tabindex=&quot;1&quot;&gt;Homer Simpson
    &lt;/label&gt;
    &lt;label&gt;
      &lt;input type=&quot;checkbox&quot; name=&quot;invite&quot; value=&quot;peter&quot;&gt;Peter Griffin
    &lt;/label&gt;
    &lt;label&gt;
      &lt;input type=&quot;checkbox&quot; name=&quot;invite&quot; value=&quot;frank&quot;&gt;Frank the Tank
    &lt;/label&gt;
  &lt;/div&gt;
&lt;/form&gt;
  </code>
</pre>
  </div>
</div>
<h4 class="sub_section">1.2 Complete form</h4>
<p>Put it all together and your form will look like this: </p>
<div class="code_example">
  <form>
    <label>
      Name
      <input type="text" placeholder="Name" tabindex="1">
    </label>
    <label>
      Email address
      <input type="email" placeholder="Email address" tabindex="1">
    </label>
    <label>
      Favourite beer
      <select tabindex="1">
        <option>Heineken</option>
        <option>Carlsberg</option>
        <option>Stella Artois</option>
        <option>Cronenberg</option>
        <option>Guiness</option>
        <option>Amstel</option>
        <option>Corona</option>
      </select>
    </label>
    <div class="label-group">
      Which is better?
      <label>
        <input type="radio" name="cartoons" value="simpsons" tabindex="1">The Simpsons
      </label>
      <label>
        <input type="radio" name="cartoons" value="family_guy">Family Guy
      </label>
      <label>
        <input type="radio" name="cartoons" value="southpark">Southpark
      </label>
    </div>
    <div class="label-group">
      Who's the boss?
      <label>
        <input type="checkbox" name="invite" value="homer">Homer Simpson
      </label>
      <label>
        <input type="checkbox" name="invite" value="peter">Peter Griffin
      </label>
      <label>
        <input type="checkbox" name="invite" value="frank">Frank the Tank
      </label>
    </div>
  </form>
</div>
<p>So to build the complete form the only additional markup used for styling purposes is the <code class="language-markup">&lt;div class=&quot;label-group&quot;&gt;</code> that wraps groups of radio or checkbox inputs, all other markup is the bare minimum required for building forms.</p>
<h3 class="section">2. Horizontal forms</h3>
<p>The horizontal form has the label text next to the input. To do that you need to
<ul>
  <li>add a form class: <code class="language-markup">&lt;form class=&quot;form-horizontal&quot;&gt;</code></li>
  <li>wrap the label text in a <code class="language-markup">&lt;div&gt;</code></li>
</ul>
  If you're not sure whether stacked or horizontal forms are going to be better for your site then always use the markup for the horizontal forms. This means switching between one or the other is as easy as adding or removing a class from the <code class="language-markup">&lt;form&gt;</code>.</p>
<strong>Code structure:</strong>
<pre>
  <code class="language-markup">
&lt;form class=&quot;form-horizontal&quot;&gt;
  &lt;label&gt;
    &lt;div&gt;Label text&lt;/div&gt;
    &lt;input&gt;
  &lt;/label&gt;
&lt;/form&gt;
  </code>
</pre>
<ul class="nav horizontal tabs" data-trigger="tab" data-content=".tab-content3">
  <li><a href="#">Demo</a></li>
  <li><a href="#">Code</a></li>
</ul>
<div class="tab-content3">
  <div class="code_example">
    <form class="form-horizontal">
      <label>
        <div>Name</div>
        <input type="text" placeholder="Name" tabindex="1">
      </label>
      <label>
        <div>Email address</div>
        <input type="email" placeholder="Email address" tabindex="1">
      </label>
      <label>
        <div>Favourite beer?</div>
        <select tabindex="1">
          <option>Heineken</option>
          <option>Carlsberg</option>
          <option>Stella Artois</option>
          <option>Cronenberg</option>
          <option>Guiness</option>
          <option>Amstel</option>
          <option>Corona</option>
        </select>
      </label>
      <div class="label-group">
        <div>Which is better?</div>
        <label>
          <input type="radio" name="cartoons" value="simpsons" tabindex="1">The Simpsons
        </label>
        <label>
          <input type="radio" name="cartoons" value="family_guy" tabindex="1">Family Guy
        </label>
        <label>
          <input type="radio" name="cartoons" value="southpark" tabindex="1">Southpark
        </label>
      </div>
      <div class="label-group">
        <div>Who's the boss?</div>
        <label>
          <input type="checkbox" name="invite" value="homer">Homer Simpson
        </label>
        <label>
          <input type="checkbox" name="invite" value="peter">Peter Griffin
        </label>
        <label>
          <input type="checkbox" name="invite" value="frank">Frank the Tank
        </label>
      </div>
    </form>
  </div>
  <div>
<pre>
  <code class="language-markup">
&lt;form class=&quot;form-horizontal&quot;&gt;
  &lt;label&gt;
    &lt;div&gt;Name&lt;/div&gt;
    &lt;input type=&quot;text&quot; placeholder=&quot;Name&quot; tabindex=&quot;1&quot;&gt;
  &lt;/label&gt;
  &lt;label&gt;
    &lt;div&gt;Email address&lt;/div&gt;
    &lt;input type=&quot;email&quot; placeholder=&quot;Email address&quot; tabindex=&quot;1&quot;&gt;
    &lt;span class=&quot;message&quot;&gt;Please use a valid email address&lt;/span&gt;
  &lt;/label&gt;
  &lt;label&gt;
    &lt;div&gt;Favourite beer?&lt;/div&gt;
    &lt;select tabindex=&quot;1&quot;&gt;
      &lt;option&gt;Heineken&lt;/option&gt;
      &lt;option&gt;Carlsberg&lt;/option&gt;
      &lt;option&gt;Stella Artois&lt;/option&gt;
      &lt;option&gt;Cronenberg&lt;/option&gt;
      &lt;option&gt;Guiness&lt;/option&gt;
      &lt;option&gt;Amstel&lt;/option&gt;
      &lt;option&gt;Corona&lt;/option&gt;
    &lt;/select&gt;
  &lt;/label&gt;
  &lt;div class=&quot;label-group&quot;&gt;
    &lt;div&gt;Which is better?&lt;/div&gt;
    &lt;label&gt;
      &lt;input type=&quot;radio&quot; name=&quot;cartoons&quot; value=&quot;simpsons&quot; tabindex=&quot;1&quot;&gt;The Simpsons
    &lt;/label&gt;
    &lt;label&gt;
      &lt;input type=&quot;radio&quot; name=&quot;cartoons&quot; value=&quot;family_guy&quot; tabindex=&quot;1&quot;&gt;Family Guy
    &lt;/label&gt;
    &lt;label&gt;
      &lt;input type=&quot;radio&quot; name=&quot;cartoons&quot; value=&quot;southpark&quot; tabindex=&quot;1&quot;&gt;Southpark
    &lt;/label&gt;
  &lt;/div&gt;
&lt;/form&gt;
  </code>
</pre>
  </div>
</div>
<p>Remove the class "form-horizontal" if you want to go back to the stacked layout.</p>
<h3 class="section">3. Help messages and hints</h3>
<p>To add a help message related to the input just put the text in a <code class="language-markup">&lt;span class=&quot;message&quot;&gt;</code> directly after the input.</p>
<h5>Stacked form</h5>
<ul class="nav horizontal tabs" data-trigger="tab" data-content=".tab-content4">
  <li><a href="#">Demo</a></li>
  <li><a href="#">Code</a></li>
</ul>
<div class="tab-content4">
  <div class="code_example">
    <form>
      <label>
        Email address
        <input type="email" placeholder="Email address" tabindex="1">
        <span class="message">Please use a valid email address</span>
      </label>
    </form>
  </div>
  <div>
<pre>
  <code class="language-markup">
&lt;form&gt;
  &lt;label&gt;
    Email address
    &lt;input type=&quot;email&quot; placeholder=&quot;Email address&quot; tabindex=&quot;1&quot;&gt;
    &lt;span=&quot;message&quot;&gt;Please use a valid email address&lt;/span&gt;
  &lt;/label&gt;
&lt;/form&gt;
  </code>
</pre>
  </div>
</div>

<h5>Horizontal form</h5>
<ul class="nav horizontal tabs" data-trigger="tab" data-content=".tab-content5">
  <li><a href="#">Demo</a></li>
  <li><a href="#">Code</a></li>
</ul>
<div class="tab-content5">
  <div class="code_example">
    <form class="form-horizontal">
      <label>
        <div>Email address</div>
        <input type="email" placeholder="Email address" tabindex="1">
        <span class="message">Please use a valid email address</span>
      </label>
    </form>
  </div>
  <div>
<pre>
  <code class="language-markup">
&lt;form class=&quot;form-horizontal&quot;&gt;
  &lt;label&gt;
    &lt;div&gt;Email address&lt;/div&gt;
    &lt;input type=&quot;email&quot; placeholder=&quot;Email address&quot; tabindex=&quot;1&quot;&gt;
    &lt;span class=&quot;message&quot;&gt;Please use a valid email address&lt;/span&gt;
  &lt;/label&gt;
&lt;/form&gt;
  </code>
</pre>
  </div>
</div>
<h4 class="sub_section">3.1 Stacked forms with inline help</h4>
<p>If you want a stacked form but with inline help, then you need to use this form class: <code class="language-markup">&lt;form class=&quot;help-inline&quot;&gt;</code> and also wrap the label text in a <code class="language-markup">&lt;div&gt;</code> (same structure as the horizontal forms).</p>
<ul class="nav horizontal tabs" data-trigger="tab" data-content=".tab-content6">
  <li><a href="#">Demo</a></li>
  <li><a href="#">Code</a></li>
</ul>
<div class="tab-content6">
  <div class="code_example">
    <form class="help-inline">
      <label>
        <div>Email address</div>
        <input type="email" placeholder="Email address" tabindex="1">
        <span class="message">Please use a valid email address</span>
      </label>
    </form>
  </div>
  <div>
<pre>
  <code class="language-markup">
&lt;form class=&quot;help-inline&quot&gt;
  &lt;label&gt;
    &lt;div&gt;Email address&lt;/div&gt;
    &lt;input type=&quot;email&quot; placeholder=&quot;Email address&quot; tabindex=&quot;1&quot;&gt;
    &lt;span=&quot;message&quot;&gt;Please use a valid email address&lt;/span&gt;
  &lt;/label&gt;
&lt;/form&gt;
  </code>
</pre>
  </div>
</div>

<h4 class="sub_section">3.2 Horizontal forms with help message below</h4>
<p>To use the horizontal form layout but have the help messages below (eg. for modal windows where you need the forms compact but not too wide) then use <code class="language-markup">&lt;form class=&quot;form-horizontal message-below&quot&gt;</code></p>
<ul class="nav horizontal tabs" data-trigger="tab" data-content=".tab-content7">
  <li><a href="#">Demo</a></li>
  <li><a href="#">Code</a></li>
</ul>
<div class="tab-content7">
  <div class="code_example">
    <form class="form-horizontal message-below">
      <label>
        <div>Email address</div>
        <input type="email" placeholder="Email address" tabindex="1">
        <span class="message">Please use a valid email address</span>
      </label>
    </form>
  </div>
  <div>
<pre>
  <code class="language-markup">
&lt;form class=&quot;form-horizontal message-below&quot&gt;
  &lt;label&gt;
    &lt;div&gt;Email address&lt;/div&gt;
    &lt;input type=&quot;email&quot; placeholder=&quot;Email address&quot; tabindex=&quot;1&quot;&gt;
    &lt;span=&quot;message&quot;&gt;Please use a valid email address&lt;/span&gt;
  &lt;/label&gt;
&lt;/form&gt;
  </code>
</pre>
  </div>
</div>

<h4 class="sub_section">3.3 Help message displayed on :focus</h4>
<p>If you want to keep your forms as clean and uncluttered as possible you might prefer to display the relevant help message only when the user focuses on (clicks inside) the input. All you have to do is follow the same code structure as above but add the class "hint" to the <code class="language-markup">&lt;span&gt;</code>.</p>
<ul class="nav horizontal tabs" data-trigger="tab" data-content=".tab-content3-3">
  <li><a href="#">Demo</a></li>
  <li><a href="#">Code</a></li>
</ul>
<div class="tab-content3-3">
  <div class="code_example">
    <form>
      <strong>Stacked form</strong>
      <label>
        Name
        <input type="text" placeholder="Name" tabindex="1">
        <span class="message hint">Please enter your full name</span>
      </label>
      <label>
        Email address
        <input type="email" placeholder="Email address" tabindex="1">
        <span class="message hint">Must be a valid email address</span>
      </label>
    </form>
    <form class="form-horizontal">
      <strong>Horizontal form</strong>
      <label>
        <div>Name</div>
        <input type="text" placeholder="Name" tabindex="1">
        <span class="message hint">Please enter your full name</span>
      </label>
      <label>
        <div>Email address</div>
        <input type="email" placeholder="Email address" tabindex="1">
        <span class="message hint">Must be a valid email address</span>
      </label>
    </form>
  </div>
  <div>
<pre>
  <code class="language-markup">
&lt;form&gt;
  &lt;strong&gt;Stacked form&lt;/strong&gt;
  &lt;label&gt;
    Name
    &lt;input type=&quot;text&quot; placeholder=&quot;Name&quot; tabindex=&quot;1&quot;&gt;
    &lt;span class=&quot;message hint&quot;&gt;Please enter your full name&lt;/span&gt;
  &lt;/label&gt;
  &lt;label&gt;
    Email address
    &lt;input type=&quot;email&quot; placeholder=&quot;Email address&quot; tabindex=&quot;1&quot;&gt;
    &lt;span class=&quot;message hint&quot;&gt;Must be a valid email address&lt;/span&gt;
  &lt;/label&gt;
&lt;/form&gt;
&lt;form class=&quot;form-horizontal&quot;&gt;
  &lt;strong&gt;Horizontal form&lt;/strong&gt;
  &lt;label&gt;
    &lt;div&gt;Name&lt;/div&gt;
    &lt;input type=&quot;text&quot; placeholder=&quot;Name&quot; tabindex=&quot;1&quot;&gt;
    &lt;span class=&quot;message hint&quot;&gt;Please enter your full name&lt;/span&gt;
  &lt;/label&gt;
  &lt;label&gt;
    &lt;div&gt;Email address&lt;/div&gt;
    &lt;input type=&quot;email&quot; placeholder=&quot;Email address&quot; tabindex=&quot;1&quot;&gt;
    &lt;span class=&quot;message hint&quot;&gt;Must be a valid email address&lt;/span&gt;
  &lt;/label&gt;
&lt;/form&gt;
  </code>
</pre>
    </div>
  </div>

<h3 class="section">4. Overriding the defaults</h3>
<p>Defaults are great but sometimes you need to do things a bit differently...here are some examples:</p>
<h4>4.1 Stacked form with everything inline</h4>
  <p>Sometimes when using the stacked form you'll find that it makes no sense to have the radio or checkbox inputs stacked because the associated text is so short that you may as well keep it all inline. <p>All you have to do is add the class "inline" to the <code class="language-markup">&lt;div class=&quot;label-group&quot;&gt;</code> so it becomes <code class="language-markup">&lt;div class=&quot;label-group inline&quot;&gt;</code>.</p>
  <ul class="nav horizontal tabs" data-trigger="tab" data-content=".tab-content8">
    <li><a href="#">Demo</a></li>
    <li><a href="#">Code</a></li>
  </ul>
  <div class="tab-content8">
    <div class="code_example">
      <form>
        <div class="label-group inline">
          Which is better?
          <label>
            <input type="radio" name="cartoons" value="simpsons" tabindex="1">The Simpsons
          </label>
          <label>
            <input type="radio" name="cartoons" value="family_guy" tabindex="1">Family Guy
          </label>
          <label>
            <input type="radio" name="cartoons" value="southpark" tabindex="1">Southpark
          </label>
        </div>
      </form>
    </div>
    <div>
<pre>
  <code class="language-markup">
&lt;form&gt;
  &lt;div class=&quot;label-group inline&quot;&gt;
    Which is better?
    &lt;label&gt;
      &lt;input type=&quot;radio&quot; name=&quot;cartoons&quot; value=&quot;simpsons&quot; tabindex=&quot;1&quot;&gt;The Simpsons
    &lt;/label&gt;
    &lt;label&gt;
      &lt;input type=&quot;radio&quot; name=&quot;cartoons&quot; value=&quot;family_guy&quot; tabindex=&quot;1&quot;&gt;Family Guy
    &lt;/label&gt;
    &lt;label&gt;
      &lt;input type=&quot;radio&quot; name=&quot;cartoons&quot; value=&quot;southpark&quot; tabindex=&quot;1&quot;&gt;Southpark
    &lt;/label&gt;
  &lt;/div&gt;
&lt;/form&gt;
  </code>
</pre>
  </div>
</div>
<h4 class="sub_section">4.2 Stacked forms with only the inputs inline</h4>
<p>If you're using the stacked forms and you want all the inputs inline but you want to keep the label text above the inputs. Then you can wrap it in a <code class="language-markup">&lt;div&gt</code> to make it a block element, like so:</p>
<ul class="nav horizontal tabs" data-trigger="tab" data-content=".tab-content9">
  <li><a href="#">Demo</a></li>
  <li><a href="#">Code</a></li>
</ul>
<div class="tab-content9">
  <div class="code_example">
    <form>
      <div class="label-group inline">
        <div>Of the following animated series which one do you prefer?</div>
        <label>
          <input type="radio" name="cartoons" value="simpsons" tabindex="1">The Simpsons
        </label>
        <label>
          <input type="radio" name="cartoons" value="family_guy" tabindex="1">Family Guy
        </label>
        <label>
          <input type="radio" name="cartoons" value="southpark" tabindex="1">Southpark
        </label>
      </div>
    </form>
  </div>
  <div>
<pre>
  <code class="language-markup">
&lt;form&gt;
  &lt;div class=&quot;label-group inline&quot;&gt;
    &lt;div&gtOf the following animated series which one do you prefer?&lt;/div&gt;
    &lt;label&gt;
      &lt;input type=&quot;radio&quot; name=&quot;cartoons&quot; value=&quot;simpsons&quot; tabindex=&quot;1&quot;&gt;The Simpsons
    &lt;/label&gt;
    &lt;label&gt;
      &lt;input type=&quot;radio&quot; name=&quot;cartoons&quot; value=&quot;family_guy&quot; tabindex=&quot;1&quot;&gt;Family Guy
    &lt;/label&gt;
    &lt;label&gt;
      &lt;input type=&quot;radio&quot; name=&quot;cartoons&quot; value=&quot;southpark&quot; tabindex=&quot;1&quot;&gt;Southpark
    &lt;/label&gt;
  &lt;/div&gt;
&lt;/form&gt;
  </code>
</pre>
  </div>
</div>

<h3 class="section">5. Dimensions</h3>
<p>Some classes to have a bit more control over the sizes of the inputs.</p>
<h4>5.1 Simple classes</h4>
<p>These are very simple classes: mini, small, large and xl. You don't need to specify "medium" because it's the default size.</p>
<ul class="nav horizontal tabs" data-trigger="tab" data-content=".tab-content5-1">
  <li><a href="#">Demo</a></li>
  <li><a href="#">Code</a></li>
</ul>
<div class="tab-content5-1">
  <div class="code_example">
    <form class="form-horizontal">
      <label>
        <div>Mini</div>
        <input type="text" tabindex="1" class="mini">
      </label>
      <label>
        <div>Small</div>
        <input type="text" tabindex="1" class="small">
      </label>
      <label>
        <div>Medium</div>
        <input type="text" tabindex="1">
        <span class="message">(default)</span>
      </label>
      <label>
        <div>Large</div>
        <input type="text" tabindex="1" class="large">
      </label>
      <label>
        <div>Xlarge</div>
        <input type="text" tabindex="1" class="xl">
      </label>
    </form>
  </div>
  <div>
<pre>
  <code class="language-markup">
&lt;form class=&quot;form-horizontal&quot;&gt;
  &lt;label&gt;
    &lt;div&gt;Mini&lt;/div&gt;
    &lt;input type=&quot;text&quot; tabindex=&quot;1&quot; class=&quot;mini&quot;&gt;
  &lt;/label&gt;
  &lt;label&gt;
    &lt;div&gt;Small&lt;/div&gt;
    &lt;input type=&quot;text&quot; tabindex=&quot;1&quot; class=&quot;small&quot;&gt;
  &lt;/label&gt;
  &lt;label&gt;
    &lt;div&gt;Medium&lt;/div&gt;
    &lt;input type=&quot;text&quot; tabindex=&quot;1&quot;&gt;
    &lt;span class=&quot;message&quot;&gt;(default)&lt;/span&gt;
  &lt;/label&gt;
  &lt;label&gt;
    &lt;div&gt;Large&lt;/div&gt;
    &lt;input type=&quot;text&quot; tabindex=&quot;1&quot; class=&quot;large&quot;&gt;
  &lt;/label&gt;
  &lt;label&gt;
    &lt;div&gt;Xlarge&lt;/div&gt;
    &lt;input type=&quot;text&quot; tabindex=&quot;1&quot; class=&quot;xl&quot;&gt;
  &lt;/label&gt;
&lt;/form&gt;
  </code>
</pre>
  </div>
</div>

<h4 class="sub_section">5.2 Specific classes</h4>
<p>More specific classes to get the exact sizes you need.</p>
<ul class="nav horizontal tabs" data-trigger="tab" data-content=".tab-content5-2">
  <li><a href="#">Demo</a></li>
  <li><a href="#">Code</a></li>
</ul>
<div class="tab-content5-2">
  <div class="code_example">
    <form class="form-horizontal">
      <label>
        <div>Size 1</div>
        <input type="text" tabindex="1" class="size1">
      </label>
      <label>
        <div>Size 2</div>
        <input type="text" tabindex="1" class="size2">
      </label>
      <label>
        <div>Size 3</div>
        <input type="text" tabindex="1" class="size3">
      </label>
      <label>
        <div>Size 4</div>
        <input type="text" tabindex="1" class="size4">
      </label>
      <label>
        <div>Size 5</div>
        <input type="text" tabindex="1" class="size5">
      </label>
      <label>
        <div>Size 6</div>
        <input type="text" tabindex="1" class="size6">
      </label>
      <label>
        <div>Size 7</div>
        <input type="text" tabindex="1" class="size7">
      </label>
      <label>
        <div>Size 8</div>
        <input type="text" tabindex="1" class="size8">
      </label>
      <label>
        <div>Size 9</div>
        <input type="text" tabindex="1" class="size9">
      </label>
      <label>
        <div>Size 10</div>
        <input type="text" tabindex="1" class="size10">
      </label>
      <label>
        <div>Size 11</div>
        <input type="text" tabindex="1" class="size11">
      </label>
      <label>
        <div>Size 12</div>
        <input type="text" tabindex="1" class="size12">
      </label>
    </form>
  </div>
  <div>
<pre>
  <code class="language-markup">
&lt;form class=&quot;form-horizontal&quot;&gt;
  &lt;label&gt;
    &lt;div&gt;Size 1&lt;/div&gt;
    &lt;input type=&quot;text&quot; tabindex=&quot;1&quot; class=&quot;size1&quot;&gt;
  &lt;/label&gt;
  &lt;label&gt;
    &lt;div&gt;Size 2&lt;/div&gt;
    &lt;input type=&quot;text&quot; tabindex=&quot;1&quot; class=&quot;size2&quot;&gt;
  &lt;/label&gt;
  &lt;label&gt;
    &lt;div&gt;Size 3&lt;/div&gt;
    &lt;input type=&quot;text&quot; tabindex=&quot;1&quot; class=&quot;size3&quot;&gt;
  &lt;/label&gt;
  &lt;label&gt;
    &lt;div&gt;Size 4&lt;/div&gt;
    &lt;input type=&quot;text&quot; tabindex=&quot;1&quot; class=&quot;size4&quot;&gt;
  &lt;/label&gt;
  &lt;label&gt;
    &lt;div&gt;Size 5&lt;/div&gt;
    &lt;input type=&quot;text&quot; tabindex=&quot;1&quot; class=&quot;size5&quot;&gt;
  &lt;/label&gt;
  &lt;label&gt;
    &lt;div&gt;Size 6&lt;/div&gt;
    &lt;input type=&quot;text&quot; tabindex=&quot;1&quot; class=&quot;size6&quot;&gt;
  &lt;/label&gt;
  &lt;label&gt;
    &lt;div&gt;Size 7&lt;/div&gt;
    &lt;input type=&quot;text&quot; tabindex=&quot;1&quot; class=&quot;size7&quot;&gt;
  &lt;/label&gt;
  &lt;label&gt;
    &lt;div&gt;Size 8&lt;/div&gt;
    &lt;input type=&quot;text&quot; tabindex=&quot;1&quot; class=&quot;size8&quot;&gt;
  &lt;/label&gt;
  &lt;label&gt;
    &lt;div&gt;Size 9&lt;/div&gt;
    &lt;input type=&quot;text&quot; tabindex=&quot;1&quot; class=&quot;size9&quot;&gt;
  &lt;/label&gt;
  &lt;label&gt;
    &lt;div&gt;Size 10&lt;/div&gt;
    &lt;input type=&quot;text&quot; tabindex=&quot;1&quot; class=&quot;size10&quot;&gt;
  &lt;/label&gt;
  &lt;label&gt;
    &lt;div&gt;Size 11&lt;/div&gt;
    &lt;input type=&quot;text&quot; tabindex=&quot;1&quot; class=&quot;size11&quot;&gt;
  &lt;/label&gt;
  &lt;label&gt;
    &lt;div&gt;Size 12&lt;/div&gt;
    &lt;input type=&quot;text&quot; tabindex=&quot;1&quot; class=&quot;size12&quot;&gt;
  &lt;/label&gt;
&lt;/form&gt;
  </code>
</pre>
  </div>
</div>
<h3 class="section">6. Prepended and appended inputs</h3>
<p>Some little labels to add before or after an input eg. to show expected currency.</p>
<h4>6.1 Prepend</h4>
<p>The prepend is really simple, just add a <code class="language-markup">&lt;i class=&quot;prepend&quot;&gt;&lt;/i&gt;</code>  before the input.</p>
<ul class="nav horizontal tabs" data-trigger="tab" data-content=".tab-content6-1">
  <li><a href="#">Demo</a></li>
  <li><a href="#">Code</a></li>
</ul>
<div class="tab-content6-1">
  <div class="code_example">
    <form class="form-horizontal">
      <label>
        <div>Amount</div>
        <i class="prepend">$</i>
        <input type="text" placeholder="Amount" tabindex="1" class="size3">
        <span class="message">How much would you like to donate?<span>
      </label>
    </form>
  </div>
  <div>
<pre>
  <code class="language-markup">
&lt;form class=&quot;form-horizontal&quot;&gt;
  &lt;label&gt;
    &lt;div&gt;Amount&lt;/div&gt;
    &lt;i class=&quot;prepend&quot;&gt;$&lt;/i&gt;
    &lt;input type=&quot;text&quot; placeholder=&quot;Amount&quot; tabindex=&quot;1&quot; class=&quot;size3&quot;&gt;
    &lt;span class=&quot;message&quot;&gt;How much would you like to donate?&lt;span&gt;
  &lt;/label&gt;
&lt;/form&gt;
  </code>
</pre>
  </div>
</div>

<h4 class="sub_section">6.2 Append</h4>
<p>The append is similar to the prepend but you need to add a class to the input that is being appended, so <code class="language-markup">&lt;i class=&quot;append&quot;&gt;&lt;/i&gt;</code> for the append itself and <code class="language-markup">&lt;input class=&quot;appended&quot;&gt;</code> for the input. </p>
<ul class="nav horizontal tabs" data-trigger="tab" data-content=".tab-content6-2">
  <li><a href="#">Demo</a></li>
  <li><a href="#">Code</a></li>
</ul>
<div class="tab-content6-2">
  <div class="code_example">
    <form class="form-horizontal">
      <label>
        <div>Amount</div>
        <input type="text" placeholder="Amount" tabindex="1" class="appended size3">
        <i class="append">&euro;</i>
        <span class="message">How much would you like to donate?<span>
      </label>
    </form>
  </div>
  <div>
<pre>
  <code class="language-markup">
&lt;form class=&quot;form-horizontal&quot;&gt;
  &lt;label&gt;
    &lt;div&gt;Amount&lt;/div&gt;
    &lt;i class=&quot;prepend&quot;&gt;$&lt;/i&gt;
    &lt;input type=&quot;text&quot; placeholder=&quot;Amount&quot; tabindex=&quot;1&quot; class=&quot;size3&quot;&gt;
    &lt;span class=&quot;message&quot;&gt;How much would you like to donate?&lt;span&gt;
  &lt;/label&gt;
&lt;/form&gt;
  </code>
</pre>
  </div>
</div>

<h4 class="sub_section">6.3 Both</h4>
<p>You can use the prepend and append together, just combine all the classes above.</p>
<ul class="nav horizontal tabs" data-trigger="tab" data-content=".tab-content6-3">
  <li><a href="#">Demo</a></li>
  <li><a href="#">Code</a></li>
</ul>
<div class="tab-content6-3">
  <div class="code_example">
    <form class="form-horizontal">
      <label>
        <div>Amount</div>
        <i class="prepend">$</i>
        <input type="text" placeholder="Amount" tabindex="1" class="appended size3">
        <i class="append">.00</i>
        <span class="message">How much would you like to donate?<span>
      </label>
    </form>
  </div>
  <div>
<pre>
  <code class="language-markup">
&lt;form class=&quot;form-horizontal&quot;&gt;
  &lt;label&gt;
    &lt;div&gt;Amount&lt;/div&gt;
    &lt;i class=&quot;prepend&quot;&gt;$&lt;/i&gt;
    &lt;input type=&quot;text&quot; placeholder=&quot;Amount&quot; tabindex=&quot;1&quot; class=&quot;appended size3&quot;&gt;
    &lt;i class=&quot;append&quot;&gt;.00&lt;/i&gt;
    &lt;span class=&quot;message&quot;&gt;How much would you like to donate?&lt;span&gt;
  &lt;/label&gt;
&lt;/form&gt;
  </code>
</pre>
  </div>
</div>

<h3 class="section">7. Search</h4>
<p>This form relies on using <code class="language-markup">&lt;input class=&quot;search-input&quot;&gt;</code> and the submit button inmediately following the input using <code class="language-markup">&lt;button class=&quot;search-submit&quot;&gt;</code>.</p>
<ul class="nav horizontal tabs" data-trigger="tab" data-content=".tab-content7-1">
  <li><a href="#">Demo</a></li>
  <li><a href="#">Code</a></li>
</ul>
<div class="tab-content7-1">
  <div class="code_example">
    <form>
      <label>
        <input type="search" class="search-input" placeholder="Search here..." tabindex="1">
        <button type="submit" class="search-submit">Go</button>
      </label>
    </form>
  </div>
  <div>
<pre>
  <code class="language-markup">
&lt;form&gt;
  &lt;label&gt;
    &lt;input type=&quot;search&quot; class=&quot;search-input&quot; placeholder=&quot;Search here...&quot; tabindex=&quot;1&quot;&gt;
    &lt;button type=&quot;submit&quot; class=&quot;search-submit&quot;&gt;Go&lt;/button&gt;
  &lt;/label&gt;
&lt;/form&gt;
  </code>
</pre>
  </div>
</div>

<h3 class="section">8. Errors</h3>
<p>For form validation you will need an error class, just add the class "error" to the <code class="language-markup">&lt;label&gt;</code> or <code class="language-markup">&lt;div class=&quot;label-group&quot;&gt;</code></p>

<ul class="nav horizontal tabs" data-trigger="tab" data-content=".tab-content8-1">
  <li><a href="#">Demo</a></li>
  <li><a href="#">Code</a></li>
</ul>
<div class="tab-content8-1">
  <div class="code_example">
    <form>
      <label class="error">
        Email address
        <input type="email" value="bob@something.domain" tabindex="1">
        <span class="message">Please use a valid email address</span>
      </label>
    </form>

    <form class="form-horizontal">
      <label class="error">
        <div>Email address</div>
        <input type="email" value="bob@something.domain" tabindex="1">
        <span class="message">Please use a valid email address</span>
      </label>
    </form>

  </div>
  <div>
<pre>
  <code class="language-markup">
&lt;form&gt;
  &lt;label class=&quot;error&quot;&gt;
    Email address
    &lt;input type=&quot;email&quot; value=&quot;bob@something.domain&quot; tabindex=&quot;1&quot;&gt;
    &lt;span class=&quot;message&quot;&gt;Please use a valid email address&lt;/span&gt;
  &lt;/label&gt;
&lt;/form&gt;

&lt;form class=&quot;form-horizontal&quot;&gt;
&lt;label class=&quot;error&quot;&gt;
&lt;div&gt;Email address&lt;/div&gt;
&lt;input type=&quot;email&quot; value=&quot;bob@something.domain&quot; tabindex=&quot;1&quot;&gt;
&lt;span class=&quot;message&quot;&gt;Please use a valid email address&lt;/span&gt;
&lt;/label&gt;
&lt;/form&gt;
</code>

</pre>
  </div>
</div>

<h3 class="section">9. Fieldsets and legends</h3>
<p>Fieldsets and legends can be great for breaking up long forms, just use them the way you normally would:</p>

<ul class="nav horizontal tabs" data-trigger="tab" data-content=".tab-fieldset">
  <li><a href="#">Demo</a></li>
  <li><a href="#">Code</a></li>
</ul>
<div class="tab-fieldset">
  <div class="code_example">
    <form class="form-horizontal">
      <fieldset>
        <legend>Account details</legend>
        <label>
          <div>Username</div>
          <input type="text" placeholder="Username" tabindex="1">
          <span class="message hint">Must be at least five characters</span>
        </label>
        <label>
          <div>Password</div>
          <input type="password" placeholder="Password" tabindex="1">
          <span class="message hint">Must contain one number and one capital letter</span>
        </label>
        <label>
          <div>Repeat password</div>
          <input type="password" placeholder="Password" tabindex="1">
        </label>
        <label>
          <div>Email address</div>
          <input type="email" placeholder="Email" tabindex="1">
          <span class="message hint">Must be a valid email address</span>
        </label>
      </fieldset>

      <fieldset>
        <legend>Address</legend>
        <label>
          <div>First name</div>
          <input type="text" placeholder="First name" tabindex="1">
        </label>
        <label>
          <div>Last name</div>
          <input type="text" placeholder="Last name" tabindex="1">
        </label>
        <label>
          <div>Address</div>
          <textarea placeholder="Address (House number and street)" tabindex="1"></textarea>
        </label>
        <label>
          <div>City</div>
          <input type="text" placeholder="City" tabindex="1">
        </label>
        <label>
          <div>Postcode</div>
          <input type="text" placeholder="Postcode" tabindex="1">
        </label>
        <label>
          <div>Country</div>
          <select tabindex="1">
            <option>Spain</option>
            <option>United Kingdom</option>
          </select>
        </label>
      </fieldset>
    </form>

  </div>
  <div>
<pre>
  <code class="language-markup">
&lt;form class=&quot;form-horizontal&quot;&gt;
  &lt;fieldset&gt;
    &lt;legend&gt;Account details&lt;/legend&gt;
    &lt;label&gt;
      &lt;div&gt;Username&lt;/div&gt;
      &lt;input type=&quot;text&quot; placeholder=&quot;Username&quot; tabindex=&quot;1&quot;&quot;&gt;
      &lt;span class=&quot;message hint&quot;&gt;Must be at least five characters&lt;/span&gt;
    &lt;/label&gt;
    &lt;label&gt;
      &lt;div&gt;Password&lt;/div&gt;
      &lt;input type=&quot;password&quot; placeholder=&quot;Password&quot; tabindex=&quot;1&quot;&gt;
      &lt;span class=&quot;message hint&quot;&gt;Must contain one number and one capital letter&lt;/span&gt;
    &lt;/label&gt;
    &lt;label&gt;
      &lt;div&gt;Repeat password&lt;/div&gt;
      &lt;input type=&quot;password&quot; placeholder=&quot;Password&quot; tabindex=&quot;1&quot;&gt;
    &lt;/label&gt;
    &lt;label&gt;
      &lt;div&gt;Email address&lt;/div&gt;
      &lt;input type=&quot;email&quot; placeholder=&quot;Email&quot; tabindex=&quot;1&quot;&gt;
      &lt;span class=&quot;message hint&quot;&gt;Must be a valid email address&lt;/span&gt;
    &lt;/label&gt;
  &lt;/fieldset&gt;

&lt;fieldset&gt;
&lt;legend&gt;Address&lt;/legend&gt;
&lt;label&gt;
&lt;div&gt;First name&lt;/div&gt;
&lt;input type=&quot;text&quot; placeholder=&quot;First name&quot; tabindex=&quot;1&quot;&gt;
&lt;/label&gt;
&lt;label&gt;
&lt;div&gt;Last name&lt;/div&gt;
&lt;input type=&quot;text&quot; placeholder=&quot;Last name&quot; tabindex=&quot;1&quot;&gt;
&lt;/label&gt;
&lt;label&gt;
&lt;div&gt;Address&lt;/div&gt;
&lt;textarea placeholder=&quot;Address (House number and street)&quot; tabindex=&quot;1&quot;&gt;&lt;/textarea&gt;
&lt;/label&gt;
&lt;label&gt;
&lt;div&gt;City&lt;/div&gt;
&lt;input type=&quot;text&quot; placeholder=&quot;City&quot; tabindex=&quot;1&quot;&gt;
&lt;/label&gt;
&lt;label&gt;
&lt;div&gt;Postcode&lt;/div&gt;
&lt;input type=&quot;text&quot; placeholder=&quot;Postcode&quot; tabindex=&quot;1&quot;&gt;
&lt;/label&gt;
&lt;label&gt;
&lt;div&gt;Country&lt;/div&gt;
&lt;select tabindex=&quot;1&quot;&gt;
&lt;option&gt;Spain&lt;/option&gt;
&lt;option&gt;United Kingdom&lt;/option&gt;
&lt;/select&gt;
&lt;/label&gt;
&lt;/fieldset&gt;
&lt;/form&gt;
</code>

</pre>
  </div>
</div>

<h3 class="section">10. Buttons</h3>
<p>There is some default styling for buttons, the basic uses a .button class and for your primary action combine it with .primary. There are also two positions for buttons, either sitting directly below the form or right aligned.</p>

<h4>10.1 Standard positioning</h4>
<ul class="nav horizontal tabs" data-trigger="tab" data-content=".tab-buttons-below">
  <li><a href="#">Demo</a></li>
  <li><a href="#">Code</a></li>
</ul>
<div class="tab-buttons-below">
  <div class="code_example">
    <form>
      <label>
        Email address
        <input type="email" tabindex="1">
      </label>
      <label>
        Password
        <input type="password" tabindex="1">
      </label>
      <button type="submit" class="button">Login</button>
    </form>

    <form class="form-horizontal">
      <label>
        <div>Email address</div>
        <input type="email" tabindex="1">
      </label>
      <label>
        <div>Password</div>
        <input type="password" tabindex="1">
      </label>
      <button type="submit" class="button">Login</button>
    </form>

  </div>
  <div>
<pre>
  <code class="language-markup">
&lt;form&gt;
  &lt;label&gt;
    Email address
    &lt;input type=&quot;email&quot; tabindex=&quot;1&quot;&gt;
  &lt;/label&gt;
  &lt;label&gt;
    Password
    &lt;input type=&quot;password&quot; tabindex=&quot;1&quot;&gt;
  &lt;/label&gt;
  &lt;button type=&quot;submit&quot; class=&quot;button&quot;&gt;Login&lt;/button&gt;
&lt;/form&gt;

&lt;form class=&quot;form-horizontal&quot;&gt;
&lt;label&gt;
&lt;div&gt;Email address&lt;/div&gt;
&lt;input type=&quot;email&quot; tabindex=&quot;1&quot;&gt;
&lt;/label&gt;
&lt;label&gt;
&lt;div&gt;Password&lt;/div&gt;
&lt;input type=&quot;password&quot; tabindex=&quot;1&quot;&gt;
&lt;/label&gt;
&lt;button type=&quot;submit&quot; class=&quot;button&quot;&gt;Login&lt;/button&gt;
&lt;/form&gt;
</code>

</pre>
  </div>
</div>

<h4>10.2 Right aligned</h4>
<p>Just wrap your submit button in a <code class="language-markup">&lt;div class=&quot;submit-wrapper&quot;&gt;</code>.</p>
<ul class="nav horizontal tabs" data-trigger="tab" data-content=".tab-buttons-right">
  <li><a href="#">Demo</a></li>
  <li><a href="#">Code</a></li>
</ul>
<div class="tab-buttons-right">
  <div class="code_example">
    <form>
      <label>
        Email address
        <input type="email" tabindex="1">
      </label>
      <label>
        Password
        <input type="password" tabindex="1">
      </label>
      <div class="submit-wrapper">
        <button type="submit" class="button">Login</button>
      </div>
    </form>

    <form class="form-horizontal">
      <label>
        <div>Email address</div>
        <input type="email" tabindex="1">
      </label>
      <label>
        <div>Password</div>
        <input type="password" tabindex="1">
      </label>
      <div class="submit-wrapper">
        <button type="submit" class="button">Login</button>
      </div>
    </form>

  </div>
  <div>
<pre>
  <code class="language-markup">
&lt;form&gt;
  &lt;label&gt;
    Email address
    &lt;input type=&quot;email&quot; tabindex=&quot;1&quot;&gt;
  &lt;/label&gt;
  &lt;label&gt;
    Password
    &lt;input type=&quot;password&quot; tabindex=&quot;1&quot;&gt;
  &lt;/label&gt;
  &lt;div class=&quot;submit-wrapper&quot;&gt;
    &lt;button type=&quot;submit&quot; class=&quot;button&quot;&gt;Login&lt;/button&gt;
  &lt;/div&gt;
&lt;/form&gt;

&lt;form class=&quot;form-horizontal&quot;&gt;
&lt;label&gt;
&lt;div&gt;Email address&lt;/div&gt;
&lt;input type=&quot;email&quot; tabindex=&quot;1&quot;&gt;
&lt;/label&gt;
&lt;label&gt;
&lt;div&gt;Password&lt;/div&gt;
&lt;input type=&quot;password&quot; tabindex=&quot;1&quot;&gt;
&lt;/label&gt;
&lt;div class=&quot;submit-wrapper&quot;&gt;
&lt;button type=&quot;submit&quot; class=&quot;button&quot;&gt;Login&lt;/button&gt;
&lt;/div&gt;
&lt;/form&gt;
</code>

</pre>
  </div>
</div>

<h3 class="section">11. Required fields</h3>
<p>Just add the class .required to the <code class="language-markup">&lt;label&gt;</code></p>

<ul class="nav horizontal tabs" data-trigger="tab" data-content=".tab-required">
  <li><a href="#">Demo</a></li>
  <li><a href="#">Code</a></li>
</ul>
<div class="tab-required">
  <div class="code_example">
    <form>
      <label class="required">
        Email
        <input type="email" tabindex="1">
      </label>
    </form>

    <form class="form-horizontal">
      <label class="required">
        <div>Email</div>
        <input type="email" tabindex="1">
      </label>
    </form>

  </div>
  <div>
<pre>
  <code class="language-markup">
&lt;form&gt;
  &lt;label class=&quot;required&quot;&gt;
    Email
    &lt;input type=&quot;email&quot; tabindex=&quot;1&quot;&gt;
  &lt;/label&gt;
&lt;/form&gt;

&lt;form class=&quot;form-horizontal&quot;&gt;
&lt;label class=&quot;required&quot;&gt;
&lt;div&gt;Email&lt;/div&gt;
&lt;input type=&quot;email&quot; tabindex=&quot;1&quot;&gt;
&lt;/label&gt;
&lt;/form&gt;
</code>

</pre>
  </div>
</div>

<h3 class="section">Responsive?</h3>
<p>The horizontal forms turn into stacked forms on small screens.</p>
