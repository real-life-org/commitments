# Circles

Circles is a money system in which every person issues their own currency and trust between people decides whose currency is accepted. It is an inspiration for the model, not a project of the consortium. This page describes Circles as its documentation states it, what the model took from it, and where the two differ.

Deutsch: [circles.de.md](circles.de.md) · Model: [model.md](../model.md)

## What Circles is

Every person has an account that mints their own currency, CRC, at one CRC per hour, from the day they join. Every person therefore receives a steady income in their own currency; Circles was originally conceived as a basic income. Every CRC balance shrinks by 7 % per year (demurrage); for a person, the hourly minting offsets this. Organisations have accounts too, but do not mint.

Trusting someone in Circles means accepting their CRC. The rule of trust: if Alice trusts Bob, anyone holding Bob's CRC can swap it one to one for CRC that Alice holds. Trust can be revoked at any time.

Payments travel along trust paths. Whoever pays someone they have no direct trust relation with is routed through people in between: at each step currency is swapped by the rule of trust, so the recipient receives CRC they accept. This works because all CRC are worth the same.

Members of a Circles group can mint a shared group currency, backed by the members' own CRC.

## What the model took from Circles

**The trust path as reach.** In Circles a payment reaches only people a trust path leads to, and only as far as there is balance along the path. In the model a promise travels exactly as far as the one who gives it has disclosed their trust, extended by those who vouch for them. There is no market on which a promise reaches strangers.

**Accepting as the meaning of trust.** In Circles trusting someone means accepting their currency. Here vouching for someone means accepting their promises: a standing declaration, revocable at any time, like trust in Circles.

## Where Circles differs from the model

**Units or promises.** Circles swaps fungible units along the path: Ben gives Carla his own CRC, not Anna's. Here a promise is "50 loaves by June"; Ben cannot swap it for a promise of his own that Carla needs. So the same promise travels on, and vouching is not a conversion but a take-back: Carla accepts Anna's promise because Ben takes it off her hands at any time. The full comparison is in [rltp.md](rltp.md).

![Circles swaps along the path, here the same promise travels and Ben takes it back](../diagrams/circles-vs-ours.en.svg)

**Issuance.** Circles mints currency continuously, one CRC per hour for every person, whether or not anything is offered. In the model nothing exists until a person promises something specific by a specific time.

**Expiry.** Circles shrinks every balance by 7 % per year (demurrage). In the model a promise does not shrink; it is redeemed or expires at its date.

**Groups.** A Circles group mints its own currency. In the model a circle never gives promises; only the people in it do.

## Sources

- [Circles documentation](https://docs.aboutcircles.com/): personal currencies, rule of trust, demurrage, groups
- <https://aboutcircles.com>
