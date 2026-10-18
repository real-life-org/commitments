# The model in RLTP

How promises, confirmation, vouching and circles map onto the Real Life Trust Protocol. What it already carries, what remains to be cast, and why a promise travels exactly as far as the trust of the one who gives it.

Deutsch: [rltp.de.md](rltp.de.md) · Model: [model.md](../model.md)

## Mapping

| Model | RLTP today | To cast |
|---|---|---|
| Person | Identity with one anchor per context: pairwise per relationship, per group, and the community anchor as one's own stable coordinate. Encounter: two people confirm they recognised each other. Anchor mapping: I show you that two of my anchors belong to me. | nothing |
| Promise | no credential. Every RLTP message is a Trust Task; the life of a promise (give, transfer, redeem) is a sequence of Trust Tasks. | the credential and the task types, see seam [promise](../seams/promise.md) |
| Confirmation | Gen 2: attestation, live. Gen 3: not cast. DTG offers the Endorsement Credential for it. | the attestation casting: to which anchor, how portable |
| Vouching | not present. `vouch@2` is bound to one admission, `introduction-voucher` is an artifact of introductions. | a new type: a standing, revocable declaration "I accept your promises" |
| Trust | the trust act: disclose the mapping, be included in the other's star. | nothing, but a second meaning, see below |
| Circle | Access group: encrypted place, rules as data, no admins, membership = key. | nothing |
| Purpose-bound promise | content in the group space, visible to members, like candidacy content today. | a content type |

## Why a promise needs the community anchor

A liquid promise is passed on. Whoever accepts it must be able to do two things: recognise who gave it, and see what that person has kept so far. Both hang on an identity. Which one decides how far the promise gets.

Anna knows Ben and Carla. With each she has a separate pairwise anchor known only to the two of them. She also has a community anchor: her one stable coordinate, disclosed to those she trusts.

**Promise under the pairwise anchor.** Anna gives Ben a promise signed with the anchor only Ben knows. Ben passes it on to Carla. Carla sees a signature she cannot attribute to any person, and no confirmations for it. The promise ends with Ben.

**Promise under the community anchor.** Anna gives Ben the same promise signed with her community anchor. Ben passes it on to Carla. If Anna has disclosed the anchor to Carla, Carla recognises Anna and sees her confirmations. If not, Ben's vouch helps: Ben accepts Anna's promises, Carla knows Ben, so Carla takes it from Ben.

![Reach of a promise: under the community anchor it reaches Carla through Ben's vouch, under the pairwise anchor it ends with Ben](../diagrams/reach.en.svg)

> A promise travels exactly as far as the one who gives it has disclosed their trust, extended by those who vouch for them.

Liquidity is therefore not a property of the promise but of the trust network around the one who gives it. There is no market on which a promise reaches strangers. Whoever shows nobody their mapping has promises nobody can pass on. And the trust act gains a second meaning next to the star: it opens the way for one's own promises.

For the casting this means: the promise credential has the community anchor as issuer. Confirmations and vouches hang on the same anchor. Confirmations that arise in a group context must be mappable to this anchor when presented; that is the open portability question in the Visibility spec, and here it has its purpose.

## Vouching as take-back, not as exchange rate

Circles knows the same idea: everyone mints their own units, and a trust path means "I accept yours like mine". Payments run along the paths because units are swapped on the way: B gives C not A's units but his own. That works because all units are the same.

Here a promise is "50 loaves by June". B cannot give C an own promise in exchange that C needs. So the same promise travels on, and vouching does something different from Circles: it is not a conversion but a take-back. C accepts Anna's promise because Ben will take it off her hands at any time. The vouch gives the promise a safe next step. That makes it liquid although there are no uniform units.

![Circles swaps along the path, here the same promise travels and Ben takes it back](../diagrams/circles-vs-ours.en.svg)

From this follows the shape of the type: a vouch is a standing declaration by B about A, signed by B, revocable, with an optional limit. It is held by B and shown to whoever is to accept Anna's promise. It is not a credential about A that A holds, but an offer by B.

## Three acts in a relationship

RLTP knows two acts between people: **recognising** (the encounter: two people confirm they met) and **trusting** (I show you my context, you may include me in your star). Vouching is the third: **standing for** (I accept your promises). Each is voluntary, one-directional and has its own consequence. Recognising makes you visible, trusting makes your promises transferable, standing for makes them acceptable to people who do not know you.

## Circles

A circle is an Access group: an encrypted place with rules its members set as data. Purpose-bound promises are content in this place. Whoever wants to give one must hold the key, so must be a member, and one becomes a member through invitation and admission by the circle's rules.

Liquid promises do not need the place. Whoever deals with a circle deals with people from the circle, under their community anchors. It follows that two items left open in the Access spec no longer have a purpose: credentials a group issues outward, and rights for non-members. Circles do not speak, and whoever is outside deals liquidly.

## To cast

1. **Confirmation.** A credential from person to person: delivered, reliable, thank you, with an optional reference to a promise. Issuer and subject under community anchors where the mapping exists; otherwise under the group anchor with mapping on presentation. Held by the confirmed. Never revoked.
2. **Vouch.** A standing declaration "I accept A's promises", with an optional limit, revocable. Held by the voucher, shown to whoever is to accept. A credential whose holder is its issuer.
3. **Promise.** A credential (the voucher) and the Trust Tasks that move it: give, transfer, redeem, expire. Issuer under the community anchor. Form, log and double-spending: seam [promise](../seams/promise.md), together with Human Money Core.

Everything else exists: identity, encounter, mapping, star, groups, delivery.

## Sources

- [Real Life Trust Protocol](https://trust-protocol.real-life.org): Identity, Encounter, Access, Membership Tasks, Network Visibility
- [Human Money Core](https://github.com/minutogit/human-money-core)
- [DTG Credentials](https://github.com/trustoverip/dtgwg-cred-tf) (Endorsement Credential)
- [Circles](https://joincircles.net/)
