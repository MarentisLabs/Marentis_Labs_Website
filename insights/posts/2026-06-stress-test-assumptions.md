---
title: "Stress Tests Are Only as Good as the Governance of Their Assumptions"
description: "Boards sign off the capital number a stress test produces and take its assumptions on trust. The discretion that sets the number sits in the inputs, and that is the half of the test most boards never govern."
author: "Owen Vallis"
date: 2026-06-26
categories: [Governance, Risk Management, Capital]
permalink: /insights/posts/stress-test-assumptions/
---

On 24 June the Federal Reserve published its 2026 stress test results for 32 banks. The scenario behind them had reversed direction from the year before.

Last year's market shock assumed falling rates. This year's assumes the opposite: persistently high inflation, surging commodity prices, both short and long Treasury rates rising sharply, equities falling. The Fed reached for the 1970s oil crisis as its reference point. For a bank with a large trading book, that reversal moves the capital number.

Nobody outside the Fed voted on the reversal. The direction of the scenario, the severity of the primary shocks, the percentile at which "severe" is set, all of it is chosen by scenario designers, and most of the reasoning stays undisclosed. The econometric engine that turns those choices into capital requirements is sophisticated. The handful of inputs that drive the engine are judgement.

This is the part boards rarely look at.

## The number is set in the inputs

The Bank Policy Institute's Greg Hopper has spent four years making one argument about the Fed's Global Market Shock, and it is a governance argument before it is a technical one. The primary risk factor shocks (equities, credit, rates, commodities, FX) that drive every other number in the test are selected with no objective constraint: no published scenario narrative, no stated percentile, no fixed historical window. The Fed can set them, and therefore set bank capital requirements, more or less where it likes.

The sensitivity is the uncomfortable part. Within the "severe" band for credit, the difference between calibrating to the 99th percentile and the 99.7th is a small move on paper. At those percentiles the data is sparse and the shock values are not. That small move produces large changes in the credit spread shock, and the loss that flows from it runs to hundreds of millions of dollars. The Fed has published detailed model documentation explaining how the engine works. It has not explained why it chose the specific inputs it fed in.

So the precision of the output is real and the precision of the input is an illusion. A board that scrutinises the first while taking the second on trust is governing the wrong half of the test.

## "That is an American problem"

The obvious objection from a UK risk committee is that this is a Fed problem. The Bank of England runs its scenario centrally, publishes it, and benchmarks the shocks to history. The assumptions are not ours to challenge.

That holds less than it used to, in three ways.

First, the BoE scenario is itself a set of discretionary choices, and they move. The 2025 Bank Capital Stress Test ran a stagflationary supply shock that looks very like the Fed's 2026 one: UK GDP down 5%, Bank Rate up to 8%, inflation at 10%, house prices down 28%, global trade contracting 20%. The Bank is more transparent than the Fed about how it gets there. It starts from the first percentile of historical advanced-economy data, benchmarks to the financial crisis, then applies the FPC's judgement. The judgement is where the discretion lives. UK house prices fall 28% in this test, rather than the steeper fall in the 2022/23 exercise, for one stated reason: the Bank removed a countercyclical judgement that housing vulnerabilities were elevated. One committee view, withdrawn, and a headline shock moves. Alongside the December results the FPC cut its benchmark for system-wide bank capital from around 14% to around 13% of risk-weighted assets, its first such reduction since 2015. The firms that make up three quarters of UK lending took the output, and the lower requirement, and reported it.

Second, more of the scenario is now yours to own. In PS15/26 the PRA dropped its plan to prescribe credit scenarios for Pillar 2A and confirmed the ICAAP as a firm-owned assessment. The board chooses the stress methodology, owns it, and defends it at the next SREP. There is no regulator template left to point at.

Third, the next supervisory exercise adds assumptions most boards have never governed. The EBA's draft methodology for the 2027 EU-wide stress test, out for consultation since 11 June, puts a dedicated climate module inside the capital test for the first time: transition shocks calibrated to carbon prices and sector value-added, and physical flood risk modelled at a 1% annual probability. UK groups with EU subsidiaries will run it. The probability attached to a flood map is now a capital assumption, and very few risk committees have the analytical infrastructure to ask whether it is the right one.

## Why the questions do not get asked

