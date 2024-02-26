---
title: 'cocoa sync: it brings unmanaged software under chocolatey management'
description: 'i made a program to upgrade existing programs to chocolatey packages'
publishDate: '2024-02-26'
updatedDate: '2024-02-26'
image: '/content/cocoa-sync.png'
---

## i got bored

i had a few hours before work this morning and got a little meticulous about the state of my computer. what if i had to re-install windows? linux users can have most of their environment setup with just a few commands, but with windows? not so much.

i have a few programs installed with chocolatey, but there's quite a few that i've just installed normally. it's not like i can just `choco upgrade all` and have everything neatly updated.

## choco sync?

i did some perusing, surely i can "upgrade" all my existing programs to chocolatey packages, right? well, not exactly. i found the [choco sync](https://docs.chocolatey.org/en-us/features/package-synchronization/sync-command) command on the chocolatey docs which seemed to be exactly what i was looking for!

except it's only available for business users, which means you're looking at a minimum of $17/license per year with a minimum of 100 licenses coming to a total of **$1.7k**. idk about u but just wanting to bring my locally installed programs under chocolatey management once or twice a year, doesn't seem worth it.

## cocoa sync!

so i made cocoa sync! it's a tool that identifies your locally installed programs, filters out the nonsense and searches for corresponding chocolatey packages to install.

it's not perfect, and there are hiccups with some programs (notepad++ being notepadplusplus on chocolatey) but thats been mostly resolved with some trickery which you can read more about on the [repository page](https://github.com/umbranoxio/cocoa-sync?tab=readme-ov-file#editing-known-mappings).

i've used it myself and it works on my machine™️. i can now `choco upgrade all` to my heart's content, and all my programs will be updated.

## lemme at it

alright chill here's the link: [click here](https://github.com/umbranoxio/cocoa-sync)
