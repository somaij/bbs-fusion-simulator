---
canonical_url: "https://khbbsmelding.com/recoded"
layout: recoded
title: "KH Re:coded Command Synthesis Calculator – All Recipes & Combinations"
description: "Find every command synthesis recipe in Kingdom Hearts Re:coded. Look up what two commands make, or reverse-search to find all recipes for any command."
---


<div class="container">
<div class="title">
<div class="logo-wrapper">
<img src="/images/blue-heart.png" alt="Kingdom Hearts Re:coded logo">
<h1>Re:coded Command Synthesis</h1>
</div>
<div class="text">
<p>Combine two commands in the Command Matrix to synthesize a new one. Use Find Recipes to find out how to meld what you'd like, or figure out your next move with what you have with the Synthesize side.</p>
</div>
</div>

<div class="search-mode-toggle-container">
<div class="radio-wrapper">
<input type="radio" id="recoded-finder-tab" name="recoded-mode" value="reverse" checked>
<label for="recoded-finder-tab">Find Recipes</label>
</div>
<div class="radio-wrapper">
<input type="radio" id="recoded-meld" name="recoded-mode" value="meld">
<label for="recoded-meld">Synthesize</label>
</div>
</div>

<main id="commands-wrapper">
<section id="meld-menu">
  <div class="content">

    <!-- Synthesize mode -->
    <div id="recoded-meld-mode-container">
      <h2>SYNTHESIZE</h2>
      <div class="dropdown-wrapper">
        <label for="recoded-cmd1-search">SLOT <span class="text-orange">1</span></label>
        <div class="custom-dropdown" data-dropdown="recoded-cmd1">
          <div class="dropdown-header">
            <div id="recoded-cmd1icon" class="icon-wrapper"></div>
            <input type="text" class="dropdown-search" id="recoded-cmd1-search"
              placeholder="Search Command 1"
              onclick="recodedToggleDropdown(this.closest('.custom-dropdown'))"
              oninput="recodedFilterDropdownItems(this.closest('.custom-dropdown'))" />
            <div class="arrow"></div>
          </div>
          <div class="dropdown-list"></div>
        </div>
      </div>
      <div class="dropdown-wrapper">
        <label for="recoded-cmd2-search">SLOT <span class="text-orange">2</span></label>
        <div class="custom-dropdown disabled" data-dropdown="recoded-cmd2">
          <div class="dropdown-header">
            <div id="recoded-cmd2icon" class="icon-wrapper"></div>
            <input type="text" class="dropdown-search" id="recoded-cmd2-search"
              placeholder="Search Command 2"
              onclick="recodedToggleDropdown(this.closest('.custom-dropdown'))"
              oninput="recodedFilterDropdownItems(this.closest('.custom-dropdown'))" />
            <div class="arrow"></div>
          </div>
          <div class="dropdown-list"></div>
        </div>
      </div>
    </div>

    <!-- Find recipes mode -->
    <div id="recoded-reverse-mode-container" style="display: none;">
      <h2>FIND RECIPES</h2>
      <div class="dropdown-wrapper">
        <label for="recoded-result-cmd-search">COMMAND</label>
        <div class="custom-dropdown" data-dropdown="recoded-result-cmd">
          <div class="dropdown-header">
            <div id="recoded-result-cmd-icon" class="icon-wrapper"></div>
            <input type="text" class="dropdown-search" id="recoded-result-cmd-search"
              placeholder="Search for Command"
              onclick="recodedToggleDropdown(this.closest('.custom-dropdown'))"
              oninput="recodedFilterDropdownItems(this.closest('.custom-dropdown'))" />
            <div class="arrow"></div>
          </div>
          <div class="dropdown-list"></div>
        </div>
      </div>
      <div id="recoded-cmd-description" class="command-description"></div>
    </div>

  </div>
</section>

<section id="command-list-wrapper">
  <div class="content">
    <h2>COMMANDS</h2>
    <div id="recoded-result"></div>
    <div id="recoded-ingredients-result"></div>
  </div>
</section>
</main>

<div class="text" style="margin-top: 2rem; font-size: 0.8rem; opacity: 0.5;">
<p>Also playing <em>Birth by Sleep</em>? Try the <a href="/">BBS Melding Calculator</a>.</p>
</div>

</div>

<script src="{{ site.baseurl }}/scripts/recoded-calculator.js"></script>
