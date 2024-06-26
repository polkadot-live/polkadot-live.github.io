---
slug: /
sidebar_position: 1
sidebar_label: Introduction
---

# Polkadot Live

## Summary

- Decentralized Polkadot notifications and chain interactions on the Desktop.
- Receive both native OS notifications and rendered event items within a dedicated UI.
- Seamlessly import any Polkadot, Kusama or Westend address, with additional network support on the roadmap.
- Import addresses via Polkadot Vault, Ledger, or simply pasting an address for read-only mode. 
- Subscribe to balance transfers, and changes to both your nomination pool and direct nominating setup.
- Perform one-shot requests to fetch live data instantly for any given subscription.
- Submit extrinsics without leaving Polkadot Live for tasks such as compounding or withdrawing nomination pool rewards.
- Instantly navigate to an event item's associated Dapp in the browser by clicking action buttons, such as the Staking Dashboard to see more information about your staking setup.

## Overview

Polkadot Live is a Polkadot OpenGov funded project and currently in its first year of development. Polkadot Live was originally conceptualised by [Ross Bulat](https://github.com/rossbulat) who presented the idea at Polkadot Decoded 2023 and demonstrated a prototype.

The project is now being actively developed by [Dane Bulat](https://github.com/danebulat) who is working with Ross to realise the project's long-term goals and objectives. 

As detailed in the Polkadot Live OpenGov proposal, the project is striving to become a community-driven project. With this in mind, comprehensive documentation and contribution guidelines will be published in due course, which will allow the community to contribute to the Polkadot Live development effort.

## Subscriptions

A set of subscriptions are available for each account that is imported into Polkadot Live. It is envisioned that the amount of available subscriptions will increase at a steady-rate as development continues.

By turning on a subscription, Polkadot Live will instantly render an event and (optionally) show a native OS notification when that subscription event occurs on the blockchain.

For example, the **balance change** subscription will instantly notify you when any part of your address' balance changes on the network - this could be a change in the free, reserved or frozen balance. In other words, you will know when someone sends you crypto, or when you spend crypto.

In addition to balance changes, Polkadot Live currently includes subscriptions to monitor both your nomination pool and direct nominating setup. By turning on the appropriate subscription, Polkadot Live will let you know when:

- You have pending rewards available in your nomination pool.
- Your nomination pool name, commission, roles or state changes.
- You have a pending payout through direct nominating.
- Your nominating exposure changes, or when one of your nominated validators change their commission.

## Accounts

Polkadot Live currently supports three methods for importing accounts, including:

- Polkadot Vault
- Ledger Hardware wallet
- Pasting an address (imported as read-only)

Note that the last method will import the address in **read-only** mode. This is because the application allows you to import any address that exists on its supported networks - currently Polkadot, Kusama, and Westend. 

After importing a read-only address, you can turn on subscriptions and receive live notifications when something tied to that address changes - such as a balance change, or when new staking rewards are available.  Read-only addresses will not allow you to sign extrinsics, or perform any action that requires knowledge of that address' private key.

## Extrinsics

Polkadot Live's architecture supports submitting extrinsics to its supported networks - currently Polkadot, Kusama and Westend. This functionality is currently implemented for addresses imported via the Polkadot Vault application.

Signing extrinsics with Ledger hardware wallets is currently on the roadmap and will be supported in Polkadot Live soon.

The event item will determine which extrinsic(s) you can sign and submit to the network. For example, when an event is received that informs you that an address has pending nomination pool rewards, two action buttons will exist on the event that will allow you to submit an extrinsic for either compounding your rewards back in the pool, or withdrawing them to your account.

It is worth stressing that the process of submitting extrinsics is done entirely within the Polkadot Live application, which is designed to be non-intrusive and a fast, elegant solution for managing your blockchain activity without putting you off your current work. With this in mind, you are not required to open a browser and navigate to a particular Dapp in order to accomplish a simple task, such as compounding nomination pool rewards.

With that said, event items often render an action button that, when clicked, will open a browser window and navigate to the associated Dapp relevant to that event. For example, a link to the Polkadot Staking Dashboard is included on nomination pool unclaimed reward events, allowing you to instantly open the staking dashboard within your preferred browser, and subsequently check your staking information more closely.
