---
title: KH BBS Melding Calculator & Command Fusion Guide
layout: default
description: Use this KH BBS Melding Calculator to simulate command fusions, discover abilities, and plan your best build. Find recipes for Second Chance, EXP Walker, and more.
---
<div class="container">
<div class="title">
<div class="logo-wrapper">
<img src="/images/blue-heart.png" alt="Kingdom Hearts Birth by Sleep logo">
<h1>Birth by Sleep Melding Assistant</h1>
</div>

<div class="text">
<p>Welcome to the ultimate Command Fusion Simulator for Kingdom Hearts Birth by Sleep! This tool helps
you mix and match different commands, view fusion odds, and discover bonus abilities. No more
guessing - instantly see what your next powerful command will be!

Select your ingredients below and see the results instantly.</p>
<p>
Let's D-Link and help you find the commands you want to meld.
</p>
</div>
</div>
<div class="search-mode-toggle-container">

<div class="radio-wrapper">
<input type="radio" id="reverse" name="mode" value="reverse" checked>
<label for="reverse">Find Recipes</label>

</div>
<div class="radio-wrapper">
<input type="radio" id="meld" name="mode" value="meld">
<label for="meld">Meld Simulator</label>

</div>


</div>
<main id="commands-wrapper">
<section id="meld-menu">
<div id="meld-mode-container">
<div class="content">
<h2>MELD</h2>
<div class="dropdown-wrapper">
    <label for="cmd1-search">
        SLOT <span class="text-orange">1</span>
    </label>
    <div class="custom-dropdown" data-dropdown="cmd1">
        <div class="dropdown-header">
            <div id="cmd1icon" class="icon-wrapper"></div>
            <input type="text" class="dropdown-search" id="cmd1-search"
                placeholder="Search Command 1"
                onclick="toggleDropdown(this.closest('.custom-dropdown'))"
                oninput="filterDropdownItems(this.closest('.custom-dropdown'))" />
            <div class="arrow"></div>
        </div>
        <div class="dropdown-list"></div>
    </div>
</div>

<div class="dropdown-wrapper">
    <label for="cmd2-search">
        SLOT <span class="text-orange">2</span>
    </label>
    <div class="custom-dropdown disabled" data-dropdown="cmd2">
        <div class="dropdown-header">
            <div id="cmd2icon" class="icon-wrapper"></div>
            <input type="text" class="dropdown-search" id="cmd2-search"
                placeholder="Search Command 2"
                onclick="toggleDropdown(this.closest('.custom-dropdown'))"
                oninput="filterDropdownItems(this.closest('.custom-dropdown'))" />
            <div class="arrow"></div>
        </div>
        <div class="dropdown-list"></div>
    </div>
</div>

<div class="dropdown-wrapper item-dropdown-wrapper">
    <label for="crystal-search">ITEM</label>
    <div class="custom-dropdown" data-dropdown="crystal">
        <div class="dropdown-header">
            <div id="itemicon" class="icon-wrapper"><img src='images/item-gray.png' alt='Item'
                    class='type-icon'></div>
            <input type="text" class="dropdown-search" id="crystal-search"
                placeholder="Search Crystal"
                onclick="toggleDropdown(this.closest('.custom-dropdown'))"
                oninput="filterDropdownItems(this.closest('.custom-dropdown'))" />
            <div class="arrow"></div>
        </div>
        <div class="dropdown-list"></div>
    </div>
</div>

<button onclick="fuseCommands()">FUSE</button>
</div>
</div>

<!-- Reverse Mode (Result to Ingredients) -->
<div id="reverse-mode-container" style="display: none;">
<div class="content">
<h2>FIND RECIPES</h2>
<div class="dropdown-wrapper">
    <label for="result-cmd-search">
        COMMAND
    </label>
    <div class="custom-dropdown" data-dropdown="result-cmd">
        <div class="dropdown-header">
            <div id="result-cmd-icon" class="icon-wrapper"></div>
            <input type="text" class="dropdown-search" id="result-cmd-search"
                placeholder="Search for Command"
                onclick="toggleDropdown(this.closest('.custom-dropdown'))"
                oninput="filterDropdownItems(this.closest('.custom-dropdown'))" />
            <div class="arrow"></div>
        </div>
        <div class="dropdown-list"></div>
    </div>
</div>

<div class="dropdown-wrapper item-dropdown-wrapper">
    <label for="reverse-crystal-search">ITEM</label>
    <div class="custom-dropdown" data-dropdown="reverse-crystal">
        <div class="dropdown-header">
            <div id="reverse-itemicon" class="icon-wrapper"><img src='images/item-gray.png'
                    alt='Item' class='type-icon'></div>
            <input type="text" class="dropdown-search" id="reverse-crystal-search"
                placeholder="Search Crystal"
                onclick="toggleDropdown(this.closest('.custom-dropdown'))"
                oninput="filterDropdownItems(this.closest('.custom-dropdown'))" />
            <div class="arrow"></div>
        </div>
        <div class="dropdown-list"></div>
    </div>
</div>
</div>
</div>
</section>
<section id="command-list-wrapper">
<div class="content">
<h2>COMMANDS</h2>
<div id="result"></div>
<div id="ingredients-result"></div>
</div>
</section>
</main>
<div class="ad-wrapper">
    {% include adsense_manual_display_horizontal.html %}
</div>
</div>

<script src="{{ site.baseurl }}/scripts/calculator.js"></script>