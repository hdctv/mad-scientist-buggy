## About this project
This project is a microbit blocks program to control the robot rover described in chapter 6 of the BBC Micro Bit book - [Micro Bit for Mad Scientists](https://www.amazon.co.uk/micro-bit-Scientists-Simon-Monk/dp/1593279744). We used this [chassis](https://www.amazon.co.uk/Smart-Chassis-Motors-Encoder-Battery/dp/B01LXY7CM3/) and the kitronik compact motor [driver board](https://thepihut.com/products/compact-motor-driver-board-for-the-bbc-micro-bit). 

To control the buggy from an Android phone we used the free [Kitronik app](https://play.google.com/store/apps/details?id=com.kitronik.bluetoothcontrol).

If you try and follow the instructions in the book you will find that none of the links to pre-built microbit software seem to work - they're all either dead links or for V1 microbits. Also the bitty software app is a paid for app and the bitty software website seems to be defunct now. That's why we started from scratch and built this new code. It uses the extension specifically for the kitronik board which makes the code a lot simpler. Hope you find this useful!


> Open this page at [https://hdctv.github.io/mad-scientist-buggy/](https://hdctv.github.io/mad-scientist-buggy/)

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/hdctv/mad-scientist-buggy** and import

## Edit this project ![Build status badge](https://github.com/hdctv/mad-scientist-buggy/workflows/MakeCode/badge.svg)

To edit this repository in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/hdctv/mad-scientist-buggy** and click import

## Blocks preview

This image shows the blocks code from the last commit in master.
This image may take a few minutes to refresh.

![A rendered view of the blocks](https://github.com/hdctv/mad-scientist-buggy/raw/master/.github/makecode/blocks.png)

#### Metadata (used for search, rendering)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
