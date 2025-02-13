---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

# Addon-specific settings
title: 'Velero'
navbar: false
logo:
  light: '/assets/velero/logo.png'
  dark: '/assets/velero/logo.png'
  height: '24px'
addonName: 'Velero'
footer:
  message: ''
  copyright: '© 2025 Velero Authors. A VMware-backed project.'

# VitePress hero settings
hero:
  name: Velero
  image:
    src: /assets/velero/hero-flag.png
    alt: Velero
  text: Backup and migrate Kubernetes resources and persistent volumes
  tagline: Velero is an open source tool to safely backup and restore, perform disaster recovery, and migrate Kubernetes cluster resources and persistent volumes.
  actions:
    - theme: alt
      text: Get More Info
      link: https://velero.io
features:
  - icon: 
      src: /assets/velero/back-up-clusters.svg
    title: Back up Clusters
    details: Backup your Kubernetes resources and volumes for an entire cluster, or part of a cluster by using namespaces or label selectors.
  - icon: 
      src: /assets/velero/schedule-backups.svg
    title: Schedule Backups
    details: Set schedules to automatically kickoff backups at recurring intervals.
  - icon: 
      src: /assets/velero/backup-hooks.svg
    title: Backup Hooks
    details: Configure pre and post-backup hooks to perform custom operations before and after Velero backups.


  - title: Disaster Recovery
    details: Reduces time to recovery in case of infrastructure loss, data corruption, and/or service outages.
  - title: Data Migration
    details: Enables cluster portability by easily migrating Kubernetes resources from one cluster to another.
  - title: Data Protection
    details: Offers key data protection features such as scheduled backups, retention schedules, and pre or post-backup hooks for custom actions.

---

<style module>
:root {
  --vp-home-hero-name-color: rgb(0, 145, 218);
}
</style>