I built and signed off ICAAPs under the PRA for years, and engaged the supervisor directly on Basel capital, model governance and stress testing at Credit Suisse. The model was rarely the hard part. The hard part was defending the judgement behind it when the supervisor pushed, and being able to show that someone independent of the team that built the scenario had tested whether its assumptions held.

The supervisor already has a name for this. The PRA's model risk principles (SS1/23), like the revised US guidance from the Fed, FDIC and OCC (SR 26-2, April 2026), require effective challenge, meaning critical review by people with the expertise, the independence and the standing to force a change, covering a model's design, its assumptions and its qualitative judgements. Boards mostly apply that standard to the models. They rarely apply it to the scenario assumptions that drive the models, which is where the discretion concentrates.

Consider one assumption buried inside both the UK and US scenarios, the policy response. Each assumes a central bank raising rates hard and holding into a supply shock, Bank Rate to 8% in the BoE's case. Whether that is the right reaction is contested. IMF research published in May 2026 argues the optimal response to a supply shock is a threshold pivot, looking through at first, then moving sharply once overheating crosses a line. The scenario assumes something simpler and more aggressive. The assumed rate path is a judgement about how a central bank behaves, and a board could reasonably ask whether the scenario it signed off rests on a defensible one.

That challenge function is what most boards are missing. Risk committees receive stress test outputs as finished products and ask finished-product questions: how did we perform, where are the concentrations, what is the remediation plan. The prior questions, the ones about the inputs, sit unasked, partly because the board is not equipped to ask them and partly because the capability to answer them is not kept on the shelf.

Five questions separate a board that governs the assumptions from one that signs off the answers.

- What primary assumptions drove this scenario, and how were they calibrated?
- If those inputs moved by one percentile in either direction, what happens to our capital position?
- Where does this scenario overlap the FRTB market risk framework, and are we capitalising the same risk twice?
- If the scenario direction reverses next year, as the Fed's just did, where do we stand?
- Who in this firm has the mandate and the capability to challenge the scenario, not just the results?

The last one is the test. If the honest answer is "the team that built the scenario", there is no challenge function, only a review of the team's own work.

## The point

A stress test is an argument about the future expressed as a capital number. The number inherits every assumption in the argument, and every assumption is a choice someone made. Governing the number means governing the choices, and that needs someone whose job is to challenge them, independent of the people who made them.

That is the Red Team Protocol applied to stress testing. The bank already does the quantitative work, and does it well. The job here is to challenge whether the board's oversight of the assumptions is adequate, before the supervisor or events do it instead.

If your risk committee met tomorrow, could it answer the fifth question with a name that is not on the modelling team?

<style>
.article-prose .cta-buttons a { text-decoration: none; }
.article-prose .cta-buttons a.btn-gold,
.article-prose .cta-buttons a.btn-gold:hover { color: var(--ml-white); }
.article-prose .cta-buttons a.btn-primary { color: var(--ml-white); }
.article-prose .cta-buttons a.btn-primary:hover { color: var(--ml-charcoal); }
</style>

<section class="py-16 md:py-20 bg-white">
  <div class="container mx-auto px-6 max-w-4xl text-center reveal">
    <p class="text-xs font-semibold uppercase tracking-widest mb-3" style="color: var(--ml-gold); letter-spacing: 0.2em;">From the SGaaS White Paper</p>
    <h2 class="text-2xl md:text-3xl font-bold text-ml-charcoal mb-5 leading-snug">
      The full evidence and the structural response
    </h2>
    <p class="text-ml-slate-grey text-base leading-relaxed max-w-2xl mx-auto mb-8">
      Governing the assumptions behind a stress test is one application of a wider argument: that governance failures are failures of challenge and independence, not of documentation. The white paper sets out the evidence base and the four-tier SGaaS delivery architecture that institutionalises that challenge by design.
    </p>
    <div class="cta-buttons flex flex-wrap justify-center gap-4">
      <a href="/white-paper/" class="btn-gold px-10 py-4">Download the Paper &rarr;</a>
      <a href="/contact/" class="btn-primary px-10 py-4">Schedule a Call</a>
    </div>
  </div>
</section>

---

*Owen Vallis is the founder of Marentis Labs, the firm that originated Strategic Governance as a Service. He spent ten years as UK Head of Fiduciary Risk Management at Credit Suisse and holds active board roles in the public and charity sectors. [Schedule a confidential discussion](/contact/).*
