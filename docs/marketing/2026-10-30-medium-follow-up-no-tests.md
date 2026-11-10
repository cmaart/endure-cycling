# Medium follow-up: "How I got faster in Triathlon", part two

Status: draft v2, 2026-10-30. Not published.

Part one: https://medium.com/@christophmartin/how-i-got-faster-in-triathlon-49abfca5751e (12 Feb 2023)

## Title options

1. **I Stopped Testing My FTP Three Years Ago. Then It Became an App.** (chosen direction)
2. I Turned My Training Notes Into an App. Rule One: No FTP Tests.
3. I Stopped Testing My FTP. Then I Had to Teach an App to Do Without It.

Subtitle: *Part two of "How I got faster in Triathlon": how the lessons from that post turned into the rules of a training app, and what I got wrong on the way.*

---

# I Stopped Testing My FTP Three Years Ago. Then It Became an App.

*Part two of "How I got faster in Triathlon": how the lessons from that post turned into the rules of a training app, and what I got wrong on the way.*

[Part one](https://medium.com/@christophmartin/how-i-got-faster-in-triathlon-49abfca5751e) ended with a list of things I believed about training after five years of age-group triathlon. FTP tests gave me the wrong number. Easy days had to stay easy. VO2max work went best as short intervals. And one line I still repeat: "Every workout is a test and the best test is a race."

A list like that is easy to write and hard to use. On a Tuesday morning, tired, with 70 minutes before work, it doesn't tell you whether to do the intervals. So I started building ENDURE, a cycling training app, and tried to turn those beliefs into rules a piece of software could follow. This post is about that translation: the decisions it forced, and the places where my own rules turned out to be wrong once a machine applied them literally.

## Rule one: no feature may need a test

The first decision came before any screen existed. ENDURE would never ask for an FTP test, a ramp test or a lab visit, and no feature could depend on one. Everything has to come from the rides people do anyway, indoors, outdoors or imported from Strava and intervals.icu.

That sounds simple until you have to produce a number. Every ride now yields an FTP candidate from its best 20, 30, 40 and 60 minutes, each with its own factor, and a trend estimate weighs those candidates by how good the data behind them is. Our first formula only looked at the best 20 minutes. It undersold long efforts: a 43-minute ride at 304 W average came out at 299 W, barely above the 290 W in the rider's profile. Long steady efforts are exactly the ones that say the most about threshold, so we changed the formula.

The second thing I learned: the app should never overwrite your FTP on its own. When a ride clearly beats the current value, ENDURE asks whether you want to take the new number. A test result that silently lands in your zones is how I ended up training off an inflated FTP in the first place.

## Turning "my goal" into a card

In part one I wrote that I have a relatively high VO2max but can't hold a large share of it, so my goal was to raise that share. At the time I needed an INSCYD diagnostic to know that.

ENDURE has a card for it now, called Potential. It compares your FTP with your best five-minute power from recent hard efforts and tells you which lever is next: threshold work if your FTP sits low against your ceiling, VO2max work if it's already close to the top.

The first version got it wrong. It derived the ceiling from our VO2max estimate, and an outside sport-science review pointed out that this was circular: the VO2max estimate itself comes from power, so the calculation divided power by power and called it physiology. The verdict jumped by up to ten percentage points between rides with no change in the rider. We rebuilt it on real five-minute efforts, and it only gives a verdict when your heart rate shows the effort was a real maximal one. Without one, it says so and waits.

## Your numbers, not mine

When I explain how I train, I use my own numbers. A normal run for me is 40 to 60 minutes and a long one is 70. Early on, numbers like these crept into the app as fixed limits, and they were wrong for almost everyone else.

So the next rule became: no absolute numbers in the coach's decisions. Everything is measured against the rider's own data. A normal session length comes from your last eight weeks. A run gets capped against your typical run, not mine. How much threshold work a session may hold depends on what you rode recently. My numbers are examples in conversations, nothing more.

## Interviewing myself

The hardest part was the coach. A language model will happily write a week that sounds reasonable and breaks every principle you care about. Before I wrote down what ENDURE's coach believes, I looked at what had gone wrong with other AI plans I tried: sessions that were hard to follow, the whole toolbox thrown in every week without any build-up, or weeks that looked the same all the way to race day.

So I built a questionnaire for myself, around sixty questions plus a set of example weeks. A maintain week after three weeks without intensity: which of these three would you pick, and what would you change? A recovery week after three build weeks? A race week before a Gran Fondo? I answered all of it, and the answers became a document the coach has to follow.

Some of those answers are hard rules the model cannot override. The coach never plans a rest day for you; you set them. No threshold or sweet spot block runs longer than 20 minutes, it gets split instead. Hard days never sit next to each other unless you ask for a block. No planned ride is longer than three hours. Other answers are guidance the coach follows in its own words: VO2max starts with 30/30s, 40/20s come after those, a typical threshold session is 3 × 8 minutes, and most of the week stays easy. If you ask for a specific workout, you get it.

## Where my rules broke

Writing a rule down and watching software apply it are two different experiences. A few of mine didn't survive.

I first gave the coach progression ladders, a fixed sequence of interval sets to step through. The coach turned procedural. It moved up a rung because the ladder said so, not because the rider was ready. We replaced the ladders with time in the zone: a planned session may hold at most one and a half times the most threshold-range time you rode in a single ride during the last four weeks. How to split that is the coach's call. That rule exists because the planner once followed a 3 × 8 minute sweet spot session with two 2 × 20 sessions in the same week.

Another one: the app counted a ride as hard when its training stress was high. A two-hour easy ride adds up to a lot of stress at a low intensity, so a rider with long easy weekends looked like they were training hard every week. In reality they had gone three weeks without any intensity. Now a ride also has to be intense to count as hard.

And a skipped session is a missed session. Early versions let the coach call a day without a ride a rest day, which is a friendly lie. The coach now knows the difference and plans with it.

## Proposals, not orders

The most personal part of part one was about coaching. I told everyone to get a coach and then admitted I'd stopped working with mine, because I found it hard to tell another person "this is too much right now".

That shaped how ENDURE talks to you. The day starts with a short check-in, and the coach's call for the day follows from it together with your recent training. If you have a session planned, the coach never changes it on its own. It proposes a lighter, shorter or harder version and explains why, and you take it or keep your plan. Weekly plans work the same way: the coach drafts the coming weeks around your goal event, and nothing reaches your calendar until you accept it. You can ask it why in the chat, which is the "be your own assistant coach" idea from part one.

## What we're testing now

The current step goes back to "every workout is a test". For each intensity range (tempo, sweet spot, threshold, VO2max) ENDURE tracks how much work you're used to holding in a single ride, learned only from your own rides. A planned session is then rated against that: maintain, push, or too big a step. The levels rise when you ride more than before, and they come down slowly when you stop. It's the closest thing to a test the app has, and it runs every time you ride. It's in testing and not yet open to everyone.

## The trade-off

Going without tests has costs. The estimates need a few weeks of riding, they follow your form with some delay, and they can only see what you show them. I still think that's the better deal. A test is one value from one day, and a 5 % error from a bad night or a great morning sets your zones for the next six weeks. You either train in the wrong zones or with confidence you haven't earned. An estimate that's a little behind but keeps listening is the safer mistake.

---

ENDURE runs on iOS, Android and Windows, with a web version in the browser, and you can try it for 14 days without entering payment details at [endure-cycling.com](https://www.endure-cycling.com). If you think I'm wrong about tests, say so in the comments. I'd like to hear it.
