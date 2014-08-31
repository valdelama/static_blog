---
title: "Responsive calendar"
date: 2013-02-09
head_extras: |
  <link href="/css/standalone/cal.css" rel="stylesheet">
---
Just a simple calendar I made, more than anything as a proof of concept that
it can be easily done without using a table.

<!--more-->

One thing to note though is that this uses some CSS3 that won't work in older browsers, in particular:

<pre>
  <code class="language-css">
.cal_row &gt; div:first-child,
.cal_row &gt; div:nth-child(7n+8) {
  border-left: 1px solid #e6e6e6;
}
  </code>
</pre>

<p>This gives a left border to the first day of each row (all the other days
have a right border only so as not to end up with a thick, double border). If
you need it to look perfect in old browsers then this is an easy fix with a bit
of javascript.</p>

<p class="space_below">The idea behind this calendar was that
the user would click on the day to add a new event and click on the link inside
the day to edit existing events, this would happen in a modal window. I'll
update it in another post with some of the styles for those actions. </p>

<div class="calendar">
<div class="day_names cal_row">
<div>Sun<span>day</span></div>
<div>Mon<span>day</span></div>
<div>Tue<span>sday</span></div>
<div>Wed<span>nesday</span></div>
<div>Thur<span>sday</span></div>
<div>Fri<span>day</span></div>
<div>Sat<span>urday</span></div>
</div>
<div class="cal_row">
<div class="prev_month">
<i>29</i>
</div>
<div class="prev_month">
<i>30</i>
</div>
<div>
<i>1</i>
</div>
<div>
<i>2</i>
</div>
<div>
<i>3</i>
</div>
<div>
<i>4</i>
</div>
<div>
<i>5</i>
</div>
<div>
<i>6</i>
</div>
<div>
<i>7</i>
</div>
<div>
<i>8</i>
</div>
<div>
<i>9</i>
</div>
<div class="has_event">
<i>10</i>
<a href="#">Bob - Anniversary</a>
</div>
<div>
<i>11</i>
</div>
<div>
<i>12</i>
</div>
<div>
<i>13</i>
</div>
<div>
<i>14</i>
</div>
<div>
<i>15</i>
</div>
<div>
<i>16</i>
</div>
<div>
<i>17</i>
</div>
<div>
<i>18</i>
</div>
<div>
<i>19</i>
</div>
<div>
<i>20</i>
</div>
<div>
<i>21</i>
</div>
<div>
<i>22</i>
</div>
<div>
<i>23</i>
</div>
<div>
<i>24</i>
</div>
<div>
<i>25</i>
</div>
<div>
<i>26</i>
</div>
<div>
<i>27</i>
</div>
<div>
<i>28</i>
</div>
<div>
<i>29</i>
</div>
<div>
<i>30</i>
</div>
<div>
<i>31</i>
</div>
<div class="next_month">
<i>June 1</i>
</div>
<div class="next_month">
<i>2</i>
</div>
</div>
</div>
