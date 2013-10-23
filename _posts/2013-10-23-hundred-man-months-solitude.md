---
layout: post
title: One Hundred Man-Years of Solitude
date: 2013-10-23 14:56 UTC-5
---

By all accounts the new HealthCare.gov website, supposedly America’s new frontier for ensuring everyone gets a shot at decent healthcare, sucks. Almost as bad is some of the reporting that’s been done around the failures.

The *New York Times* recently [ran an article](http://www.nytimes.com/2013/10/21/us/insurance-site-seen-needing-weeks-to-fix.html?_r=1&&pagewanted=all) on the problems contractors face in fixing the website’s problems. The *Times* reports:

> One specialist said that as many as five million lines of software code may need to be rewritten before the Web site runs properly.
>
> […]
>
> According to one specialist, the Web site contains about 500 million lines of software code. By comparison, a large bank’s computer system is typically about one-fifth that size.

In [response](http://www.slate.com/articles/technology/bitwise/2013/10/healthcare_gov_problems_what_5_million_lines_of_code_really_means.html), David Auerbach at *Slate* rightly takes issue with these claims but completely misses the point. Auerbach—a former software engineer at Microsoft and Google, according to his personal website—sees it as a semantic issue: not all lines of code are treated equal. That’s, of course, true. All lines of code are *not* created equal, and that’s why no engineer/text editor/product manager/designer worth their salt even bothers talking about this pointless metric. The implication here is that the HealthCare.gov code is not as complicated as the *Times* suggests. That’s also undoubtedly true, but not because one woman’s 50 million lines of code is another woman’s 50 lines of code.

The elephant in the room here is that there is *absolutely no way* that the engineers who developed HealthCare.gov wrote 50 million lines of code, much less 500 million.[^1] We all understand that there are many moving pieces there, but that’s the case with any sufficiently complicated software. It seems to me that this rewriting-50-million-lines-of-code claim is a smokescreen for the real scandal here: the federal government’s horribly inept contractor-development practices. Hiring one contractor to do the database, one do to the design, another to do the login system, another for income verification, etc, is the road to doom. In other words, the point isn’t that HealthCare.gov is complex. The point is that it is a deeply mismanaged project. Now everyone from government leaders to the contractors working on the project are beside themselves promising quick fixes. It’s not going to happen. As Auerbach’s *Slate* colleague Matt Yglesias [points out](http://www.slate.com/blogs/moneybox/2013/10/21/obamacare_and_the_mythical_man_month.html), Brooks’s mythical man-month is as elusive as ever: you can’t add manpower to a project to get it done faster. No, the contractors who made this mess are stuck with themselves and with each other until it’s fixed. And you can bet that will not be anytime before the end of the year.

[^1]:
    By comparison, the most recent major version of the Linux kernel [has fewer than 17 million lines](http://www.h-online.com/open/features/What-s-new-in-Linux-3-10-1902270.html?page=3). Even huge operating systems, like the one that runs Macs, have many fewer than 500 million. Mac OS X 10.4 (froom 2006) had [86 million lines of code](http://www.engadget.com/2006/08/07/live-from-wwdc-2006-steve-jobs-keynote/). That’s surely increased by now but is definitely nowhere near 500 million. Even the Curiosity rover, a massive feat of human engineering, only carried [3.8 million lines of code](https://www.usenix.org/conference/hotdep12/tbd) with it to Mars.

    The only other explanation for the exaggerated number I’ve seen [was suggested](https://twitter.com/joshtpm/status/392395388348407808) by TPM’s Josh Marshall, who suggests that the number might include dependencies on other code (e.g., open source software and other code the developers relied on but didn’t themselves write). But those numbers cannot be included in a proper counting of the code, and even if they could—as Marshall himself then acknowledges–they are still unlikely to reach anywhere near 500 million.
