# Seam: the promise

Human Money Core ↔ Real Life Trust Protocol

What crosses this seam: the liquid promise. Human Money Core gives it its form (content, unit, expiry, holder chain, detection of double passing). RLTP gives it the identities under which it is signed, the delivery between people and devices, and the confirmations and vouches that make it acceptable.

This seam is filled by both projects together. Until then it holds a proposal and the open questions.

Deutsch: [promise.de.md](promise.de.md) · Model: [model.md](../model.md) · RLTP: [rltp.md](../projects/rltp.md)

## Proposal: three logs

**The log of the promise: the chain of holders.** A liquid promise carries its own history, like a bill of exchange carries its endorsements: Anna issues, Ben accepts and signs when passing on to Carla, Carla signs when passing on to Dana. Each entry is a signature under the community anchor of the previous holder. Whoever holds the promise can verify the whole chain offline, without asking anyone. The current holder is whoever stands at the end of the chain.

**The ledger of the giver.** Anna keeps a record of the promises she has issued, with expiry dates. This is her own state, encrypted and in sync across her devices. She knows what is outstanding. She does not know where it is, and does not need to.

**The space of the circle.** Purpose-bound promises have no chain, because they do not travel. They stand in the group space, and their log is the log of the circle: given, done, confirmed, expired. This is content in the group; the Access log keeps the order.

## Double passing

Ben could pass the same promise on to Carla and to Erik. Both chains are valid on their own. Human Money Core binds the promise to one device and spreads fingerprints so that the fraud shows.

Without a central party the answer stays the same, with a different consequence: two chains with the same fork meet at some point, at the latest at Anna, who delivers only once, or at a voucher who takes both back. Then it is proven who forked: Ben signed twice. The consequence is what the model says: whoever breaks their word gets no more confirmations, and vouchers withdraw their vouch. The loss falls on whoever holds the later chain, or on Ben's voucher if they took it back. The fingerprints of Human Money Core make the fork visible earlier than at Anna.

## Open questions

- Under which anchor does each holder sign the chain? The proposal says: the community anchor, so that a fork can be attributed. Anna then sees the whole path at redemption. Is that acceptable to both projects?
- Does a promise live on one device or on all devices of a person? Human Money Core answers "one device". RLTP is running multi-device experiments (E15); the answer should wait for them.
- Who detects a fork, and how do fingerprints travel between people who do not share a group?
- Which fields does the promise credential carry: content, unit, expiry, issuer anchor, holder chain, reference to vouches?
- How does a promise reach a holder who is offline, and what does delivery guarantee?
- Which Trust Task types move a promise: give, transfer, redeem, expire, and is "accept" its own step or part of transfer?
